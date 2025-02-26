import React from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Camera, Code, Briefcase, Send, Menu, X ,FileUp} from 'lucide-react';
import { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const openImage = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className="fixed w-full z-50 backdrop-blur-sm bg-white/10 dark:bg-gray-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Portfolio
              </span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <NavLink href="#home" onClick={closeMobileMenu}>Home</NavLink>
                <NavLink href="#about" onClick={closeMobileMenu}>About</NavLink>
                <NavLink href="#projects" onClick={closeMobileMenu}>Projects</NavLink>
                <NavLink href="#gallery" onClick={closeMobileMenu}>Gallery</NavLink>
                <NavLink href="#services" onClick={closeMobileMenu}>Services</NavLink>
                <NavLink href="#contact" onClick={closeMobileMenu}>Contact</NavLink>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                  {darkMode ? (
                    <Sun className="h-5 w-5 text-gray-100" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-900" />
                  )}
                </button>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 mr-2"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5 text-gray-100" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-900" />
                )}
              </button>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-gray-400 hover:text-white focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-md bg-white/10 dark:bg-gray-900/90">
            <MobileNavLink href="#home" onClick={closeMobileMenu}>Home</MobileNavLink>
            <MobileNavLink href="#about" onClick={closeMobileMenu}>About</MobileNavLink>
            <MobileNavLink href="#projects" onClick={closeMobileMenu}>Projects</MobileNavLink>
            <MobileNavLink href="#gallery" onClick={closeMobileMenu}>Gallery</MobileNavLink>
            <MobileNavLink href="#services" onClick={closeMobileMenu}>Services</MobileNavLink>
            <MobileNavLink href="#contact" onClick={closeMobileMenu}>Contact</MobileNavLink>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img
              src="photo/IMG_2722 copy.svg"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
            />
            <h1 className={`text-4xl sm:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Hrushikesh Pandarkar
            </h1>
            <p className={`mt-4 text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Electronics & Telecommunication Engineering Student
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <SocialLink href="https://github.com/hrushi1280" icon={<Github />} />
              <SocialLink href="https://www.linkedin.com/in/hrushikeshpandarkar/" icon={<Linkedin />} />
              <SocialLink href="mailto:hrushipandarkar@gmail.com" icon={<Mail />} />
            </div>
          </div>
        </div>
      </section>
      <div className={`flex flex-col items-center justify-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
      <SocialLink href="https://drive.google.com/file/d/1WtgySly7rV97LzgqqrQXV7ZcEuU3R1sV/view?usp=sharing"  icon={<FileUp/>} />
      <h1 className='font-xl'>See Resume</h1>
      </div>
      

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                My Journey
              </h3>
              <p className="mb-4">
              As an Electronics and Telecommunication engineering student, 
              I am passionate about AI, web development, and embedded systems.
               I love working on real-world projects that combine innovation and technology to create meaningful solutions.
              </p>
              <p>
              Currently, I am exploring Data Structures and Algorithms to strengthen my problem-solving skills. 
              With a keen interest in research and development, I aim to bridge the gap between electronics and intelligent systems.
              </p>
            </div>
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SkillCard title="Web Development" skills={['HTML', 'CSS', 'JavaScript','Flask']} darkMode={darkMode} />
                <SkillCard title="Backend" skills={['Node.js', 'Python', 'PostgreSQL']} darkMode={darkMode} />
                <SkillCard title="Artificial Intelligence & Machine Learning" skills={['Python', 'OpenCV', 'AI-powered Web Applications']} darkMode={darkMode} />
                <SkillCard title="Embedded Systems & Electronics" skills={['Microcontrollers', 'Sensors & Circuit Design', 'IoT-based Applications']} darkMode={darkMode} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="AI-Powered Web Application"
              description="A Flask-powered AI web app that leverages YOLOv8 and OpenCV for real-time detection of Lumpy Skin Disease in cattle."
              image="/photo/cattle  copy.svg"
              link="https://www.linkedin.com/posts/hrushikeshpandarkar_lsd-cattle-detection-website-activity-7238569228750979072-2noc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYoKpEBShLBmguBS2SL-IAIaD-2SZTiHao"
              darkMode={darkMode}
            />
            <ProjectCard
              title="AI-Enhanced Traffic Management System"
              description="AI-powered traffic management system using YOLOv8, Python, and OpenCV for real-time vehicle detection and congestion optimization."
              image="/photo/traffic_light_006 copy.svg"
              link="https://github.com/hrushi1280/PBLM_project"
              darkMode={darkMode}
            />
            <ProjectCard
              title="Blood Pressure Monitoring System"
              description="An Arduino-based healthcare device using the BMP280 sensor and oscillometric method for accurate blood pressure measurement. Features automated cuff inflation, real-time LCD display, and cost-effective design"
              image="/photo/blood pressure copy.svg"
              link="https://github.com"
              darkMode={darkMode}
            />
            <ProjectCard
              title="Upcoming Project"
              description="Exciting projects coming soon! Stay tuned for innovative solutions in AI, automation, and smart technology. 🚀"
              image="/photo/upcoming copy.svg"
              link="https://github.com"
              darkMode={darkMode}
            />

          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <GalleryImage
              src="/photo/fiest copy.jpeg"
              alt="Photography work"
              darkMode={darkMode}
              onClick={openImage}
            />
            <GalleryImage
              src="/photo/second copy.jpeg"
              alt="Design work"
              darkMode={darkMode}
              onClick={openImage}
            />
            <GalleryImage
              src="/photo/third copy.jpeg"
              alt="Third image"
              darkMode={darkMode}
              onClick={openImage}
            />
            <GalleryImage
              src="/photo/fourth copy.jpeg"
              alt="Art work"
              darkMode={darkMode}
              onClick={openImage}
            />
            <GalleryImage
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600"
              alt="Art work"
              darkMode={darkMode}
              onClick={openImage}
            />
            <GalleryImage
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600"
              alt="Art work"
              darkMode={darkMode}
              onClick={openImage}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Code className="w-8 h-8" />}
              title="Web Development"
              description="Custom websites and web applications built with modern technologies"
              darkMode={darkMode}
            />
            <ServiceCard
              icon={<Camera className="w-8 h-8" />}
              title="UI/UX Design"
              description="User-centered design solutions that enhance user experience"
              darkMode={darkMode}
            />
            <ServiceCard
              icon={<Briefcase className="w-8 h-8" />}
              title="Consulting"
              description="Technical consulting and architecture planning for your projects"
              darkMode={darkMode}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get in Touch
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-7xl w-full">
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
    >
      {children}
    </a>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
    >
      <span className="text-gray-600 dark:text-gray-300">{icon}</span>
    </a>
  );
}

function SkillCard({ title, skills, darkMode }: { title: string; skills: string[]; darkMode: boolean }) {
  return (
    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
      <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h4>
      <ul className={`space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, image, link, darkMode }: { 
  title: string;
  description: string;
  image: string;
  link: string;
  darkMode: boolean;
}) {
  return (
    <div className={`rounded-lg overflow-hidden transition-transform hover:scale-105 ${darkMode ? 'bg-gray-900' : 'bg-white shadow-lg'}`}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
        >
          View Project <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

function GalleryImage({ src, alt, darkMode, onClick }: { 
  src: string;
  alt: string;
  darkMode: boolean;
  onClick: (src: string) => void;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg group ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'} cursor-pointer`}
      onClick={() => onClick(src)}
    >
      <img src={src} alt={alt} className="w-full h-64 object-cover transition-transform group-hover:scale-110" />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
        <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description, darkMode }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  darkMode: boolean;
}) {
  return (
    <div className={`p-6 rounded-lg text-center transition-transform hover:scale-105 ${darkMode ? 'bg-gray-900' : 'bg-white shadow-lg'}`}>
      <div className={`inline-block p-3 rounded-full mb-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <span className={darkMode ? 'text-white' : 'text-gray-900'}>{icon}</span>
      </div>
      <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{description}</p>
    </div>
  );
}

export default App;