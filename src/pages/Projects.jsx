import { useState } from "react";
import projects from "../data/projects.js";
import ProjectModal from "../components/ProjectModal";
import { motion } from "framer-motion";

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
      <h2 className="text-3xl text-[#569CD6] mb-6 inline-block w-full">
        // Projects.jsx
      </h2>

      <section className="w-full p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-[#252526] text-sm rounded-lg border border-[#3c3c3c] cursor-pointer overflow-hidden hover:shadow-[0_0_25px_#569CD6]/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.2 }}
            onClick={() => openModal(project)}
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;

              const rotateX = ((y - centerY) / centerY) * -15;
              const rotateY = ((x - centerX) / centerX) * 15;

              card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.06)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
            }}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
              transition: "transform 0.2s ease",
            }}
          >
            <div
              className="bg-center bg-no-repeat bg-cover w-full h-54 transition-transform duration-300"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="p-2 text-white bg-gradient-to-b from-transparent to-black/40">
              <h3 className="text-sm font-semibold text-[#9CDCFE] group-hover:text-[#569CD6] transition duration-300">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </section>

      <ProjectModal
        isOpen={isOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </>
  );
};

export default Projects;
