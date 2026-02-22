import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
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
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const skills = {
    'Frontend': ['React.js', 'Next.js', 'React Native', 'Redux ToolKit', 'Context API', 'Zustand', 'HTML', 'CSS', 'MUI', 'Shadcn UI'],
    'Backend': ['Node.js', 'GraphQL', 'Spring Boot', '.NET'],
    'Databases': ['PostgreSQL', 'MySQL', 'MongoDB', 'MSSQL'],
    'Cloud & DevOps': ['AWS Lambda', 'API Gateway', 'Step Functions', 'Route53', 'CloudFront', 'DynamoDB', 'CloudFormation', 'Cognito', 'Supabase', 'Serverless Framework', 'Firebase'],
    'Programming': ['JavaScript', 'TypeScript', 'Dart', 'C#', 'Java'],
    'AI Tools': ['AI SDKs for UI', 'Large Language Models (LLMs)', 'LangChain', 'n8n'],
    'Tools': ['Figma', 'Git', 'Postman', 'VS Code', 'Android Studio', 'Xcode']
  };

  const experiences = [
    {
      title: 'Full Stack Engineer',
      company: 'ParkourAI Pvt Ltd',
      location: 'Mumbai',
      period: 'Mar 2024 – Oct 2025',
      highlights: [
        'Built scalable UIs with React.js using Hooks, Lifecycle Events, and state management.',
        'Developed ETL pipelines for electricity bill big data using Next.js (TypeScript) and PostgreSQL, Node.js, handling 100K+ bills per month with integrated analytics via Chart.js.',
        'Delivered serverless solutions with AWS Lambda (Node.js), API Gateway, Step Functions, and IaC using CloudFormation.',
        'Designed and deployed a full-stack web application with Next.js + Material UI, integrated with Mapbox and Google Maps.',
        'Worked extensively with AWS: S3, EC2, CloudFront, DynamoDB, GraphQL, Lambda, Cognito.',
        'Enhanced UX and performance through Supabase integration for faster data handling.',
        'Improved Unit Test coverage from 40% → 90%, driving 100%+ team productivity increase with strong integration testing.',
        'Researched and implemented modular architecture, Micro Frontends, and Web Components for reusability and scalability.',
        'Actively participated in Agile development, collaborating with stakeholders and product owners.'
      ],
      techStack: 'React.js (TypeScript), Next.js (TypeScript), Material UI, Tailwind CSS, Bootstrap, Node.js, PostgreSQL, MySQL, AWS'
    },
    {
      title: 'Software Developer',
      company: 'Wow Infobiz Pvt Ltd',
      location: 'Mumbai',
      period: 'Mar 2022 – Apr 2024',
      highlights: [
        'Collaborated with the team to plan, Figma design, and review UI/UX implementations.',
        'Implemented state management with Context API, Redux, Redux Toolkit, Zustand, improving scalability and maintainability.',
        'Designed and developed highly responsive UI components using React, JavaScript, TypeScript and modern workflows.',
        'Troubleshot, debugged, and optimized front-end performance for reliability and scalability.',
        'Developed front-end architecture to support dynamic user interactions.',
        'Enhanced code quality with unit and integration tests (Jest, Enzyme, ESLint), leading to more stable production releases.',
        'Managed CI/CD pipelines and release workflows for smooth deployment and performance monitoring.',
        'Actively worked in Agile/Scrum: sprint planning, daily stand-ups, backlog grooming, and retrospectives.'
      ],
      techStack: 'React.js (TypeScript), Next.js (TypeScript), Material UI, Tailwind, Bootstrap, Node.js, MongoDB, MySQL, AWS'
    },
    {
      title: 'App Developer',
      company: 'TSA Pvt Ltd',
      location: 'Mumbai',
      period: 'Mar 2021 – Mar 2022',
      highlights: [
        'Implemented state management using Context API, Redux, and Redux Toolkit for scalability and maintainability.',
        'Built and published mobile apps with Android SDK, iOS SDK, and Deep Linking on Google Play Store and Apple App Store.',
        'Integrated real-time live streaming using Agora.io SDK for audio and video communication.',
        'Implemented AI-driven features: camera filters and video editing using Banuba SDK and VESDK.',
        'Integrated push notifications for Android and iOS to improve user retention.',
        'Utilized Firebase for backend support and real-time data handling.',
        'Implemented payment gateways (Razorpay, Google Pay) and push notifications for seamless UX.',
        'Built cross-platform apps with React Native, achieving 50K+ downloads on Play Store & App Store.'
      ],
      techStack: 'React.js, React Native, Material UI, React Native Paper, Firebase, Agora SDK'
    }
  ];

  const projects = [
    {
      name: 'Utility ERP (bridgeit.in)',
      description: 'Utility ERP built with Next.js (TypeScript), Node.js, AWS, Supabase, PostgreSQL.',
      tech: ['Next.js', 'Node.js', 'AWS', 'Supabase', 'PostgreSQL'],
      websites: ['https://bridgeit.in']
    },
    {
      name: 'Utility Payment Portals (billtopay.in)',
      description: 'Utility payment portals built with Next.js (TypeScript), Node.js (TypeScript), AWS, MySQL.',
      tech: ['Next.js', 'Node.js', 'AWS', 'MySQL'],
      websites: ['https://billtopay.in']
    },
    {
      name: 'Minaret',
      description: 'React.js and React Native app for broadcasting Azan & mosque events.',
      tech: ['React.js', 'React Native'],
      downloads: '10k+'
    },
    {
      name: 'WeLinkJob',
      description: 'Job networking platform with React.js (TypeScript), React Native, .NET, MSSQL.',
      tech: ['React.js', 'React Native', '.NET', 'MSSQL'],
      websites: ['https://play.google.com/store/apps/details?id=com.welinkjobs&hl=en_IN']
    },
    {
      name: 'YouAdMe',
      description: 'Social commerce platform using React.js, React Native, Spring Boot, Firebase.',
      tech: ['React.js', 'React Native', 'Spring Boot', 'Firebase'],
      websites: ['https://youadme.en.aptoide.com/app']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const sectionNumbers: Record<string, string> = {
    about: '01',
    skills: '02',
    experience: '03',
    projects: '04',
    education: '05',
    contact: '06',
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Ambient glow spots */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.025] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/[0.015] rounded-full blur-[100px]" />
        {/* Corner accent lines */}
        <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-white/30 to-transparent" />
        <div className="absolute top-0 left-0 w-px h-32 bg-gradient-to-b from-white/30 to-transparent" />
        <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-white/30 to-transparent" />
        <div className="absolute top-0 right-0 w-px h-32 bg-gradient-to-b from-white/30 to-transparent" />
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-white z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-xl border-b border-white/[0.08]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo + Name */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToTop}
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/idrisi-logo.svg`}
                alt="Idrisi Logo"
                className="w-7 h-6"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative uppercase text-[11px] font-medium tracking-[0.22em] transition-all duration-300 ${activeSection === section
                    ? 'text-white'
                    : 'text-white/35 hover:text-white/80'
                    }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                  {activeSection === section && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                      layoutId="activeSection"
                      initial={false}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-black/98 backdrop-blur-xl border-t border-white/[0.08]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-5 space-y-5">
                {['about', 'skills', 'experience', 'projects', 'contact'].map((section, i) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`flex items-center gap-3 w-full text-left uppercase text-xs font-medium tracking-[0.22em] transition-colors ${activeSection === section ? 'text-white' : 'text-white/40 hover:text-white'
                      }`}
                    whileTap={{ scale: 0.98 }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <span className="text-white/20 font-mono text-[10px]">{String(i + 1).padStart(2, '0')}</span>
                    {section}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20 md:pt-24">
        {/* Giant logo watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <img
            src={`${import.meta.env.BASE_URL}assets/idrisi-logo.svg`}
            alt=""
            aria-hidden="true"
            className="w-[70vw] max-w-[700px] opacity-[0.025]"
          />
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center z-10"
          style={{ y: textY }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >


          {/* Name */}
          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-6xl md:text-[7rem] font-black tracking-tight leading-none text-white mb-1 animate-flicker"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              RIYAZUDDIN
            </motion.h1>
          </motion.div>

          {/* Role */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-10"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <span className="w-10 h-px bg-white/25" />
            <span className="text-xs md:text-sm tracking-[0.45em] text-white/45 uppercase font-light">
              Full Stack Engineer
            </span>
            <span className="w-10 h-px bg-white/25" />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-sm md:text-base text-white/35 max-w-2xl mx-auto leading-relaxed mb-12 tracking-wide"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Engineer with 4+ years building scalable web and mobile apps using React.js, Next.js, React Native, and Node.js. Skilled in state management, modern UI frameworks, cloud services (AWS, Supabase, Firebase), and SDK integrations including live streaming and video editing. Experienced in big data pipelines, REST/GraphQL APIs, and deploying to Play Store & App Store.
          </motion.p>

          {/* Contact Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            variants={itemVariants}
          >
            {[
              { icon: Phone, text: '+91-9702586589', href: 'tel:+919702586589' },
              { icon: Mail, text: 'riyazidrisi4@gmail.com', href: 'mailto:riyazidrisi4@gmail.com' },
              { icon: Github, text: 'github.com/idrisiriyaz', href: 'https://github.com/idrisiriyaz' },
              { icon: Linkedin, text: 'LinkedIn', href: 'https://in.linkedin.com/in/riyaz-idrisi' }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2.5 bg-white/[0.03] backdrop-blur-sm px-5 py-3 border border-white/10 hover:border-white/30 hover:bg-white/[0.07] transition-all duration-300 group"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.96 }}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.55 + index * 0.1 }}
              >
                <contact.icon size={14} className="text-white/45 group-hover:text-white transition-colors flex-shrink-0" />
                <span className="text-white/45 text-sm group-hover:text-white/90 transition-colors">{contact.text}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="bg-white text-black px-10 py-4 font-bold text-xs tracking-[0.25em] uppercase hover:bg-white/90 transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -2, boxShadow: '0 0 40px rgba(255,255,255,0.25)' }}
            whileTap={{ scale: 0.96 }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="flex items-center gap-2">
              View My Work
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>

        {/* Floating geometric particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { top: '22%', left: '7%', size: 4, dur: 3, del: 0 },
            { top: '68%', right: '8%', size: 6, dur: 4.5, del: 1 },
            { top: '42%', left: '18%', size: 2, dur: 2.5, del: 0.5 },
            { top: '30%', right: '14%', size: 3, dur: 3.5, del: 1.5 },
            { top: '78%', left: '30%', size: 2, dur: 3, del: 0.8 },
          ].map((dot, i) => (
            <motion.div
              key={i}
                className="absolute bg-white"
              style={{
                top: dot.top,
                left: (dot as Record<string, unknown>).left as string | undefined,
                right: (dot as Record<string, unknown>).right as string | undefined,
                width: dot.size,
                height: dot.size,
              }}
              animate={{ y: [0, -18, 0], opacity: [0.25, 0.7, 0.25] }}
              transition={{ duration: dot.dur, repeat: Infinity, ease: 'easeInOut', delay: dot.del }}
            />
          ))}
        </div>
      </section>

      {/* ─── ABOUT SECTION ─── */}
      <motion.section
        id="about"
        className="py-28 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-number">— {sectionNumbers.about} —</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">About Me</h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Code, title: 'Full Stack Engineer', desc: 'Expert in both frontend and backend technologies, creating end-to-end solutions from UI to infrastructure.' },
              { icon: Briefcase, title: '4+ Years XP', desc: 'Proven track record in developing scalable applications and cloud-based solutions across multiple industries.' },
              { icon: Star, title: '50k+ Downloads', desc: 'Published successful mobile applications with high user engagement and stellar store ratings.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="futuristic-card p-8 group relative overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.03, y: -8 }}
              >
                {/* Corner accents */}
                <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 group-hover:border-white/50 transition-colors" />
                <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 group-hover:border-white/50 transition-colors" />

                <div className="w-12 h-12 border border-white/15 mx-auto mb-6 flex items-center justify-center group-hover:border-white/40 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-wider text-center group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed text-center group-hover:text-white/55 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ─── SKILLS SECTION ─── */}
      <motion.section
        id="skills"
        className="py-28 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-number">— {sectionNumbers.skills} —</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">Skills & Technologies</h2>
            <div className="section-divider" />
          </motion.div>

          <div className="space-y-4">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                className="futuristic-card p-7 group"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.08 }}
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-xs font-bold text-white/60 mb-5 tracking-[0.3em] uppercase font-mono group-hover:text-white/90 transition-colors">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="skill-badge"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.08 + skillIndex * 0.04 }}
                      whileHover={{ scale: 1.08, y: -3 }}
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

      {/* ─── EXPERIENCE SECTION ─── */}
      <motion.section
        id="experience"
        className="py-28 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-number">— {sectionNumbers.experience} —</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">Work Experience</h2>
            <div className="section-divider" />
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2" />

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="futuristic-card p-8 group relative overflow-hidden"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.01, y: -4 }}
                >
                  {/* Index number */}
                  <span className="absolute top-6 right-8 text-white/[0.06] font-black text-7xl leading-none select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 relative z-10">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight group-hover:text-white transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-white/50 font-medium tracking-wider uppercase">{exp.company}</p>
                    </div>
                    <div className="mt-4 lg:mt-0 flex flex-col items-start lg:items-end gap-2">
                      <div className="flex items-center gap-2 text-white/35 text-xs">
                        <Calendar size={13} />
                        <span className="font-mono tracking-wider">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/35 text-xs">
                        <MapPin size={13} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 relative z-10">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.15 + i * 0.08 }}
                      >
                        <ChevronRight size={14} className="text-white/30 mt-0.5 flex-shrink-0 group-hover:text-white/60 transition-colors" />
                        <span className="text-white/45 text-sm leading-relaxed group-hover:text-white/65 transition-colors">
                          {highlight}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  {(exp as { techStack?: string }).techStack && (
                    <p className="mt-6 pt-4 border-t border-white/10 text-white/30 text-xs font-mono tracking-wider">
                      Tech: {(exp as { techStack: string }).techStack}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── PROJECTS SECTION ─── */}
      <motion.section
        id="projects"
        className="py-28 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-number">— {sectionNumbers.projects} —</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">Featured Projects</h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="futuristic-card p-7 group relative overflow-hidden flex flex-col"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ scale: 1.04, y: -8 }}
              >
                {/* Corner accents */}
                <span className="absolute top-0 left-0 w-5 h-5 border-t border-l border-white/15 group-hover:border-white/40 transition-colors" />
                <span className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-white/15 group-hover:border-white/40 transition-colors" />

                <h3 className="text-lg font-black text-white mb-3 tracking-wide group-hover:text-white transition-colors">
                  {project.name}
                </h3>
                <p className="text-white/35 text-sm mb-5 leading-relaxed group-hover:text-white/55 transition-colors flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 border border-white/12 text-white/40 text-[11px] font-medium tracking-wide"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.08 + techIndex * 0.04 }}
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
                        href={website.startsWith('http') ? website : `https://${website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/40 hover:text-white transition-all duration-300 group/link"
                        whileHover={{ x: 4 }}
                      >
                        <ExternalLink size={13} className="group-hover/link:text-white" />
                        <span className="text-xs tracking-wide">{website}</span>
                      </motion.a>
                    ))}
                  </div>
                )}

                {project.downloads && (
                  <div className="flex items-center gap-2 text-white/30 text-xs">
                    <Download size={13} />
                    <span className="font-mono">{project.downloads} downloads</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ─── EDUCATION SECTION ─── */}
      <motion.section
        className="py-28 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-number">— {sectionNumbers.education} —</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">Education</h2>
            <div className="section-divider" />
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="futuristic-card p-12 text-center group relative overflow-hidden">
              <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/20 group-hover:border-white/50 transition-colors" />
              <span className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/20 group-hover:border-white/50 transition-colors" />
              <span className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/20 group-hover:border-white/50 transition-colors" />
              <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/20 group-hover:border-white/50 transition-colors" />

              <motion.div
                className="w-16 h-16 border border-white/20 mx-auto mb-8 flex items-center justify-center group-hover:border-white/45 transition-all"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap className="w-8 h-8 text-white/60 group-hover:text-white transition-colors" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight group-hover:text-white transition-colors">
                B.Sc. in Information Technology
              </h3>
              <p className="text-white/40 font-medium tracking-[0.2em] uppercase text-sm mb-8">Mumbai University</p>
              <div className="flex justify-center gap-10 text-white/30 text-xs font-mono tracking-widest">
                <span>2017 – 2020</span>
                <span className="text-white/15">|</span>
                <span>CGPI: 8.72</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ─── CONTACT SECTION ─── */}
      <motion.section
        id="contact"
        className="py-28 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-number">— {sectionNumbers.contact} —</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Let's Work Together</h2>
            <div className="section-divider mb-10" />
            <p className="text-sm text-white/35 mb-12 max-w-xl mx-auto tracking-wide leading-relaxed">
              Ready to bring your next project to life? Let's discuss how I can help you achieve your goals.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="mailto:riyazidrisi4@gmail.com"
                className="flex items-center gap-3 bg-white text-black px-8 py-4 font-bold text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -4, boxShadow: '0 0 40px rgba(255,255,255,0.25)' }}
                whileTap={{ scale: 0.96 }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Mail size={16} />
                Send Email
              </motion.a>
              <motion.a
                href="https://github.com/idrisiriyaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-white/20 text-white/70 px-8 py-4 font-bold text-xs tracking-[0.2em] uppercase hover:border-white/50 hover:text-white hover:bg-white/[0.05] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.96 }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Github size={16} />
                View GitHub
              </motion.a>
              <motion.a
                href="https://in.linkedin.com/in/riyaz-idrisi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-white/20 text-white/70 px-8 py-4 font-bold text-xs tracking-[0.2em] uppercase hover:border-white/50 hover:text-white hover:bg-white/[0.05] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.96 }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Linkedin size={16} />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/[0.07] text-center py-10 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-3">
          <img
            src={`${import.meta.env.BASE_URL}assets/idrisi-logo.svg`}
            alt="Logo"
            className="w-5 h-4 opacity-40"
          />
          <p className="text-white/25 text-xs tracking-[0.35em] uppercase">Riyazuddin Idrisi</p>
        </div>
        <p className="text-white/15 text-[11px] tracking-[0.3em] uppercase">© {new Date().getFullYear()} · All Rights Reserved</p>
      </footer>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-white text-black shadow-lg z-40"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1, y: -3, boxShadow: '0 0 25px rgba(255,255,255,0.4)' }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
