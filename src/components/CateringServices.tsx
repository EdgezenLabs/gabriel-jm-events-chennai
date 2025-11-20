import {
  Utensils,
  Users,
  Briefcase,
  Home,
  Cake,
  Clock,
  ChefHat,
  Sparkles,
} from "lucide-react";

const services = [
  {
    id: 1,
    name: "Outdoor Catering",
    icon: Utensils,
    description: "Perfect for outdoor events, festivals, and celebrations",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    name: "Seemantham Catering",
    icon: Users,
    description: "Traditional catering for your special ceremonies",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 3,
    name: "Corporate Catering",
    icon: Briefcase,
    description: "Professional catering solutions for business events",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 4,
    name: "Housewarming Catering",
    icon: Home,
    description: "Celebrate your new home with delicious food",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    name: "Birthday Party Catering",
    icon: Cake,
    description: "Make your birthday unforgettable with our catering",
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: 6,
    name: "Festival Catering",
    icon: Sparkles,
    description: "Special festive menus designed for cultural celebrations",
    color: "from-red-500 to-amber-500",
  },
];

export default function CateringServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Catering Services
          </h2>
          <p className="text-xl font-semibold text-muted-foreground max-w-2xl mx-auto">
            Expert Chefs. On-Time Service. Unmatched Flavor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <div className="p-6 sm:p-8">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="https://wa.me/919566144155?text=Hi%2C%20I%20would%20like%20to%20book%20your%20catering%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Utensils className="w-6 h-6" />
            Book Our Services
          </a>
        </div>
      </div>
    </div>
  );
}
