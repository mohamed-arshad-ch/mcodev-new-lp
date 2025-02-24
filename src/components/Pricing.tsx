
import { Box, Rocket, Send, Check, X } from "lucide-react";
import { Button } from "./ui/button";

const Pricing = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-[#494D7C]">Choose Your Plan</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Bytes Basic",
              price: "27,999",
              icon: <Box className="w-8 h-8" />,
              features: [
                { text: "One landing page built with Next.js and TailwindCSS", included: true },
                { text: "Basic SEO optimization", included: true },
                { text: "1-year domain registration", included: true },
                { text: "Google Business email setup", included: true },
                { text: "Hosting server for 1 year", included: true }
              ]
            },
            {
              title: "Bytes Pro",
              price: "69,999",
              icon: <Rocket className="w-8 h-8" />,
              features: [
                { text: "Up to 5 pages with Next.js and TailwindCSS", included: true },
                { text: "Advanced SEO optimization", included: true },
                { text: "Premium domain for 1 year", included: true },
                { text: "Business email suite", included: true },
                { text: "Premium hosting with SSL", included: true }
              ],
              featured: true
            },
            {
              title: "Bytes Enterprise",
              price: "Contact us",
              icon: <Send className="w-8 h-8" />,
              features: [
                { text: "Custom web application development", included: true },
                { text: "Enterprise SEO solutions", included: true },
                { text: "Custom domain setup", included: true },
                { text: "Enterprise email solutions", included: true },
                { text: "Dedicated hosting infrastructure", included: true }
              ]
            }
          ].map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-8 border-2 ${
                plan.featured ? 'border-[#9b87f5] ring-2 ring-primary shadow-lg scale-105' : 'border-[#7E69AB] shadow'
              } transition-all duration-300 animate-fade-up relative`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">
                    {plan.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#494D7C] mb-4">{plan.title}</h3>
                <div className="text-4xl font-bold text-[#494D7C]">
                  {typeof plan.price === "string" && plan.price.includes(",") ? (
                    <>
                      <span className="text-2xl">₹</span>
                      {plan.price}
                    </>
                  ) : (
                    plan.price
                  )}
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "text-gray-600" : "text-gray-400 line-through"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <Button className={`w-full ${plan.featured ? 'bg-primary hover:bg-primary/90' : 'bg-gray-800 hover:bg-gray-700'} text-white`}>
                  {plan.price === "Contact us" ? "Contact Us" : "View Details"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
