import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from "vite-plugin-sitemap"; // Correct import
// https://vitejs.dev/config/

const services = [
  {
 
    title: "Web Development",
    slug: "web-development",
    description: "Custom websites and web applications built with Next.js, React, and modern technologies for optimal performance",
    color: "text-blue-500",
    longDescription: "Our web development services focus on creating modern, responsive, and high-performance websites. We use cutting-edge technologies like React, Next.js, and Node.js to build scalable solutions.",
    features: ["Custom Web Applications", "Responsive Design", "Performance Optimization", "SEO-friendly Development"]
  },
  {
   
    title: "App Development",
    slug: "app-development",
    description: "Native and cross-platform mobile applications that deliver seamless user experiences",
    color: "text-green-500",
    longDescription: "We develop native and cross-platform mobile applications that provide seamless user experiences across all devices. Our team specializes in React Native and Flutter development.",
    features: ["iOS & Android Apps", "Cross-platform Solutions", "UI/UX Design", "App Maintenance"]
  },
  {
  
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Strategic digital marketing solutions to increase your online presence and reach",
    color: "text-orange-500",
    longDescription: "Our digital marketing services help businesses grow their online presence through strategic campaigns, social media management, and content marketing.",
    features: ["Social Media Marketing", "Content Strategy", "Email Campaigns", "PPC Advertising"]
  },
  {
    
    title: "Branding",
    slug: "branding",
    description: "Comprehensive branding services to establish and strengthen your market identity",
    color: "text-purple-500",
    longDescription: "We create compelling brand identities that help businesses stand out in their market. Our branding services include logo design, brand guidelines, and visual identity development.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
  },
  {
   
    title: "E-Commerce Solutions",
    slug: "ecommerce-solutions",
    description: "Custom e-commerce platforms with secure payment gateways and inventory management",
    color: "text-pink-500",
    longDescription: "We build custom e-commerce solutions that help businesses sell online effectively. Our platforms include secure payment processing, inventory management, and customer analytics.",
    features: ["Custom E-commerce Platforms", "Payment Integration", "Inventory Management", "Analytics Dashboard"]
  },
  {
   
    title: "SEO Services",
    slug: "seo-services",
    description: "Search engine optimization to improve your visibility and organic traffic",
    color: "text-yellow-500",
    longDescription: "Our SEO services help improve your website's visibility in search results through technical optimization, content strategy, and link building.",
    features: ["Technical SEO", "Content Optimization", "Link Building", "SEO Analytics"]
  },
  {
    
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description: "Scalable cloud infrastructure and deployment services for your applications",
    color: "text-cyan-500",
    longDescription: "We provide cloud infrastructure solutions that ensure your applications are scalable, secure, and highly available. Our team manages deployment and maintenance.",
    features: ["Cloud Infrastructure", "DevOps", "Security", "Maintenance"]
  },
  {
   
    title: "Analytics & Reporting",
    slug: "analytics-reporting",
    description: "Data-driven insights and comprehensive reporting for informed decision making",
    color: "text-red-500",
    longDescription: "Our analytics services provide actionable insights through comprehensive data analysis and reporting, helping businesses make informed decisions.",
    features: ["Data Analysis", "Custom Reports", "Performance Tracking", "Business Intelligence"]
  }
];

const products = [
  {
    slug: "ezzy-cartz",
    name: "Ezzy Cartz",
    description: "A comprehensive e-commerce solution for modern businesses",
    image: "/lovable-uploads/d739a119-2ac7-4758-b006-9d9ed0c84e89.png",
    features: [
      "Easily create and customize your online store without coding.",
      "Smart AI suggests relevant products based on customer preferences.",
      "Accept payments through multiple options (UPI, credit/debit cards, wallets, etc.).",
      "Customers and sellers can track orders live from purchase to delivery.",
      "Optimized for mobile devices with a quick checkout process."
     
    ],
    demoUrl: "https://www.ezzycartz.com/",
    benefits: [
      " Get your business online quickly, saving time and money on development.",
      "Boosts sales by offering a personalized shopping experience.",
      "Increases customer convenience, leading to higher conversions.",
      "Enhances trust and transparency, improving customer satisfaction.",
      "Reduces cart abandonment, ensuring a smooth shopping experience."
    ]
  },
  {
    slug: "host-my-cv",
    name: "Host My CV",
    description: "Professional online resume hosting and management platform",
    image: "/lovable-uploads/d739a119-2ac7-4758-b006-9d9ed0c84e89.png",
    features: [
      "Create and host your professional CV with a unique link.",
      "Choose from a variety of stylish and professional CV designs.",
      "Edit and update your CV in real-time.",
      "Your CV gets an SEO-friendly URL for better visibility.",
      "See who viewed and interacted with your CV."
    
    ],
    demoUrl: "https://www.hostmycv.in/",
    benefits: [
      "Share your resume easily with recruiters and employers anytime, anywhere.",
      "Make a great first impression with a resume that stands out.",
      "No need to resend PDFs—your latest version is always online.",
      "Increase your chances of being discovered by recruiters through search engines.",
      "Get insights into recruiter interest and follow up effectively."
    ]
  },
  {
    slug: "creator-mind",
    name: "Creator Mind",
    description: "All-in-one platform for content creators and digital artists",
    image: "/lovable-uploads/d739a119-2ac7-4758-b006-9d9ed0c84e89.png",
    features: [
      "Get AI-driven suggestions for content, designs, or business ideas.",
      "Built-in tools for image, video, and text editing with smart enhancements.",
      "Connect, share, and collaborate with other creators in real time.",
      " Integrated analytics, branding, and monetization features.",
      "Directly publish content to social media, blogs, and websites."
    ],
    demoUrl: "https://meta.mcodevbytes.in/",
    benefits: [
      "Saves time and helps creators overcome creative blocks effortlessly.",
      "Makes professional-level content creation quick and easy.",
      "Expand your network, get feedback, and grow your creative influence.",
      "Helps creators turn their passion into a profitable business.",
      "Saves time and ensures a wider reach with just one click."
    ]
  }
];

const serviceList =  services.map(service => `/services/${service.slug}`)
const productList = products.map(product => `/products/${product.slug}`)


export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    sitemap({
      hostname: "https://mcodevbytes.in", // Change this to your actual domain
      dynamicRoutes: [
        "/about",
        "/services",
        "/contact",
        "/products",
      ...serviceList,
       ...productList
      ],
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
