import { motion } from 'framer-motion';
import { ShieldCheck, PiggyBank, RefreshCcw, Brain, Users, PackageOpen } from 'lucide-react';
import styles from './About.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const values = [
  { icon: <ShieldCheck size={28} />, title: "Quality Branded Products", text: "We stock only trusted, industry-leading brands. No white-label mystery items — just products that professionals know and rely on every day." },
  { icon: <PiggyBank size={28} />, title: "Save Money Guarantee", text: "Being independent means lower overheads and smarter buying. We pass those savings directly to you. If you find it cheaper elsewhere, talk to us — we'll look after you." },
  { icon: <RefreshCcw size={28} />, title: "No-Quibble Returns", text: "Changed your mind? Wrong fitting? No drama. Our returns policy is straightforward, hassle-free, and built on the principle that looking after customers is just good business." },
  { icon: <Brain size={28} />, title: "Expert Advice", text: "Our team aren't just counter staff — they're experienced professionals who understand electrical systems inside out. Ask us anything; we're here to help you get the job right." },
  { icon: <Users size={28} />, title: "Friendly & Local", text: "We know our customers by name. We're part of the Prestwich community and proud to be the local electrical supplier that people actually enjoy visiting." },
  { icon: <PackageOpen size={28} />, title: "Massive Stock Holding", text: "No waiting around. Our warehouse is packed with thousands of products across every category, so you can grab what you need and get back on the job." },
];

export function About() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">About HNW Electrical</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Built on Trust, Powered by Experience</h1>
          <p className="section-subtitle">Seven years of supplying Manchester with quality electrical products, honest advice, and prices that make sense.</p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className={styles.storyGrid}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--amber-400)' }}>Our Story</h3>
              <p style={{ color: 'var(--gray-200)', lineHeight: 1.8, marginBottom: '20px' }}>
                HNW Electrical was born from a simple idea: Manchester deserves better. Better prices, better products, and better service than the big chains can offer. Starting from a modest lockup on a local trading estate, we set out to prove that an independent wholesaler could go head-to-head with the nationals — and win.
              </p>
              <p style={{ color: 'var(--gray-200)', lineHeight: 1.8, marginBottom: '20px' }}>
                Over seven years later, we've grown into a full-service electrical wholesaler and lighting showroom at Unit 55, Mountheath Trading Estate in Prestwich. Our shelves are stocked deep with quality branded products, our team has decades of combined trade experience, and our doors are open to both professionals and the public.
              </p>
              <p style={{ color: 'var(--gray-200)', lineHeight: 1.8 }}>
                We're proud to be independent. It means we choose the best products on merit, not because a head office tells us to. It means we can offer flexible pricing, build genuine relationships, and give every customer — whether you're wiring a tower block or changing a light fitting at home — the same level of care and expertise.
              </p>
            </div>
          </motion.div>

          <div style={{ marginTop: '80px' }}>
            <div className="text-center">
              <span className="section-label">Our Promises</span>
              <h2 className="section-title">Why Customers Choose HNW</h2>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid-3"
              style={{ marginTop: '48px' }}
            >
              {values.map((v, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUp}
                  className={styles.valueCard}
                  whileHover={{ y: -8, borderColor: 'rgba(245, 166, 35, 0.3)' }}
                >
                  <div className={styles.valueIcon}>{v.icon}</div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--white)' }}>{v.title}</h4>
                  <p style={{ color: 'var(--gray-300)', fontSize: '0.95rem', lineHeight: 1.7 }}>{v.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
