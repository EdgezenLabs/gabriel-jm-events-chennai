import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can make your next event extraordinary
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <Card className="border-border/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+919566144155"
                    className="text-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 95661 44155
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:gabrieljmcaterers@gmail.com"
                    className="text-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    gabrieljmcaterers@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Our Corporate Office
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    <a
                      href="https://maps.app.goo.gl/qfdCTcZ4pGSUCrDR6?g_st=ipc"
                      target="_blank"
                      rel="noopener noreferrer"
                      // className="text-blue-600 hover:underline"
                    >
                      No.14/5, Hindu Colony, 2nd Main Road, Puzhuthivakkam,
                      Chennai.
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="pt-4">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex justify-between">
                  <span>Monday - Saturday:</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">10:00 AM - 6:00 PM</span>
                </p>
              </div>
            </div>
          </div>
          <Card
            className="animate-fade-in border-border/50"
            style={{ animationDelay: "200ms" }}
          >
            <CardContent className="p-0 overflow-hidden rounded-xl">

              {/* Google Map Embed */}
              <div className="w-full h-[350px] sm:h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.64566241431!2d80.197589!3d12.866364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526741f56317e1%3A0x63c6d1a486d5e6a3!2sHindu%20Colony%202nd%20Main%20Rd%2C%20Puzhuthivakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="p-6 text-center">
                <a
                  href="https://maps.app.goo.gl/qfdCTcZ4pGSUCrDR6?g_st=ipc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
