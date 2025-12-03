import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  initials: string;
  bgColor: string;
  textColor: string;
  service: string;
  review: string;
  rating: number;
  eventType: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya",
    initials: "P",
    bgColor: "bg-gradient-to-br from-rose-400 to-pink-500",
    textColor: "text-white",
    service: "Wedding Planning & Catering",
    review:
      "Beautifully managed our wedding with perfect coordination. The decor and food impressed everyone.",
    rating: 4,
    eventType: "Wedding",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    initials: "RK",
    bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500",
    textColor: "text-white",
    service: "Corporate Event & Photography",
    review:
      "Very professional team with smooth event execution. Great photography and attention to detail.",
    rating: 5,
    eventType: "Corporate Event",
  },
  {
    id: 3,
    name: "Ananya",
    initials: "A",
    bgColor: "bg-gradient-to-br from-amber-400 to-orange-500",
    textColor: "text-white",
    service: "Birthday Decor & Catering",
    review:
      "Lovely birthday setup with vibrant decor. Kids enjoyed the food and overall experience.",
    rating: 4,
    eventType: "Birthday Party",
  },
  {
    id: 4,
    name: "Arjun J",
    initials: "AJ",
    bgColor: "bg-gradient-to-br from-purple-400 to-indigo-500",
    textColor: "text-white",
    service: "Wedding Planning & Photography",
    review:
      "They planned everything smoothly and captured beautiful moments. Very happy with the service.",
    rating: 5,
    eventType: "Wedding Functions",
  },
  {
    id: 5,
    name: "Meera",
    initials: "M",
    bgColor: "bg-gradient-to-br from-green-400 to-emerald-500",
    textColor: "text-white",
    service: "Event Decor & Catering",
    review:
      "Excellent catering with great flavors and presentation. The decor elevated the entire event.",
    rating: 4,
    eventType: "Corporate Event",
  },
  {
    id: 6,
    name: "Vikram K",
    initials: "VK",
    bgColor: "bg-gradient-to-br from-red-400 to-rose-500",
    textColor: "text-white",
    service: "Complete Event Management",
    review:
      "Event planning was structured and well-executed. They handled everything without any stress.",
    rating: 5,
    eventType: "Product Launch",
  },
  {
    id: 7,
    name: "Deepika N",
    initials: "DN",
    bgColor: "bg-gradient-to-br from-teal-400 to-blue-500",
    textColor: "text-white",
    service: "Wedding Decor & Photography",
    review:
      "Beautiful fairy-tale decor with stunning photos. Every moment was captured perfectly.",
    rating: 5,
    eventType: "Wedding Celebration",
  },
  {
    id: 8,
    name: "Rohit",
    initials: "R",
    bgColor: "bg-gradient-to-br from-yellow-400 to-amber-500",
    textColor: "text-white",
    service: "Catering & Event Planning",
    review:
      "Great food and smooth coordination throughout the event. Very professional handling.",
    rating: 4,
    eventType: "Family Function",
  },
  {
    id: 9,
    name: "John K",
    initials: "JK",
    bgColor: "bg-gradient-to-br from-pink-400 to-rose-500",
    textColor: "text-white",
    service: "Wedding Catering & Planning",
    review:
      "Elegant decorations and tasty multi-cuisine food. Guests enjoyed the entire experience.",
    rating: 5,
    eventType: "Wedding Reception",
  },
  {
    id: 10,
    name: "David",
    initials: "D",
    bgColor: "bg-gradient-to-br from-indigo-400 to-purple-500",
    textColor: "text-white",
    service: "Corporate Photography & Decor",
    review:
      "Clean corporate decor with excellent photography. Captured every important moment well.",
    rating: 4,
    eventType: "Corporate Anniversary",
  },

  {
    id: 11,
    name: "Karthik Subramanian",
    initials: "KS",
    bgColor: "bg-gradient-to-br from-cyan-400 to-blue-500",
    textColor: "text-white",
    service: "Complete Wedding Services",
    review:
      "Our wedding was handled end-to-end with great care. Family appreciated the smooth work.",
    rating: 5,
    eventType: "Complete Wedding",
  },
  {
    id: 12,
    name: "Sanjay Kumar",
    initials: "SK",
    bgColor: "bg-gradient-to-br from-orange-400 to-red-500",
    textColor: "text-white",
    service: "Event Planning & Photography",
    review:
      "Very clean event coordination and beautiful photos. Everything went according to the plan.",
    rating: 4,
    eventType: "Retirement Celebration",
  },
  {
    id: 13,
    name: "Jacob Raj",
    initials: "JR",
    bgColor: "bg-gradient-to-br from-emerald-400 to-green-500",
    textColor: "text-white",
    service: "Birthday Catering & Photography",
    review:
      "Kids loved the food and party setup. The photographer captured fun moments nicely.",
    rating: 5,
    eventType: "Birthday Celebration",
  },
  {
    id: 14,
    name: "Harish Kumar",
    initials: "HK",
    bgColor: "bg-gradient-to-br from-fuchsia-400 to-pink-500",
    textColor: "text-white",
    service: "Wedding Planning & Decor",
    review:
      "Tamil traditional wedding decor was beautifully done. Planning was smooth and stress-free.",
    rating: 5,
    eventType: "Dream Wedding",
  },
  {
    id: 15,
    name: "Matthew Paul",
    initials: "MP",
    bgColor: "bg-gradient-to-br from-sky-400 to-cyan-500",
    textColor: "text-white",
    service: "Corporate Event Management",
    review:
      "Professional setup and timely management. Photography and catering were well appreciated.",
    rating: 4,
    eventType: "Product Showcase",
  },
  {
    id: 16,
    name: "Dhinesh Raj",
    initials: "DR",
    bgColor: "bg-gradient-to-br from-lime-400 to-green-500",
    textColor: "text-white",
    service: "Wedding Photography & Catering",
    review:
      "Authentic food and beautiful wedding photos. Our relatives were very impressed.",
    rating: 5,
    eventType: "Wedding Ceremony",
  },
  {
    id: 17,
    name: "Sathya Narayanan",
    initials: "SN",
    bgColor: "bg-gradient-to-br from-red-500 to-amber-500",
    textColor: "text-white",
    service: "Wedding Catering & Planning",
    review:
      "Superb traditional Tamil menu and well-organized arrangements. Our family appreciated every detail.",
    rating: 5,
    eventType: "Traditional Wedding",
  },
  {
    id: 18,
    name: "Lakshmi Priya",
    initials: "LP",
    bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500",
    textColor: "text-white",
    service: "Baby Shower Decor & Catering",
    review:
      "Beautiful baby shower setup with authentic homely taste food. Highly recommended!",
    rating: 5,
    eventType: "Baby Shower",
  },
  {
    id: 19,
    name: "Manikandan",
    initials: "M",
    bgColor: "bg-gradient-to-br from-rose-500 to-orange-500",
    textColor: "text-white",
    service: "Catering & Full Event Management",
    review:
      "Excellent coordination from start to end. Food quality was top class and service was professional.",
    rating: 4,
    eventType: "Housewarming",
  },
  {
    id: 20,
    name: "Kavitha S",
    initials: "KS",
    bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600",
    textColor: "text-white",
    service: "Birthday Event & Photography",
    review:
      "Kids absolutely loved the decoration and food. Photography captured all wonderful moments.",
    rating: 5,
    eventType: "Kids Birthday",
  },
  {
    id: 21,
    name: "Pradeep Kumar",
    initials: "PK",
    bgColor: "bg-gradient-to-br from-green-500 to-lime-500",
    textColor: "text-white",
    service: "Corporate Catering Service",
    review:
      "Very clean and professional service. Tasty food and timely delivery for our office event.",
    rating: 4,
    eventType: "Corporate Lunch",
  },
  {
    id: 22,
    name: "Sangeetha",
    initials: "S",
    bgColor: "bg-gradient-to-br from-yellow-500 to-orange-600",
    textColor: "text-white",
    service: "Engagement Catering & Decor",
    review:
      "Elegant decoration and impressive food varieties. Loved the personalised attention.",
    rating: 5,
    eventType: "Engagement Event",
  },
  {
    id: 23,
    name: "Aravind Raj",
    initials: "AR",
    bgColor: "bg-gradient-to-br from-sky-500 to-blue-600",
    textColor: "text-white",
    service: "Wedding Photography",
    review:
      "Captured every moment beautifully. Album came out stunning. Very dedicated team.",
    rating: 5,
    eventType: "Wedding",
  },
  {
    id: 24,
    name: "Nithya Shree",
    initials: "NS",
    bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600",
    textColor: "text-white",
    service: "Haldi Decor & Catering",
    review:
      "Vibrant haldi setup and delicious food. The entire family loved the arrangements.",
    rating: 5,
    eventType: "Haldi Function",
  },
  {
    id: 25,
    name: "Saravanan",
    initials: "SV",
    bgColor: "bg-gradient-to-br from-purple-500 to-cyan-600",
    textColor: "text-white",
    service: "Outdoor Catering & Live Counters",
    review:
      "Live dosa and grill counters were a big hit. Guests appreciated the taste and freshness.",
    rating: 4,
    eventType: "Outdoor Event",
  },
  {
    id: 26,
    name: "Revathi",
    initials: "R",
    bgColor: "bg-gradient-to-br from-orange-500 to-red-600",
    textColor: "text-white",
    service: "Event Planning & Decoration",
    review:
      "Event decor was classy and elegant. Entire team managed everything smoothly.",
    rating: 5,
    eventType: "Family Function",
  },
  {
    id: 27,
    name: "Gayathri R",
    initials: "GR",
    bgColor: "bg-gradient-to-br from-emerald-500 to-green-600",
    textColor: "text-white",
    service: "Catering & Decoration",
    review:
      "The food tasted like homemade and the decoration was elegant. Every guest appreciated the effort.",
    rating: 5,
    eventType: "Seemantham",
  },
  {
    id: 28,
    name: "Suresh Kumar",
    initials: "SK",
    bgColor: "bg-gradient-to-br from-red-500 to-pink-600",
    textColor: "text-white",
    service: "Full Wedding Planning",
    review:
      "Handled everything from decor to food with great professionalism. Wedding turned out beautiful.",
    rating: 5,
    eventType: "Wedding",
  },
  {
    id: 29,
    name: "Vishnu Priyan",
    initials: "VP",
    bgColor: "bg-gradient-to-br from-blue-600 to-indigo-500",
    textColor: "text-white",
    service: "Corporate Catering",
    review:
      "Quality of food and hygiene standards were excellent. Delivery was on time for all sessions.",
    rating: 4,
    eventType: "Corporate Meetup",
  },
  {
    id: 30,
    name: "Divya Bharathi",
    initials: "DB",
    bgColor: "bg-gradient-to-br from-orange-500 to-yellow-500",
    textColor: "text-white",
    service: "Birthday Event Decor",
    review:
      "The theme was executed exactly as we imagined. Kids loved the colourful setup and treats.",
    rating: 5,
    eventType: "Kids Birthday",
  },
  {
    id: 31,
    name: "Senthil Vel",
    initials: "SV",
    bgColor: "bg-gradient-to-br from-teal-500 to-blue-600",
    textColor: "text-white",
    service: "Outdoor Catering",
    review:
      "Great taste and very neat service. Outdoor setup was clean, organised and welcoming.",
    rating: 4,
    eventType: "Outdoor Celebration",
  },
  {
    id: 32,
    name: "Anitha Kumari",
    initials: "AK",
    bgColor: "bg-gradient-to-br from-pink-600 to-purple-600",
    textColor: "text-white",
    service: "Engagement Decor & Photography",
    review:
      "Amazing photos and classy decoration. They captured all moments beautifully.",
    rating: 5,
    eventType: "Engagement Ceremony",
  },
  {
    id: 33,
    name: "Gopinath",
    initials: "G",
    bgColor: "bg-gradient-to-br from-cyan-500 to-blue-700",
    textColor: "text-white",
    service: "Live Counter Catering",
    review:
      "The live counter items were fresh and tasty. Guests really enjoyed dosa and BBQ counters.",
    rating: 4,
    eventType: "Family Event",
  },
  {
    id: 34,
    name: "Ilakkiya",
    initials: "I",
    bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
    textColor: "text-white",
    service: "Corporate Photography",
    review:
      "Photos were crisp and captured candid moments perfectly. Delivered on time too.",
    rating: 5,
    eventType: "Corporate Function",
  },
  {
    id: 35,
    name: "Arun Mozhi",
    initials: "AM",
    bgColor: "bg-gradient-to-br from-lime-500 to-green-600",
    textColor: "text-white",
    service: "Wedding Catering",
    review:
      "The authenticity in Chettinad flavours was amazing. Many guests complimented the food.",
    rating: 5,
    eventType: "Tamil Wedding",
  },
  {
    id: 36,
    name: "Revathi S",
    initials: "RS",
    bgColor: "bg-gradient-to-br from-amber-500 to-orange-600",
    textColor: "text-white",
    service: "Event Coordination",
    review:
      "Very organised team. They handled all coordination smoothly and made our event stress-free.",
    rating: 4,
    eventType: "Private Function",
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + slidesToShow) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - slidesToShow + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlay, slidesToShow]);

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < slidesToShow; i++) {
      slides.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return slides;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <div
      className="w-full py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-rose-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from couples, corporates, and families who trusted us to make
            their special moments unforgettable
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / slidesToShow)
                }%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 md:p-8 h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`${testimonial.bgColor} ${testimonial.textColor} w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-lg`}
                      >
                        {testimonial.initials}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {testimonial.eventType}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-amber-400 fill-amber-400"
                        />
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 flex-grow line-clamp-4 italic">
                      "{testimonial.review}"
                    </p>

                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm font-semibold text-rose-600">
                        {testimonial.service}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-20 bg-white hover:bg-gradient-to-br hover:from-rose-500 hover:to-orange-500 text-gray-700 hover:text-white rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 z-20 bg-white hover:bg-gradient-to-br hover:from-rose-500 hover:to-orange-500 text-gray-700 hover:text-white rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-12 flex-wrap">
          {Array.from({
            length: Math.ceil(testimonials.length / slidesToShow),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentIndex((index * slidesToShow) % testimonials.length)
              }
              className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 ${
                index === Math.floor(currentIndex / slidesToShow)
                  ? "w-10 h-3 bg-gradient-to-r from-rose-500 to-orange-500"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 font-medium">
            <span className="text-2xl font-bold text-rose-600">
              {Math.floor(currentIndex / slidesToShow) + 1}
            </span>
            <span className="text-gray-400"> / </span>
            <span className="text-2xl font-bold text-gray-400">
              {Math.ceil(testimonials.length / slidesToShow)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
