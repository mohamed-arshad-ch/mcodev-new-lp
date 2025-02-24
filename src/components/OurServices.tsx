
import { 
  Globe, 
  Smartphone, 
  Megaphone, 
  Paintbrush, 
  ShoppingCart, 
  BarChart, 
  Search,
  Cloud
} from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-[#494D7C]">Our Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Globe className="w-10 h-10" />,
              title: "Web Development",
              description: "Custom websites and web applications built with Next.js, React, and modern technologies for optimal performance",
              color: "text-blue-500",
              slug: "web-development"
            },
            {
              icon: <Smartphone className="w-10 h-10" />,
              title: "App Development",
              description: "Native and cross-platform mobile applications that deliver seamless user experiences",
              color: "text-green-500",
              slug: "app-development"
            },
            {
              icon: <Megaphone className="w-10 h-10" />,
              title: "Digital Marketing",
              description: "Strategic digital marketing solutions to increase your online presence and reach",
              color: "text-orange-500",
              slug: "digital-marketing"
            },
            {
              icon: <Paintbrush className="w-10 h-10" />,
              title: "Branding",
              description: "Comprehensive branding services to establish and strengthen your market identity",
              color: "text-purple-500",
              slug: "branding"
            },
            {
              icon: <ShoppingCart className="w-10 h-10" />,
              title: "E-Commerce Solutions",
              description: "Custom e-commerce platforms with secure payment gateways and inventory management",
              color: "text-pink-500",
              slug: "ecommerce-solutions"
            },
            {
              icon: <Search className="w-10 h-10" />,
              title: "SEO Services",
              description: "Search engine optimization to improve your visibility and organic traffic",
              color: "text-yellow-500",
              slug: "seo-services"
            },
            {
              icon: <Cloud className="w-10 h-10" />,
              title: "Cloud Solutions",
              description: "Scalable cloud infrastructure and deployment services for your applications",
              color: "text-cyan-500",
              slug: "cloud-solutions"
            },
            {
              icon: <BarChart className="w-10 h-10" />,
              title: "Analytics & Reporting",
              description: "Data-driven insights and comprehensive reporting for informed decision making",
              color: "text-red-500",
              slug: "analytics-reporting"
            }
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border-2 border-[#7E69AB] hover:shadow-lg transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-20 h-20 rounded-lg bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#494D7C] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <Link to={`/services/${service.slug}`}>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
