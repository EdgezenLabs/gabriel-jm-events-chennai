import { Card, CardContent } from "@/components/ui/card";
import sampleImage from "@/assets/owner.jpg"; 

// SERVICE IMAGES
import culturalImg from "@/assets/cultural.webp";
import weddingImg from "@/assets/wed.jpg";
import specialImg from "@/assets/spl.jpg";
import socialImg from "@/assets/social.webp";
import birthdayImg from "@/assets/bdayparty.jpg";
import corporateImg from "@/assets/corpor.jpeg";

const services = [
  {
    src: culturalImg,
    title: "Cultural Events",
    category: "Cultural",
  },
  {
    src: weddingImg,
    title: "Wedding Planning",
    category: "Weddings",
  },
  {
    src: specialImg,
    title: "Special Occasions",
    category: "Special Events",
  },
  {
    src: socialImg,
    title: "Social Gatherings",
    category: "Social",
  },
  {
    src: birthdayImg,
    title: "Birthday Parties",
    category: "Birthdays",
  },
  {
    src: corporateImg,
    title: "Corporate Events",
    category: "Corporate",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive event management solutions for every occasion
          </p>
        </div>

        {/* Layout Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT SIDE IMAGE */}
          <div>
            <img src={sampleImage} alt="Service Banner" className="w-full h-full object-cover rounded-2xl shadow-lg" />
          </div>

          {/* RIGHT SIDE - SERVICE CARDS (Gallery Style) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] shadow-md"
              >
                {/* Image */}
                <img
                  src={service.src}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Text */}
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm font-semibold text-primary mb-1">
                    {service.category}
                  </p>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
