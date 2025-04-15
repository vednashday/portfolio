import React from "react";
import skills from "../data/skillsData";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="min-h-screen bg-[#1e1e1e] text-white px-6 py-10 font-mono">
      <h2 className="text-3xl text-[#569CD6] mb-10">// Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((group, index) => (
          <div key={index}>
            <h3 className="text-xl text-[#4EC9B0] mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#252526] text-sm px-4 py-2 rounded-lg border border-[#3c3c3c] hover:border-[#569CD6] transition duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
