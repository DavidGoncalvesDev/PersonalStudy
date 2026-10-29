import React from 'react';
import { Segment } from '../types';
import { Check, ArrowRight, BookOpen, Sparkles, HelpCircle } from 'lucide-react';

interface TextSummaryPhaseProps {
  segment: Segment;
  isCompleted: boolean;
  onProceedToQuiz: () => void;
}

export const TextSummaryPhase: React.FC<TextSummaryPhaseProps> = ({
  segment,
  isCompleted,
  onProceedToQuiz
}) => {
  // Simple markdown renderer for clean display
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeContent = '';
    let inTable = false;
    let tableRows: string[][] = [];

    const flushTable = (key: string) => {
      if (tableRows.length > 0) {
        const header = tableRows[0];
        const body = tableRows.slice(2); // Skip separator row
        elements.push(
          <div key={key} style={{ overflowX: 'auto', margin: '1.25rem 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#f1f5f9' }}>
                  {header.map((col, idx) => (
                    <th key={idx} style={{ padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', textAlign: 'left', fontWeight: 700, color: '#1e293b' }}>
                      {col.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, rIdx) => (
                  <tr key={rIdx} style={{ backgroundColor: rIdx % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                    {row.map((col, cIdx) => (
                      <td key={cIdx} style={{ padding: '0.65rem 0.85rem', border: '1px solid #e2e8f0', color: '#334155' }}>
                        {col.trim()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
      }
    };

    lines.forEach((line, idx) => {
      // Code block handling
      if (line.trim().startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={`code-${idx}`} style={{
              backgroundColor: '#0f172a',
              color: '#38bdf8',
              padding: '1rem',
              borderRadius: '8px',
              fontSize: '0.875rem',
              overflowX: 'auto',
              margin: '1rem 0'
            }}>
              <code>{codeContent.trim()}</code>
            </pre>
          );
          codeContent = '';
          inCodeBlock = false;
        } else {
          flushTable(`table-before-code-${idx}`);
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeContent += line + '\n';
        return;
      }

      // Table handling
      if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
        inTable = true;
        const cols = line.split('|').filter((_, i, arr) => i > 0 && i < arr.length - 1);
        tableRows.push(cols);
        return;
      } else if (inTable) {
        flushTable(`table-${idx}`);
      }

      // Headers
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={idx} style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', margin: '1.5rem 0 0.75rem', letterSpacing: '-0.02em' }}>
            {line.replace('# ', '')}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={idx} style={{
            fontSize: '1.35rem',
            fontWeight: 700,
            color: '#1e293b',
            margin: '1.75rem 0 0.5rem',
            paddingBottom: '0.35rem',
            borderBottom: '2px solid #e2e8f0',
            letterSpacing: '-0.01em'
          }}>
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={idx} style={{ fontSize: '1.1rem', fontWeight: 700, color: '#4338ca', margin: '1.25rem 0 0.4rem' }}>
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('---')) {
        elements.push(<hr key={idx} style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '1.5rem 0' }} />);
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={idx} style={{ marginLeft: '1.5rem', marginBottom: '0.35rem', color: '#334155', fontSize: '0.95rem' }}>
            {line.replace('- ', '')}
          </li>
        );
      } else if (line.trim().length > 0) {
        elements.push(
          <p key={idx} style={{ fontSize: '0.95rem', color: '#334155', marginBottom: '0.85rem', lineHeight: 1.65 }}>
            {line}
          </p>
        );
      }
    });

    flushTable('table-end');
    return elements;
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      padding: '2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
    }}>
      {/* Segment Header Banner */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.75rem 1.25rem',
        backgroundColor: '#eef2ff',
        borderRadius: '8px',
        marginBottom: '1.5rem',
        border: '1px solid #c7d2fe'
      }}>
        <Sparkles size={20} color="#4f46e5" />
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Phase 1 of 3: Core Knowledge Foundations
          </span>
          <p style={{ fontSize: '0.85rem', color: '#312e81', fontWeight: 600 }}>
            Read and digest the core concepts below. Once understood, proceed to the 12-question quiz.
          </p>
        </div>
      </div>

      {/* Rendered Pure Text Content */}
      <div className="markdown-body" style={{ minHeight: '300px' }}>
        {renderFormattedContent(segment.summary_markdown)}
      </div>

      {/* Action CTA Bar */}
      <div style={{
        marginTop: '2.5rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.85rem' }}>
          <HelpCircle size={16} />
          <span>Next requirement: Score 12/12 on the Quiz to advance to Flashcards.</span>
        </div>

        <button
          onClick={onProceedToQuiz}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.75rem 1.6rem',
            backgroundColor: '#4f46e5',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '0.95rem',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(79, 70, 229, 0.25)',
            transition: 'all 0.15s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4338ca')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4f46e5')}
        >
          <span>{isCompleted ? 'Review Level Quiz (12 Questions)' : 'Mark Text as Understood & Take Quiz'}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
