import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Docs = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center text-realsync-navy hover:text-realsync-teal transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="text-center max-w-3xl mx-auto mt-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Documentation</h1>
          <div className="w-20 h-1.5 bg-realsync-teal rounded mx-auto mb-10"></div>
          
          <div className="bg-realsync-gray/10 rounded-lg p-10 border border-realsync-navy/10">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
              Coming Soon
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">We're working on our documentation</h2>
            <p className="text-realsync-darkgray text-lg mb-6">
              Our team is currently developing comprehensive documentation to help you get the most out of RealSync.
            </p>
            <p className="text-realsync-darkgray">
              In the meantime, please feel free to <Link to="/" className="text-realsync-teal hover:underline">contact us</Link> if you have any questions.
            </p>
          </div>
          
          {/* <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-xl mb-3">Estimated Release</h3>
              <p className="text-realsync-darkgray">Our documentation will be available in the coming weeks.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-xl mb-3">Request Early Access</h3>
              <p className="text-realsync-darkgray">Need documentation sooner? Contact our support team.</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Docs;