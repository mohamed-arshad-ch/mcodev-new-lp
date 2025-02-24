import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import OurServices from "@/components/OurServices";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (remove this in production and use real loading states)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/919847274569`, '_blank');
  };

  if (loading) return <Loader />;

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Mcodev Bytes | Innovative Software Development & Digital Solutions</title>
        <meta 
          name="description" 
          content="Mcodev Bytes delivers cutting-edge software development, web solutions, and digital services. Transform your business with our expert tech solutions and innovative development approaches." 
        />
        <meta 
          name="keywords" 
          content="Mcodev Bytes, Mcodev, software development, web development, digital solutions, tech company, IT services" 
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content="Mcodev Bytes | Innovative Software Development & Digital Solutions" />
        <meta 
          property="og:description" 
          content="Mcodev Bytes delivers cutting-edge software development, web solutions, and digital services. Expert tech solutions for modern businesses." 
        />
        <meta property="og:image" content="/mcodev-logo-1.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content="Mcodev Bytes | Leading Software Development Company" />
        <meta 
          property="twitter:description" 
          content="Mcodev Bytes delivers cutting-edge software development, web solutions, and digital services. Expert tech solutions for modern businesses." 
        />
        <meta property="twitter:image" content="/mcodev-logo-1.png.jpg" />

        {/* Additional SEO tags */}
        <link rel="canonical" href={window.location.href} />
        <meta name="robots" content="index, follow" />
        
        {/* Structured Data for Mcodev Bytes */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareCompany",
            "name": "Mcodev Bytes",
            "alternateName": "Mcodev",
            "url": window.location.href,
            "logo": "/mcodev-logo.png",
            "telephone": "+919847274569",
            "description": "Mcodev Bytes is a leading software development company specializing in custom software solutions, web development, and digital services.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://x.com/MCODEVBYTES",
              "https://www.facebook.com/mcodevbytes",
              "https://www.instagram.com/mcodev_bytes/",
              "https://www.linkedin.com/company/mcodev-bytes"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Mcodev Bytes Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Software Development",
                    "description": "Tailored software solutions for business needs"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Development",
                    "description": "Professional web application development services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Solutions",
                    "description": "Comprehensive digital transformation services"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <About />
        <WhyUs />
        <OurServices />
        <Services />
        <Features />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />
        
        {/* WhatsApp Float Button */}
        <button
          onClick={handleWhatsAppClick}
          className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-200 z-50"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default Index;
