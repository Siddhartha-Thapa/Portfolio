"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "YOOCHAT",
      role: "Full Stack Developer",
      desc: "Real-time chat application with a futuristic UI, built using Socket.io, Node.js, and a modern frontend.",
      link: "https://github.com/Siddhartha-Thapa/Chat-application",
      imageurl: "../public/p1.png",
    },
    {
      title: "Nepali Movie Recommender",
      role: "Full Stack / AI Developer",
      desc: "Web application for recommending Nepali movies. Supports user auth, personalized suggestions, and social feeds.",
      link: "https://github.com/Siddhartha-Thapa/nepali_movie_recommender/tree/main",
    },
    {
      title: "Unko Sansar",
      role: "Full Stack Developer",
      desc: "E-commerce platform for crochet enthusiasts. Includes a bespoke admin panel for business owners.",
      link: "https://github.com/Siddhartha-Thapa/unko-sansar",
    },
    {
      title: "Bilingual Subtitle Generator",
      role: "AI/ML Developer",
      desc: "Fine-tuned Nepali whisper model for transcription and bilingual subtitle generation via Streamlit UI.",
      link: "#",
    }
  ];

  return (
    <section className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-5xl font-bold tracking-tight text-white mb-4">Selected Work</h3>
          <p className="text-white/50 text-xl font-light mb-16 max-w-2xl">

          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.a
              href={proj.link}
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative flex flex-col justify-end h-96 p-8 rounded-2xl overflow-hidden shadow-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-500"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 transition-opacity duration-700 z-0 pointer-events-none blur-3xl" />

              <div className="relative z-20 flex flex-col gap-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                <span className="text-sm uppercase tracking-widest text-white/50">{proj.role}</span>
                <h4 className="text-3xl font-semibold text-white">{proj.title}</h4>
                <p className="text-white/80 font-light mt-2">{proj.desc}</p>
              </div>

              {/* Arrow Icon */}
              <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 group-hover:-translate-y-2 transition-all duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 19L19 5M19 5V18.5M19 5H5.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
