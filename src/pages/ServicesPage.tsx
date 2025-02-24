import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { 
  Globe, 
  Smartphone, 
  Megaphone, 
  Paintbrush, 
  ShoppingCart, 
  BarChart, 
  Search,
  Cloud,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export const services = [
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Web Development",
    slug: "web-development",
    description: "Custom websites and web applications built with Next.js, React, and modern technologies for optimal performance",
    color: "text-blue-500",
    longDescription: "Our web development services focus on creating modern, responsive, and high-performance websites. We use cutting-edge technologies like React, Next.js, and Node.js to build scalable solutions.",
    features: ["Custom Web Applications", "Responsive Design", "Performance Optimization", "SEO-friendly Development"]
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "App Development",
    slug: "app-development",
    description: "Native and cross-platform mobile applications that deliver seamless user experiences",
    color: "text-green-500",
    longDescription: "We develop native and cross-platform mobile applications that provide seamless user experiences across all devices. Our team specializes in React Native and Flutter development.",
    features: ["iOS & Android Apps", "Cross-platform Solutions", "UI/UX Design", "App Maintenance"]
  },
  {
    icon: <Megaphone className="w-10 h-10" />,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Strategic digital marketing solutions to increase your online presence and reach",
    color: "text-orange-500",
    longDescription: "Our digital marketing services help businesses grow their online presence through strategic campaigns, social media management, and content marketing.",
    features: ["Social Media Marketing", "Content Strategy", "Email Campaigns", "PPC Advertising"]
  },
  {
    icon: <Paintbrush className="w-10 h-10" />,
    title: "Branding",
    slug: "branding",
    description: "Comprehensive branding services to establish and strengthen your market identity",
    color: "text-purple-500",
    longDescription: "We create compelling brand identities that help businesses stand out in their market. Our branding services include logo design, brand guidelines, and visual identity development.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
  },
  {
    icon: <ShoppingCart className="w-10 h-10" />,
    title: "E-Commerce Solutions",
    slug: "ecommerce-solutions",
    description: "Custom e-commerce platforms with secure payment gateways and inventory management",
    color: "text-pink-500",
    longDescription: "We build custom e-commerce solutions that help businesses sell online effectively. Our platforms include secure payment processing, inventory management, and customer analytics.",
    features: ["Custom E-commerce Platforms", "Payment Integration", "Inventory Management", "Analytics Dashboard"]
  },
  {
    icon: <Search className="w-10 h-10" />,
    title: "SEO Services",
    slug: "seo-services",
    description: "Search engine optimization to improve your visibility and organic traffic",
    color: "text-yellow-500",
    longDescription: "Our SEO services help improve your website's visibility in search results through technical optimization, content strategy, and link building.",
    features: ["Technical SEO", "Content Optimization", "Link Building", "SEO Analytics"]
  },
  {
    icon: <Cloud className="w-10 h-10" />,
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description: "Scalable cloud infrastructure and deployment services for your applications",
    color: "text-cyan-500",
    longDescription: "We provide cloud infrastructure solutions that ensure your applications are scalable, secure, and highly available. Our team manages deployment and maintenance.",
    features: ["Cloud Infrastructure", "DevOps", "Security", "Maintenance"]
  },
  {
    icon: <BarChart className="w-10 h-10" />,
    title: "Analytics & Reporting",
    slug: "analytics-reporting",
    description: "Data-driven insights and comprehensive reporting for informed decision making",
    color: "text-red-500",
    longDescription: "Our analytics services provide actionable insights through comprehensive data analysis and reporting, helping businesses make informed decisions.",
    features: ["Data Analysis", "Custom Reports", "Performance Tracking", "Business Intelligence"]
  }
];

const ServicesPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "url": `https://mcodevbytes.in/services/${service.slug}`
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Our Services - Web Development, App Development & Digital Marketing"
        description="Explore MCODEV Bytes' comprehensive range of digital services including web development, app development, digital marketing, and more. Transform your business with our expertise."
        keywords="web development, app development, digital marketing, SEO services, cloud solutions, IT services ranchi"
        canonical="https://mcodevbytes.in/services"
      />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-[#494D7C]">Our Services</h1>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Explore our comprehensive range of digital services designed to help your business grow
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={`/services/${service.slug}`}
                  className="bg-white p-8 rounded-lg border-2 border-[#7E69AB] hover:shadow-lg transition-all duration-300 group animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-20 h-20 rounded-lg bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors ${service.color}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#494D7C] mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
