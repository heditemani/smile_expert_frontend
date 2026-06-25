import React, { useState, useRef } from 'react';
import styles from './SmileReveal.module.css';

interface SmileRevealProps {
  /**
   * The "before" image — used as the full-bleed background.
   * Should be the dramatic / dark starting state.
   */
  beforeSrc: string;
  /**
   * The "after" image — revealed in the framed thumbnail on click.
   * Should be the bright, transformed smile.
   */
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  caption?: string;
}

const SmileReveal: React.FC<SmileRevealProps> = ({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Avant transformation',
  afterAlt  = 'Après transformation — sourire éclatant',
  caption   = "Qu'il s'agisse d'un simple bilan de santé ou d'une transformation complète, nous sommes là pour vous.",
}) => {
  const [revealed, setRevealed] = useState(false);
  const thumbRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => setRevealed(true);

  const handleClose = () => {
    setRevealed(false);
    /* Re-trigger the slide-in animation next time */
    if (thumbRef.current) {
      thumbRef.current.style.animation = 'none';
      requestAnimationFrame(() => {
        if (thumbRef.current) thumbRef.current.style.animation = '';
      });
    }
  };

  const Arrow = () => (
    <svg
      className={styles.arrow}
      viewBox="0 0 70 50"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 42 C14 15, 42 8, 62 24"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M55 18 L62 24 L54 27"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const PlusIcon = () => (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#2ec4b6" strokeWidth="2" />
      <line x1="12" y1="7" x2="12" y2="17" stroke="#2ec4b6" strokeWidth="2" strokeLinecap="round" />
      <line x1="7"  y1="12" x2="17" y2="12" stroke="#2ec4b6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  const CloseIcon = () => (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#2ec4b6" strokeWidth="2" />
      <line x1="8"  y1="8"  x2="16" y2="16" stroke="#2ec4b6" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="8"  x2="8"  y2="16" stroke="#2ec4b6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  return (
    <section className={styles.banner}>
      {/* Dark "before" image — always the full-bleed background */}
      <img src={beforeSrc} alt={beforeAlt} className={styles.bg} />
      <div className={styles.overlay} />
      {caption && <p className={styles.caption}>{caption}</p>}

      {/* ── Default state: invite user to reveal the smile ── */}
      <div className={`${styles.revealArea} ${revealed ? styles.hidden : ''}`}>
        <div className={styles.label}>
          <span>Click to reveal</span>
          <span>the smile!</span>
        </div>
        <Arrow />
        <button
          className={styles.toggleBtn}
          onClick={handleOpen}
          aria-label="Révéler le sourire après transformation"
        >
          <PlusIcon />
        </button>
      </div>

      {/* ── Revealed state: show bright "after" thumbnail ── */}
      <div className={`${styles.revealArea} ${!revealed ? styles.hidden : ''}`}>
        <div className={styles.label}>
          <span>Click to reveal</span>
          <span>before</span>
          <span>transformation</span>
        </div>
        <Arrow />
        <button
          className={styles.toggleBtn}
          onClick={handleClose}
          aria-label="Fermer l'aperçu"
        >
          <CloseIcon />
        </button>
        <div className={styles.thumbnailFrame} ref={thumbRef}>
          <img src={afterSrc} alt={afterAlt} className={styles.thumbnail} />
        </div>
      </div>
    </section>
  );
};

export default SmileReveal;