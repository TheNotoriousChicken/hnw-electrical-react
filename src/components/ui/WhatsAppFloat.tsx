import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppFloat.module.css';

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/441618830607"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
      aria-label="Chat on WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300, delay: 1 }}
    >
      <div className={styles.pulseRing}></div>
      <MessageCircle size={32} />
    </motion.a>
  );
}
