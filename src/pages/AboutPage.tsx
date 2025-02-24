
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { Building2, Users, Trophy, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-[#494D7C]">About MCODEV</h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Building Digital Excellence Through Innovation and Expertise
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#494D7C]">Our Story</h2>
              <p className="text-gray-600">
                Founded in 2020, MCODEV has emerged as a leading web development and digital solutions company based in Ranchi, Jharkhand. We specialize in creating innovative digital solutions that help businesses thrive in the modern digital landscape.
              </p>
              <p className="text-gray-600">
                Our team of experienced developers, designers, and digital strategists work together to deliver exceptional results for our clients. We pride ourselves on staying ahead of technological trends and implementing cutting-edge solutions.
              </p>
              <Button className="bg-primary hover:bg-primary-hover text-white">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "150+", label: "Projects Completed" },
                { number: "100+", label: "Happy Clients" },
                { number: "15+", label: "Expert Team Members" },
                { number: "4+", label: "Years of Experience" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border-2 border-[#7E69AB] text-center animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border-2 border-[#7E69AB]">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-[#494D7C] mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create meaningful user experiences. We strive to deliver excellence through cutting-edge technology and exceptional service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border-2 border-[#7E69AB]">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-[#494D7C] mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading digital transformation partner for businesses worldwide, recognized for our innovation, expertise, and commitment to delivering exceptional value to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#494D7C]">Our Core Values</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Building2 className="w-6 h-6" />,
                title: "Innovation",
                description: "Constantly pushing boundaries with cutting-edge solutions"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Collaboration",
                description: "Working together to achieve exceptional results"
              },
              {
                icon: <Trophy className="w-6 h-6" />,
                title: "Excellence",
                description: "Delivering the highest quality in everything we do"
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Client Focus",
                description: "Putting our clients' success at the heart of our work"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border-2 border-[#7E69AB] hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#494D7C] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
