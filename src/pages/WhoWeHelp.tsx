import { motion } from 'framer-motion';
import { Wrench, Home as HomeIcon, Zap, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './WhoWeHelp.module.css';
import aboutStyles from './About.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export function WhoWeHelp() {
  return (
    <>
      <section className={aboutStyles.pageHero}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Who We Help</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Trade or Public — Everyone's Welcome</h1>
          <p className="section-subtitle">Whether you're a seasoned electrician or a homeowner tackling a weekend project, HNW has the products and the know-how to help you get it done.</p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="grid-2">
            
            {/* Trade Card */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className={styles.audienceCard}
              whileHover={{ y: -8, borderColor: 'rgba(245, 166, 35, 0.2)' }}
            >
              <div className={styles.audienceIcon}><Wrench size={32} /></div>
              <h3 className={styles.audienceTitle}>Tradespeople &amp; Electricians</h3>
              <p className={styles.audienceText}>
                You're the backbone of what we do. From day-one apprentices to seasoned sparks running multi-site projects, we understand the pressures of the trade — tight deadlines, changing specs, and the need for reliable stock at the right price.
              </p>
              <p className={styles.audienceText}>
                At HNW, you get a dedicated trade counter staffed by people who speak your language. No call centres, no corporate runaround. Just fast access to quality branded products, competitive pricing that won't eat your margins, and technical advice when you need a second opinion.
              </p>
              <ul className={styles.audienceList}>
                <li><Zap size={16} /> Competitive trade accounts &amp; pricing</li>
                <li><Zap size={16} /> Massive stock — less time waiting, more time earning</li>
                <li><Zap size={16} /> Technical advice from experienced professionals</li>
                <li><Zap size={16} /> Quick quotes for project-based supply</li>
                <li><Zap size={16} /> Dedicated WhatsApp ordering for speed</li>
              </ul>
              <div style={{ marginTop: '32px' }}>
                <Link to="/contact" className="btn btn-primary">Open a Trade Account <ArrowRight size={18} /></Link>
              </div>
            </motion.div>

            {/* Public Card */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              transition={{ delay: 0.2 }}
              className={styles.audienceCard}
              whileHover={{ y: -8, borderColor: 'rgba(245, 166, 35, 0.2)' }}
            >
              <div className={styles.audienceIcon}><HomeIcon size={32} /></div>
              <h3 className={styles.audienceTitle}>General Public &amp; Homeowners</h3>
              <p className={styles.audienceText}>
                You don't need to be a qualified electrician to shop with us. Our doors are open to everyone, and our team are always happy to help you find the right product — whether you're upgrading your kitchen lighting, fitting a new bathroom heater, or choosing an EV charger for the driveway.
              </p>
              <p className={styles.audienceText}>
                Visit our lighting showroom to see decorative and commercial options in person. We'll walk you through the styles, explain what works best for your space, and give you pricing that's genuinely better than the big DIY sheds — without the hard sell.
              </p>
              <ul className={styles.audienceList}>
                <li><Zap size={16} /> Open to the public — no trade card needed</li>
                <li><Zap size={16} /> Friendly, jargon-free advice</li>
                <li><Zap size={16} /> Lighting showroom to see products in situ</li>
                <li><Zap size={16} /> Better prices than high-street DIY stores</li>
                <li><Zap size={16} /> Easy returns if it's not quite right</li>
              </ul>
              <div style={{ marginTop: '32px' }}>
                <Link to="/contact" className="btn btn-secondary">Visit Our Showroom <ArrowRight size={18} /></Link>
              </div>
            </motion.div>

          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className={styles.ctaBanner}
          >
            <h2 className="section-title" style={{ marginBottom: '12px' }}>Not Sure What You Need?</h2>
            <p className="section-subtitle centered" style={{ marginBottom: '32px' }}>
              Give us a call or pop into the showroom. We'll point you in the right direction — no obligation, no pressure.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              <a href="tel:01618830607" className="btn btn-primary">Call 0161 883 0607</a>
              <a href="https://wa.me/441618830607" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
