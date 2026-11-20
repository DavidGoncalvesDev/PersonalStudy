import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const MATERIALS_DIR = path.resolve(ROOT_DIR, 'materials');

// Supabase configuration for tracker project
const SUPABASE_URL = 'https://eurqqiebokwcrrhfbihg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnFxaWVib2t3Y3JyaGZiaWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNDA0MzIsImV4cCI6MjEwNzcxNjQzMn0.UrhclnTabK3YEJZzroYeDmO4D4pij59IWCXyWZ9ruxs';

// Discipline keyword definitions for automated classification
export const DISCIPLINE_RULES = {
  'data-analysis': {
    name: 'Data Analysis',
    keywords: [
      'multivariate', 'principal component', 'factor analysis', 'pca',
      'eigenvalue', 'scree', 'kaiser', 'cattell', 'varimax', 'communality',
      'communalities', 'anti-image', 'frederico cruz jesus', 'scales and distances',
      'mahalanobis', 'euclidean', 'dummy variable', 'procomp', 'princomp',
      'correlation matrix', 'covariance matrix', 'data analysis', 'data',
      'chapter 1', 'chapter 2', 'chapter 3', 'scales', 'distances', 'sharma',
      'practical workbook'
    ],
    filenamePatterns: [
      /chapter[_\s-]*1/i, /chapter[_\s-]*2/i, /chapter[_\s-]*3/i,
      /scales[_\s-]*and[_\s-]*distances/i, /principal[_\s-]*component/i,
      /factor[_\s-]*analysis/i, /practical[_\s-]*workbook/i,
      /multivariate/i, /pca/i, /fa/i
    ]
  },
  'financial-analysis': {
    name: 'Financial Analysis & Management Control',
    keywords: [
      'financial analysis', 'management control', 'balance sheet', 'income statement',
      'accounting', 'double entry', 'debit', 'credit', 'cogs', 'depreciation',
      'accrual', 'deferral', 'inventory valuation', 'fifo', 'lifo', 'weighted average',
      'ebit', 'ebt', 'liquidity', 'solvency', 'profitability', 'working capital',
      'nova ims', 'famc', 'afgc', 'demonstrações financeiras', 'balanço'
    ],
    filenamePatterns: [
      /financial[_\s-]*analysis/i, /accounting/i, /balance[_\s-]*sheet/i,
      /income[_\s-]*statement/i, /famc/i, /afgc/i, /double[_\s-]*entry/i,
      /inventory[_\s-]*valuation/i
    ]
  }
};

/**
 * Compute SHA-256 hash of a file buffer
 */
export function getFileHash(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

/**
 * Extract readable text from PDF buffers via zlib decompression & text operators
 */
export function extractPdfText(buf) {
  let text = '';
  let pos = 0;
  while ((pos = buf.indexOf('stream', pos)) !== -1) {
    const start = pos + 6 + (buf[pos + 6] === 0x0d ? 2 : 1);
    const end = buf.indexOf('endstream', start);
    if (end !== -1) {
      const streamBuf = buf.slice(start, end);
      try {
        const decomp = zlib.inflateSync(streamBuf);
        const str = decomp.toString('latin1');
        
        // Match standard PDF Tj operators
        const matches = str.match(/\(([^)]+)\)\s*Tj/g) || [];
        matches.forEach(m => {
          text += m.replace(/^\(|\)\s*Tj$/g, '') + ' ';
        });
        
        // Match PDF TJ array operators
        const tj2 = str.match(/\[([^\]]+)\]\s*TJ/g) || [];
        tj2.forEach(m => {
          const parts = m.match(/\(([^)]+)\)/g) || [];
          parts.forEach(p => (text += p.slice(1, -1) + ' '));
        });

        // Also extract raw ASCII words from the decompressed stream
        const rawWords = str.match(/[a-zA-Z]{3,}/g) || [];
        text += ' ' + rawWords.join(' ') + ' ';
      } catch {
        // Not a zlib stream or raw text
      }
      pos = end + 9;
    } else {
      break;
    }
  }

  // Also match uncompressed PDF metadata or direct text in the whole file
  const latinStr = buf.toString('latin1');
  const titleMatch = latinStr.match(/\/Title\s*\(([^)]+)\)/i);
  if (titleMatch) {
    text = titleMatch[1] + ' ' + text;
  }
  const authorMatch = latinStr.match(/\/Author\s*\(([^)]+)\)/i);
  if (authorMatch) {
    text = authorMatch[1] + ' ' + text;
  }
  return text.toLowerCase();
}

