import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.ems.title'),
      description: t('projects.ems.description'),
      technologies: ['ReactJS', 'TypeScript', 'Ant Design', 'Tailwind CSS', 'React Query', 'Redux Toolkit'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.description'),
      technologies: ['React', 'TypeScript', 'Framer Motion', 'i18next', 'EmailJS'],
      github: 'https://github.com/haubtm',
      demo: '#',
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
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="GitHub"
                  >
                    <FiGithub size={20} />
                  </motion.a>
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
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
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
