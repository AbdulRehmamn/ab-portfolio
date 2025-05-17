import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';
import { img } from 'framer-motion/client';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  category: string[];
  technologies: string[];
}

const projects: Project[] = [
  {
    id: "shopify-agency",
    title: "Shopify Agency Website",
    description: "A modern website for a Shopify agency featuring sleek design, service showcases, and client testimonials.",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop",
    liveUrl: "https://shopify-web-ochre.vercel.app/",
    category: ["website", "shopify"],
    technologies: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: "youtube-clone",
    title: "YouTube Clone",
    description: "A functional YouTube clone with video playback, search features, and responsive design.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2074&auto=format&fit=crop",
    liveUrl: "https://same-bot26smejr8-latest.netlify.app/",
    category: ["app", "clone"],
    technologies: ["React", "CSS", "YouTube API"]
  },
  {
    id: "ecommerce",
    title: "E-commerce Website",
    description: "A fully functional e-commerce platform with product listings, cart, checkout, and user accounts.",
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1974&auto=format&fit=crop",
    liveUrl: "https://e-commerce-alpha-beige.vercel.app/",
    category: ["website", "ecommerce"],
    technologies: ["React", "Redux", "Tailwind CSS", "Stripe"]
  },
  {
    id: "company-website",
    title: "Company Website",
    description: "A corporate website with modern design, multiple pages, and responsive layout.",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop",
    liveUrl: "https://mind-logic-vlsf.vercel.app/",
    category: ["website", "corporate"],
    technologies: ["React", "SCSS", "Gsap Animation"]
  },
  {
    id: "AI-Remoer",
    title: "Ai-Remover Website",
    description: "A modern website for a AI detection remover or humanize AI Written text.",
    image:"1.png",
    liveUrl: "https://ai-remover.vercel.app/",
    category: ["website", "AI-Remover"],
    technologies: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: "AI-Detection",
    title: "AI-Detection Website",
    description: "A modern website for AI detection to determine how much content is written by AI.",
    image:"2.png",
    liveUrl: "https://ai-detection-ten.vercel.app/",
    category: ["website", "AI-Remover"],
    technologies: ["React", "Tailwind CSS", "Framer Motion"]
},
{
    id: "MP4 to MP3 converter",
    title: "MP4 to MP3 converter Website",
    description: "A modern website for MP4 to MP3 converter .",
    image:"3.png",
    liveUrl: "https://mp4-to-mp3-one.vercel.app/",
    category: ["website", "Mp4 to Mp3"],
    technologies: ["React", "Tailwind CSS", "Framer Motion"]
},

];

const categories = [
  { id: "all", name: "All" },
  { id: "website", name: "Websites" },
  { id: "app", name: "Apps" },
  { id: "ecommerce", name: "E-commerce" },
  { id: "clone", name: "Clones" },
  {id:"AI-Remover" , name: "AI-remover"} ,
 { id : "AI-Dectection , name: AI-Dection"}
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { ref: sectionRef, isVisible: sectionIsVisible } = useAnimateOnScroll({ threshold: 0.1 });

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category.includes(activeCategory));

  return (
    <section
      id="projects"
      className="py-20 bg-muted/30 relative overflow-hidden"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
    >
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 -z-10" />
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-blue-300/20 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30 animate-pulse -z-10" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-pulse -z-10" style={{ animationDelay: '2s' }} />

      <div className="container">
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={sectionIsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-md mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            My Recent <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mt-6 rounded-full" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={sectionIsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="p-1 bg-card rounded-lg shadow-sm border border-border">
            <div className="flex flex-wrap gap-1">
              {categories.map((category, i) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-transparent hover:bg-muted text-foreground/80'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 + i * 0.05 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="hidden sm:flex items-center ml-2 text-sm text-foreground/60">
            <FiFilter className="mr-1" />
            <span>Filter</span>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isVisible={sectionIsVisible}
              />
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={sectionIsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-6">
            These are just a few examples of my work. I'm always working on new projects to improve my skills.
          </p>

          <motion.a
            href="https://github.com/AbdulRehmamn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:shadow-lg transition-all gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub size={18} />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
}

const ProjectCard = ({ project, index, isVisible }: ProjectCardProps) => {
  return (
    <motion.div
      className="group bg-card rounded-xl overflow-hidden shadow-md border border-border hover-lift"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      exit={{ opacity: 0, y: 20 }}
      layout
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex gap-2 justify-end">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-all"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiExternalLink size={18} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.map((tech, i) => (
            <span
              key={`${project.id}-${tech}`}
              className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-foreground/80 mb-4">{project.description}</p>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          View Project <FiExternalLink size={14} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default Projects;
