import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll';
import {
  FiCode,
  FiLayout,
  FiDatabase,
  FiSettings,
  FiTool,
  FiGitBranch
} from 'react-icons/fi';

interface SkillCategory {
  name: string;
  icon: JSX.Element;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: <FiLayout size={32} />,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    name: 'Development',
    icon: <FiCode size={32} />,
    skills: ['JavaScript', 'ES6+', 'React Hooks', 'Context API', 'Redux'],
  },
  {
    name: 'Tools',
    icon: <FiTool size={32} />,
    skills: ['VS Code', 'npm/yarn', 'Webpack', 'Figma',  'Chrome DevTools'],
  },
  {
    name: 'Version Control',
    icon: <FiGitBranch size={32} />,
    skills: ['Git', 'GitHub',   'CI/CD', 'Pull Requests'],
  },
  // {
  //   name: 'Backend',
  //   icon: <FiDatabase size={32} />,
  //   skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Databases', 'Authentication', 'Testing'],
  // },
  {
    name: 'Others',
    icon: <FiSettings size={32} />,
    skills: ['Problem Solving', 'SEO Basics', 'Performance Optimization', 'Web Accessibility', 'Agile', 'Teamwork'],
  },
];

const Skills = () => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useAnimateOnScroll({ threshold: 0.1 });

  return (
    <section
      id="skills"
      className="py-20 bg-muted/30 relative overflow-hidden"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
    >
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 -z-10" />
      <div className="absolute top-1/4 left-0 w-48 h-48 bg-blue-300/20 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30 animate-pulse -z-10" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-pulse -z-10" style={{ animationDelay: '2s' }} />

      <div className="container">
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={sectionIsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-md mb-4">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            My <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.name}
              category={category}
              index={index}
              isVisible={sectionIsVisible}
            />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={sectionIsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            I'm constantly learning and improving my skills. Currently exploring advanced React patterns and server-side rendering.
          </p>

          <motion.a
            href="#projects"
            className="inline-block px-6 py-3 mt-6 rounded-lg bg-primary text-white font-medium hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See My Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  category: SkillCategory;
  index: number;
  isVisible: boolean;
}

const SkillCard = ({ category, index, isVisible }: SkillCardProps) => {
  return (
    <motion.div
      className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover-lift"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
    >
      <div className="p-6">
        <div className="mb-4 text-primary">{category.icon}</div>
        <h3 className="text-xl font-bold mb-4">{category.name}</h3>

        <div className="space-y-3">
          {category.skills.map((skill, i) => (
            <motion.div
              key={skill}
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + i * 0.05 }}
            >
              <div className="w-2 h-2 rounded-full bg-primary mr-3" />
              <span className="text-foreground/80">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
