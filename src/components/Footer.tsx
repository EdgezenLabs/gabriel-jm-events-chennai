import { Heart, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Gabriel JM Logo" className="h-16 w-16 object-contain" />
              <div>
                <h3 className="text-lg font-bold text-foreground">GABRIEL JM</h3>
                <p className="text-sm text-muted-foreground">Event Management</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Making your events truly special with elegance and precision.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Weddings</li>
              <li>Corporate Events</li>
              <li>Birthday Parties</li>
              <li>Cultural Events</li>
              <li>Social Gatherings</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <a href="tel:+919566144155" className="hover:text-primary transition-colors">
                  +91 95661 44155
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <a href="mailto:info@gabrieljmevents.com" className="hover:text-primary transition-colors">
                  info@gabrieljmevents.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span>Chennai, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Gabriel JM Event Management. Made with
            <Heart className="h-4 w-4 text-accent fill-accent" />
            in Chennai
          </p>
        </div>
      </div>
    </footer>
  );
};
