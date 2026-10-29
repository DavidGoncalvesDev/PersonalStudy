import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathRendererProps {
  content: string;
}

// Top-level exported helper to render inline $...$ math strings and bold text
export const renderInlineMath = (text: string): React.ReactNode => {
  const inlineParts = text.split(/\$([^$]+)\$/g);
  return inlineParts.map((part, idx) => {
    if (idx % 2 === 1) {
      // Inline math formula
      try {
        const html = katex.renderToString(part.trim(), {
          displayMode: false,
          throwOnError: false
        });
        return (
          <span
            key={`math-inline-${idx}`}
            style={{
              padding: '0 0.25rem',
              display: 'inline-block',
              verticalAlign: 'baseline',
              fontFamily: 'serif'
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch {
        return <span key={`math-err-${idx}`}>${part}$</span>;
      }
    }

    // Handle bold formatting **bold**
    const boldParts = part.split(/\*\*([^*]+)\*\*/g);
    return boldParts.map((bPart, bIdx) => {
      if (bIdx % 2 === 1) {
        return (
          <strong key={`bold-${idx}-${bIdx}`} style={{ fontWeight: 700, color: '#451a03' }}>
            {bPart}
          </strong>
        );
      }
      return bPart;
    });
  });
};

/**
 * Parses text containing LaTeX math ($...$ for inline, $$...$$ for block)
 * and renders formatted math via KaTeX within styled typography.
 */
export const MathRenderer: React.FC<MathRendererProps> = ({ content }) => {
  // Parse paragraphs and blocks
  const parseContentWithMath = (text: string) => {
    // Split by block math $$...$$
    const blockParts = text.split(/\$\$([\s\S]*?)\$\$/g);
    const elements: React.ReactNode[] = [];

    blockParts.forEach((blockPart, bIdx) => {
      if (bIdx % 2 === 1) {
        // This is a block math equation
        try {
          const html = katex.renderToString(blockPart.trim(), {
            displayMode: true,
            throwOnError: false
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
                boxShadow: '0 2px 4px rgba(120, 53, 15, 0.04)'
              }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          elements.push(
            <div key={`block-err-${bIdx}`} style={{ margin: '1rem 0', fontFamily: 'monospace' }}>
              {blockPart}
            </div>
          );
        }
      } else {
        // Regular text that may contain inline math $...$
        const lines = blockPart.split('\n');

        lines.forEach((line, lIdx) => {
          const trimmed = line.trim();
          if (!trimmed) {
            return;
          }

          // Headers
          if (trimmed.startsWith('# ')) {
            elements.push(
              <h1
                key={`h1-${bIdx}-${lIdx}`}
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: '#451a03',
                  marginTop: '2rem',
                  marginBottom: '0.85rem',
                  letterSpacing: '-0.02em',
                  borderBottom: '2px solid #e7e2d7',
                  paddingBottom: '0.5rem'
                }}
              >
                {renderInlineMath(trimmed.replace(/^#\s+/, ''))}
              </h1>
            );
          } else if (trimmed.startsWith('## ')) {
            elements.push(
              <h2
                key={`h2-${bIdx}-${lIdx}`}
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#78350f',
                  marginTop: '1.85rem',
                  marginBottom: '0.65rem',
                  letterSpacing: '-0.01em'
                }}
              >
                {renderInlineMath(trimmed.replace(/^##\s+/, ''))}
              </h2>
            );
          } else if (trimmed.startsWith('### ')) {
            elements.push(
              <h3
                key={`h3-${bIdx}-${lIdx}`}
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#92400e',
                  marginTop: '1.5rem',
                  marginBottom: '0.5rem'
                }}
              >
                {renderInlineMath(trimmed.replace(/^###\s+/, ''))}
              </h3>
            );
          } else if (trimmed.startsWith('> ')) {
            // Blockquotes / Callout callouts
            elements.push(
              <blockquote
                key={`quote-${bIdx}-${lIdx}`}
                style={{
                  margin: '1.25rem 0',
                  padding: '0.85rem 1.25rem',
                  backgroundColor: '#fffbeb',
                  borderLeft: '4px solid #d97706',
                  borderRadius: '0 8px 8px 0',
                  color: '#78350f',
                  fontSize: '0.95rem',
                  lineHeight: 1.6
                }}
              >
                {renderInlineMath(trimmed.replace(/^>\s+/, ''))}
              </blockquote>
            );
          } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
            // Unordered list item
            elements.push(
              <li
                key={`li-${bIdx}-${lIdx}`}
                style={{
                  fontSize: '0.975rem',
                  color: '#292524',
                  lineHeight: 1.7,
                  marginLeft: '1.5rem',
                  marginBottom: '0.35rem'
                }}
              >
                {renderInlineMath(trimmed.replace(/^[-*]\s+/, ''))}
              </li>
            );
          } else if (/^\d+\.\s+/.test(trimmed)) {
            // Ordered list item
            elements.push(
              <li
                key={`oli-${bIdx}-${lIdx}`}
                style={{
                  fontSize: '0.975rem',
                  color: '#292524',
                  lineHeight: 1.7,
                  marginLeft: '1.5rem',
                  marginBottom: '0.35rem'
                }}
              >
                {renderInlineMath(trimmed.replace(/^\d+\.\s+/, ''))}
              </li>
            );
          } else {
            // Normal paragraph
            elements.push(
              <p
                key={`p-${bIdx}-${lIdx}`}
                style={{
                  fontSize: '1rem',
                  color: '#292524',
                  marginBottom: '1.1rem',
                  lineHeight: 1.75
                }}
              >
                {renderInlineMath(trimmed)}
              </p>
            );
          }
        });
      }
    });

    return elements;
  };

  return <div className="formatted-study-content">{parseContentWithMath(content)}</div>;
};
