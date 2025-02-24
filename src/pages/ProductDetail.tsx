
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Loader from "@/components/Loader";

const products = [
  {
    slug: "ezzy-cartz",
    name: "Ezzy Cartz",
    description: "A comprehensive e-commerce solution for modern businesses",
    image: "/lovable-uploads/d739a119-2ac7-4758-b006-9d9ed0c84e89.png",
    features: [
      "Easy product management",
      "Secure payment integration",
      "Responsive design",
      "Inventory tracking",
      "Analytics dashboard",
      "Customer management"
    ],
    demoUrl: "https://www.ezzycartz.com/",
    benefits: [
      "Increase online sales",
      "Streamline operations",
      "Enhance customer experience",
      "Real-time inventory management"
    ]
  },
  {
    slug: "host-my-cv",
    name: "Host My CV",
    description: "Professional online resume hosting and management platform",
    image: "/lovable-uploads/d739a119-2ac7-4758-b006-9d9ed0c84e89.png",
    features: [
      "Custom domain support",
      "Multiple resume versions",
      "Professional templates",
      "Analytics tracking",
      "SEO optimization",
      "Mobile responsive"
    ],
    demoUrl: "https://hostmycv.com/",
    benefits: [
      "Stand out to employers",
      "Track application views",
      "Easy updates and management",
      "Professional online presence"
    ]
  },
  {
    slug: "creator-mind",
    name: "Creator Mind",
    description: "All-in-one platform for content creators and digital artists",
    image: "/lovable-uploads/d739a119-2ac7-4758-b006-9d9ed0c84e89.png",
    features: [
      "Project management",
      "Content scheduling",
      "Collaboration tools",
      "Analytics dashboard",
      "Asset management",
      "Revenue tracking"
    ],
    demoUrl: "https://creatormind.com/",
    benefits: [
      "Streamline content creation",
      "Improve collaboration",
      "Track performance metrics",
      "Manage multiple platforms"
    ]
  }
];

const ProductDetail = () => {
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!product) {
    navigate("/");
    return null;
  }

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600">
                {product.description}
              </p>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">Key Features</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">Benefits</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={() => window.open(product.demoUrl, '_blank')}
                >
                  View Demo
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5"
                  onClick={() => navigate('/contact')}
                >
                  Contact Sales
                </Button>
              </div>
            </div>
            <div className="relative lg:ml-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
