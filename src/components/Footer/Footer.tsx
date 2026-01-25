import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub size={20} />, href: 'https://github.com/haubtm', label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/bá-hậu-lê-97b15a35a/', label: 'LinkedIn' },
    { icon: <FiMail size={20} />, href: 'mailto:haubtm699@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="footer-logo">
              <span className="logo-text">LBH</span>
              <span className="logo-dot">.</span>
            </a>
          </motion.div>

          <motion.div
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="footer-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="footer-credit">
              {t('footer.designed')} <span className="gradient-text">Lê Bá Hậu</span> with <FiHeart className="heart-icon" />
            </p>
            <p className="footer-copyright">
              © {currentYear} {t('footer.rights')}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
