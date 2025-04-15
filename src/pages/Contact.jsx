import { HiMail } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="text-white p-6 w-full mx-auto h-full flex flex-col items-start space-y-8 font-mono">
      <h2 className="text-3xl text-[#569CD6]">// Contact.jsx</h2>

      <p className="text-lg text-green-400">
        // Let's connect! Whether it's about work, ideas, or just a quick hello — I'm always up for a chat.
      </p>

      <div className="flex gap-6">
        {/* Download Resume */}
        <a
          href="../assets/Resume-vedansh.pdf"
          download
          className="flex items-center gap-2 bg-[#0e639c] hover:bg-[#1177bb] px-4 py-2 rounded-lg text-white transition duration-300"
        >
          <FaDownload />
          Download Resume
        </a>

        {/* Contact via Email */}
        <a
          href="mailto:vedanshpsingh@gmail.com"
          className="flex items-center gap-2 border border-[#3c3c3c] hover:border-[#569CD6] px-4 py-2 rounded-lg transition duration-300"
        >
          <HiMail />
          Send Email
        </a>
      </div>

      <div className="text-zinc-400 animate-[pulse_1s_ease-in-out_infinite]">|</div>
    </div>
  );
};

export default Contact;
