import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiMysql,
  SiGit,
  SiPostman,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { TbApi, TbBrandReactNative } from 'react-icons/tb';
import { MdOutlineDesignServices } from 'react-icons/md';
import './Skills.css';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.languages'),
      skills: [
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Java', icon: <FaJava /> },
      ],
    },
    {
      title: t('skills.frameworks'),
      skills: [
        { name: 'React JS', icon: <SiReact /> },
        { name: 'React Native', icon: <TbBrandReactNative /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Redux Toolkit', icon: <SiRedux /> },
        { name: 'React Query', icon: <SiReact /> },
        { name: 'Ant Design', icon: <MdOutlineDesignServices /> },
      ],
    },
    {
      title: t('skills.database'),
      skills: [
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MSSQL Server', icon: <FaDatabase /> },
      ],
    },
    {
      title: t('skills.others'),
      skills: [
        { name: 'HTML/CSS', icon: <SiHtml5 /> },
        { name: 'Git', icon: <SiGit /> },
        { name: 'RESTful API', icon: <TbApi /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'CSS3', icon: <SiCss3 /> },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="section-subtitle">{t('skills.subtitle')}</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <motion.div
                className="skills-list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    variants={itemVariants}
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
