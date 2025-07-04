import { HiMail } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="text-white p-6 w-full mx-auto h-full flex flex-col items-start space-y-8 font-mono">
      <h2 className="text-3xl text-[#569CD6]">// Contact.jsx</h2>

      <p className="text-lg text-green-400 max-w-[600px]">
        // Let's connect! Whether it's about work, ideas, or just a quick hello — I'm always up for a chat.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        {/* Download Resume */}
        <a
          href="https://drive.google.com/file/d/11UXiO8rRVp0SCxzIKpcOl1Mi8eEHRpEf/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#0e639c] hover:bg-[#1177bb] px-4 py-2 rounded-lg text-white transition duration-300"
        >
          <FaDownload />
          <span>Download Resume</span>
        </a>

        {/* Contact via Email */}
        <a
          href="mailto:vedanshpsingh@gmail.com"
          className="flex items-center gap-2 border border-[#3c3c3c] hover:border-[#569CD6] px-4 py-2 rounded-lg transition duration-300"
        >
          <HiMail />
          <span>Send Email</span>
        </a>
      </div>

      <div className="text-zinc-400 animate-[pulse_1s_ease-in-out_infinite]">|</div>
    </div>
  );
};

export default Contact;
