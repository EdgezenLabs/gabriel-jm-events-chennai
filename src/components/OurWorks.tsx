import React from "react";
import outer from "@/assets/outer.png";
import reel from "@/assets/reel_1.mp4";
import reel2 from "@/assets/reel_2.mp4";
import img1 from "@/assets/1img.jpeg";
import img2 from "@/assets/2img.jpg";
import img3 from "@/assets/3img.jpg";
import img4 from "@/assets/birthday-event.jpg";


interface WorkItem {
  id: number;
  type: "image" | "video";
  src: string;
  thumb?: string;
}

const works: WorkItem[] = [
  { id: 1, type: "video", src: reel },
  { id: 2, type: "video", src: reel2 },
  { id: 3, type: "video", src: reel },
  { id: 4, type: "video", src: reel2 },

  { id: 5, type: "image", src: outer },
  { id: 6, type: "image", src: img1},
  { id: 7, type: "image", src: img2 },
  { id: 8, type: "image", src: img3 },
  { id: 9, type: "image", src: img4 },
  // { id: 10, type: "image", src: img5 },
];

export default function OurWorks() {
  // separate videos + images
  const videoWorks = works.filter((item) => item.type === "video");
  const imageWorks = works.filter((item) => item.type === "image");

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
                  className="rounded-2xl overflow-hidden shadow-md"
                >
                  <video
                    src={item.src}
                    className="w-full h-[380px] object-cover bg-black"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
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
