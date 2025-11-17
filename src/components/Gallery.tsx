import { useState } from "react";
import { X } from "lucide-react";
import corporateEvent from "@/assets/corporate-event.jpg";
import weddingEvent from "@/assets/wedding-event.jpg";
import birthdayEvent from "@/assets/birthday-event.jpg";
import banquetEvent from "@/assets/banquet-event.jpg";
import outdoorEvent from "@/assets/outdoor-event.jpg";
import culturalEvent from "@/assets/cultural-event.jpg";

const galleryImages = [
  {
    src: weddingEvent,
    title: "Wedding Ceremony",
    category: "Weddings",
  },
  {
    src: corporateEvent,
    title: "Corporate Conference",
    category: "Corporate",
  },
  {
    src: birthdayEvent,
    title: "Birthday Celebration",
    category: "Birthdays",
  },
  {
    src: banquetEvent,
    title: "Elegant Banquet",
    category: "Banquets",
  },
  {
    src: outdoorEvent,
    title: "Outdoor Garden Party",
    category: "Outdoor Events",
  },
  {
    src: culturalEvent,
    title: "Cultural Festival",
    category: "Cultural",
  },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Event Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the memorable events we've created
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in aspect-[4/3]"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-semibold text-primary mb-1">{image.category}</p>
                  <h3 className="text-xl font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].title}
            className="max-w-full max-h-full object-contain animate-scale-in"
          />
        </div>
      )}
    </section>
  );
};
