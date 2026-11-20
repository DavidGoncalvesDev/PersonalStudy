export interface DisciplineTheme {
  id: string;
  name: string;
  primary: string;         // Main brand color
  primaryDark: string;     // Dark variant for headings/accents
  primaryLight: string;    // Lighter shade for borders/hover
  accent: string;          // Secondary highlight color
  accentLight: string;     // Soft background tint (cards, badges)
  accentCream: string;     // Extra soft warm/cool tint
  focusBorder: string;     // Focus outline / active rings
  bgPrimary: string;       // App background canvas
  bgSubtle: string;        // Container / card inner background
  borderLight: string;     // Border separator color
  tagBg: string;           // Pill / badge background
  tagText: string;         // Pill / badge text color
}

export const DISCIPLINE_THEMES: Record<string, DisciplineTheme> = {
  'data-analysis': {
    id: 'data-analysis',
    name: 'Warm Academic Brown',
    primary: '#78350f',
    primaryDark: '#451a03',
    primaryLight: '#92400e',
    accent: '#d97706',
    accentLight: '#fef3c7',
    accentCream: '#fffbeb',
    focusBorder: '#b45309',
    bgPrimary: '#fdfbf7',
    bgSubtle: '#f7f4ee',
    borderLight: '#e7e2d7',
    tagBg: '#fef3c7',
    tagText: '#92400e'
  },
  'financial-analysis': {
    id: 'financial-analysis',
    name: 'Prestige Emerald & Forest Green',
    primary: '#065f46',
    primaryDark: '#064e3b',
    primaryLight: '#047857',
    accent: '#059669',
    accentLight: '#d1fae5',
    accentCream: '#ecfdf5',
    focusBorder: '#10b981',
    bgPrimary: '#f6fbf8',
    bgSubtle: '#eaf4ee',
    borderLight: '#cfdfd5',
    tagBg: '#d1fae5',
    tagText: '#065f46'
  }
};

const DYNAMIC_PALETTES: Omit<DisciplineTheme, 'id' | 'name'>[] = [
  {
    primary: '#1e3a8a',
    primaryDark: '#172554',
    primaryLight: '#1d4ed8',
    accent: '#2563eb',
    accentLight: '#dbeafe',
    accentCream: '#eff6ff',
    focusBorder: '#3b82f6',
    bgPrimary: '#f8fafc',
    bgSubtle: '#f1f5f9',
    borderLight: '#cbd5e1',
    tagBg: '#dbeafe',
    tagText: '#1e3a8a'
  },
  {
    primary: '#701a75',
    primaryDark: '#4a044e',
    primaryLight: '#86198f',
    accent: '#c026d3',
    accentLight: '#fae8ff',
    accentCream: '#fdf4ff',
    focusBorder: '#d946ef',
    bgPrimary: '#faf7fa',
    bgSubtle: '#f3eef4',
    borderLight: '#e6dae7',
    tagBg: '#fae8ff',
    tagText: '#701a75'
  },
  {
    primary: '#0f766e',
    primaryDark: '#134e4a',
    primaryLight: '#115e59',
    accent: '#0d9488',
    accentLight: '#ccfbf1',
    accentCream: '#f0fdfa',
    focusBorder: '#14b8a6',
    bgPrimary: '#f6fbfb',
    bgSubtle: '#edf7f6',
    borderLight: '#cde4e2',
    tagBg: '#ccfbf1',
    tagText: '#0f766e'
  }
];

export function getDisciplineTheme(disciplineId?: string | null): DisciplineTheme {
  if (!disciplineId) return DISCIPLINE_THEMES['data-analysis'];
  if (DISCIPLINE_THEMES[disciplineId]) {
    return DISCIPLINE_THEMES[disciplineId];
  }

  // Derive stable theme for dynamically created disciplines based on id hash
  let hash = 0;
  for (let i = 0; i < disciplineId.length; i++) {
    hash = (hash << 5) - hash + disciplineId.charCodeAt(i);
    hash |= 0;
  }
  const paletteIndex = Math.abs(hash) % DYNAMIC_PALETTES.length;
  const palette = DYNAMIC_PALETTES[paletteIndex];

  return {
    id: disciplineId,
    name: 'Dynamic Custom Theme',
    ...palette
  };
}

export function applyDisciplineTheme(disciplineId?: string | null): DisciplineTheme {
  const theme = getDisciplineTheme(disciplineId);
  const root = document.documentElement;

  // Set CSS Custom Properties on :root
  root.style.setProperty('--brand-brown', theme.primary);
  root.style.setProperty('--brand-brown-dark', theme.primaryDark);
  root.style.setProperty('--brand-brown-light', theme.primaryLight);
  root.style.setProperty('--accent-amber', theme.accent);
  root.style.setProperty('--accent-amber-light', theme.accentLight);
  root.style.setProperty('--accent-cream', theme.accentCream);
  root.style.setProperty('--border-focus', theme.focusBorder);
  root.style.setProperty('--bg-primary', theme.bgPrimary);
  root.style.setProperty('--bg-subtle', theme.bgSubtle);
  root.style.setProperty('--border-light', theme.borderLight);

  // Set meta theme-color for browser tab header (mobile Safari & Android Chrome)
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', theme.primary);
  }

  return theme;
}
