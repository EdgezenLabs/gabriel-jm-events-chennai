import { useState } from "react";

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioItems = [
    {
      image: "/image_1.jpg",
      title: "Sarah & John's Wedding",
      category: "Luxury Wedding",
    },
    {
      image: "/image_3.jpg",
      title: "Grand Feast",
      category: "Authentic Foods",
    },
    {
      image:
        "https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Golden Jubilee",
      category: "Anniversary Celebration",
    },
    {
      image:
        "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Brand Launch",
      category: "Product Launch Event",
    },
    {
      image:
        "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Charity Gala Night",
      category: "Fundraising Event",
    },
    {
      image:
        "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Summer Festival",
      category: "Community Event",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600">
            A glimpse of our recent events
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL PREVIEW */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl animate-zoomIn"
              alt="Preview"
            />
          </div>
        )}
      </div>
    </section>
  );
}
