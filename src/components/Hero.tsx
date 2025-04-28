import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import mapSvg from "@/assets/map.svg";


const Hero = () => {
  return (
    <div className="relative pt-20 bg-gradient-to-b from-white to-realsync-gray">
      <div className="container mx-auto px-6 pt-16 pb-44">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 md:pr-12 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Remote Hardware Testing</span>
              <br />Made Simple
            </h1>
            <p className="text-lg md:text-xl text-realsync-darkgray mt-4">
              Connect your real-time simulators to remote hardware devices with our innovative gateway technology. Test faster, collaborate better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 relative z-10">
              <Button className="bg-realsync-teal hover:bg-realsync-navy transition-all duration-200 text-white px-8 py-6 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-realsync-navy text-realsync-navy hover:bg-realsync-navy/5 transition-all duration-200 px-8 py-6 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-realsync-teal to-realsync-lightblue opacity-75 blur animate-pulse-glow"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="bg-realsync-navy p-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="h-64 bg-realsync-gray/60 rounded flex items-center justify-center">
                    <div className="text-center">
         
                      {/* <div className="w-24 h-24 bg-realsync-navy/10 mx-auto rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-realsync-teal/20 rounded-full flex items-center justify-center">
                          <div className="w-8 h-8 bg-realsync-teal rounded-full">
                          
                          </div>
                        </div>                
                      </div> */}
                      <div className="mx-auto">
                          <img 
                            src={mapSvg} 
                            alt="RealSync Gateway" 
                            className="w-28 md:w-36 lg:w-48"
                          />
                        </div>
                      <p className="text-sm text-realsync-darkgray mt-1">RealSync interface</p>
                      <div className="mt-4 flex justify-center space-x-2">
                        <div className="h-1 w-16 bg-realsync-teal animate-pulse rounded"></div>
                        <div className="h-1 w-8 bg-realsync-lightblue rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-white">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,170.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
