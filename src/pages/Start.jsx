import { FaLinkedin, FaGithub } from "react-icons/fa";

const Start = () => {
    return (
        <div className="h-full w-full flex flex-col md:flex-row justify-center items-center gap-10 p-6">
            {/* Left Section */}
            <div className="w-full justify-center items-center gap-10 p-6 md:w-[50%]">
                <h1 className="text-4xl md:text-5xl tracking-tighter">
                    Vedansh Pratap Singh
                </h1>
                <h4 className="text-xl md:text-2xl opacity-70">
                    Software Engineer
                </h4>

                <p className="text-base md:text-lg text-gray-400 mt-4">
                    I'm a software engineer passionate about building beautiful, performant web apps.
                    I specialize in the MERN stack and love creating developer-centric experiences.
                </p>

                
            </div>

            {/* Right Section */}
            <div className="w-full md:w-[25%] flex flex-col gap-4">
                <h3 className="text-3xl md:text-4xl">Connect?</h3>

                <a
                    href="https://www.linkedin.com/in/vednashday/"
                    target="_blank"
                    className="w-full bg-zinc-800 border-b border-blue-500 flex items-center gap-4 px-4 py-3 rounded-md hover:bg-zinc-900 transition"
                >
                    <FaLinkedin className="text-xl" /> 
                    <span>LinkedIn</span>
                </a>

                <a
                    href="https://github.com/vednashday"
                    target="_blank"
                    className="w-full bg-zinc-800 border-b border-blue-500 flex items-center gap-4 px-4 py-3 rounded-md hover:bg-zinc-900 transition"
                >
                    <FaGithub className="text-xl" />
                    <span>GitHub</span>
                </a>
            </div>
        </div>
    );
};

export default Start;
