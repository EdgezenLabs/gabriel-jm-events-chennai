import {
  Utensils,
  Briefcase,
  Home,
  Cake,
} from "lucide-react";
import { useState, useEffect } from "react";

import house from "@/assets/1img.jpeg";
import bday from "@/assets/2img.jpg";
import corporate from "@/assets/3img.jpg";
import outer from "@/assets/outer.png";

const services = [
  {
    id: 1,
    name: "Outdoor Catering",
    icon: Utensils,
    description: "Perfect for outdoor events, festivals, and celebrations",
    image: outer,
    gallery: [outer, bday, house, corporate],
  },
  {
    id: 3,
    name: "Corporate Catering",
    icon: Briefcase,
    description: "Professional catering solutions for business events",
    image: corporate,
    gallery: [corporate, outer, house, bday],
  },
  {
    id: 4,
    name: "Housewarming Catering",
    icon: Home,
    description: "Celebrate your new home with delicious food",
    image: house,
    gallery: [house, outer, bday, corporate],
  },
  {
    id: 5,
    name: "Birthday Party Catering",
    icon: Cake,
    description: "Make your birthday unforgettable with our catering",
    image: bday,
    gallery: [bday, house, outer, corporate],
  },
];

export default function CateringServices() {
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Keyboard navigation for preview viewer
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!previewImage || !selectedService) return;

      const imgs = selectedService.gallery;
      const index = imgs.indexOf(previewImage);

      if (e.key === "ArrowRight")
        setPreviewImage(imgs[(index + 1) % imgs.length]);

      if (e.key === "ArrowLeft")
        setPreviewImage(imgs[(index - 1 + imgs.length) % imgs.length]);

      if (e.key === "Escape") setPreviewImage(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [previewImage, selectedService]);

  return (
    <section id="catering" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Catering Services
          </h2>
          <p className="text-xl text-gray-600">
            Expert Chefs • Timely Service • Unmatched Flavor
          </p>
        </div>

        {/* GRID (same as your design) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer"
                onClick={() => {
                  setSelectedService(service);
                  setPreviewImage(null); // IMPORTANT: no preview initially
                }}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="flex items-center gap-3">
                      <Icon className="w-8 h-8" />
                      <h3 className="text-2xl font-bold">{service.name}</h3>
                    </div>
                    <p className="text-gray-200 text-sm mt-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MODAL: Thumbnail list first */}
        {selectedService && !previewImage && (
          <div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4 overflow-auto"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="bg-white p-6 rounded-xl max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {selectedService.name}
              </h2>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {selectedService.gallery.map((img: string, i: number) => (
                  <img
                    key={i}
                    src={img}
                    className="rounded-lg shadow-md object-cover h-40 w-full cursor-pointer hover:scale-105 transition"
                    onClick={() => setPreviewImage(img)}
                  />
                ))}
              </div>

              <button
                className="mt-6 px-6 py-2 bg-black text-white rounded-lg mx-auto block text-sm"
                onClick={() => setSelectedService(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* PREVIEW VIEWER (Portfolio style) */}
        {previewImage && (
          <div
            className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-4"
            onClick={() => setPreviewImage(null)}
            onWheel={(e) => {
              const imgs = selectedService.gallery;
              const index = imgs.indexOf(previewImage);

              e.stopPropagation();
              if (e.deltaY > 0)
                setPreviewImage(imgs[(index + 1) % imgs.length]);
              else
                setPreviewImage(imgs[(index - 1 + imgs.length) % imgs.length]);
            }}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={previewImage}
                className="max-w-[90vw] max-h-[90vh] rounded-xl object-contain"
              />

              {/* LEFT ARROW */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/40"
                onClick={() => {
                  const imgs = selectedService.gallery;
                  const index = imgs.indexOf(previewImage);
                  setPreviewImage(imgs[(index - 1 + imgs.length) % imgs.length]);
                }}
              >
                ‹
              </button>

              {/* RIGHT ARROW */}
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/40"
                onClick={() => {
                  const imgs = selectedService.gallery;
                  const index = imgs.indexOf(previewImage);
                  setPreviewImage(imgs[(index + 1) % imgs.length]);
                }}
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
