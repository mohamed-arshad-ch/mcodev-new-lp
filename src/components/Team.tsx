
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Team = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-[#494D7C]">Team</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              image: "/lovable-uploads/2d204280-40ed-446d-811c-86675c605e50.png",
              name: "Walter White",
              position: "Chief Executive Officer",
              socials: true
            },
            {
              image: "/lovable-uploads/e84e8a4e-9ada-4901-823a-24016efcb1d8.png",
              name: "Sarah Jhonson",
              position: "Product Manager",
              socials: false
            },
            {
              image: "/lovable-uploads/bc643f59-dccc-4098-ac08-71ca34a880ed.png",
              name: "William Anderson",
              position: "CTO",
              socials: true
            },
            {
              image: "/lovable-uploads/d8ecd4ba-a972-46e7-8649-d6e5617a26f1.png",
              name: "Amanda Jepson",
              position: "Accountant",
              socials: false
            }
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden border-2 border-[#9b87f5] hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#494D7C] mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4">{member.position}</p>
                {member.socials && (
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="text-gray-400 hover:text-[#494D7C] transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#494D7C] transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#494D7C] transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#494D7C] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
