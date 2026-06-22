import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Flame, Sparkles, Zap, Link as LinkIcon, Settings } from 'lucide-react';
import { StatCounter } from '../components/ui/StatCounter';
import { TestimonialCarousel } from '../components/ui/TestimonialCarousel';
import styles from './Home.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroGrid}></div>
          <div className={`${styles.heroOrb} ${styles.orb1}`}></div>
          <div className={`${styles.heroOrb} ${styles.orb2}`}></div>
          <div className={`${styles.heroOrb} ${styles.orb3}`}></div>
        </div>

        <div className={`container ${styles.heroContent}`}>
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className={styles.heroSlogan}
          >
            <Zap size={16} fill="currentColor" />
            Bright People Shop With HNW — Think Brighter
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={styles.heroTitle}
          >
            Manchester's Independent<br />
            <span className={styles.highlight}>Electrical Wholesaler</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className={styles.heroSubtitle}
          >
            Your local electrical wholesaler and lighting showroom in Prestwich. Domestic & commercial supply, expert advice, and quality products — open to trade and the public.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className={styles.heroButtons}
          >
            <Link to="/contact" className="btn btn-primary">
              Contact Us <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/441618830607" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="section section-dark"
      >
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className={styles.introVisual}>
              <div className={styles.introVisualInner}>
                <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🏗️</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--amber-400)' }}>Est. 2017</div>
                <div style={{ color: 'var(--gray-300)', fontSize: '0.9rem', marginTop: '8px' }}>7+ Years Serving Manchester</div>
              </div>
            </div>
            <div>
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">From a Small Lockup to Manchester's Go-To Wholesaler</h2>
              <p style={{ color: 'var(--gray-200)', lineHeight: 1.8, marginBottom: '16px' }}>
                HNW Electrical started over seven years ago from a small lockup with a big vision — to give Manchester's tradespeople and homeowners a genuine alternative to the big-box chains. A place where quality matters, prices are fair, and you'll always get honest, knowledgeable advice.
              </p>
              <p style={{ color: 'var(--gray-200)', lineHeight: 1.8 }}>
                Today, we've grown into a fully stocked independent electrical wholesaler and lighting showroom based in Prestwich. From cables and switchgear to decorative lighting and EV chargers, we supply everything you need for domestic and commercial projects.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* STATS SECTION */}
      <section className="section section-dark" style={{ borderTop: 'var(--border-subtle)', borderBottom: 'var(--border-subtle)', padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            <StatCounter value={1200} suffix="+" label="Happy Clients" />
            <StatCounter value={5000} suffix="+" label="Products Available" />
            <StatCounter value={25000} suffix="+" label="Products Sold" />
            <StatCounter value={12} label="Team Members" />
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="section section-gradient"
      >
        <div className="container">
          <div className="text-center">
            <span className="section-label">What We Supply</span>
            <h2 className="section-title">Our Product Range</h2>
            <p className="section-subtitle centered">From commercial fit-outs to home renovations, we stock the brands and products professionals trust.</p>
          </div>
          <div className={styles.productsGrid}>
            {[
              { icon: <Lightbulb size={28} />, name: "Commercial Lighting" },
              { icon: <Flame size={28} />, name: "Heating" },
              { icon: <Sparkles size={28} />, name: "Decorative Lighting" },
              { icon: <Zap size={28} />, name: "EV Chargers" },
              { icon: <LinkIcon size={28} />, name: "Cable Accessories" },
              { icon: <Settings size={28} />, name: "Switchgear" },
            ].map((prod, i) => (
              <motion.div 
                key={i} 
                className={styles.productCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={styles.productIcon}>{prod.icon}</div>
                <div className={styles.productTitle}>{prod.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* TESTIMONIALS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="section section-dark"
      >
        <div className="container">
          <div className="text-center">
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle centered">Don't just take our word for it — hear from the tradespeople and homeowners who trust HNW.</p>
          </div>
          <TestimonialCarousel />
        </div>
      </motion.section>
    </>
  );
}
