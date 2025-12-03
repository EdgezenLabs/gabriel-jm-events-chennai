import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Portfolio } from "@/components/Portfolio";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CateringServices from "@/components/CateringServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import MenuShowcase from "@/components/MenuShowcase";
import OurWorks from "@/components/OurWorks";


const Index = () => {
   const sampleMedia = [
    {
      id: '1',
      type: 'image' as const,
      src: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Mountain landscape',
    },
    {
      id: '2',
      type: 'image' as const,
      src: 'https://images.pexels.com/photos/2166927/pexels-photo-2166927.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Ocean waves',
    },
    {
      id: '3',
      type: 'image' as const,
      src: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Forest path',
    },
    {
      id: '4',
      type: 'image' as const,
      src: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Desert sunset',
    },
    {
      id: '5',
      type: 'image' as const,
      src: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'City lights',
    },
    {
      id: '6',
      type: 'image' as const,
      src: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Tropical beach',
    },
    {
      id: '7',
      type: 'image' as const,
      src: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Snowy mountains',
    },
    {
      id: '8',
      type: 'image' as const,
      src: 'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Waterfall',
    },
  ];
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <CateringServices/>
      <MenuShowcase />
      <WhyChooseUs/>
      <OurWorks/>
      <Gallery />
      <About />
      <Portfolio />
       <TestimonialsCarousel />

      <Contact />
       <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default Index;
