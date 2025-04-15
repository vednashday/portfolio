import { useState } from 'react';
import projects from '../data/projects.js';
import ProjectModal from '../components/ProjectModal'; // <-- create this component


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
    <section className="w-full p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {projects.map((project, index) => (
        <div
          key={index}
          onClick={() => openModal(project)}
          className="rounded-lg overflow-hidden relative bg-center bg-no-repeat bg-cover w-full h-64 hover:scale-105 transition cursor-pointer"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute bottom-0 w-full h-[15%] bg-gradient-to-b from-transparent to-black/40 text-white px-2 flex flex-col justify-center">
            <h3 className="text-sm font-semibold">{project.title}</h3>
          </div>
        </div>
      ))}

      <ProjectModal isOpen={isOpen} onClose={closeModal} project={selectedProject} />
    </section>
  );
};


export default Projects;
