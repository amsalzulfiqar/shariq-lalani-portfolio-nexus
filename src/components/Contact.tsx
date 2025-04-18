import React, { useState } from 'react';
import { Mail, Send, Youtube, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Check if Supabase is configured properly
      if (!isSupabaseConfigured()) {
        console.error("Supabase is not configured properly");
        toast({
          title: "Configuration Error",
          description: "Email service is not properly configured. Please contact the site administrator.",
          variant: "destructive",
        });
        return;
      }
      
      // Send email via Supabase Edge Function
      const { error } = await supabase.functions.invoke('send-email', {
        body: {
          to: 'info@shariqlalani.com',
          subject: formData.subject,
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
      });
      
      if (error) {
        throw new Error(error.message);
      }
      
      // Reset form after submission
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      toast({
        title: "Success",
        description: "Your message has been sent successfully. Thank you for reaching out!",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="section-padding bg-background/80">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Get in Touch
          </h2>
        </div>
        
        <div className="bg-secondary/30 backdrop-blur-sm rounded-xl shadow-md p-8 border border-border/20 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-primary/70 mb-8 max-w-md">
                Please get in touch with booking enquiries or questions. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary/80" />
                  <a href="mailto:info@shariqlalani.com" className="text-primary/80 hover:text-accent hover:underline">info@shariqlalani.com</a>
                </div>
                
                <div className="mb-4 flex items-center gap-2">
                  <Instagram className="w-5 h-5 text-primary/80" />
                  <a href="https://www.instagram.com/shariqlalanimusic" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-accent hover:underline">
                    @shariqlalanimusic
                  </a>
                </div>
                
                <div className="mb-4 flex items-center gap-2">
                  <Youtube className="w-5 h-5 text-primary/80" />
                  <a href="https://www.youtube.com/@SHARIQLALANIMUSIC" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-accent hover:underline">
                    @SHARIQLALANIMUSIC
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary">Send Me a Message</h3>
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-primary/80">Your Name</label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="bg-secondary/40 border-border/30"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-primary/80">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-secondary/40 border-border/30"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1 text-primary/80">Subject</label>
                  <Input 
                    id="subject" 
                    placeholder="How can I help you?" 
                    className="bg-secondary/40 border-border/30"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-primary/80">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message here..." 
                    rows={5} 
                    className="bg-secondary/40 border-border/30"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button type="submit" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
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