/**
 * Fetch known disciplines from Supabase tracker database
 */
export async function fetchDisciplinesFromDb() {
  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { data, error } = await supabase.from('study_disciplines').select('id, name, code, description');
    if (!error && data && data.length > 0) {
      return data;
    }
  } catch (err) {
    console.warn('⚠️ Could not connect to Supabase, using local discipline rules:', err.message);
  }
  return Object.entries(DISCIPLINE_RULES).map(([id, val]) => ({
    id,
    name: val.name,
    code: id.toUpperCase(),
    description: ''
  }));
}

/**
 * Determine which discipline a file belongs to based on name, text content, and squashed text
 */
export function classifyFile(filename, text, availableDisciplines) {
  const cleanFilename = filename.replace(/[-_.]/g, ' ').toLowerCase();
  const combined = (cleanFilename + ' ' + text).toLowerCase();
  const squashed = combined.replace(/[^a-z0-9]/g, '');

  let bestDiscipline = null;
  let bestScore = 0;

  for (const disc of availableDisciplines) {
    let score = 0;
    const rule = DISCIPLINE_RULES[disc.id];
    
    // Check filename regex patterns
    if (rule && rule.filenamePatterns) {
      for (const pattern of rule.filenamePatterns) {
        if (pattern.test(filename)) {
          score += 15;
        }
      }
    }

    // Check discipline ID and name directly
    const discNameClean = disc.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const discIdClean = disc.id.replace(/[^a-z0-9]/g, '');
    if (squashed.includes(discIdClean)) score += 10;
    if (squashed.includes(discNameClean)) score += 10;
    
    // Check keywords
    const keywords = rule ? rule.keywords : [];
    for (const kw of keywords) {
      const kwLower = kw.toLowerCase();
      const kwSquashed = kwLower.replace(/[^a-z0-9]/g, '');
      
      if (combined.includes(kwLower)) {
        score += 3;
      } else if (kwSquashed.length >= 4 && squashed.includes(kwSquashed)) {
        score += 2;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestDiscipline = disc.id;
    }
  }

  return bestScore >= 2 ? bestDiscipline : null;
}

/**
 * Derives a human-readable canonical filename if uploaded file is media_...
 */
export function deriveCanonicalFilename(filename, text, originalExt) {
  if (!filename.startsWith('media_')) {
    return filename;
  }

  const squashed = text.replace(/[^a-z0-9]/g, '');

  // Check known patterns in text
  if (squashed.includes('scalesanddistances') || squashed.includes('measurements') || text.includes('scales and distances')) {
    return '01_Chapter_1_Scales_and_Distances' + originalExt;
  }
  if (squashed.includes('fundamentalsofdataanalysis') || text.includes('fundamentals of data analysis') || text.includes('introduction and fundamentals')) {
    return '01_Chapter_1_Introduction_Overview' + originalExt;
  }
  if (squashed.includes('principalcomponentanalysis') || text.includes('principal component') || squashed.includes('pca')) {
    return '02_Chapter_2_Principal_Component_Analysis' + originalExt;
  }
  if (squashed.includes('factoranalysis') || text.includes('factor analysis')) {
    return '03_Chapter_3_Factor_Analysis' + originalExt;
  }
  if (squashed.includes('practicalworkbook') || text.includes('practical workbook') || squashed.includes('workbookexercises')) {
    return '04_Practical_Workbook_Exercises' + originalExt;
  }
  if (squashed.includes('accountingfoundations') || text.includes('double entry')) {
    return '01_Accounting_Foundations_Double_Entry' + originalExt;
  }
  if (squashed.includes('periodend') || text.includes('inventory valuation')) {
    return '02_Inventory_Valuation_Period_End' + originalExt;
  }
  if (squashed.includes('balancesheet') || text.includes('income statement')) {
    return '03_Balance_Sheet_Income_Statement' + originalExt;
  }

  return filename;
}

/**
 * Main organizer function
 */
export async function organizeMaterials(options = {}) {
  const { dryRun = false, targetDiscipline = null, targetFile = null } = options;

  console.log(`\n======================================================`);
  console.log(`📁 ORGANIZING MATERIALS DIRECTORY`);
  console.log(`Base directory: ${MATERIALS_DIR}`);
  if (dryRun) console.log(`Mode: DRY RUN (no files will be moved or deleted)`);
  console.log(`======================================================\n`);

  if (!fs.existsSync(MATERIALS_DIR)) {
    fs.mkdirSync(MATERIALS_DIR, { recursive: true });
  }

  const disciplines = await fetchDisciplinesFromDb();
  console.log(`Loaded ${disciplines.length} disciplines:`, disciplines.map(d => d.id).join(', '));

  // Ensure discipline subdirectories exist
  for (const disc of disciplines) {
    const discDir = path.join(MATERIALS_DIR, disc.id);
    if (!fs.existsSync(discDir)) {
      if (!dryRun) fs.mkdirSync(discDir, { recursive: true });
      console.log(`  ✓ Created discipline folder: materials/${disc.id}/`);
    }
  }

  // Create shared assets folder for global logos/assets
  const sharedDir = path.join(MATERIALS_DIR, 'shared');
  if (!fs.existsSync(sharedDir)) {
    if (!dryRun) fs.mkdirSync(sharedDir, { recursive: true });
    console.log(`  ✓ Created shared assets folder: materials/shared/`);
  }

  // 1. Index all existing files inside discipline subfolders & shared to detect duplicates by SHA-256
  const existingFilesByHash = new Map();
  for (const disc of disciplines) {
    const discDir = path.join(MATERIALS_DIR, disc.id);
    if (fs.existsSync(discDir)) {
      const files = fs.readdirSync(discDir);
      for (const f of files) {
        const fullPath = path.join(discDir, f);
        if (fs.statSync(fullPath).isFile()) {
          const buf = fs.readFileSync(fullPath);
          const hash = getFileHash(buf);
          existingFilesByHash.set(hash, {
            discipline: disc.id,
            filename: f,
            fullPath
          });
        }
      }
    }
  }

  // Index shared directory as well
  if (fs.existsSync(sharedDir)) {
    const files = fs.readdirSync(sharedDir);
    for (const f of files) {
      const fullPath = path.join(sharedDir, f);
      if (fs.statSync(fullPath).isFile()) {
        const buf = fs.readFileSync(fullPath);
        const hash = getFileHash(buf);
        existingFilesByHash.set(hash, {
          discipline: 'shared',
          filename: f,
          fullPath
        });
      }
    }
  }

  // 2. Scan files in the root of materials/
  const rootEntries = fs.readdirSync(MATERIALS_DIR);
  const filesToProcess = [];

  for (const entry of rootEntries) {
    const fullPath = path.join(MATERIALS_DIR, entry);
    const stat = fs.statSync(fullPath);
    if (stat.isFile()) {
      if (targetFile && entry !== targetFile && fullPath !== path.resolve(targetFile)) {
        continue;
      }
      filesToProcess.push({
        filename: entry,
        fullPath
      });
    }
  }

  // Sort so canonical files (not starting with media_) are processed first,
  // allowing raw media_* uploads to be recognized as exact duplicates!
  filesToProcess.sort((a, b) => {
    const aMedia = a.filename.startsWith('media_');
    const bMedia = b.filename.startsWith('media_');
    if (aMedia && !bMedia) return 1;
    if (!aMedia && bMedia) return -1;
    return a.filename.localeCompare(b.filename);
  });

  console.log(`\nFound ${filesToProcess.length} file(s) in root materials/ to process.\n`);

  const results = {
    moved: [],
    deduplicated: [],
    skipped: []
  };

  for (const item of filesToProcess) {
    const { filename, fullPath } = item;
    const buf = fs.readFileSync(fullPath);
    const hash = getFileHash(buf);
    const ext = path.extname(filename);

    // Check if this is a global asset (like david_study_book_logo.png)
    if (filename.includes('logo') || filename.includes('icon')) {
      const destShared = path.join(sharedDir, filename);
      console.log(`🖼️ Shared asset: ${filename} -> materials/shared/`);
      if (!dryRun) {
        fs.copyFileSync(fullPath, destShared);
      }
      existingFilesByHash.set(hash, {
        discipline: 'shared',
        filename,
        fullPath: destShared
      });
      results.moved.push({ file: filename, destination: `materials/shared/${filename}` });
      continue;
    }

    // Check for exact duplicate in existing discipline folders
    if (existingFilesByHash.has(hash)) {
      const existing = existingFilesByHash.get(hash);
      console.log(`🗑️ Exact duplicate found: "${filename}" matches "${existing.filename}" in ${existing.discipline}.`);
      if (!dryRun) {
        fs.unlinkSync(fullPath);
        console.log(`  ✓ Removed redundant duplicate: ${filename}`);
      }
      results.deduplicated.push({ file: filename, matched: existing.filename, discipline: existing.discipline });
      continue;
    }

    // Extract text content for classification if PDF or text
    let text = '';
    if (ext.toLowerCase() === '.pdf') {
      text = extractPdfText(buf);
    } else if (['.txt', '.md', '.json', '.csv'].includes(ext.toLowerCase())) {
      text = buf.toString('utf8', 0, 50000).toLowerCase();
    }

    // Determine target discipline
    const assignedDiscipline = targetDiscipline || classifyFile(filename, text, disciplines);

    if (!assignedDiscipline) {
      console.warn(`⚠️ Could not classify discipline for: ${filename}. Leaving in root materials/.`);
      results.skipped.push({ file: filename, reason: 'Discipline could not be classified' });
      continue;
    }

    // Determine canonical name
    const canonicalName = deriveCanonicalFilename(filename, text, ext);
    const targetDir = path.join(MATERIALS_DIR, assignedDiscipline);
    const destPath = path.join(targetDir, canonicalName);

    console.log(`📦 Organizing: "${filename}" -> "materials/${assignedDiscipline}/${canonicalName}"`);

    if (!dryRun) {
      if (fs.existsSync(destPath) && destPath !== fullPath) {
        const targetBuf = fs.readFileSync(destPath);
        if (getFileHash(targetBuf) === hash) {
          fs.unlinkSync(fullPath);
          console.log(`  ✓ Target already exists and is identical. Cleaned up upload.`);
        } else {
          const altName = `${path.basename(canonicalName, ext)}_${Date.now()}${ext}`;
          fs.renameSync(fullPath, path.join(targetDir, altName));
          console.log(`  ✓ Target exists with different hash. Moved as: ${altName}`);
        }
      } else {
        fs.renameSync(fullPath, destPath);
        console.log(`  ✓ Successfully moved.`);
      }
    }

    existingFilesByHash.set(hash, {
      discipline: assignedDiscipline,
      filename: canonicalName,
      fullPath: destPath
    });

    results.moved.push({
      file: filename,
      canonicalName,
      discipline: assignedDiscipline,
      destination: `materials/${assignedDiscipline}/${canonicalName}`
    });
  }

  console.log(`\n======================================================`);
  console.log(`📊 SUMMARY`);
  console.log(`  Moved / Organized: ${results.moved.length}`);
  console.log(`  Deduplicated & Cleaned: ${results.deduplicated.length}`);
  console.log(`  Skipped / Unclassified: ${results.skipped.length}`);
  console.log(`======================================================\n`);

  return results;
}

/**
 * Helper to get the canonical path of a discipline's materials folder
 */
export function getDisciplineMaterialsPath(disciplineId) {
  const dir = path.join(MATERIALS_DIR, disciplineId);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return dir;
}

/**
 * Helper to list all materials for a discipline, falling back to materials/ root
 */
export function getMaterialsForDiscipline(disciplineId) {
  const discDir = path.join(MATERIALS_DIR, disciplineId);
  const files = [];

  // 1. Check discipline subfolder
  if (fs.existsSync(discDir)) {
    for (const f of fs.readdirSync(discDir)) {
      const full = path.join(discDir, f);
      if (fs.statSync(full).isFile()) {
        files.push({ filename: f, path: full, location: 'discipline_folder' });
      }
    }
  }

  // 2. Fallback: check root materials/ if discipline subfolder is empty
  if (files.length === 0 && fs.existsSync(MATERIALS_DIR)) {
    for (const f of fs.readdirSync(MATERIALS_DIR)) {
      const full = path.join(MATERIALS_DIR, f);
      if (fs.statSync(full).isFile() && !f.includes('logo')) {
        files.push({ filename: f, path: full, location: 'root_fallback' });
      }
    }
  }

  return files;
}

// CLI Execution support
if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const disciplineIdx = args.indexOf('--discipline');
  const targetDiscipline = disciplineIdx !== -1 ? args[disciplineIdx + 1] : null;
  const fileIdx = args.indexOf('--file');
  const targetFile = fileIdx !== -1 ? args[fileIdx + 1] : null;

  organizeMaterials({ dryRun, targetDiscipline, targetFile })
    .catch(err => {
      console.error('❌ Error organizing materials:', err);
      process.exitCode = 1;
    });
}
