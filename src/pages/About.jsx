import { FaMusic, FaCode, FaMapMarkerAlt, FaPenNib } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className="text-white p-4 sm:p-6 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[60%] rounded-lg font-mono text-xs sm:text-sm md:text-base">
      <h2 className="text-xl sm:text-2xl text-[#569CD6] mb-6 sm:mb-10">
        // Hi, I'm Vedansh Pratap Singh
      </h2>

      <p className="flex items-center gap-1 text-green-600">
        // A frontend dev who loves creative development and good music
      </p>

      <br />

      <p>
        <span className="text-purple-400">const</span>{" "}
        <span className="text-blue-400">aboutMe</span> = &#123;
      </p>

      <p className="ml-4">
        <span className="text-cyan-400">name</span>:{" "}
        <span className="text-amber-300">"Vedansh Pratap Singh"</span>,
      </p>
      <p className="ml-4">
        <span className="text-cyan-400">role</span>:{" "}
        <span className="text-amber-300">"Software Developer"</span>,
      </p>
      <p className="ml-4">
        <span className="text-cyan-400">Bio</span>:{" "}
        <span className="text-amber-300">
          "
          <Typewriter
            words={[
              "I'm a Software Engineering student at DTU.",
              "I love building web apps and clean UI.",
              "I'm always learning and growing.",
              "Focused. Curious. Self-driven.",
            ]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={60}
            delaySpeed={1500}
          />
          "
        </span>
        ,
      </p>

      <p>&#125;;</p>

      <br />
      <p>
        <span className="text-purple-400">export default</span>{" "}
        <span className="text-blue-400">aboutMe</span>;
      </p>

      <div className="mt-6">
        <h3 className="text-lg sm:text-xl text-[#569CD6] mb-4">Education</h3>
        <div className="text-white">
          <p className="font-semibold">Bachelor of Technology (B.Tech)</p>
          <p className="font-semibold">Software Engineering</p>
          <p className="text-zinc-400">
            Delhi Technological University (DTU), 2022 - 2026
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-zinc-400">
        <span className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-blue-400" /> India
        </span>
        <span className="flex items-center gap-2">
          <FaCode className="text-green-400" /> MERN Developer
        </span>
        <span className="flex items-center gap-2">
          <FaPenNib className="text-purple-400" /> UI Design
        </span>
        <span className="flex items-center gap-2">
          <FaMusic className="text-pink-400" /> Music Lover
        </span>
      </div>
    </div>
  );
};

export default About;
