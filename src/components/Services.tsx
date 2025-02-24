
import { Activity, Code, Presentation, Frame, Share2, Database } from "lucide-react";

const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-[#494D7C]">Our Development Process</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a streamlined development process to ensure quality and efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Activity className="w-8 h-8 text-sky-400" />,
              title: "Project Planning",
              description: "Detailed project scoping, requirements gathering, and timeline planning to ensure project success"
            },
            {
              icon: <Code className="w-8 h-8 text-orange-400" />,
              title: "Design & Development",
              description: "Creating responsive, modern designs and implementing them with clean, efficient code"
            },
            {
              icon: <Presentation className="w-8 h-8 text-emerald-400" />,
              title: "Quality Assurance",
              description: "Rigorous testing and optimization to ensure your website performs flawlessly across all devices"
            },
            {
              icon: <Frame className="w-8 h-8 text-red-400" />,
              title: "Deployment",
              description: "Smooth deployment process with continuous monitoring and performance optimization"
            },
            {
              icon: <Share2 className="w-8 h-8 text-purple-400" />,
              title: "SEO Implementation",
              description: "Implementation of SEO best practices to improve your website's visibility in search results"
            },
            {
              icon: <Database className="w-8 h-8 text-pink-400" />,
              title: "Maintenance & Support",
              description: "Ongoing maintenance, updates, and technical support to keep your website running smoothly"
            }
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border-2 border-[#7E69AB] hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#494D7C] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
