import { Dialog } from '@headlessui/react';
import { FaGithub, FaLink } from 'react-icons/fa';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 space-y-4 shadow-xl">
          <div className='flex w-full p-2 flex-row justify-between'>
          <Dialog.Title className="text-xl font-bold">{project.title}</Dialog.Title>
          <div className='flex flex-row gap-2'>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              <FaGithub className='text-2xl' />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              <FaLink className='text-2xl' />
            </a>
          )}
          </div>
          
          </div>
          
          <img src={project.image} alt={project.title} className="rounded-lg" />
          <p className="text-sm text-zinc-700 dark:text-zinc-300">{project.description}</p>

          
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ProjectModal;
