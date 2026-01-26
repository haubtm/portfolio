import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiExternalLink, FiGithub, FiFolder, FiUsers, FiCalendar } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation();

  // Projects ordered from newest to oldest
  const projects = [
    // Education Management System (06/2025 – Present)
    {
      title: t('projects.ems.title'),
      description: t('projects.ems.description'),
      role: t('projects.ems.role'),
      duration: t('projects.ems.duration'),
      teamSize: t('projects.ems.teamSize'),
      technologies: ['ReactJS', 'TypeScript', 'Ant Design', 'Tailwind CSS', 'React Query', 'Redux Toolkit'],
      github: [],
      demo: 'https://dev.center.kng.solutions/',
      featured: true,
    },
    // Smart Supermarket Management System (07/2025 – 12/2025)
    {
      title: t('projects.nexamart.title'),
      description: t('projects.nexamart.description'),
      role: t('projects.nexamart.role'),
      duration: t('projects.nexamart.duration'),
      teamSize: t('projects.nexamart.teamSize'),
      technologies: ['ReactJS', 'React Native', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'PayOS'],
      github: ['https://github.com/haubtm/nexa-mart-web', 'https://github.com/haubtm/nexa-mart-app'],
      demo: 'https://nexa-mart-web.vercel.app',
      featured: true,
    },
    // Personal Portfolio (12/2025 – Present) - NEWEST
    {
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.description'),
      role: t('projects.portfolio.role'),
      duration: t('projects.portfolio.duration'),
      teamSize: t('projects.portfolio.teamSize'),
      technologies: ['React', 'TypeScript', 'Framer Motion', 'i18next', 'EmailJS'],
      github: ['https://github.com/haubtm/portfolio'],
      demo: '',
      featured: true,
    },
    // PC & Electronic Components Store (02/2025 – 05/2025)
    {
      title: t('projects.pcstore.title'),
      description: t('projects.pcstore.description'),
      role: t('projects.pcstore.role'),
      duration: t('projects.pcstore.duration'),
      teamSize: t('projects.pcstore.teamSize'),
      technologies: ['Spring Boot', 'MySQL', 'Redis', 'JWT', 'PayOS', 'Gemini API', 'Docker', 'Microservices'],
      github: ['https://github.com/hovinhduy/BE'],
      demo: '',
      featured: true,
    },
    // Zalo Clone Chat Application (01/2025 – 05/2025) - OLDEST
    {
      title: t('projects.zaloclone.title'),
      description: t('projects.zaloclone.description'),
      role: t('projects.zaloclone.role'),
      duration: t('projects.zaloclone.duration'),
      teamSize: t('projects.zaloclone.teamSize'),
      technologies: ['React Native', 'TypeScript', 'Socket.IO', 'NestJS', 'Expo Router'],
      github: ['https://github.com/NguyenMinhNhat843/ZaloClone'],
      demo: '',
      featured: true,
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-header">
                <div className="project-icon">
                  <FiFolder size={40} />
                </div>
                <div className="project-links">
                  {project.github && project.github.length > 0 && project.github.map((link, i) => (
                    <motion.a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="GitHub"
                      title={project.github.length > 1 ? `Repo ${i + 1}` : 'GitHub'}
                    >
                      <FiGithub size={20} />
                    </motion.a>
                  ))}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Demo"
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                {/* Show role and duration for featured projects */}
                {project.featured && project.role && (
                  <div className="project-meta">
                    <span className="project-role">{project.role}</span>
                    <div className="project-info-row">
                      {project.duration && (
                        <span className="project-duration">
                          <FiCalendar size={14} />
                          {project.duration}
                        </span>
                      )}
                      {project.teamSize && (
                        <span className="project-team">
                          <FiUsers size={14} />
                          {project.teamSize}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-item">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
