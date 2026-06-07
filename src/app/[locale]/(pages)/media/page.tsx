"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { motion, AnimatePresence } from "framer-motion";

export default function MediaVideosPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    "/vedio.mp4",
    "/vedio.mp4",
    "/vedio.mp4",
    "/vedio.mp4",
    "/vedio.mp4",
    "/vedio.mp4",
  ];

  return (
    <section className="bg-[#0f0f0f] text-white pb-28">

      {/* Breadcrumb */}
      <div className="bg-black">
        <Breadcrumb items={[{ label: "Media Videos", href: "/media" }]} />
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

        {videos.map((video, i) => (
<div
  key={i}
  onClick={() => setActiveVideo(video)}
  className="cursor-pointer rounded-2xl overflow-hidden bg-black group relative"
>

  {/* Thumbnail instead of video */}
  <img
    src="/product1.jpg"
    alt="video preview"
    className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
  />

  {/* overlay */}
  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
    <div className="px-4 py-2 bg-[#e0bc80] text-black rounded-full font-medium">
      ▶ Play Video
    </div>
  </div>

</div>
        ))}

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl"
            >
              <video
                controls
                autoPlay
                className="w-full rounded-2xl shadow-2xl"
              >
                <source src={activeVideo} type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}