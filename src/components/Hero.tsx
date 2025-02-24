
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Hero = () => {

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/919847274569`, '_blank');
  };
  return (
    <div className="relative overflow-hidden pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Build Your Digital Presence with<br />
              <span className="text-gray-700">MCODEV Bytes</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Modern websites tailored to your business needs with cutting-edge technology
            </p>
            <ul className="space-y-4">
              {[
                "Next.js and TailwindCSS for Seamless Development",
                "SEO Optimization for Better Visibility",
                "Responsive Design for All Devices",
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
             <a href="#services">
             <Button 
                className="bg-primary hover:bg-primary-hover text-white px-6 py-2 sm:px-8 sm:py-6 text-base sm:text-lg transition-all duration-200 w-full sm:w-auto"
              >
                Explore Services
              </Button>
             </a>
              <Button 
                variant="outline" 
                onClick={handleWhatsAppClick}
                className="px-6 py-2 sm:px-8 sm:py-6 text-base sm:text-lg border-primary text-primary hover:bg-primary/5 w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative lg:ml-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <img
              src="/lovable-uploads/d739a119-2ac7-4758-b006-9d9ed0c84e89.png"
              alt="Web Development Dashboard"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
