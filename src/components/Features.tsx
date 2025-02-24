
import { 
  Eye, Infinity, GraduationCap, Hexagon, Star, Grid, 
  Activity, Video, Sun, Shield, Globe, Users, Database,
  Cloud, Code, Zap 
} from "lucide-react";

const Features = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-[#494D7C]">Comprehensive SaaS Features</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our extensive range of features designed to enhance your web application
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Security Features",
              color: "text-amber-500"
            },
            {
              icon: <Cloud className="w-6 h-6" />,
              title: "Cloud Integration",
              color: "text-blue-500"
            },
            {
              icon: <Database className="w-6 h-6" />,
              title: "Data Management",
              color: "text-pink-500"
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "User Management",
              color: "text-purple-500"
            },
            {
              icon: <Globe className="w-6 h-6" />,
              title: "Multi-tenant Architecture",
              color: "text-sky-500"
            },
            {
              icon: <Activity className="w-6 h-6" />,
              title: "Analytics Dashboard",
              color: "text-orange-500"
            },
            {
              icon: <Code className="w-6 h-6" />,
              title: "API Integration",
              color: "text-teal-500"
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Real-time Updates",
              color: "text-indigo-500"
            },
            {
              icon: <Star className="w-6 h-6" />,
              title: "Custom Workflows",
              color: "text-amber-700"
            },
            {
              icon: <Grid className="w-6 h-6" />,
              title: "Scalable Infrastructure",
              color: "text-rose-500"
            },
            {
              icon: <Eye className="w-6 h-6" />,
              title: "Access Control",
              color: "text-red-500"
            },
            {
              icon: <Infinity className="w-6 h-6" />,
              title: "Automated Backups",
              color: "text-green-500"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border-2 border-[#6E59A5] hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`flex items-center space-x-3 ${feature.color}`}>
                {feature.icon}
                <h3 className="text-lg font-semibold text-[#494D7C]">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
