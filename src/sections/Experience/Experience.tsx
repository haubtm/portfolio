import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiBriefcase, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const { t } = useTranslation();

  const responsibilities = [
    t('experience.responsibilities.admin'),
    t('experience.responsibilities.teacher'),
    t('experience.responsibilities.uiux'),
    t('experience.responsibilities.state'),
    t('experience.responsibilities.collab'),
  ];

  const technologies = [
    'ReactJS',
    'TypeScript',
    'Ant Design',
    'Tailwind CSS',
    'React Query',
    'Redux Toolkit',
    'RESTful API',
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('experience.title')}</h2>
          <p className="section-subtitle">{t('experience.subtitle')}</p>
        </motion.div>

        <div className="experience-timeline">
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-marker">
              <div className="marker-dot">
                <FiBriefcase size={20} />
              </div>
              <div className="marker-line"></div>
            </div>

            <div className="timeline-content">
              <div className="experience-header">
                <div className="experience-title">
                  <h3 className="company-name">{t('experience.company')}</h3>
                  <span className="position">{t('experience.position')}</span>
                </div>
                <div className="experience-date">
                  <FiCalendar size={16} />
                  <span>{t('experience.duration')}</span>
                </div>
              </div>

              <div className="project-card">
                <h4 className="project-title">{t('experience.projectTitle')}</h4>
                <p className="project-description">{t('experience.projectDesc')}</p>

                <div className="tech-stack">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="responsibilities-list">
                  {responsibilities.map((item, index) => (
                    <motion.div
                      key={index}
                      className="responsibility-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <FiCheckCircle className="check-icon" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
