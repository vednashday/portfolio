import { Dialog } from '@headlessui/react';
import { FaGithub, FaLink } from 'react-icons/fa';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 space-y-4 shadow-xl">
          <div className="flex w-full p-2 justify-between">
            <Dialog.Title className="text-xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </Dialog.Title>
            <div className="flex gap-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  <FaGithub className="text-2xl" />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  <FaLink className="text-2xl" />
                </a>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full h-48 object-cover"
            />
            <p className="text-sm text-zinc-700 dark:text-zinc-300">{project.description}</p>
            
            {/* Display tech stack if available */}
            {project.techStack && (
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                <strong>Tech Stack:</strong> {project.techStack.join(', ')}
              </p>
            )}

            {/* Display Role */}
            {project.role && (
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                <strong>Role:</strong> {project.role}
              </p>
            )}

            {/* Display Challenges */}
            {project.challenges && (
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                <strong>Challenges:</strong> {project.challenges}
              </p>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ProjectModal;
