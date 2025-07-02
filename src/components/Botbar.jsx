import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiZap } from "react-icons/fi";

const Botbar = () => {
  return (
    <div className="w-full h-[2.5vh] fixed bottom-0 bg-[#007acc] text-white flex items-center justify-between px-4 py-1 text-xs font-mono z-50">
      {/* Left Side: Status or Cool Stuff */}
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1">
          <FiZap className="animate-[pulse_2s_ease-in-out_infinite]" /> Zen Mode: On
        </span>
 
      </div>

  
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/vednashday"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline flex items-center gap-1"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/vednashday"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline flex items-center gap-1"
        >
          <FaLinkedin /> LinkedIn
        </a>

      </div>
    </div>
  );
};

export default Botbar;
