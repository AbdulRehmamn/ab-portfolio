import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll';
import { FiBriefcase, FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi';

interface TimelineItem {
  title: string;
  organization: string;
  date: string;
  location: string;
  description: string;
  type: 'education' | 'work';
}

const timelineItems: TimelineItem[] = [
  {
    title: "Bachelor of Software Engineering",
    organization: "University of Central Punjab, Lahore",
    date: "Oct 2020 - Oct 2024",
    location: "Lahore, Pakistan",
    description: "Major: Website Development, Minor: Quality Assurance",
    type: "education"
  },
  {
    title: "Intermediate in Engineering",
    organization: "Punjab Group of Colleges",
    date: "March 2018 - May 2020",
    location: "Lahore, Pakistan",
    description: "Completed intermediate level education with focus on Engineering courses.",
    type: "education"
  },
  {
    title: "Front-End Intern",
    organization: "Shaukat Khanum Memorial Cancer Hospital & Research Centre",
    date: "August 2024 - October 2024",
    location: "MIS Department",
    description: "Worked as a Front-End Intern in the MIS Department. I worked with HTML, CSS, JavaScript and React.js to help create and improve websites with focus on responsiveness.",
    type: "work"
  },
  {
    title: "Shopify Agency Website",
    organization: "Freelance Project",
    date: "2024",
    location: "Remote",
    description: "Developed a responsive Shopify agency website with modern design and functionality.",
    type: "work"
  },
  {
    title: "YouTube Clone",
    organization: "Freelance Project",
    date: "2024",
    location: "Remote",
    description: "Created a YouTube clone with React.js, implementing core video platform functionality.",
    type: "work"
  },
  {
    title: "E-commerce Website",
    organization: "Freelance Project",
    date: "2023",
    location: "Remote",
    description: "Built a fully functional e-commerce website with product listings, cart, and checkout features.",
    type: "work"
  },
  {
    title: "Company Website",
    organization: "Freelance Project",
    date: "2023",
    location: "Remote",
    description: "Developed a professional company website with multiple pages and responsive design.",
    type: "work"
  }
];

const Experience = () => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useAnimateOnScroll({ threshold: 0.1 });

  const educationItems = timelineItems.filter(item => item.type === 'education');
  const workItems = timelineItems.filter(item => item.type === 'work');

  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
    >
      {/* Background accents */}
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-10 w-64 h-64 bg-blue-300/10 dark:bg-blue-900/10 rounded-full filter blur-3xl -z-10" />

      <div className="container">
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={sectionIsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-md mb-4">
            My Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Education & <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={sectionIsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <FiBookOpen size={24} className="text-primary mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-8">
              {educationItems.map((item, index) => (
                <TimelineCard
                  key={`education-${index}`}
                  item={item}
                  index={index}
                  isVisible={sectionIsVisible}
                />
              ))}
            </div>
          </motion.div>

          {/* Work Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={sectionIsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <FiBriefcase size={24} className="text-primary mr-3" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="space-y-8">
              {workItems.map((item, index) => (
                <TimelineCard
                  key={`work-${index}`}
                  item={item}
                  index={index}
                  isVisible={sectionIsVisible}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  isVisible: boolean;
}

const TimelineCard = ({ item, index, isVisible }: TimelineCardProps) => {
  return (
    <motion.div
      className="relative pl-6 border-l-2 border-muted"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
    >
      {/* Dot on timeline */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-lg" />

      <div className="bg-card rounded-lg p-5 shadow-sm border border-border hover-lift">
        <h4 className="text-lg font-bold">{item.title}</h4>
        <h5 className="text-primary font-medium">{item.organization}</h5>

        <div className="flex flex-wrap gap-y-2 gap-x-4 mt-2 text-sm text-foreground/70">
          <div className="flex items-center">
            <FiCalendar className="mr-1" size={14} />
            <span>{item.date}</span>
          </div>

          <div className="flex items-center">
            <FiMapPin className="mr-1" size={14} />
            <span>{item.location}</span>
          </div>
        </div>

        <p className="mt-3 text-foreground/80">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Experience;
