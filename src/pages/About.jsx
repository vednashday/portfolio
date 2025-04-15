import { FaMusic, FaCode,  FaMapMarkerAlt, FaPenNib } from "react-icons/fa";
import { HiOutlineHandRaised } from "react-icons/hi2";

const About = () => {
  return (
    <><div className=" text-white text-lg p-6 w-[80%] rounded-lg font-mono text-sm">
          <p className=" flex items-center gap-1">
              // Hi, I'm Vedansh Pratap Singh
        
          </p>
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
              <span className="text-amber-300">"I'm Vedansh Pratap Singh, a B.Tech Software Engineering student from Delhi Technological University, currently in my 6th semester. I'm passionate about Web development, constantly building and learning through real-world projects. Known for being focused, curious, and self-driven, I enjoy creating clean, user-friendly interfaces and thrive in environments where I can keep learning and growing."</span>,
          </p>
          
          

          <p>&#125;;</p>

          <br />
          <p>
              <span className="text-purple-400">export default</span>{" "}
              <span className="text-blue-400">aboutMe</span>;
          </p>

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
        
      
        <div className="mt-4 text-zinc-400 animate-[pulse_1s_ease-in-out_infinite]">|</div>
      </div>
      
          </>
  );
};

export default About;
