import React, { useRef, useState, useCallback, useEffect } from 'react';
import styles from './BeforeAfter.module.css';


interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  title?: string;
  description?: string;
  initialPosition?: number; 
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = 'Avant',
  afterAlt = 'Après',
  title = 'Éclaircissement Dentaire',
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  initialPosition = 50,
}) => {
  const [position, setPosition] = useState<number>(initialPosition);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const pct = (x / rect.width) * 100;
    setPosition(pct);
  }, []);

  
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true;
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      <div
        ref={containerRef}
        className={styles.sliderWrapper}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        aria-label="Comparaison avant/après"
        role="img"
      >
        <div className={styles.imageContainer}>
          {/* After image — full width base */}
          <img
            src={afterImage}
            alt={afterAlt}
            className={styles.imageAfter}
            draggable={false}
          />

          {/* Before image — clipped to left portion */}
          <img
            src={beforeImage}
            alt={beforeAlt}
            className={styles.imageBefore}
            draggable={false}
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          />

          {/* Divider line */}
          <div className={styles.divider} style={{ left: `${position}%` }} />

          {/* Handle */}
          <div className={styles.handle} style={{ left: `${position}%` }}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M8 12H3m0 0l3-3M3 12l3 3M16 12h5m0 0l-3-3m3 3l-3 3" />
            </svg>
          </div>
        </div>
      </div>

      <p className={styles.description}>{description}</p>
    </section>
  );
};

export default BeforeAfter;
