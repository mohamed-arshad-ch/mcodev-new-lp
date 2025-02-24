
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-[#494D7C]">Contact</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for your web development needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-8 border-2 border-[#9b87f5] shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-[#494D7C] mb-2">Address</h3>
                <p className="text-gray-600">Ranchi, Jharkhand, India</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-8 border-2 border-[#7E69AB] shadow-sm">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#494D7C] mb-2">Call Us</h3>
                  <p className="text-gray-600">+91-98472-74569</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 border-2 border-[#7E69AB] shadow-sm">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#494D7C] mb-2">Email Us</h3>
                  <p className="text-gray-600">mcodevbiz@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 border-2 border-[#6E59A5] shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                required
              />
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                required
              ></textarea>
              <div className="text-center">
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
