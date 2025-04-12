
import React from 'react';
import { Mail, Send, Instagram, Youtube } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background/80">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Get in Touch</h2>
            
            <p className="text-primary/70 mb-8 max-w-md">
              Please get in touch with booking enquiries or questions. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 mr-3 text-accent" />
                <a href="mailto:info@shariqlalani.com" className="text-primary/80 hover:text-accent hover:underline">info@shariqlalani.com</a>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/shariqlalanimusic"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-accent hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@SHARIQLALANIMUSIC"
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-accent hover:text-background transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="bg-secondary/30 backdrop-blur-sm rounded-xl shadow-md p-8 border border-border/20 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <h3 className="text-xl font-semibold mb-6 text-primary">Send Me a Message</h3>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-primary/80">Your Name</label>
                  <Input id="name" placeholder="John Doe" className="bg-secondary/40 border-border/30" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-primary/80">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-secondary/40 border-border/30" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1 text-primary/80">Subject</label>
                <Input id="subject" placeholder="How can I help you?" className="bg-secondary/40 border-border/30" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-primary/80">Message</label>
                <Textarea id="message" placeholder="Your message here..." rows={5} className="bg-secondary/40 border-border/30" />
              </div>
              
              <Button type="submit">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
