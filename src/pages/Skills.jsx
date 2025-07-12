import React from "react";
import skills from "../data/skillsData";
import { motion } from "framer-motion";

const Skills = () => (
  <section className="min-h-screen bg-[#1e1e1e] text-white px-6 py-10 font-mono">
    <h2 className="text-3xl text-[#569CD6] mb-10">// Skills</h2>

    {/* spotlight CSS */}
    <style>{`
      .skill-badge {
        position: relative;
        overflow: hidden;
        cursor: none;
      }
      .skill-badge::before {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        /* --alpha controls visibility (0 = off) */
        background: radial-gradient(
          160px at var(--x, 50%) var(--y, 50%),
          rgba(86, 156, 214, var(--alpha, 0)) 0%,
          transparent 50%
        );
        transition: background 0.06s;
      }
    `}</style>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skills.map((group, gIdx) => (
        <div key={gIdx}>
          <h3 className="text-xl text-[#4EC9B0] mb-4">{group.category}</h3>

          <div className="flex flex-wrap gap-4">
            {group.skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="skill-badge text-sm px-4 py-2 rounded-sm border border-[#333] bg-[#252526] text-white
                           transition-transform duration-150 ease-out"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: idx * 0.03, duration: 0.25 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty("--x", `${x}px`);
                  e.currentTarget.style.setProperty("--y", `${y}px`);
                  e.currentTarget.style.setProperty("--alpha", "0.35");
                }}
                onMouseLeave={(e) => {
                  // hide the light
                  e.currentTarget.style.setProperty("--alpha", "0");
                }}
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

export default Skills;
