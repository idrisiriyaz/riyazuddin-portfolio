import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  Github,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Download,
  MapPin,
  Calendar,
  Star,
  Menu,
  X,
  ArrowUp
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      // Show scroll to top button
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = {
    'Frontend': ['Next.js', 'React.js', 'React Native', 'Flutter', 'HTML', 'CSS', 'Material UI', 'Shadcn UI'],
    'Backend': ['Node.js', 'Spring Boot', '.NET', 'C#', 'Java'],
    'Databases': ['PostgreSQL', 'MySQL', 'MongoDB', 'MSSQL', 'Firebase'],
    'Cloud & DevOps': ['AWS Lambda', 'API Gateway', 'Step Functions', 'Supabase', 'Serverless Framework'],
    'Programming': ['JavaScript', 'TypeScript', 'Dart'],
    'AI Tools': ['AI SDKs', 'Large Language Models (LLMs)'],
    'Tools': ['Git', 'Postman', 'VS Code', 'Android Studio', 'Xcode']
  };

  const experiences = [
    {
      title: 'Software Developer',
      company: 'ParkourAI Pvt Ltd',
      location: 'Mumbai',
      period: 'Mar 2024 – Present',
      highlights: [
        'Built ETL pipelines for electricity bill big data using Next.js & PostgreSQL',
        'Developed serverless solutions with AWS Lambda, API Gateway, Step Functions',
        'Improved UI/UX with Supabase integration'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Wow Info Biz Pvt Ltd',
      location: 'Mumbai',
      period: 'Mar 2022 – Apr 2024',
      highlights: [
        'Built cross-platform apps with React Native & Next.js',
        'Integrated Agora.io SDK for live streaming',
        'Implemented payment gateways (Razorpay, Google Pay)',
        'Published apps with 50k+ downloads on Play Store & App Store'
      ]
    },
    {
      title: 'App Developer',
      company: 'TSA Pvt Ltd',
      location: 'Mumbai',
      period: 'Mar 2021 – Mar 2022',
      highlights: [
        'Developed Android modules with Redux Toolkit & Context API',
        'Integrated REST APIs & SDKs for scalable solutions',
        'Collaborated with UI/UX team to enhance app usability'
      ]
    }
  ];

  const projects = [
    {
      name: 'Utility Portals',
      description: 'Comprehensive utility management platforms for bill payments and bridging services',
      tech: ['Next.js', 'AWS', 'Supabase', 'MySQL'],
      websites: ['bridgeit.in', 'billtopay.in']
    },
    {
      name: 'Minaret App',
      description: 'Islamic app for Azan times and mosque events with 10k+ downloads',
      tech: ['React Native', 'Firebase', 'Redux'],
      downloads: '10k+'
    },
    {
      name: 'WeLinkJob',
      description: 'Professional job networking platform connecting employers and job seekers',
      tech: ['React Native', '.NET', 'MSSQL']
    },
    {
      name: 'Hukum & Keebo',
      description: 'Food delivery applications with real-time order tracking',
      tech: ['React Native', 'Spring Boot', 'MySQL', 'MongoDB']
    },
    {
      name: 'YouAdMe',
      description: 'Social commerce platform with integrated advertising features',
      tech: ['React Native', 'Spring Boot', 'Firebase']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-dark-gradient text-white overflow-x-hidden">
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 bg-dark-900/80 backdrop-blur-lg border-b border-dark-700/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="font-bold text-2xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Riyazuddin Idrisi
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-all duration-300 relative ${activeSection === section
                    ? 'text-green-400'
                    : 'text-slate-300 hover:text-green-400'
                    }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                  {activeSection === section && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400"
                      layoutId="activeSection"
                      initial={false}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg bg-dark-800/50 border border-dark-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-dark-900/95 backdrop-blur-lg border-t border-dark-700/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-4 space-y-4">
                {['about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`block w-full text-left capitalize font-medium transition-colors ${activeSection === section
                      ? 'text-green-400'
                      : 'text-slate-300 hover:text-green-400'
                      }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    {section}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <motion.div
          className="max-w-4xl mx-auto text-center z-10"
          style={{ y: textY }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-green-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Riyazuddin Idrisi
            </motion.h1>

            <motion.div
              className="text-2xl md:text-4xl text-green-400 font-semibold mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="animate-float">Full Stack Developer</span>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              4+ years of experience in Next.js, Node.js, React.js, AWS, and Serverless Architecture.
              Skilled in developing scalable web and mobile apps, integrating third-party SDKs,
              and optimizing cloud-based solutions.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            variants={itemVariants}
          >
            {[
              { icon: Mail, text: 'riyazidrisi4@gmail.com', href: 'mailto:riyazidrisi4@gmail.com' },
              { icon: Phone, text: '+91-9702586589', href: 'tel:+919702586589' },
              { icon: Github, text: 'github.com/idrisiriyaz', href: 'https://github.com/idrisiriyaz' }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 bg-dark-800/40 backdrop-blur-sm px-6 py-4 rounded-2xl border border-dark-700/50 hover:border-green-400/50 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <contact.icon size={20} className="text-green-400 group-hover:animate-pulse" />
                <span className="text-slate-300 group-hover:text-white transition-colors">
                  {contact.text}
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-12 py-5 rounded-2xl font-semibold text-lg hover:from-green-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-green-500/25 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="flex items-center gap-2">
              View My Work
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-10 w-4 h-4 bg-green-400 rounded-full opacity-60"
            animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-3/4 right-20 w-6 h-6 bg-blue-400 rounded-full opacity-40"
            animate={{ y: [0, -30, 0], scale: [1, 0.8, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-80"
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-24 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: 'Full Stack Development', desc: 'Expert in both frontend and backend technologies, creating end-to-end solutions' },
              { icon: Briefcase, title: '4+ Years Experience', desc: 'Proven track record in developing scalable applications and cloud solutions' },
              { icon: Star, title: '50k+ Downloads', desc: 'Published successful mobile applications with high user engagement' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-3xl bg-card-gradient backdrop-blur-sm border border-dark-700/50 hover:border-green-400/30 transition-all duration-500 group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:animate-pulse"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-24 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                className="bg-card-gradient backdrop-blur-sm p-8 rounded-3xl border border-dark-700/50 hover:border-green-400/30 transition-all duration-500"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-green-400 mb-6">{category}</h3>
                <div className="flex flex-wrap gap-4">
                  {skillList.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-6 py-3 bg-dark-800/50 text-slate-300 rounded-2xl text-sm font-medium border border-dark-700/50 hover:border-green-400/50 hover:text-green-400 hover:bg-dark-700/50 transition-all duration-300 cursor-default"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="py-24 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Work Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-card-gradient backdrop-blur-sm p-8 rounded-3xl border border-dark-700/50 hover:border-green-400/30 transition-all duration-500 group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-green-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-2xl text-green-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 text-right">
                    <div className="flex items-center gap-2 text-slate-400 mb-2">
                      <Calendar size={18} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin size={18} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-4 group-hover:translate-x-2 transition-transform duration-300"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                    >
                      <ChevronRight size={18} className="text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-300 group-hover:text-white transition-colors">
                        {highlight}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-24 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-card-gradient backdrop-blur-sm p-8 rounded-3xl border border-dark-700/50 hover:border-green-400/30 transition-all duration-500 group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-dark-800/50 text-green-400 rounded-xl text-xs font-medium border border-dark-700/50"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {project.websites && (
                  <div className="space-y-2">
                    {project.websites.map((website) => (
                      <motion.a
                        key={website}
                        href={`https://${website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-400 hover:text-green-300 group-hover:translate-x-2 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">{website}</span>
                      </motion.a>
                    ))}
                  </div>
                )}

                {project.downloads && (
                  <div className="flex items-center gap-2 text-slate-400">
                    <Download size={16} />
                    <span className="text-sm">{project.downloads} downloads</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="py-24 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-card-gradient backdrop-blur-sm p-12 rounded-3xl text-center border border-dark-700/50 hover:border-green-400/30 transition-all duration-500 group">
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl mx-auto mb-8 flex items-center justify-center group-hover:animate-pulse"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-2xl text-green-400 font-semibold mb-6">Mumbai University</p>
              <div className="flex justify-center gap-12 text-slate-400">
                <span className="text-lg">2017 – 2020</span>
                <span className="text-lg">CGPI: 8.72</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-24 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's discuss how I can help you achieve your goals.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                href="mailto:riyazidrisi4@gmail.com"
                className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-green-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Mail size={20} />
                Send Email
              </motion.a>
              <motion.a
                href="https://github.com/idrisiriyaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-dark-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold border border-dark-700/50 hover:border-green-400/50 hover:bg-dark-700/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Github size={20} />
                View GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-dark-950/50 backdrop-blur-sm border-t border-dark-700/50 text-center py-8 relative z-10">
        <p className="text-slate-400">
          © 2025 Riyazuddin Idrisi. All rights reserved.
        </p>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-2xl shadow-lg hover:shadow-green-500/25 z-40"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;