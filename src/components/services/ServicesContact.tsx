
import React from 'react';
import { Button } from "@/components/ui/button";

const ServicesContact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/10">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">Get in Touch</h2>
        <p className="text-primary/70 mb-8 max-w-2xl mx-auto">
          Please get in touch with booking enquiries or questions. I'm always open to discussing new projects and collaborations.
        </p>
        <Button asChild size="lg">
          <a href="mailto:info@shariqlalani.com">Contact Me</a>
        </Button>
      </div>
    </section>
  );
};

export default ServicesContact;
