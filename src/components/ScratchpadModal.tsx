import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Edit2, Eraser, Trash2, Maximize2, Minimize2, Check, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const activePointerIdRef = useRef<number | null>(null);
  const [tool, setTool] = useState<'pen' | 'eraser'>('pen');
  const [lineWidth, setLineWidth] = useState<number>(3);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [isQuestionVisible, setIsQuestionVisible] = useState<boolean>(true);
  const [savedDataUrl, setSavedDataUrl] = useState<string | null>(null);

  // Zoom & Pan Canvas States (supports pinch-to-zoom & mouse wheel zoom/pan)
  const [scale, setScale] = useState<number>(1);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const pinchRef = useRef<{
    initialDist: number;
    initialScale: number;
    initialMidpoint: { x: number; y: number };
    initialOffset: { x: number; y: number };
  } | null>(null);

  // Global Text Selection & Palm Rest Protection:
  // Completely prevents iOS Safari / desktop browsers from selecting text or popping magnifier when resting a palm
  useEffect(() => {
    if (!isOpen) return;

    const prevUserSelect = document.body.style.userSelect;
    const prevWebkitUserSelect = (document.body.style as unknown as { webkitUserSelect: string }).webkitUserSelect;

    document.body.style.userSelect = 'none';
    (document.body.style as unknown as { webkitUserSelect: string }).webkitUserSelect = 'none';
    window.getSelection()?.removeAllRanges();

    const preventSelectionEvent = (e: Event) => {
      e.preventDefault();
    };

    document.addEventListener('selectstart', preventSelectionEvent);
    document.addEventListener('contextmenu', preventSelectionEvent);

    return () => {
      document.body.style.userSelect = prevUserSelect;
      (document.body.style as unknown as { webkitUserSelect: string }).webkitUserSelect = prevWebkitUserSelect;
      document.removeEventListener('selectstart', preventSelectionEvent);
      document.removeEventListener('contextmenu', preventSelectionEvent);
    };
  }, [isOpen]);

  // Resize canvas to window dimensions on open
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
      // Warm subtle cream background
      ctx.fillStyle = '#fffdfa';
      ctx.fillRect(0, 0, width, height);
    }
  }, [isOpen]);

  const saveCanvasState = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      setSavedDataUrl(canvas.toDataURL());
    }
  }, []);

  // Wheel zoom (with Ctrl or pinch) and wheel pan (moving through notes)
  useEffect(() => {
    if (!isOpen) return;
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (e.ctrlKey || e.metaKey) {
        // Zoom in / out centered around cursor position
        const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
        setScale((prevScale) => {
          const newScale = Math.min(Math.max(prevScale * zoomFactor, 0.4), 4);
          const mouseX = e.clientX;
          const mouseY = e.clientY;
          setOffset((prevOffset) => ({
            x: mouseX - (mouseX - prevOffset.x) * (newScale / prevScale),
            y: mouseY - (mouseY - prevOffset.y) * (newScale / prevScale),
          }));
          return newScale;
        });
      } else {
        // Move / pan through notes with rolling wheel
        setOffset((prev) => ({
          x: prev.x - e.deltaX,
          y: prev.y - e.deltaY,
        }));
      }
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', onWheel);
    };
  }, [isOpen]);

  // Touch pinch-to-zoom and two-finger pan
  useEffect(() => {
    if (!isOpen) return;
    const container = containerRef.current;
    if (!container) return;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        // Cancel active drawing if two fingers touch down
        setIsDrawing(false);
        activePointerIdRef.current = null;

        const t1 = e.touches[0];
        const t2 = e.touches[1];
        const dist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
        const mid = { x: (t1.clientX + t2.clientX) / 2, y: (t1.clientY + t2.clientY) / 2 };

        pinchRef.current = {
          initialDist: dist,
          initialScale: scale,
          initialMidpoint: mid,
          initialOffset: { ...offset },
        };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && pinchRef.current) {
        e.preventDefault();
        const t1 = e.touches[0];
        const t2 = e.touches[1];
        const dist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
        const mid = { x: (t1.clientX + t2.clientX) / 2, y: (t1.clientY + t2.clientY) / 2 };

        const scaleFactor = dist / pinchRef.current.initialDist;
        const newScale = Math.min(Math.max(pinchRef.current.initialScale * scaleFactor, 0.4), 4);

        const deltaMidX = mid.x - pinchRef.current.initialMidpoint.x;
        const deltaMidY = mid.y - pinchRef.current.initialMidpoint.y;

        const initialMidX = pinchRef.current.initialMidpoint.x;
        const initialMidY = pinchRef.current.initialMidpoint.y;
        const initialOffsetX = pinchRef.current.initialOffset.x;
        const initialOffsetY = pinchRef.current.initialOffset.y;

        const newOffsetX = initialMidX - (initialMidX - initialOffsetX) * (newScale / pinchRef.current.initialScale) + deltaMidX;
        const newOffsetY = initialMidY - (initialMidY - initialOffsetY) * (newScale / pinchRef.current.initialScale) + deltaMidY;

        setScale(newScale);
        setOffset({ x: newOffsetX, y: newOffsetY });
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (e.touches.length < 2) {
        pinchRef.current = null;
      }
    };

    container.addEventListener('touchstart', onTouchStart, { passive: false });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    container.addEventListener('touchend', onTouchEnd);
    container.addEventListener('touchcancel', onTouchEnd);

    return () => {
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      container.removeEventListener('touchcancel', onTouchEnd);
    };
  }, [isOpen, scale, offset]);

  // Coordinate mapping respecting transform matrix (scale & pan offset)
  const getCoordinates = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    // rect.left and rect.width already account for CSS transform and pan offset
    return {
      x: (e.clientX - rect.left) / scale,
      y: (e.clientY - rect.top) / scale
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();

    // Palm Rejection: If already drawing with a pointer (e.g. Apple Pencil or stylus),
    // ignore secondary touch contacts created by resting the palm on the screen
    if (activePointerIdRef.current !== null && activePointerIdRef.current !== e.pointerId) {
      return;
    }

    activePointerIdRef.current = e.pointerId;

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture is not supported
    }

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
    // Only follow the active drawing pointer (Apple Pencil / Stylus)
    if (!isDrawing || activePointerIdRef.current !== e.pointerId) return;
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
    if (activePointerIdRef.current !== e.pointerId) return;
    e.preventDefault();

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore
    }

    activePointerIdRef.current = null;
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

  const handleManualZoom = (delta: number) => {
    setScale((prev) => {
      const next = Math.min(Math.max(prev + delta, 0.4), 4);
      // Center zoom around center of viewport
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setOffset((prevOffset) => ({
        x: cx - (cx - prevOffset.x) * (next / prev),
        y: cy - (cy - prevOffset.y) * (next / prev),
      }));
      return next;
    });
  };

  const handleResetView = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  const handleClose = () => {
    saveCanvasState();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      onContextMenu={(e) => e.preventDefault()}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: '#fffdfa',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        WebkitTouchCallout: 'none',
        overscrollBehavior: 'none'
      }}
    >
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

        {/* Zoom Controls */}
        <button
          onClick={() => handleManualZoom(-0.2)}
          title="Zoom Out"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            height: '24px',
            borderRadius: '6px',
            border: '1px solid #d6cebf',
            backgroundColor: '#f5f0e8',
            color: '#78350f',
            cursor: 'pointer'
          }}
        >
          <ZoomOut size={13} />
        </button>

        <button
          onClick={handleResetView}
          title="Reset Zoom & Pan (100%)"
          style={{
            padding: '0.2rem 0.45rem',
            borderRadius: '6px',
            border: '1px solid #d6cebf',
            backgroundColor: '#ffffff',
            color: '#78350f',
            fontWeight: 700,
            fontSize: '0.72rem',
            cursor: 'pointer',
            minWidth: '46px',
            textAlign: 'center'
          }}
        >
          {Math.round(scale * 100)}%
        </button>

        <button
          onClick={() => handleManualZoom(0.2)}
          title="Zoom In"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            height: '24px',
            borderRadius: '6px',
            border: '1px solid #d6cebf',
            backgroundColor: '#f5f0e8',
            color: '#78350f',
            cursor: 'pointer'
          }}
        >
          <ZoomIn size={13} />
        </button>

        <button
          onClick={handleResetView}
          title="Reset View"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            height: '24px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: 'transparent',
            color: '#78716c',
            cursor: 'pointer'
          }}
        >
          <RotateCcw size={12} />
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

      {/* Pannable and Scalable Canvas Container */}
      <div
        style={{
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            transformOrigin: '0 0',
            width: '100%',
            height: '100%',
            transition: pinchRef.current ? 'none' : 'transform 0.05s ease-out'
          }}
        >
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            style={{
              touchAction: 'none', // Prevents iPad gesture panning while writing with stylus
              cursor: tool === 'pen' ? 'crosshair' : 'cell',
              width: '100vw',
              height: '100vh',
              display: 'block'
            }}
          />
        </div>
      </div>

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
          pointerEvents: 'auto',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          WebkitTouchCallout: 'none'
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
