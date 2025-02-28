
import { useState } from "react";
import { ChevronDown, Menu, X, ShoppingCart, FileText, Palette } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const location = useLocation();

  const products = [
    {
      name: "Ezzy Cartz",
      slug: "ezzy-cartz",
      url: "/products/ezzy-cartz",
      icon: <ShoppingCart className="w-4 h-4 mr-2" />
    },
    {
      name: "Host My CV",
      slug: "host-my-cv",
      url: "/products/host-my-cv",
      icon: <FileText className="w-4 h-4 mr-2" />
    },
    {
      name: "Creator Mind",
      slug: "creator-mind",
      url: "/products/creator-mind",
      icon: <Palette className="w-4 h-4 mr-2" />
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-primary transition-colors">
              MCODEV
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                location.pathname === "/" ? "text-primary" : "text-gray-600 hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                location.pathname === "/about" ? "text-primary" : "text-gray-600 hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`font-medium transition-colors ${
                location.pathname === "/services" ? "text-primary" : "text-gray-600 hover:text-primary"
              }`}
            >
              Services
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-600 font-medium hover:text-primary transition-colors"
              >
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 animate-fade-down">
                  {products.map((product) => (
                    <Link 
                      key={product.slug}
                      to={product.url}
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-50 flex items-center"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {product.icon}
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                location.pathname === "/contact" ? "text-primary" : "text-gray-600 hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-down">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`px-4 py-2 font-medium transition-colors ${
                  location.pathname === "/" ? "text-primary bg-gray-50" : "text-gray-600 hover:text-primary hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-4 py-2 font-medium transition-colors ${
                  location.pathname === "/about" ? "text-primary bg-gray-50" : "text-gray-600 hover:text-primary hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`px-4 py-2 font-medium transition-colors ${
                  location.pathname === "/services" ? "text-primary bg-gray-50" : "text-gray-600 hover:text-primary hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              {/* Mobile Products Dropdown */}
              <div className="px-4 py-2">
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className="w-full flex items-center justify-between font-medium text-gray-600 hover:text-primary"
                >
                  Products
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileProductsOpen && (
                  <div className="mt-2 pl-4 space-y-2 border-l-2 border-gray-100">
                    {products.map((product) => (
                      <Link 
                        key={product.slug}
                        to={product.url}
                        className="block py-2 text-gray-600 hover:text-primary flex items-center"
                        onClick={() => {
                          setIsMobileProductsOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {product.icon}
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link 
                to="/contact" 
                className={`px-4 py-2 font-medium transition-colors ${
                  location.pathname === "/contact" ? "text-primary bg-gray-50" : "text-gray-600 hover:text-primary hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
