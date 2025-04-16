import { useState } from 'react';
import projects from '../data/projects.js';
import ProjectModal from '../components/ProjectModal';
import { motion } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <h2 className="text-3xl text-[#569CD6] mb-6 inline-block w-full">// Projects.jsx</h2>

      <section className="w-full p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-[#252526] text-sm rounded-lg border border-[#3c3c3c] hover:border-[#569CD6] transition duration-300 cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.5, duration: 0.3 }}
            onClick={() => openModal(project)}
          >
            <div
              className="bg-center bg-no-repeat bg-cover w-full h-64 "
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="p-2 text-white bg-gradient-to-b from-transparent to-black/40">
              <h3 className="text-sm font-semibold">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </section>

      <ProjectModal isOpen={isOpen} onClose={closeModal} project={selectedProject} />
    </>
  );
};

export default Projects;
