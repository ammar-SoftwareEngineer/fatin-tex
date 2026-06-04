"use client";

import { useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";

export default function MediaVideosPage() {
const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    "/video.mp4",
    "/video.mp4",
    "/video.mp4",
    "/video.mp4",
    "/video.mp4",
    "/video.mp4",
  ];

  return (
    <section className="bg-[#0f0f0f] text-white pb-28">

      {/* Breadcrumb */}
      <div className="bg-black">
        <Breadcrumb
          items={[
            { label: "Media Videos", href: "/media" },
          ]}
        />
      </div>


      {/* VIDEOS GRID */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 mt-10">

        {videos.map((video, i) => (
          <div
            key={i}
            onClick={() => setActiveVideo(video)}
            className="cursor-pointer rounded-2xl overflow-hidden bg-black group relative"
          >
            <video
              className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
              muted
              playsInline
            >
              <source src={video} type="video/mp4" />
            </video>

            {/* overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-lg font-semibold">
                Play Video
              </span>
            </div>
          </div>
        ))}

      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
        >
          <div className="w-full max-w-4xl">
            <video controls autoPlay className="w-full rounded-2xl">
              <source src={activeVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}

    </section>
  );
}