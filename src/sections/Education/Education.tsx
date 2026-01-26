import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiCalendar, FiAward } from 'react-icons/fi';
import iuhLogo from '../../assets/iuh-logo.png';
import './Education.css';

const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="section education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('education.title')}</h2>
          <p className="section-subtitle">{t('education.subtitle')}</p>
        </motion.div>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -4 }}
        >
          <div className="education-logo">
            <img src={iuhLogo} alt="IUH Logo" />
          </div>

          <div className="education-content">
            <div className="education-header">
              <div className="education-info">
                <h3 className="university-name">{t('education.university')}</h3>
                <p className="university-name-en">{t('education.universityEn')}</p>
                <span className="degree">{t('education.degree')}</span>
              </div>
              <div className="education-meta">
                <div className="education-date">
                  <FiCalendar size={16} />
                  <span>{t('education.duration')}</span>
                </div>
                <div className="education-gpa">
                  <FiAward size={16} />
                  <span>GPA: {t('education.gpa')}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
