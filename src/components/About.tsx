
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-realsync-navy to-realsync-teal opacity-30 blur"></div>
              <div className="relative h-[400px] bg-realsync-navy/90 rounded-lg flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
                    <span className="text-4xl">🔄</span>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3">Our Mission</h3>
                  <p className="text-white/80">
                    To revolutionize hardware-in-the-loop testing by enabling seamless remote testing capabilities for engineering teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">About RealSync</span>
            </h2>
            <p className="text-realsync-darkgray mb-4">
              Founded by a team of experienced hardware and software engineers, RealSync emerged from our own struggles with hardware-in-the-loop testing across distributed teams.
            </p>
            <p className="text-realsync-darkgray mb-4">
              We realized that as engineering teams become increasingly distributed, the need for remote hardware testing capabilities was growing exponentially. Traditional solutions were expensive, complicated, and often required shipping physical hardware between locations.
            </p>
            <p className="text-realsync-darkgray mb-4">
              Our technology bridges the gap between simulation environments and physical hardware, enabling seamless remote testing with ultra-low latency. This allows engineering teams to collaborate effectively regardless of their physical location.
            </p>
            {/* <p className="text-realsync-darkgray">
              Today, RealSync solutions are used by leading companies in automotive, aerospace, industrial automation, and energy sectors to accelerate their development cycles and improve product quality.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
