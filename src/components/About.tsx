import { Award, Users } from 'lucide-react';
import jmEventsLogo from "@/assets/image_2.jpg";

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Gabriel JM Events</h2>
            <p className="text-lg text-gray-700 mb-6">
              With over a decade of experience in event management, we've perfected the art of creating extraordinary experiences. Our passionate team of event specialists brings creativity, precision, and dedication to every project.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              From the initial concept to the final moment, we handle every detail with care, ensuring your event exceeds expectations and leaves a lasting impression on all who attend.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-gray-600">Events Executed</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-gray-900">1000+</p>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={jmEventsLogo}
              alt="Gabriel JM Events"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
