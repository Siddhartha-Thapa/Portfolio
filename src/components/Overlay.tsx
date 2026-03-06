"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Section 1: 0% scroll
  const opacity1 = useTransform(progress, [0, 0.15], [1, 0]);
  const y1 = useTransform(progress, [0, 0.15], [0, -100]);

  // Section 2: 30% scroll
  const opacity2 = useTransform(progress, [0.2, 0.3, 0.35, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.2, 0.45], [100, -100]);

  // Section 3: 60% scroll
  const opacity3 = useTransform(progress, [0.5, 0.6, 0.65, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.5, 0.75], [100, -100]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {/* Section 1: Center */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10"
      >
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 text-white drop-shadow-xl text-center">
          Siddhartha <br /><span className="text-white/80">Thapa.</span>
        </h1>
        <p className="text-xl md:text-3xl font-light text-white/80 tracking-wide drop-shadow-lg text-center">
          Full Stack Developer
        </p>
      </motion.div>

      {/* Section 2: Left aligned */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start p-8 md:p-24 z-10"
      >
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white max-w-2xl drop-shadow-xl leading-tight">
          Final Year Computer<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 rounded-lg via-purple-500 to-white">Engineering Student</span>
        </h2>
      </motion.div>

      {/* Section 3: Right aligned */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end p-8 md:p-24 z-10"
      >
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white max-w-2xl text-right drop-shadow-xl leading-tight">
          Building<br />
          <span className="font-light italic text-white/70">scalable apps</span> & <br />
          <span className="font-light italic text-white/70">exploring AI/ML.</span>
        </h2>
      </motion.div>
    </div>
  );
}
