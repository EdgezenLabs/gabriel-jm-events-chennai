import { Award, CheckCircle, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Excellence",
    description: "Award-winning event management with attention to every detail",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Experienced professionals dedicated to your event success",
  },
  {
    icon: Clock,
    title: "Timely Execution",
    description: "Punctual and efficient service delivery every time",
  },
  {
    icon: CheckCircle,
    title: "100% Satisfaction",
    description: "Committed to exceeding your expectations",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Gabriel JM
            </h2>
            <p className="text-xl text-muted-foreground">
              Your trusted partner in creating unforgettable events
            </p>
          </div>

          <div className="space-y-8 mb-16 animate-fade-in">
            <p className="text-lg text-foreground leading-relaxed">
              Gabriel JM Event Management is Chennai's premier event planning and management company, 
              dedicated to transforming your special occasions into extraordinary experiences. With years 
              of expertise and a passion for perfection, we specialize in creating memorable events that 
              reflect your unique vision and style.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              From intimate gatherings to grand celebrations, our team of experienced professionals 
              handles every aspect of event planning with meticulous attention to detail. We pride 
              ourselves on our ability to bring creativity, elegance, and flawless execution to every 
              event we manage.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Based in Chennai, we serve clients across the region, offering comprehensive event 
              management solutions that include venue selection, décor, catering coordination, entertainment, 
              and complete event logistics. Our commitment is simple: to make your event truly special and 
              stress-free for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
