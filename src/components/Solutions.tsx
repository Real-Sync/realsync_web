
import { Button } from "@/components/ui/button";

const Solutions = () => {
  const solutions = [
    {
      id: 1,
      title: "Automotive",
      description: "Enable remote testing of ECUs and vehicle systems with our HIL solutions tailored for automotive development.",
      image: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Aerospace",
      description: "Test flight control systems and avionics remotely with precision and reliability.",
      image: "bg-gradient-to-br from-purple-500 to-purple-700"
    },
    {
      id: 3,
      title: "Industrial Automation",
      description: "Connect PLC simulators to physical devices for comprehensive testing of industrial control systems.",
      image: "bg-gradient-to-br from-green-500 to-green-700"
    },
    {
      id: 4,
      title: "Energy Systems",
      description: "Test smart grid components and renewable energy systems with our specialized HIL solutions.",
      image: "bg-gradient-to-br from-amber-500 to-amber-700"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-realsync-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Industry Solutions</span>
          </h2>
          <p className="text-realsync-darkgray max-w-2xl mx-auto">
            Our hardware-in-the-loop testing solutions are tailored to meet the needs of diverse industries and applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <div 
              key={solution.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className={`${solution.image} h-48 flex items-center justify-center text-white text-2xl font-bold`}>
                {solution.title}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{solution.title} Solutions</h3>
                <p className="text-realsync-darkgray mb-4">{solution.description}</p>
                {/* <Button variant="outline" className="border-realsync-teal text-realsync-teal hover:bg-realsync-teal/5">
                  Learn more
                </Button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
