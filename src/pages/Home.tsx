import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { StatCounter } from '../components/ui/StatCounter';
import { TestimonialCarousel } from '../components/ui/TestimonialCarousel';
import styles from './Home.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export function Home() {
  return (
    <div className="texture-grain">
      {/* EDITORIAL HERO SECTION */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          
          <div className={styles.heroTextCol}>
            <motion.div 
              initial="hidden" animate="visible" variants={fadeUp}
              className={styles.heroSlogan}
            >
              Independent & Proud
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heroTitle}
            >
              Manchester's Premium <br />
              <span className={styles.highlight}>Electrical Partner</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heroSubtitle}
            >
              Not just another trade counter. We supply high-end lighting, commercial gear, and expert advice to professionals and the public.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heroButtons}
            >
              <Link to="/contact" className="btn btn-primary">
                Visit Showroom <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/441618830607" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <MessageCircle size={18} /> Trade Enquiries
              </a>
            </motion.div>
          </div>

          <motion.div 
            className={styles.heroImageCol}
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: -1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.polaroidFrame}>
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format" alt="HNW Electrical Showroom" className={styles.heroImg} />
              <div className="handwritten" style={{ marginTop: '16px', marginLeft: '12px' }}>Welcome to HNW!</div>
            </div>
            
            {/* Floating accent image */}
            <motion.div 
              className={styles.floatingImage}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format" alt="Electrician at work" />
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* BESPOKE INTRO SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="section section-dark"
      >
        <div className={`container ${styles.editorialGrid}`}>
          <div className={styles.editorialText}>
            <span className="section-label">Our Story</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
              Built for tradespeople, by people who know the trade.
            </h2>
            <div style={{ marginTop: '32px' }}>
              <p style={{ color: 'var(--gray-200)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '24px' }}>
                We didn't want to be just another corporate box-mover. When we started HNW Electrical seven years ago, our goal was simple: to build the kind of wholesaler we'd want to buy from ourselves.
              </p>
              <p style={{ color: 'var(--gray-300)', lineHeight: 1.8 }}>
                That means no white-label rubbish, no hiding prices, and definitely no call centres. When you walk into our Prestwich showroom, you're getting decades of genuine expertise and massive stock levels at fair, independent prices.
              </p>
              <div style={{ marginTop: '40px' }}>
                <span className="handwritten" style={{ fontSize: '2.5rem', color: 'var(--white)' }}>Daniel</span>
                <p style={{ color: 'var(--amber-400)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '4px' }}>Founder & Director</p>
              </div>
            </div>
          </div>
          <div className={styles.editorialStats}>
             <StatCounter value={1200} suffix="+" label="Trade Accounts" />
             <StatCounter value={5000} suffix="+" label="Lines in Stock" />
             <StatCounter value={7} suffix=" Yrs" label="Independent" />
          </div>
        </div>
      </motion.section>

      {/* MASONRY PRODUCTS GALLERY */}
      <section className="section" style={{ backgroundColor: 'var(--navy-900)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span className="section-label">What We Supply</span>
            <h2 className="section-title">Everything for the job.</h2>
          </div>
          
          <div className={styles.masonryGrid}>
            
            <motion.Link to="/about" className={`${styles.masonryCard} ${styles.masonryLarge}`} whileHover="hover" initial="initial">
              <img src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=800&auto=format" alt="Commercial Lighting" className={styles.masonryImg} />
              <div className={styles.masonryOverlay}>
                <motion.h3 variants={{ hover: { y: 0, opacity: 1 }, initial: { y: 20, opacity: 0 } }}>Architectural & Commercial Lighting</motion.h3>
              </div>
            </motion.Link>
            
            <motion.Link to="/about" className={styles.masonryCard} whileHover="hover" initial="initial">
              <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format" alt="EV Chargers" className={styles.masonryImg} />
              <div className={styles.masonryOverlay}>
                <motion.h3 variants={{ hover: { y: 0, opacity: 1 }, initial: { y: 20, opacity: 0 } }}>EV Charging</motion.h3>
              </div>
            </motion.Link>
            
            <motion.div className={styles.masonryCard} style={{ backgroundColor: 'var(--navy-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px' }}>
               <div style={{ textAlign: 'center' }}>
                 <div className="handwritten" style={{ fontSize: '2.5rem', display: 'block', marginBottom: '16px' }}>& much more...</div>
                 <p style={{ color: 'var(--gray-300)' }}>Cables, Switchgear, Heating, Tools & Accessories.</p>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="section section-dark" style={{ overflow: 'hidden' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <span className="section-label">Word on the Street</span>
            <h2 className="section-title">What Our Customers Say</h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>
    </div>
  );
}
