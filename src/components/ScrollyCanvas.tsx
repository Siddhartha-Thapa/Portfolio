"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120; // 000 to 119

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map progress (0-1) to frame index (0-119)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload all 120 images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Pad to 3 digits e.g. 000, 001
      const indexStr = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${indexStr}_delay-0.066s.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  // Use framer motion to trigger a canvas redraw when scrollYProgress changes
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (images.length === FRAME_COUNT && canvasRef.current) {
      renderFrame(Math.floor(latest));
    }
  });

  const renderFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    
    // Logic for object-fit: cover on canvas
    const img = images[index];
    if (!img) return;

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  };

  useEffect(() => {
    if (images.length === FRAME_COUNT) {
      renderFrame(0);
    }
    
    const handleResize = () => {
      if (images.length === FRAME_COUNT) {
        renderFrame(Math.floor(frameIndex.get()));
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas is absolutely positioned behind the children */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
        
        {/* Loading State Overlay */}
        {images.length < FRAME_COUNT && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50 transition-opacity duration-1000">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
              <p className="mt-4 text-white/50 text-sm tracking-widest uppercase">Loading Assets</p>
            </div>
          </div>
        )}

        {/* Overlay Component which receives the scroll value down */}
        <div className="absolute inset-0 z-10 w-full h-full">
          <Overlay progress={scrollYProgress} />
        </div>
      </div>
    </div>
  );
}
