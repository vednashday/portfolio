import { Dialog } from '@headlessui/react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateX: -15,
      y: 60,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 14 },
    },
    exit: {
      opacity: 0,
      scale: 0.6,
      rotateX: 15,
      y: 60,
      transition: { duration: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Clickable wrapper to detect outside click */}
          <div
            className="fixed inset-0 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                onClose();
              }
            }}
          >
            {/* Modal Panel */}
            <Dialog.Panel
              as={motion.div}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-md rounded-xl bg-white/10 backdrop-blur-lg 
                         border border-white/20 dark:border-zinc-700 p-6 space-y-5 
                         shadow-2xl text-white dark:text-zinc-200"
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1200,
              }}
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <Dialog.Title className="text-xl font-bold text-white">
                  {project.title}
                </Dialog.Title>
                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform text-white"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                  )}
                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform text-white"
                    >
                      <FaLink className="text-2xl" />
                    </a>
                  )}
                </div>
              </div>

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-48 object-cover border border-white/20"
              />

              {/* Description */}
              <p className="text-sm text-zinc-200">{project.description}</p>

              {/* Tech Stack */}
              {project.techStack && (
                <p className="text-sm text-zinc-300">
                  <strong className="text-white">Tech Stack:</strong>{' '}
                  {project.techStack.join(', ')}
                </p>
              )}

              {/* Role */}
              {project.role && (
                <p className="text-sm text-zinc-300">
                  <strong className="text-white">Role:</strong> {project.role}
                </p>
              )}

              {/* Challenges */}
              {project.challenges && (
                <p className="text-sm text-zinc-300">
                  <strong className="text-white">Challenges:</strong>{' '}
                  {project.challenges}
                </p>
              )}
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
