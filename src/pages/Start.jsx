import { FaLinkedin, FaGithub } from "react-icons/fa";


const Start = () => {
    return (
        <div className="h-full w-full flex flex-row justify-center items-center gap-50">
            <div className="h-[65%] w-[40%] ">

                <h1 className="text-5xl tracking-tighter">Vedansh Pratap Singh</h1>
                <h4 className="text-2xl opacity-70">Software Engineer</h4>
                <p className="text-lg text-gray-400 mt-4">
                    I'm a software engineer passionate about building beautiful, performant web apps.
                    I specialize in React, Node.js, and I love creating developer-centric experiences.
                </p>
                <p className="text-md font-mono text-purple-300 mt-4">// tech stack:</p>
                <ul className="list-disc list-inside text-gray-300 text-md">
                    <li>React, Redux, Vite</li>
                    <li>Node.js, Express</li>
                    <li>MongoDB, Firebase</li>
                    <li>Tailwind CSS, Figma</li>
                </ul>
                <a href="https://vednashday-portfolio.vercel.app/projects">
                <button className="mt-6 px-4 py-2 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black transition-all rounded">
                    See Projects
                </button>
                </a>
              





            </div>
            <div className="h-[45%] w-[20%] flex flex-col gap-2">
                <h3 className="text-4xl">Connect?</h3>
                
                <div className="w-[80%] h-[15%] bg-zinc-800 text-center border-b border-blue-500 flex flex-row px-3 items-center hover:bg-zinc-900"><a href="https://www.linkedin.com/in/vednashday/" target="_blank" className="flex flex-row gap-5 items-center "><FaLinkedin /> LinkedIn</a></div>
                <div className="w-[80%] h-[15%] bg-zinc-800 text-center border-b border-blue-500 flex flex-row px-3 items-center hover:bg-zinc-900"><a href="https://github.com/vednashday" target="_blank" className="flex flex-row gap-5 items-center"><FaGithub /> GitHub</a></div>



            </div>

        </div>

    );
};

export default Start;
