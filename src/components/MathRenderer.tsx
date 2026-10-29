import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathRendererProps {
  content: string;
  highlightAnchor?: string | null;
  activeQuestionNumber?: number | null;
}

/**
 * Renders inline math $...$ and formats text cleanly without any literal asterisks (*).
 * Uses KaTeX output: 'html' to prevent duplicate MathML text (e.g. "0 0" or "1 1").
 */
export const renderInlineMath = (text: string): React.ReactNode => {
  if (!text) return null;

  // 1. Split by inline math $...$
  const mathSegments = text.split(/\$([^$]+)\$/g);

  return mathSegments.map((segment, segIdx) => {
    // Odd index = inside math $...$
    if (segIdx % 2 === 1) {
      try {
        const html = katex.renderToString(segment.trim(), {
          displayMode: false,
          throwOnError: false,
          output: 'html' // Strictly HTML only, prevents duplicate MathML rendering!
        });
        return (
          <span
            key={`math-in-${segIdx}`}
            style={{
              padding: '0 0.2rem',
              display: 'inline-block',
              verticalAlign: 'baseline',
              fontFamily: 'KaTeX_Main, Times New Roman, serif'
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch {
        return <span key={`math-err-${segIdx}`}>${segment}$</span>;
      }
    }

    // Even index = regular prose. Clean up asterisks and format bold/emphasis cleanly.
    // Replace **bold** with <strong>
    const boldTokens = segment.split(/\*\*([^*]+)\*\*/g);

    return boldTokens.map((bToken, bIdx) => {
      if (bIdx % 2 === 1) {
        return (
          <strong
            key={`bold-${segIdx}-${bIdx}`}
            style={{ fontWeight: 700, color: '#451a03' }}
          >
            {bToken}
          </strong>
        );
      }

      // Inside normal text, check for single *emphasis*
      const italicTokens = bToken.split(/\*([^*]+)\*/g);
      return italicTokens.map((iToken, iIdx) => {
        if (iIdx % 2 === 1) {
          // Render emphasis as warm brown bold/accent without any asterisks
          return (
            <strong
              key={`em-${segIdx}-${bIdx}-${iIdx}`}
              style={{ fontWeight: 600, color: '#78350f' }}
            >
              {iToken}
            </strong>
          );
        }

        // Strip any remaining stray asterisk symbols so the user never sees '*'
        const cleanProse = iToken.replace(/\*/g, '');

        // Also check for inline code `code`
        if (cleanProse.includes('`')) {
          const codeTokens = cleanProse.split(/`([^`]+)`/g);
          return codeTokens.map((cToken, cIdx) => {
            if (cIdx % 2 === 1) {
              return (
                <code
                  key={`code-${segIdx}-${bIdx}-${iIdx}-${cIdx}`}
                  style={{
                    backgroundColor: '#f5efe6',
                    color: '#78350f',
                    padding: '0.15rem 0.4rem',
                    borderRadius: '4px',
                    fontFamily: 'monospace',
                    fontSize: '0.88em',
                    border: '1px solid #e7e2d7'
                  }}
                >
                  {cToken}
                </code>
              );
            }
            return cToken;
          });
        }

        return cleanProse;
      });
    });
  });
};

/**
 * MathRenderer parses structured study content containing headers, callouts, block equations,
 * and narrative paragraphs with KaTeX math rendering.
 */
const createSlug = (str: string) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const MathRenderer: React.FC<MathRendererProps> = ({ content, highlightAnchor, activeQuestionNumber }) => {
  if (!content) return null;

  // Split by block math $$...$$
  const blockParts = content.split(/\$\$([\s\S]*?)\$\$/g);
  const elements: React.ReactNode[] = [];

  blockParts.forEach((blockPart, bIdx) => {
    if (bIdx % 2 === 1) {
      // Display block math equation
      try {
        const html = katex.renderToString(blockPart.trim(), {
          displayMode: true,
          throwOnError: false,
          output: 'html' // Strictly HTML only
        });
        elements.push(
          <div
            key={`block-math-${bIdx}`}
            style={{
              margin: '1.25rem 0',
              padding: '1rem 1.25rem',
              backgroundColor: '#fffdfa',
              border: '1.5px solid #e7e2d7',
              borderRadius: '10px',
              overflowX: 'auto',
              boxShadow: '0 2px 4px rgba(120, 53, 15, 0.03)'
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch {
        elements.push(
          <div
            key={`block-err-${bIdx}`}
            style={{ margin: '1rem 0', fontFamily: 'monospace', padding: '0.75rem', background: '#fee2e2' }}
          >
            {blockPart}
          </div>
        );
      }
    } else {
      // Regular text block: split by lines
      const lines = blockPart.split(/\r?\n/);

      // Handle Markdown tables if present
      let inTable = false;
      let tableRows: string[][] = [];

      const flushTable = (tableKey: string) => {
        if (tableRows.length > 0) {
          const header = tableRows[0];
          const body = tableRows.slice(1);
          elements.push(
            <div key={tableKey} style={{ overflowX: 'auto', margin: '1.25rem 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#ffffff', border: '1px solid #e7e2d7', borderRadius: '8px', overflow: 'hidden' }}>
                <thead>
                  <tr style={{ backgroundColor: '#fef3c7', borderBottom: '2px solid #e7e2d7' }}>
                    {header.map((col, cIdx) => (
                      <th key={`th-${cIdx}`} style={{ padding: '0.65rem 0.85rem', textAlign: 'left', fontWeight: 700, color: '#78350f', fontSize: '0.85rem' }}>
                        {renderInlineMath(col)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {body.map((row, rIdx) => (
                    <tr key={`tr-${rIdx}`} style={{ borderBottom: '1px solid #f2ede4', backgroundColor: rIdx % 2 === 1 ? '#faf8f5' : '#ffffff' }}>
                      {row.map((cell, cIdx) => (
                        <td key={`td-${rIdx}-${cIdx}`} style={{ padding: '0.6rem 0.85rem', fontSize: '0.85rem', color: '#292524' }}>
                          {renderInlineMath(cell)}
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

      lines.forEach((line, lIdx) => {
        const trimmed = line.trim();

        // Check for table row
        if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
          // Check if it's separator row |:---:|
          if (/^\|[\s\-:]+\|\s*$/.test(trimmed)) {
            // separator, ignore
            return;
          }
          const cells = trimmed
            .slice(1, -1)
            .split('|')
            .map(c => c.trim());
          inTable = true;
          tableRows.push(cells);
          return;
        } else if (inTable) {
          flushTable(`table-${bIdx}-${lIdx}`);
        }

        if (!trimmed) {
          return;
        }

        // Ignore raw horizontal dividers "---" or "***"
        if (/^[-*_]{3,}$/.test(trimmed)) {
          elements.push(
            <div
              key={`hr-${bIdx}-${lIdx}`}
              style={{
                height: '1px',
                backgroundColor: '#e7e2d7',
                margin: '2rem 0 1.5rem',
                border: 'none'
              }}
            />
          );
          return;
        }

        // Headers with Automatic Slug Anchors & Active Question Highlighting
        if (trimmed.startsWith('# ')) {
          const headingText = trimmed.replace(/^#\s+/, '');
          const slug = createSlug(headingText);
          elements.push(
            <h1
              id={slug}
              key={`h1-${bIdx}-${lIdx}`}
              style={{
                scrollMarginTop: '110px',
                fontSize: '1.65rem',
                fontWeight: 800,
                color: '#451a03',
                marginTop: '1.75rem',
                marginBottom: '0.85rem',
                letterSpacing: '-0.02em',
                borderBottom: '2px solid #e7e2d7',
                paddingBottom: '0.5rem'
              }}
            >
              {renderInlineMath(headingText)}
            </h1>
          );
        } else if (trimmed.startsWith('## ')) {
          const headingText = trimmed.replace(/^##\s+/, '');
          const slug = createSlug(headingText);
          const isHighlighted = highlightAnchor && (
            slug.includes(highlightAnchor.toLowerCase()) || highlightAnchor.toLowerCase().includes(slug)
          );

          if (isHighlighted) {
            elements.push(
              <div
                id={slug}
                key={`h2-highlight-${bIdx}-${lIdx}`}
                style={{
                  scrollMarginTop: '110px',
                  marginTop: '2rem',
                  marginBottom: '1rem',
                  padding: '1.15rem 1.35rem',
                  backgroundColor: '#fffbeb',
                  border: '2.5px solid #d97706',
                  borderRadius: '12px',
                  boxShadow: '0 4px 18px rgba(217, 119, 6, 0.18)'
                }}
              >
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.22rem 0.65rem',
                  borderRadius: '6px',
                  backgroundColor: '#d97706',
                  color: '#ffffff',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}>
                  <span>📍 Active Question Reference {activeQuestionNumber ? `(Question ${activeQuestionNumber})` : ''}</span>
                </div>
                <h2 style={{
                  margin: 0,
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: '#78350f',
                  letterSpacing: '-0.01em'
                }}>
                  {renderInlineMath(headingText)}
                </h2>
              </div>
            );
          } else {
            elements.push(
              <h2
                id={slug}
                key={`h2-${bIdx}-${lIdx}`}
                style={{
                  scrollMarginTop: '110px',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#78350f',
                  marginTop: '1.75rem',
                  marginBottom: '0.65rem',
                  letterSpacing: '-0.01em'
                }}
              >
                {renderInlineMath(headingText)}
              </h2>
            );
          }
        } else if (trimmed.startsWith('### ')) {
          const headingText = trimmed.replace(/^###\s+/, '');
          const slug = createSlug(headingText);
          const isHighlighted = highlightAnchor && (
            slug.includes(highlightAnchor.toLowerCase()) || highlightAnchor.toLowerCase().includes(slug)
          );

          if (isHighlighted) {
            elements.push(
              <div
                id={slug}
                key={`h3-highlight-${bIdx}-${lIdx}`}
                style={{
                  scrollMarginTop: '110px',
                  marginTop: '1.75rem',
                  marginBottom: '1rem',
                  padding: '1.15rem 1.35rem',
                  backgroundColor: '#fffbeb',
                  border: '2.5px solid #d97706',
                  borderRadius: '12px',
                  boxShadow: '0 4px 18px rgba(217, 119, 6, 0.18)'
                }}
              >
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.22rem 0.65rem',
                  borderRadius: '6px',
                  backgroundColor: '#d97706',
                  color: '#ffffff',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}>
                  <span>📍 Active Question Reference {activeQuestionNumber ? `(Question ${activeQuestionNumber})` : ''}</span>
                </div>
                <h3 style={{
                  margin: 0,
                  fontSize: '1.18rem',
                  fontWeight: 800,
                  color: '#78350f'
                }}>
                  {renderInlineMath(headingText)}
                </h3>
              </div>
            );
          } else {
            elements.push(
              <h3
                id={slug}
                key={`h3-${bIdx}-${lIdx}`}
                style={{
                  scrollMarginTop: '110px',
                  fontSize: '1.08rem',
                  fontWeight: 700,
                  color: '#92400e',
                  marginTop: '1.4rem',
                  marginBottom: '0.5rem'
                }}
              >
                {renderInlineMath(headingText)}
              </h3>
            );
          }
        } else if (trimmed.startsWith('#### ')) {
          const headingText = trimmed.replace(/^####\s+/, '');
          const slug = createSlug(headingText);
          elements.push(
            <h4
              id={slug}
              key={`h4-${bIdx}-${lIdx}`}
              style={{
                scrollMarginTop: '110px',
                fontSize: '0.98rem',
                fontWeight: 700,
                color: '#78350f',
                marginTop: '1.2rem',
                marginBottom: '0.4rem'
              }}
            >
              {renderInlineMath(headingText)}
            </h4>
          );
        } else if (trimmed.startsWith('> ')) {
          // Callout quotes
          elements.push(
            <div
              key={`callout-${bIdx}-${lIdx}`}
              style={{
                margin: '1.15rem 0',
                padding: '0.85rem 1.15rem',
                backgroundColor: '#fffbeb',
                borderLeft: '4px solid #d97706',
                borderRadius: '0 8px 8px 0',
                color: '#78350f',
                fontSize: '0.925rem',
                lineHeight: 1.6
              }}
            >
              {renderInlineMath(trimmed.replace(/^>\s+/, ''))}
            </div>
          );
        } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          // List item
          elements.push(
            <div
              key={`li-${bIdx}-${lIdx}`}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.5rem',
                fontSize: '0.96rem',
                color: '#292524',
                lineHeight: 1.7,
                marginLeft: '0.75rem',
                marginBottom: '0.45rem'
              }}
            >
              <span style={{ color: '#d97706', fontSize: '0.85rem', flexShrink: 0 }}>•</span>
              <div style={{ flex: 1 }}>{renderInlineMath(trimmed.replace(/^[-*]\s+/, ''))}</div>
            </div>
          );
        } else {
          // Normal narrative paragraph
          elements.push(
            <p
              key={`p-${bIdx}-${lIdx}`}
              style={{
                fontSize: '0.985rem',
                color: '#292524',
                marginBottom: '1rem',
                lineHeight: 1.75
              }}
            >
              {renderInlineMath(trimmed)}
            </p>
          );
        }
      });

      if (inTable) {
        flushTable(`table-end-${bIdx}`);
      }
    }
  });

  return <div className="formatted-study-content">{elements}</div>;
};
