import { useEffect, useState } from "react";
import { Award, CheckCircle, Users, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const [experience, setExperience] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const animateExperience = () => {
      const duration = 2000;
      const steps = 60;
      const increment = 15 / steps;
      const stepDuration = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= 15) {
          setExperience(15);
          clearInterval(timer);
        } else {
          setExperience(Math.floor(current));
        }
      }, stepDuration);
    };

    animateExperience();

    const interval = setInterval(() => {
      setExperience(0);
      animateExperience();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const reasons = [
    {
      number: "01",
      icon: Users,
      title: "Professional Chefs",
      description:
        "Highly skilled professionals dedicated to bringing your vision to life with precision",
    },
    {
      number: "02",
      icon: Zap,
      title: "Timely Delivery",
      description:
        "We prioritize punctuality so you never have to wait—your orders reach you exactly when needed.",
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Quality Guarantee",
      description:
        "Uncompromising commitment to quality—only the finest ingredients and preparation methods make the cut.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            Why Choose Us
          </h2>
          <p
            className={`text-slate-600 text-lg md:text-xl max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            Experience excellence with a partner you can trust
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.number}
                  className={`flex gap-4 md:gap-6 bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-12"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
                      {reason.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                      <h3 className="text-lg md:text-xl font-bold text-slate-900">
                        {reason.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm md:text-base">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className={`order-1 lg:order-2 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-full mb-6 ring-4 ring-white/20">
                    <Award className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                    Years of Experience
                  </h3>
                </div>

                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    <div className="text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none">
                      {experience}
                    </div>
                    <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-6 h-6 md:w-8 md:h-8 bg-blue-300 rounded-full animate-pulse delay-75"></div>
                  </div>
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white/80 ml-2 md:ml-4">
                    +
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-12 -right-12 w-48 h-48 md:w-64 md:h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute -top-12 -left-12 w-48 h-48 md:w-64 md:h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
