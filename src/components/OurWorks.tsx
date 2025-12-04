import React, { useState } from "react";
import outer from "@/assets/outer.png";
import reel from "@/assets/reel_1.mp4";
import reel2 from "@/assets/reel_2.mp4";
import reel3 from "@/assets/reel3.mp4";
import reel4 from "@/assets/reel4.mp4";
import img1 from "@/assets/1img.jpeg";
import img2 from "@/assets/2img.jpg";
import img3 from "@/assets/3img.jpg";
import img4 from "@/assets/birthday-event.jpg";
import img5 from "@/assets/image_1.jpg";
import img6 from "@/assets/image_3.jpg";
import img7 from "@/assets/image_4.jpg";
import img8 from "@/assets/img7.jpg";
import img9 from "@/assets/img8.jpg";
import img10 from "@/assets/img9.jpg";

interface WorkItem {
  id: number;
  type: "image" | "video";
  src: string;
  thumb?: string;
}

const works: WorkItem[] = [
  { id: 1, type: "video", src: reel },
  { id: 2, type: "video", src: reel2 },
  { id: 3, type: "video", src: reel3 },
  { id: 4, type: "video", src: reel4 },

  { id: 5, type: "image", src: outer },
  { id: 6, type: "image", src: img1 },
  { id: 7, type: "image", src: img2 },
  { id: 8, type: "image", src: img3 },
  { id: 9, type: "image", src: img4 },
  { id: 10, type: "image", src: img5 },
  { id: 11, type: "image", src: img6 },
  { id: 12, type: "image", src: img7 },
  { id: 13, type: "image", src: "/image_9.jpg" },
  { id: 14, type: "image", src: img8 },
  { id: 15, type: "image", src: img9 },
  { id: 16, type: "image", src: "/image_3.jpg" },
  { id: 16, type: "image", src: "/image_13.jpg"},
  { id: 16, type: "image", src: "img1.jpg"},
  { id: 16, type: "image", src:"img2.jpg"},
  { id: 16, type: "image", src: "/image_8.jpg"},
  { id: 16, type: "image", src: "/image_11.jpg"},
  { id: 16, type: "image", src:"/image_12.jpg"},
  { id: 16, type: "image", src: "/image_10.jpg"},
  { id: 16, type: "image", src: "/image_14.jpg"},
  { id: 16, type: "image", src: "/img3.jpg"},
  { id: 16, type: "image", src: "/img5.jpg"},
  { id: 16, type: "image", src: "/img6.jpg"},
  { id: 16, type: "image", src: "/img7.jpg"},
  { id: 16, type: "image", src: "/img8.jpg"},
  { id: 16, type: "image", src: "/img9.jpg"},
  { id: 16, type: "image", src: "/img10.jpg"},
  { id: 16, type: "image", src: "/image_4.jpg"},
  { id: 16, type: "image", src: "/image_5.jpg"},
  { id: 16, type: "image", src: "/image_6.jpg"},
  { id: 16, type: "image", src: "/image_7.jpg"},
];

export default function OurWorks() {
  const videoWorks = works.filter((item) => item.type === "video");
  const imageWorks = works.filter((item) => item.type === "image");

  // Store mute state for each video
  const [mutedState, setMutedState] = useState<{ [key: number]: boolean }>(
    Object.fromEntries(videoWorks.map((v) => [v.id, true]))
  );

  const toggleMute = (id: number) => {
    setMutedState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="ourworks" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Works</h2>
          <p className="text-gray-600 mt-2">
            Our best moments captured — photos & videos
          </p>
        </div>

        <div className="space-y-12">

          {/* FIRST ROW — ALL PORTRAIT VIDEOS */}
          {videoWorks.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {videoWorks.map((item) => (
                <div
                  key={item.id}
                  className="relative rounded-2xl overflow-hidden shadow-md"
                >
                  <video
                    src={item.src}
                    className="w-full h-[380px] object-cover bg-black"
                    autoPlay
                    loop
                    muted={mutedState[item.id]}
                    playsInline
                  />

                  {/* Mute/Unmute Button */}
                  <button
                    onClick={() => toggleMute(item.id)}
                    className="absolute bottom-3 right-3 bg-black/60 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm hover:bg-black/80 transition"
                  >
                    {mutedState[item.id] ? "🔇" : "🔊"}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* IMAGE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {imageWorks.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden shadow-md"
              >
                <img
                  src={item.src}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
