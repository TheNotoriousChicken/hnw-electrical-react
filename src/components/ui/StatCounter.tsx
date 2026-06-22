import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export function StatCounter({ value, suffix = '', label }: { value: number, suffix?: string, label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return (
    <div className="stat-card" style={{ padding: '24px 16px', background: 'rgba(255, 255, 255, 0.03)', border: 'var(--border-subtle)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
      <div 
        ref={ref}
        style={{ 
          fontFamily: 'var(--font-heading)', 
          fontSize: 'clamp(2rem, 5vw, 2.8rem)', 
          fontWeight: 900, 
          background: 'linear-gradient(135deg, var(--amber-400), var(--amber-200))', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          lineHeight: 1.2
        }}
      >
        0{suffix}
      </div>
      <div style={{ fontSize: '0.85rem', color: 'var(--gray-300)', marginTop: '6px', fontWeight: 500 }}>
        {label}
      </div>
    </div>
  );
}
