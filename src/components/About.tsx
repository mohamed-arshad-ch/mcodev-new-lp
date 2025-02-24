
import { Button } from "@/components/ui/button";
import { Building2, Command, LineChart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-primary font-medium">Why MCODEV Bytes?</h2>
          <h3 className="text-4xl font-bold text-gray-800">
            Modern Web Solutions for Growing Businesses
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At MCODEV Bytes, we specialize in crafting cutting-edge web solutions using Next.js, TailwindCSS, and seamless business automation technologies. Our expertise allows us to deliver cost-effective, scalable, and modern designs that drive your business forward.
          </p>
          <Button variant="link" className="text-primary hover:text-primary-hover">
            Learn More →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Building2 className="w-12 h-12 text-primary" />,
              title: "Modern Tech Stack",
              description: "Next.js, TailwindCSS, and React for top-tier websites and applications"
            },
            {
              icon: <Command className="w-12 h-12 text-primary" />,
              title: "SEO Optimized",
              description: "Built-in SEO optimization for enhanced visibility and better search rankings"
            },
            {
              icon: <LineChart className="w-12 h-12 text-primary" />,
              title: "Scalable Solutions",
              description: "Future-proof your business with scalable and maintainable web applications"
            }
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border-2 border-[#9b87f5] hover:shadow-md transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/5 w-20 h-20 rounded-lg flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                {card.title}
              </h4>
              <p className="text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
