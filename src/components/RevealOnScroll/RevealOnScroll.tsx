import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import styles from './RevealOnScroll.module.css';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const RevealOnScroll = ({
  children,
  className = '',
  delay = 0,
}: RevealOnScrollProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -40px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties;

  return (
    <div
      ref={elementRef}
      className={`${styles.reveal} ${isVisible ? styles.visible : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
