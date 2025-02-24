
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const questions = [
    {
      question: "What technologies do you use for web development?",
      answer: "We specialize in modern web technologies including Next.js, React, TailwindCSS, and Node.js. Our tech stack ensures high-performance, scalable, and maintainable web applications."
    },
    {
      question: "How long does it typically take to complete a website project?",
      answer: "Project timelines vary based on complexity. A basic website typically takes 2-3 weeks, while complex web applications may take 6-8 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide website maintenance services?",
      answer: "Yes, we offer comprehensive website maintenance packages that include regular updates, security patches, performance optimization, and technical support to keep your website running smoothly."
    },
    {
      question: "What type of businesses do you work with?",
      answer: "We work with businesses of all sizes, from startups to enterprises, across various industries. Our solutions are tailored to meet specific business requirements and goals."
    },
    {
      question: "Do you provide SEO services with website development?",
      answer: "Yes, all our websites are built with SEO best practices in mind. We also offer dedicated SEO services to improve your website's visibility and ranking on search engines."
    },
    {
      question: "What support do you offer after the website goes live?",
      answer: "We provide 24/7 technical support, regular maintenance, performance monitoring, and continued optimization services after launch to ensure your website performs optimally."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-[#494D7C]">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Common questions about our web development services and processes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((item, index) => (
            <div
              key={index}
              className="border-2 border-[#6E59A5] rounded-lg p-6 cursor-pointer hover:border-primary transition-colors duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[#494D7C] font-medium pr-4">{item.question}</h3>
                <ChevronRight 
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${
                    openQuestion === index ? 'rotate-90' : ''
                  }`}
                />
              </div>
              {openQuestion === index && (
                <p className="mt-4 text-gray-600 animate-fade-down">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
