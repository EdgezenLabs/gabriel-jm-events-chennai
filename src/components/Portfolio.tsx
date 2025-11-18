import { useState, useEffect } from "react";

export function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const portfolioItems = [
    {
      image: "/image_1.jpg",
      title: "Sarah & John's Wedding",
      category: "Luxury Wedding",
      related: ["/image_4.jpg", "/image_5.jpg", "/image_6.jpg", "/image_7.jpg"],
    },
    {
      image: "/image_3.jpg",
      title: "Grand Feast",
      category: "Authentic Foods",
      related: [
        "/image_3.jpg",
        "/image_13.jpg",
        "/image_8.jpg",
        "/image_9.jpg",
        "image_6.jpg",
        "/image_11.jpg",
        "/image_12.jpg",
        "/image_10.jpg",
        "/image_14.jpg",
      ],
    },
  ];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!previewImage || !selectedItem) return;

      const images = selectedItem.related;
      const index = images.indexOf(previewImage);

      if (e.key === "ArrowRight") {
        setPreviewImage(images[(index + 1) % images.length]);
      }
      if (e.key === "ArrowLeft") {
        setPreviewImage(images[(index - 1 + images.length) % images.length]);
      }
      if (e.key === "Escape") setPreviewImage(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [previewImage, selectedItem]);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600">
            A glimpse of our recent events
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer"
              onClick={() => setSelectedItem(item)}
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

        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4 overflow-auto"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-white p-6 rounded-xl max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {selectedItem.title}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {selectedItem.related.map((img: string, i: number) => (
                  <img
                    key={i}
                    src={img}
                    className="rounded-lg shadow-md object-cover h-40 w-full hover:scale-105 transition cursor-pointer"
                    alt="related"
                    onClick={() => setPreviewImage(img)}
                  />
                ))}
              </div>

              <button
                className="mt-6 px-6 py-2 bg-black text-white rounded-lg mx-auto block text-sm"
                onClick={() => setSelectedItem(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {previewImage && selectedItem && (
          <div
            className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-4"
            onClick={() => setPreviewImage(null)}
            onWheel={(e) => {
              e.stopPropagation();
              const index = selectedItem.related.indexOf(previewImage);

              if (e.deltaY > 0) {
                const next = (index + 1) % selectedItem.related.length;
                setPreviewImage(selectedItem.related[next]);
              } else {
                const prev =
                  (index - 1 + selectedItem.related.length) %
                  selectedItem.related.length;
                setPreviewImage(selectedItem.related[prev]);
              }
            }}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={previewImage}
                className="max-w-[90vw] max-h-[90vh] rounded-xl object-contain"
                alt="preview"
              />

              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/40 transition"
                onClick={() => {
                  const index = selectedItem.related.indexOf(previewImage);
                  const prev =
                    (index - 1 + selectedItem.related.length) %
                    selectedItem.related.length;
                  setPreviewImage(selectedItem.related[prev]);
                }}
              >
                ‹
              </button>

              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/40 transition"
                onClick={() => {
                  const index = selectedItem.related.indexOf(previewImage);
                  const next = (index + 1) % selectedItem.related.length;
                  setPreviewImage(selectedItem.related[next]);
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
