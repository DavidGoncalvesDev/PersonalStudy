import React, { useRef, useState, useEffect } from 'react';
import { X, Edit2, Eraser, Trash2, Maximize2, Minimize2, Check } from 'lucide-react';
import { renderInlineMath } from './MathRenderer';
import { Question } from '../types';

interface ScratchpadModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeQuestion?: Question | null;
}

export const ScratchpadModal: React.FC<ScratchpadModalProps> = ({
  isOpen,
  onClose,
  activeQuestion
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [tool, setTool] = useState<'pen' | 'eraser'>('pen');
  const [lineWidth, setLineWidth] = useState<number>(3);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [isQuestionVisible, setIsQuestionVisible] = useState<boolean>(true);
  const [savedDataUrl, setSavedDataUrl] = useState<string | null>(null);

  // Resize canvas to full window on open
  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high DPI (Retina / iPad displays)
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Restore saved drawing if available
    if (savedDataUrl) {
      const img = new Image();
      img.src = savedDataUrl;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, width, height);
      };
    } else {
      // Warm subtle paper grid or plain cream background
      ctx.fillStyle = '#fffdfa';
      ctx.fillRect(0, 0, width, height);
    }
  }, [isOpen]);

  const saveCanvasState = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      setSavedDataUrl(canvas.toDataURL());
    }
  };

  const getCoordinates = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(x, y);

    if (tool === 'pen') {
      ctx.strokeStyle = '#1c1917'; // Deep black ink
      ctx.lineWidth = lineWidth;
    } else {
      // Eraser: erase back to clean background color
      ctx.strokeStyle = '#fffdfa';
      ctx.lineWidth = lineWidth * 5; // broader eraser
    }

    setIsDrawing(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    e.preventDefault();
    setIsDrawing(false);
    saveCanvasState();
  };

  const handleClearAll = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#fffdfa';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    setSavedDataUrl(null);
  };

  const handleClose = () => {
    saveCanvasState();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      backgroundColor: '#fffdfa',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      userSelect: 'none'
    }}>
      {/* Top Floating Tools Bar */}
      <div style={{
        position: 'absolute',
        top: '12px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 210,
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '0.4rem 0.65rem',
        backgroundColor: '#ffffff',
        border: '1.5px solid #78350f',
        borderRadius: '999px',
        boxShadow: '0 6px 20px rgba(120, 53, 15, 0.15)'
      }}>
        {/* Pen Button */}
        <button
          onClick={() => setTool('pen')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            padding: '0.35rem 0.75rem',
            borderRadius: '999px',
            border: 'none',
            backgroundColor: tool === 'pen' ? '#78350f' : 'transparent',
            color: tool === 'pen' ? '#ffffff' : '#44403c',
            fontWeight: 700,
            fontSize: '0.78rem',
            cursor: 'pointer'
          }}
        >
          <Edit2 size={13} />
          <span>Pen</span>
        </button>

        {/* Eraser Button */}
        <button
          onClick={() => setTool('eraser')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            padding: '0.35rem 0.75rem',
            borderRadius: '999px',
            border: 'none',
            backgroundColor: tool === 'eraser' ? '#78350f' : 'transparent',
            color: tool === 'eraser' ? '#ffffff' : '#44403c',
            fontWeight: 700,
            fontSize: '0.78rem',
            cursor: 'pointer'
          }}
        >
          <Eraser size={13} />
          <span>Eraser</span>
        </button>

        <div style={{ width: '1px', height: '18px', backgroundColor: '#e7e2d7', margin: '0 0.2rem' }} />

        {/* Stroke Width Selector */}
        <button
          onClick={() => setLineWidth(2)}
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            border: lineWidth === 2 ? '2px solid #78350f' : '1px solid #d6cebf',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#1c1917' }} />
        </button>

        <button
          onClick={() => setLineWidth(4)}
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            border: lineWidth === 4 ? '2px solid #78350f' : '1px solid #d6cebf',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#1c1917' }} />
        </button>

        <button
          onClick={() => setLineWidth(8)}
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            border: lineWidth === 8 ? '2px solid #78350f' : '1px solid #d6cebf',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <div style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#1c1917' }} />
        </button>

        <div style={{ width: '1px', height: '18px', backgroundColor: '#e7e2d7', margin: '0 0.2rem' }} />

        {/* Clear All Button */}
        <button
          onClick={handleClearAll}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            padding: '0.35rem 0.6rem',
            borderRadius: '999px',
            border: 'none',
            backgroundColor: '#fee2e2',
            color: '#b91c1c',
            fontWeight: 700,
            fontSize: '0.74rem',
            cursor: 'pointer'
          }}
        >
          <Trash2 size={12} />
          <span>Clear All</span>
        </button>

        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            padding: '0.35rem 0.8rem',
            borderRadius: '999px',
            border: 'none',
            backgroundColor: '#15803d',
            color: '#ffffff',
            fontWeight: 800,
            fontSize: '0.78rem',
            cursor: 'pointer',
            marginLeft: '0.2rem'
          }}
        >
          <span>Done</span>
          <Check size={13} strokeWidth={3} />
        </button>
      </div>

      {/* Drawing Canvas */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          touchAction: 'none', // Prevents iPad gesture panning/scrolling while writing with Apple Pencil!
          cursor: tool === 'pen' ? 'crosshair' : 'cell',
          width: '100vw',
          height: '100vh',
          display: 'block'
        }}
      />

      {/* Corner Question Reference Card (if an active question exists) */}
      {activeQuestion && (
        <div style={{
          position: 'absolute',
          bottom: '16px',
          right: '16px',
          maxWidth: '360px',
          width: 'calc(100vw - 32px)',
          backgroundColor: '#ffffff',
          border: '1.5px solid #d6cebf',
          borderRadius: '10px',
          padding: '0.85rem',
          boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
          zIndex: 210,
          pointerEvents: 'auto'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#78350f', textTransform: 'uppercase' }}>
              Reference Question
            </span>
            <button
              onClick={() => setIsQuestionVisible(!isQuestionVisible)}
              style={{
                border: 'none',
                background: 'transparent',
                color: '#78716c',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {isQuestionVisible ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            </button>
          </div>

          {isQuestionVisible && (
            <div style={{ maxHeight: '200px', overflowY: 'auto', fontSize: '0.82rem', color: '#292524' }}>
              <p style={{ margin: '0 0 0.5rem', fontWeight: 600, lineHeight: 1.45 }}>
                {renderInlineMath(activeQuestion.question)}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {activeQuestion.options.map((opt) => (
                  <div key={opt.id} style={{ display: 'flex', gap: '0.35rem', fontSize: '0.78rem', color: '#57534e' }}>
                    <span style={{ fontWeight: 800, color: '#78350f' }}>{opt.id.toUpperCase()}:</span>
                    <span>{renderInlineMath(opt.text)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
