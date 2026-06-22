import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Carousel.module.css';

const testimonials = [
  { text: "Our projects have been running very smoothly ever since we started working with HNW. Very happy with quality of items and prices consistently low.", author: "E. Leech" },
  { text: "Friendly, yet professional trade counter with a wealth of technical knowhow and massive stock. Prices second to none!", author: "Marcus Behar" },
  { text: "Great staff, great at understanding the style lighting the customer wants. Prices — they just look after you!", author: "Binyomin de Vries" },
  { text: "Well stocked with all the electrical equipment I required. Service is brilliant with a good come back on faulty goods.", author: "Tuvya Cohen" },
  { text: "Mr Daniel gave me a good description of pros and cons of different fixtures. Pricing reasonable and excellent aftercare.", author: "Andrew Klan" }
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkWidth = () => {
      if (!containerRef.current) return;
      const w = window.innerWidth;
      if (w >= 1024) setVisibleCount(3);
      else if (w >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };
    
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [index, visibleCount]);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const nextSlide = () => setIndex(i => i >= maxIndex ? 0 : i + 1);
  const prevSlide = () => setIndex(i => i <= 0 ? maxIndex : i - 1);

  return (
    <div className={styles.carouselWrapper} ref={containerRef}>
      <div className={styles.carouselTrackWrapper}>
        <motion.div 
          className={styles.carouselTrack}
          animate={{ x: `calc(-${index * (100 / visibleCount)}%)` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={styles.carouselCard}
              style={{ flex: `0 0 calc(${100 / visibleCount}% - 16px)` }}
            >
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.author}>— {t.author}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className={styles.controls}>
        <button className={styles.controlBtn} onClick={prevSlide}>
          <ChevronLeft size={20} />
        </button>
        <div className={styles.dots}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button 
              key={i}
              className={`${styles.dot} ${i === index ? styles.activeDot : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button className={styles.controlBtn} onClick={nextSlide}>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
