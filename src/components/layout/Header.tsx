import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Zap } from 'lucide-react';
import styles from './Header.module.css';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Who We Help', path: '/who-we-help' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.headerInner}`}>
          <Link to="/" className={styles.logo}>
            <div className={styles.logoIcon}><Zap size={20} /></div>
            HNW <span>Electrical</span>
          </Link>

          <nav className={styles.navDesktop}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={pathname === link.path ? styles.active : ''}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <a href="tel:01618830607" className={styles.headerPhone}>
            <Phone size={18} />
            0161 883 0607
          </a>

          <button 
            className={styles.hamburger} 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              className={styles.mobileOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.nav 
              className={styles.mobileMenu}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <button 
                className={styles.closeMenu} 
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={28} />
              </button>
              
              <div className={styles.mobileLinks}>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={pathname === link.path ? styles.active : ''}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <a href="tel:01618830607" className={styles.mobilePhone}>
                <Phone size={20} />
                0161 883 0607
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
