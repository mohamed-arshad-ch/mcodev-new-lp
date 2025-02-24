
import { Users, FileText, Headphones, BadgeCheck } from "lucide-react";

const WhyUs = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-[#494D7C]">Why Choose Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Partner with MCODEV Bytes for innovative web solutions that drive business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              number: "01",
              title: "Expert Development Team",
              description: "Our skilled developers specialize in Next.js, React, and modern web technologies to deliver high-performance applications"
            },
            {
              number: "02",
              title: "Rapid Development",
              description: "Streamlined development process with quick turnaround times without compromising on quality or functionality"
            },
            {
              number: "03",
              title: "Customer-Centric Approach",
              description: "We prioritize your business needs and provide tailored solutions with ongoing support and maintenance"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-primary mb-4">{item.number}</div>
              <h3 className="text-xl font-semibold text-[#494D7C] mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <BadgeCheck className="w-8 h-8 text-primary" />,
              number: "100+",
              label: "Satisfied Clients"
            },
            {
              icon: <FileText className="w-8 h-8 text-primary" />,
              number: "150+",
              label: "Projects Completed"
            },
            {
              icon: <Headphones className="w-8 h-8 text-primary" />,
              number: "24/7",
              label: "Support Available"
            },
            {
              icon: <Users className="w-8 h-8 text-primary" />,
              number: "15+",
              label: "Expert Developers"
            }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
