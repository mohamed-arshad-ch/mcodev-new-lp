
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#494D7C]">MCODEV</h3>
            <div className="space-y-2">
              <p className="text-gray-600">Kerala, India</p>
             
              <p className="text-gray-600">
                <span className="font-semibold">Phone:</span> +91-98472-74569
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span> mcodevbiz@gmail.com
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#494D7C]">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">About us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Terms of service</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Privacy policy</a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#494D7C]">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Web Design</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Product Management</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Marketing</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Graphic Design</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              {[
                { Icon: Twitter, href: "https://x.com/MCODEVBYTES" },
                { Icon: Facebook, href: "https://www.facebook.com/mcodevbytes" },
                { Icon: Instagram, href: "https://www.instagram.com/mcodev_bytes/" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/mcodev-bytes" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="text-center md:text-right text-gray-600">
              <p>
                © Copyright <span className="font-semibold">MCODEV</span>. All Rights Reserved
              </p>
              <p>
                Designed by{" "}
                <a href="#" className="text-primary hover:underline">
                  MCODEV Bytes
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
