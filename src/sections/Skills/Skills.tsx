import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiMysql,
  SiGit,
  SiNextdotjs,
  SiNestjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiAmazonec2,
  SiAmazons3,
  SiNginx,
  SiJira,
  SiPassport,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { TbApi, TbBrandReactNative, TbBrandFigma } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { GoWorkflow } from "react-icons/go";
import { VscServerProcess } from "react-icons/vsc";
import "./Skills.css";

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t("skills.languages"),
      skills: [
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "SQL", icon: <FaDatabase />, color: "#336791" },
      ],
    },
    {
      title: t("skills.frontend"),
      skills: [
        { name: "ReactJS", icon: <SiReact />, color: "#61DAFB" },
        { name: "NextJS", icon: <SiNextdotjs />, color: "#ffffff" },
        {
          name: "React Native",
          icon: <TbBrandReactNative />,
          color: "#61DAFB",
        },
        { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
        { name: "Zustand", icon: <SiReact />, color: "#453F39" },
        { name: "TanStack Query", icon: <SiReact />, color: "#FF4154" },
        { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        {
          name: "Ant Design",
          icon: <MdOutlineDesignServices />,
          color: "#0170FE",
        },
      ],
    },
    {
      title: t("skills.backend"),
      skills: [
        { name: "NodeJS (NestJS)", icon: <SiNestjs />, color: "#E0234E" },
        { name: "Express", icon: <SiExpress />, color: "#ffffff" },
        { name: "REST APIs", icon: <TbApi />, color: "#009688" },
        { name: "JWT Auth", icon: <SiPassport />, color: "#34E27A" },
        { name: "Passport", icon: <SiPassport />, color: "#34E27A" },
        { name: "Prisma ORM", icon: <SiPrisma />, color: "#2D3748" },
      ],
    },
    {
      title: t("skills.database"),
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
      ],
    },
    {
      title: t("skills.devops"),
      skills: [
        { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
        { name: "AWS EC2", icon: <SiAmazonec2 />, color: "#FF9900" },
        { name: "AWS S3", icon: <SiAmazons3 />, color: "#569A31" },
        { name: "Nginx", icon: <SiNginx />, color: "#009639" },
        { name: "CI/CD", icon: <VscServerProcess />, color: "#4CAF50" },
      ],
    },
    {
      title: t("skills.others"),
      skills: [
        { name: "Git", icon: <SiGit />, color: "#F05032" },
        { name: "Jira", icon: <SiJira />, color: "#0052CC" },
        { name: "Agile", icon: <GoWorkflow />, color: "#4CAF50" },
        { name: "Figma-to-Code", icon: <TbBrandFigma />, color: "#F24E1E" },
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
          <h2 className="section-title">{t("skills.title")}</h2>
          <p className="section-subtitle">{t("skills.subtitle")}</p>
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
                    <span className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
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
