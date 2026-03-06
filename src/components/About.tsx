"use client";

import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { category: "Languages", items: ["Python", "JavaScript", "C", "C++", "SQL"] },
    { category: "Web", items: ["Node.js", "Express.js", "React", "Streamlit"] },
    { category: "Databases", items: ["MongoDB", "SQL"] },
    { category: "Tools & Version Control", items: ["Git", "GitHub", "Docker"] }
  ];

  return (
    <section className="relative z-20 bg-[#121212] min-h-screen py-32 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Left Column: About & Education */}
        <div className="flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-4xl font-bold tracking-tight text-white mb-6">About Me</h3>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              I love solving problems and building things through code. I enjoy exploring new technologies and continuously enhancing my skills to build high-quality, scalable applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-4xl font-bold tracking-tight text-white mb-6">Education</h3>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-white">Bachelor in Computer Engineering</h4>
              <p className="text-white/60 mb-4 tracking-wide text-sm mt-1 uppercase">May 2022 - May 2026</p>
              <p className="text-white/80 font-light">
                National College of Engineering, Tribhuvan University
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col"
        >
          <h3 className="text-4xl font-bold tracking-tight text-white mb-8">Technical Snapshot</h3>
          <div className="flex flex-col gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx}>
                <h5 className="text-white/50 text-sm uppercase tracking-widest mb-4 border-b border-white/10 pb-2">
                  {skillGroup.category}
                </h5>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-full text-white/90 text-sm font-light"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
