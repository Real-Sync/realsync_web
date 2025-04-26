
import { Check } from "lucide-react";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Real-Time Connectivity",
      description: "Connect simulators to remote hardware with ultra-low latency for accurate test results.",
      iconBg: "bg-blue-100",
      textColor: "text-blue-800"
    },
    {
      id: 2, 
      title: "Secure Data Transfer",
      description: "Enterprise-grade encryption ensures your testing data remains protected.",
      iconBg: "bg-purple-100",
      textColor: "text-purple-800"
    },
    {
      id: 3,
      title: "Seamless Integration",
      description: "Works with all major simulation platforms and testing environments.",
      iconBg: "bg-green-100",
      textColor: "text-green-800"
    },
    {
      id: 4,
      title: "Flexible Deployment",
      description: "On-premises or cloud deployment options to suit your organization's needs.",
      iconBg: "bg-amber-100",
      textColor: "text-amber-800"
    },
    {
      id: 5,
      title: "Remote Collaboration",
      description: "Enable engineering teams to collaborate from anywhere in the world.",
      iconBg: "bg-pink-100",
      textColor: "text-pink-800"
    },
    // {
    //   id: 6,
    //   title: "Advanced Analytics",
    //   description: "Gain insights from comprehensive test data analysis and reporting.",
    //   iconBg: "bg-cyan-100",
    //   textColor: "text-cyan-800"
    // }
  ];

  return (
    <section id="features" className="pb-10 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-realsync-darkgray max-w-2xl mx-auto">
            Our connection solution provides everything you need to connect real-time simulators or real systems with remote hardware devices for efficient testing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-500"
            >
              <div className={`${feature.iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                <Check className={`w-6 h-6 ${feature.textColor}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-realsync-darkgray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
