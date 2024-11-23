import React from 'react';
import { Facebook, Linkedin, Github, Mail } from 'lucide-react';

const PersonalWebsite = () => {
      
const projects = [
  {
    id: 1,
    title: "Orderly",
    description: "A web application for Amazon sellers to help automize workflow.",
    image: "/orderly.png",
  },
  {
    id: 2,
    title: "Personal Website",
    description: "Built the front and back end of my personal website in React",
    image: "/personalwebsite.png",
  },
  {

    id: 3,
    title: "project Three",
    description: "bal blah",
    image: "/img.png",
  },

];
  
  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
  {/* Header Section */}
  <header className="bg-white shadow-md">
    <div className="flex items-center justify-between w-full px-8 py-6">
      <h1 className="text-2xl font-bold text-gray-800">Enzo Weiss</h1>
      <nav className="space-x-6 mr-4">
        <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
        <a href="#skills" className="text-gray-600 hover:text-blue-600">Skills</a>
        <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
        <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
      </nav>
    </div>
  </header>



      {/* Hero Section */}
      <section className="flex-grow flex items-center bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 flex items-center">
          <div className="w-1/2 pr-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Hello, I'm Enzo Weiss</h2>
            <p className="text-xl text-gray-600 mb-6">
              A Computer Scientist with a Minor in Mathematics at San Diego State University.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Get In Touch
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="w-62 h-62">
            <img 
              src="/vantine_linked_in_2718558.jpg" 
              alt="Profile" 
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="text-center max-w-3xl mx-auto text-gray-600">
            <p>
              I am passionate about entrepreneurship, innovation, and creativity, 
              constantly driven to take on new challenges and turn ideas into reality. 
              Through my love for computer science, I channel these passions to create solutions 
              that inspire progress and push boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="flex justify-center flex-wrap gap-4">
            {['React', 'JavaScript', 'Java', 'Node.js', 'Design', 'Web Development'].map((skill) => (
              <span 
                key={skill} 
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
              >
                <img src={project.image} alt={project.title} className = "w-full"/>
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600">
                   {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/*Links Section*/}
    <section id="links" className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Links</h2>
    <div className="flex justify-center space-x-20">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
        <Facebook className="text-gray-800 w-8 h-8" />
      </a>
      <a href="https://www.linkedin.com/in/enzo-weiss-024582295/" target="_blank" rel="noopener noreferrer">
        <Linkedin className="text-gray-800 w-8 h-8" />
         </a>
         <a href="https://github.com/enzoweiss21" target="_blank" rel="noopener noreferrer">
        <Github className="text-gray-800 w-8 h-8" />
        </a>
         <a href="mailto:enzoweiss2014@gmail.com">
       <Mail className="text-gray-800 w-8 h-8" />
            </a>
    </div>
  </div>
</section>



      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
          <div className="max-w-md mx-auto">
            <form className="bg-white shadow-md rounded-lg p-8">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-3 py-2 border rounded-lg" 
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 border rounded-lg" 
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  className="w-full px-3 py-2 border rounded-lg" 
                  rows="4" 
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2024 Enzo Weiss. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-white hover:text-blue-400" />
            </a>
            <a href="https://www.linkedin.com/in/enzo-weiss-024582295/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-white hover:text-blue-400" />
            </a>
            <a href="https://github.com/enzoweiss21" target="_blank" rel="noopener noreferrer">
              <Github className="text-white hover:text-blue-400" />
            </a>
            <a href="mailto:enzoweiss2014@gmail.com">
              <Mail className="text-white hover:text-blue-400" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;
