import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle } from 'lucide-react';
import styles from './Contact.module.css';
import aboutStyles from './About.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Contact() {
  return (
    <>
      <section className={aboutStyles.pageHero}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Contact Us</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Let's Talk — We're Here to Help</h1>
          <p className="section-subtitle">Pop into the showroom, give us a ring, or drop us a message. Whatever works for you.</p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="grid-2">
            
            {/* Contact Info Column */}
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              
              <motion.div variants={fadeUp} className={styles.contactCard}>
                <div className={styles.iconBox}><MapPin size={24} /></div>
                <div>
                  <h4>Visit Us</h4>
                  <p>Unit 55, Mountheath Trading Estate<br/>Prestwich, Greater Manchester<br/>M25 9WE</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className={styles.contactCard}>
                <div className={styles.iconBox}><Phone size={24} /></div>
                <div>
                  <h4>Call Us</h4>
                  <p><a href="tel:01618830607">0161 883 0607</a></p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className={styles.contactCard}>
                <div className={styles.iconBox}><Mail size={24} /></div>
                <div>
                  <h4>Email Us</h4>
                  <p><a href="mailto:sales@hnwelectrical.co.uk">sales@hnwelectrical.co.uk</a></p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className={styles.contactCard}>
                <div className={styles.iconBox}><MessageCircle size={24} /></div>
                <div>
                  <h4>WhatsApp</h4>
                  <p><a href="https://wa.me/441618830607" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a></p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className={styles.contactCard}>
                <div className={styles.iconBox}><Clock size={24} /></div>
                <div style={{ width: '100%' }}>
                  <h4>Opening Hours</h4>
                  <table className={styles.hoursTable}>
                    <tbody>
                      <tr><td>Monday - Friday</td><td>7:30 AM – 5:00 PM</td></tr>
                      <tr><td>Saturday</td><td>8:00 AM – 1:00 PM</td></tr>
                      <tr><td style={{ color: 'var(--gray-400)' }}>Sunday</td><td style={{ color: 'var(--gray-400)' }}>Closed</td></tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} style={{ marginTop: '24px' }}>
                <h4 style={{ color: 'var(--white)', marginBottom: '12px' }}>Follow Us</h4>
                <div className={styles.socials}>
                  <a href="https://facebook.com" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="https://instagram.com" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href="https://linkedin.com" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>
              </motion.div>

            </motion.div>

            {/* Map Column */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className={styles.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.8!2d-2.2885!3d53.5321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1f80c74a4f3%3A0x9d1a9b1b1b1b1b1b!2sMountheath%20Trading%20Estate%2C%20Prestwich%2C%20Manchester%20M25%209WE!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HNW Electrical Location"
                ></iframe>
              </div>

              <div style={{ marginTop: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="https://www.google.com/maps/dir//Mountheath+Trading+Estate,+Prestwich,+Manchester+M25+9WE" 
                   target="_blank" rel="noopener noreferrer" 
                   className="btn btn-primary"
                   style={{ padding: '12px 24px' }}>
                  <Navigation size={18} /> Get Directions
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
