import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { services } from "./ServicesPage";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const ServiceDetail = () => {
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.slug === slug);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!service) {
    navigate("/services");
    return null;
  }

  if (loading) return <Loader />;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "MCODEV Bytes",
      "url": "https://www.mcodevbytes.in"
    }
  };

  return (
    <>
      <SEO 
        title={`${service.title} Services - MCODEV Bytes`}
        description={service.longDescription}
        keywords={`${service.title.toLowerCase()}, MCODEV Bytes services, IT services Kerala,India`}
        canonical={`https://www.mcodevbytes.in/services/${service.slug}`}
      />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className={`w-24 h-24 rounded-xl bg-gray-50 flex items-center justify-center mb-6 ${service.color}`}>
                {service.icon}
              </div>
              <h1 className="text-5xl font-bold text-[#494D7C]">{service.title}</h1>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#494D7C]">Overview</h2>
                <p className="text-gray-600">
                  {service.longDescription}
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#494D7C]">Key Features</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6">
                  <Button 
                    className="bg-primary hover:bg-primary-hover text-white"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg border-2 border-[#7E69AB]">
                <h3 className="text-2xl font-bold text-[#494D7C] mb-6">Why Choose Our {service.title}?</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-[#494D7C] mb-2">Expert Team</h4>
                    <p className="text-gray-600">Our team of experienced professionals ensures the highest quality of service delivery.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-[#494D7C] mb-2">Proven Track Record</h4>
                    <p className="text-gray-600">Successfully delivered numerous projects with excellent client satisfaction.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-[#494D7C] mb-2">Custom Solutions</h4>
                    <p className="text-gray-600">Tailored solutions designed to meet your specific business needs.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-[#494D7C] mb-2">Ongoing Support</h4>
                    <p className="text-gray-600">Comprehensive support and maintenance services after project completion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServiceDetail;
