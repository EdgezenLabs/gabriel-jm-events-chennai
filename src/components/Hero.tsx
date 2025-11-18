import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/jm_logo.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-8">
            <img
              src={logo}
              alt="Gabriel JM Event Management"
              className="h-64 w-64 object-contain animate-scale-in"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Making Your Events
            <span className="block text-primary mt-2">Truly Special</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Premier event management services in Chennai. From weddings to
            corporate events, we craft unforgettable experiences with elegance
            and precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={() => (window.location.href = "tel:+919566144155")}
              className="gap-2 text-lg px-8 py-6"
            >
              <Phone className="h-5 w-5" />
              +91 95661 44155
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("gallery")}
              className="text-lg px-8 py-6"
            >
              View Our Work
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 justify-center pt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>500+ Events</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>100% Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
