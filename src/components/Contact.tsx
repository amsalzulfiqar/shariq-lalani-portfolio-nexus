import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { sendEmail } from '@/lib/email-service';
import { toast } from "@/hooks/use-toast";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      await sendEmail(data);
      (e.target as HTMLFormElement).reset();
      setFormSubmitted(true);
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast({
        title: "Error",
        description: "Could not open email client. Please try sending email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background/80" data-section-name="contact">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Get in Touch
          </h2>
        </div>
        
        <div className="bg-secondary/30 backdrop-blur-sm rounded-xl shadow-md p-8 border border-border/20 opacity-0 animate-fade-in grid md:grid-cols-2 gap-8" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <div>
            <p className="text-primary/70 mb-8 max-w-md">
              Please get in touch with booking inquiries or questions. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary/80" />
                <a 
                  href="mailto:info@shariqlalani.com" 
                  className="text-primary/80 hover:text-accent hover:underline"
                >
                  info@shariqlalani.com
                </a>
              </div>
            </div>
            
            {formSubmitted && (
              <Alert className="bg-green-50 text-green-800 border-green-200">
                <AlertTitle>Message Sent!</AlertTitle>
                <AlertDescription>
                  Thank you for reaching out. I'll get back to you soon.
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary/80 mb-4">Send me a Message</h3>
            <form 
              onSubmit={handleSubmit}
              className="space-y-4"
              autoComplete="on"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-primary/70 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-3 py-2 border border-border/30 rounded-md bg-background/50 text-primary focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="Your Name"
                    autoComplete="name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-primary/70 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-3 py-2 border border-border/30 rounded-md bg-background/50 text-primary focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="Your Email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-primary/70 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="w-full px-3 py-2 border border-border/30 rounded-md bg-background/50 text-primary focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Message Subject"
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-primary/70 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  className="w-full px-3 py-2 border border-border/30 rounded-md bg-background/50 text-primary focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#F97316] text-black font-medium py-2 rounded-md hover:bg-orange-600 transition-colors disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
