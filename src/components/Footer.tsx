import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
// import { X } from "lucide-react";
// import ReactMarkdown from 'react-markdown';

const Footer = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false); // Aggiungi questa riga
  
  // Helper function for smooth scrolling
  const scrollToSection = (sectionId: string) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };


  return (
    <footer className="bg-realsync-navy text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-3">
            <div className="flex items-center mb-4">
              <span className="font-bold text-2xl">Real<span className="text-realsync-teal">Sync</span></span>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              RealSync provides innovative solutions for connecting real systems or real-time simulators to remote hardware devices for efficient testing and hardware-in-the-loop testing.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-realsync-teal transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-realsync-teal transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-realsync-teal transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div> */}
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-white/80 hover:text-realsync-teal transition-colors" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#features'); }}>Features</a></li>
              <li><a href="#solutions" className="text-white/80 hover:text-realsync-teal transition-colors" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#solutions'); }}>Solutions</a></li>
              <li><a href="#about" className="text-white/80 hover:text-realsync-teal transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}>About</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-realsync-teal transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}>Contact</a></li>
            </ul>
          </div>
          
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-realsync-teal transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white/80 hover:text-realsync-teal transition-colors">API Reference</a></li>
              <li><a href="#" className="text-white/80 hover:text-realsync-teal transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-white/80 hover:text-realsync-teal transition-colors">Blog</a></li>
            </ul>
          </div> */}
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-white/70">© {new Date().getFullYear()} RealSync. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6 justify-center md:justify-start">
            <a href="#" className="text-white/70 hover:text-realsync-teal transition-colors"
            onClick={(e) => {
              e.preventDefault();
              setShowPrivacyPolicy(true);
            }}>Privacy Policy</a>
            {/* <a href="#" className="text-white/70 hover:text-realsync-teal transition-colors">Terms of Service</a> */}
          </div>
        </div>


      </div>
      {/* Aggiungi questo Dialog component */}
      <Dialog open={showPrivacyPolicy} onOpenChange={setShowPrivacyPolicy}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold">Privacy Policy RealSync</DialogTitle>
              {/* <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setShowPrivacyPolicy(false)}
                className="absolute right-4 top-4"
              >
            
              </Button> */}
            </div>
            <DialogDescription>
            Effective Date: 4 may 2025
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6 text-realsync-darkgray">
            <h3 className="text-lg font-semibold mb-2">1. Information We Collect</h3>
            <p className="mb-4">
            We only collect one type of personal information: your <b>email address</b>, which you may voluntarily submit through our contact form
            </p>
            
            <h3 className="text-lg font-semibold mb-2">2. How We Use Your Information</h3>
            <p className="mb-4">
            Your email address is used <b>solely to respond to your inquiries</b>. We do not use this information for marketing or promotional purposes.
            </p>

            <h3 className="text-lg font-semibold mb-2">3. Sharing of Information</h3>
            <p className="mb-4">
            We <b>do not share</b> your email address or any other personal information with third parties.
            </p>


            <h3 className="text-lg font-semibold mb-2">4. Data Security</h3>
            <p className="mb-4">
            While our site uses standard web hosting practices, you should avoid submitting sensitive information.
            </p>
            <h3 className="text-lg font-semibold mb-2">5. Cookies and Tracking</h3>

            <p className="mb-4">
            Our website <b>does not use cookies or any tracking technologies</b>.
            </p>
            <h3 className="text-lg font-semibold mb-2">6. Contact Us</h3>
            <p className="mb-4">
            If you have any questions about this Privacy Policy or how your information is handled, please contact us via the form on our website or via the mail address.
            </p>

            
            {/* Aggiungi altre sezioni della privacy policy qui */}
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
