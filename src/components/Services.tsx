import { Crown, Briefcase, Cake, Heart, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Elegant wedding ceremonies and receptions tailored to your dreams. Traditional and contemporary styles.",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Professional conferences, seminars, and corporate gatherings that leave a lasting impression.",
  },
  {
    icon: Cake,
    title: "Birthday Parties",
    description: "Memorable birthday celebrations for all ages, from intimate gatherings to grand celebrations.",
  },
  {
    icon: Crown,
    title: "Cultural Events",
    description: "Traditional celebrations and cultural festivals executed with authenticity and grandeur.",
  },
  {
    icon: Users,
    title: "Social Gatherings",
    description: "Anniversaries, reunions, and special occasions crafted with care and attention to detail.",
  },
  {
    icon: Sparkles,
    title: "Special Occasions",
    description: "Custom events for engagements, housewarming, and any milestone worth celebrating.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive event management solutions for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
