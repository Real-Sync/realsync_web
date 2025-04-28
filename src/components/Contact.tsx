
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://realsync.pythonanywhere.com/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        toast({
          title: "Message sent",
          description: "We've received your message and will get back to you soon.",
        });
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        // Handle error response
        const errorData = await response.text();
        console.error('Error sending message:', errorData);
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Network error:', error);
      toast({
        title: "Network error",
        description: "Could not connect to our servers. Please check your internet connection.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
    
  //   // Simulate form submission
  //   setTimeout(() => {
  //     toast({
  //       title: "Message sent",
  //       description: "We've received your message and will get back to you soon.",
  //     });
  //     setFormData({
  //       name: '',
  //       email: '',
  //       company: '',
  //       message: ''
  //     });
  //     setIsSubmitting(false);
  //   }, 1500);
  // };

  return (
    <section id="contact" className="py-20 bg-realsync-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-realsync-navy to-realsync-teal p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="mb-6">
                Interested in learning more about our hardware-in-the-loop testing solutions? Contact us today.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-white/80">realsync.info@gmail.com</p>
                </div>
                
                {/* <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-white/80">+39 xxxxxxxxx</p>
                </div> */}
                
                {/* <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-white/80">
                    via xxx<br />
                    Turin, CA 10138<br />
                    Italy
                  </p>
                </div> */}
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-6 text-realsync-navy">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-realsync-lightblue/30 focus:border-realsync-teal"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-realsync-lightblue/30 focus:border-realsync-teal"
                  />
                </div>
                
                <div>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="border-realsync-lightblue/30 focus:border-realsync-teal"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-realsync-lightblue/30 focus:border-realsync-teal min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-realsync-teal hover:bg-realsync-navy transition-colors w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
