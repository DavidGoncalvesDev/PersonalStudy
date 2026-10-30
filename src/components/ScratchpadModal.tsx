import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Edit2, Eraser, Trash2, Maximize2, Minimize2, Check, ZoomIn, ZoomOut, RotateCcw, Copy } from 'lucide-react';
import { renderInlineMath } from './MathRenderer';
import { Question } from '../types';
import { playClickSound } from '../utils/soundEffects';

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
  const isPenActiveRef = useRef<boolean>(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  const [tool, setTool] = useState<'pen' | 'eraser'>('pen');
  const [lineWidth, setLineWidth] = useState<number>(3);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [isQuestionVisible, setIsQuestionVisible] = useState<boolean>(true);
  const [savedDataUrl, setSavedDataUrl] = useState<string | null>(null);
  const [copiedQuestion, setCopiedQuestion] = useState<boolean>(false);

  // Zoom & Pan Canvas States (supports pinch-to-zoom & mouse wheel zoom/pan)
  const [scale, setScale] = useState<number>(1);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const pinchRef = useRef<{
    initialDist: number;
    initialScale: number;
    initialMidpoint: { x: number; y: number };
    initialOffset: { x: number; y: number };
  } | null>(null);

  // Generous Sheet Dimensions for ample calculation space
  const [sheetDimensions, setSheetDimensions] = useState<{ width: number; height: number }>({
    width: 2000,
    height: 2600
  });

  // Global Text Selection & Palm Rest Protection:
  // Completely prevents iOS Safari / desktop browsers from selecting text or popping
  // the native "Search with AI" / "Copy" callout menu when writing or resting a palm
  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add('scratchpad-active');

    const prevUserSelect = document.body.style.userSelect;
    const prevWebkitUserSelect = (document.body.style as unknown as { webkitUserSelect: string }).webkitUserSelect;
    const prevWebkitTouchCallout = (document.body.style as unknown as { webkitTouchCallout: string }).webkitTouchCallout;

    document.body.style.userSelect = 'none';
    (document.body.style as unknown as { webkitUserSelect: string }).webkitUserSelect = 'none';
    (document.body.style as unknown as { webkitTouchCallout: string }).webkitTouchCallout = 'none';
    window.getSelection()?.removeAllRanges();

    const preventSelectionEvent = (e: Event) => {
      e.preventDefault();
    };

    const clearSelection = () => {
      window.getSelection()?.removeAllRanges();
    };

    document.addEventListener('selectstart', preventSelectionEvent, { capture: true });
    document.addEventListener('contextmenu', preventSelectionEvent, { capture: true });
    document.addEventListener('selectionchange', clearSelection);

    return () => {
      document.body.classList.remove('scratchpad-active');
      document.body.style.userSelect = prevUserSelect;
      (document.body.style as unknown as { webkitUserSelect: string }).webkitUserSelect = prevWebkitUserSelect;
      (document.body.style as unknown as { webkitTouchCallout: string }).webkitTouchCallout = prevWebkitTouchCallout;
      document.removeEventListener('selectstart', preventSelectionEvent, { capture: true });
      document.removeEventListener('contextmenu', preventSelectionEvent, { capture: true });
      document.removeEventListener('selectionchange', clearSelection);
    };
  }, [isOpen]);

  // Native non-passive canvas listeners to guarantee suppression of iOS callouts
  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const preventNativeCallout = (e: Event) => {
      e.preventDefault();
    };

    canvas.addEventListener('contextmenu', preventNativeCallout);
    canvas.addEventListener('selectstart', preventNativeCallout);

    return () => {
      canvas.removeEventListener('contextmenu', preventNativeCallout);
      canvas.removeEventListener('selectstart', preventNativeCallout);
    };
  }, [isOpen]);

  // Set up high-res transparent canvas sheet on open
  useEffect(() => {
    if (!isOpen) return;

    const width = Math.min(Math.max(window.innerWidth, 1800), 2200);
    const height = Math.min(Math.max(window.innerHeight * 1.5, 2400), 3000);
    setSheetDimensions({ width, height });

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle device pixel ratio safely within GPU memory bounds (max 2 for high DPI)
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Clear canvas to transparent so the faded paper grid shines through
    ctx.clearRect(0, 0, width, height);

    // Restore saved drawing if available
    if (savedDataUrl) {
      const img = new Image();
      img.src = savedDataUrl;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, width, height);
      };
    }
  }, [isOpen]);

  const saveCanvasState = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      setSavedDataUrl(canvas.toDataURL());
    }
  }, []);

  // Wheel zoom (with Ctrl) and wheel pan (moving through notes)
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
          const newScale = Math.min(Math.max(prevScale * zoomFactor, 0.4), 3.5);
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

  // Touch pinch-to-zoom and two-finger pan:
  // Strictly activates ONLY when both touches are fingers.
  // NEVER triggers or interrupts when Apple Pencil / stylus is touching!
  useEffect(() => {
    if (!isOpen) return;
    const container = containerRef.current;
    if (!container) return;

    const onTouchStart = (e: TouchEvent) => {
      // Check if Apple Pencil is present
      const hasStylus = Array.from(e.touches).some((t: any) => t.touchType === 'stylus');

      if (e.touches.length === 2 && !hasStylus && !isPenActiveRef.current) {
        // Two-finger pinch to zoom / pan
        e.preventDefault();
        setIsDrawing(false);
        activePointerIdRef.current = null;
        lastPointRef.current = null;

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
      } else {
        // Single finger, resting palm, or Apple Pencil:
        // PREVENT DEFAULT to stop iOS Safari from starting tap-and-hold / text selection / "Search with AI" callout!
        // Pointer events will continue firing cleanly for Apple Pencil writing and drawing.
        e.preventDefault();
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      const hasStylus = Array.from(e.touches).some((t: any) => t.touchType === 'stylus');
      if (hasStylus || isPenActiveRef.current) {
        return;
      }

      if (e.touches.length === 2 && pinchRef.current) {
        e.preventDefault();
        const t1 = e.touches[0];
        const t2 = e.touches[1];
        const dist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
        const mid = { x: (t1.clientX + t2.clientX) / 2, y: (t1.clientY + t2.clientY) / 2 };

        const scaleFactor = dist / pinchRef.current.initialDist;
        const newScale = Math.min(Math.max(pinchRef.current.initialScale * scaleFactor, 0.4), 3.5);

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
  const getCoordinates = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const scaleX = (canvas.width / dpr) / rect.width;
    const scaleY = (canvas.height / dpr) / rect.height;
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Capture pointer to bind tracking directly to canvas and bypass iOS gesture recognizers
    try {
      canvas.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    const isPen = e.pointerType === 'pen';

    // Apple Pencil / Stylus ALWAYS takes absolute priority!
    // If a palm was touching the screen right before, the pen overrides it immediately:
    if (isPen) {
      activePointerIdRef.current = e.pointerId;
      isPenActiveRef.current = true;
    } else {
      // Finger or touch:
      // If Apple Pencil is currently writing, completely reject secondary touch contacts (Palm Rejection!)
      if (isPenActiveRef.current) {
        return;
      }
      if (activePointerIdRef.current !== null && activePointerIdRef.current !== e.pointerId) {
        return;
      }
      activePointerIdRef.current = e.pointerId;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pt = getCoordinates(e.clientX, e.clientY);
    lastPointRef.current = pt;

    if (tool === 'pen') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = '#1c1917'; // Deep crisp black ink
      ctx.fillStyle = '#1c1917';
      ctx.lineWidth = lineWidth;
    } else {
      // Eraser clears ink back to transparent, preserving the faded paper grid perfectly!
      ctx.globalCompositeOperation = 'destination-out';
      ctx.strokeStyle = 'rgba(0,0,0,1)';
      ctx.fillStyle = 'rgba(0,0,0,1)';
      ctx.lineWidth = lineWidth * 5;
    }

    // Draw initial dot for single tap / period / decimal point
    ctx.beginPath();
    const radius = (tool === 'pen' ? lineWidth : lineWidth * 5) / 2;
    ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
    ctx.fill();

    setIsDrawing(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    // Palm Rejection: If Apple Pencil is active, ignore non-pen pointer movements
    if (isPenActiveRef.current && e.pointerType !== 'pen') {
      return;
    }

    if (activePointerIdRef.current !== e.pointerId) {
      return;
    }

    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pt = getCoordinates(e.clientX, e.clientY);

    if (lastPointRef.current) {
      ctx.beginPath();
      ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
      ctx.lineTo(pt.x, pt.y);
      ctx.stroke();
    }

    lastPointRef.current = pt;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas) {
      try {
        if (canvas.hasPointerCapture(e.pointerId)) {
          canvas.releasePointerCapture(e.pointerId);
        }
      } catch {
        // ignore
      }
    }

    if (activePointerIdRef.current === e.pointerId) {
      activePointerIdRef.current = null;
      if (e.pointerType === 'pen') {
        isPenActiveRef.current = false;
      }
      lastPointRef.current = null;
      setIsDrawing(false);
      saveCanvasState();
    }
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas) {
      try {
        if (canvas.hasPointerCapture(e.pointerId)) {
          canvas.releasePointerCapture(e.pointerId);
        }
      } catch {
        // ignore
      }
    }

    if (activePointerIdRef.current === e.pointerId) {
      activePointerIdRef.current = null;
      if (e.pointerType === 'pen') {
        isPenActiveRef.current = false;
      }
      lastPointRef.current = null;
      setIsDrawing(false);
    }
  };

  const handleClearAll = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear transparent ink, keeping the faded paper grid intact!
    ctx.clearRect(0, 0, sheetDimensions.width, sheetDimensions.height);
    setSavedDataUrl(null);
  };

  const handleManualZoom = (delta: number) => {
    setScale((prev) => {
      const next = Math.min(Math.max(prev + delta, 0.4), 3.5);
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

  const handleCopyQuestionForAI = () => {
    if (!activeQuestion) return;
    playClickSound();

    const hasOptions = Array.isArray(activeQuestion.options) && activeQuestion.options.length > 0;
    let textToCopy = `### Multivariate Data Analysis Exercise\n`;
    if (activeQuestion.section_reference) {
      textToCopy += `*Curriculum Point: ${activeQuestion.section_reference}*\n\n`;
    }
    textToCopy += `**Problem / Question:**\n${activeQuestion.question}\n\n`;
    if (hasOptions) {
      const optionsList = activeQuestion.options.map(opt => `- [${opt.id.toUpperCase()}] ${opt.text}`).join('\n');
      textToCopy += `**Choices:**\n${optionsList}\n\n`;
      textToCopy += `Please solve this step by step, explain the theoretical principles, determine the correct answer, and explain why each distractor is incorrect.`;
    } else {
      textToCopy += `Please solve this step by step, formulate the underlying mathematical derivation, provide the authoritative numerical and theoretical answer, and explain the key principles.`;
    }

    navigator.clipboard.writeText(textToCopy);
    setCopiedQuestion(true);
    setTimeout(() => setCopiedQuestion(false), 2200);
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
        backgroundColor: '#ece6dc', // Subtle warm desk surface background
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

        <div className="desktop-only" style={{ width: '1px', height: '18px', backgroundColor: '#e7e2d7', margin: '0 0.2rem' }} />

        {/* Stroke Width Selector (Desktop) */}
        <button
          className="desktop-only"
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
          className="desktop-only"
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
          className="desktop-only"
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
          <span className="desktop-only">Clear All</span>
          <span className="mobile-only">Clear</span>
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

      {/* Pannable and Scalable Viewport */}
      <div
        style={{
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          position: 'relative',
          touchAction: 'none'
        }}
      >
        {/* The Paper Sheet with Faded Warm Engineering Grid */}
        <div
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            transformOrigin: '0 0',
            width: `${sheetDimensions.width}px`,
            height: `${sheetDimensions.height}px`,
            backgroundColor: '#fffdfa',
            backgroundImage: `
              linear-gradient(to right, rgba(120, 53, 15, 0.12) 1.2px, transparent 1.2px),
              linear-gradient(to bottom, rgba(120, 53, 15, 0.12) 1.2px, transparent 1.2px),
              linear-gradient(to right, rgba(120, 53, 15, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(120, 53, 15, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px, 120px 120px, 24px 24px, 24px 24px',
            boxShadow: '0 10px 30px rgba(69, 26, 3, 0.14)',
            borderRadius: '4px',
            position: 'absolute',
            top: 0,
            left: 0,
            transition: pinchRef.current ? 'none' : 'transform 0.04s ease-out'
          }}
        >
          {/* Drawing Canvas */}
          <canvas
            ref={canvasRef}
            className="scratchpad-canvas"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onContextMenu={(e) => e.preventDefault()}
            style={{
              touchAction: 'none', // Prevents default gestures while writing
              cursor: tool === 'pen' ? 'crosshair' : 'cell',
              width: `${sheetDimensions.width}px`,
              height: `${sheetDimensions.height}px`,
              display: 'block',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              WebkitTouchCallout: 'none',
              outline: 'none'
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
          maxWidth: '380px',
          width: 'calc(100vw - 32px)',
          backgroundColor: '#ffffff',
          border: '1.5px solid #d6cebf',
          borderRadius: '10px',
          padding: '0.85rem',
          boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
          zIndex: 210,
          pointerEvents: 'auto',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          WebkitTouchCallout: 'none'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#78350f', textTransform: 'uppercase' }}>
              Reference Question
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <button
                onClick={handleCopyQuestionForAI}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  padding: '0.2rem 0.45rem',
                  borderRadius: '5px',
                  border: '1px solid #d6cebf',
                  backgroundColor: copiedQuestion ? '#dcfce7' : '#fdfbf7',
                  color: copiedQuestion ? '#15803d' : '#78350f',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                {copiedQuestion ? <Check size={11} strokeWidth={3} /> : <Copy size={11} />}
                <span>{copiedQuestion ? 'Copied for AI!' : 'Copy for AI'}</span>
              </button>
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
          </div>

          {isQuestionVisible && (
            <div style={{ maxHeight: '200px', overflowY: 'auto', fontSize: '0.82rem', color: '#292524' }}>
              <p style={{ margin: '0 0 0.5rem', fontWeight: 600, lineHeight: 1.45 }}>
                {renderInlineMath(activeQuestion.question)}
              </p>
              {Array.isArray(activeQuestion.options) && activeQuestion.options.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {activeQuestion.options.map((opt) => (
                    <div key={opt.id} style={{ display: 'flex', gap: '0.35rem', fontSize: '0.78rem', color: '#57534e' }}>
                      <span style={{ fontWeight: 800, color: '#78350f' }}>{opt.id.toUpperCase()}:</span>
                      <span>{renderInlineMath(opt.text)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};