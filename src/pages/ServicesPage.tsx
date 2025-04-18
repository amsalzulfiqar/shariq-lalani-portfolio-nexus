import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Music, Sliders, Music2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import FeaturedWork from '@/components/FeaturedWork';
import Testimonials from '@/components/Testimonials';
import { useLayoutEffect } from "react";

const ServicesPage = () => {
  useLayoutEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const services = [
    {
      id: "production",
      title: "Music Production",
      description: "From indie artists to industry professionals, I offer music production that meets the needs of everyone. Whether you're a solo artist, a band refining your sound, or a filmmaker searching for the perfect score, I provide tailored services that suit your unique project. With years of experience working across genres such as Pop, Jazz, Hip Hop, World Music, Electronic, Orchestral, and more, I guide you from initial concept to final mix, ensuring each track gets the attention and professionalism it deserves.",
      icon: <Music className="w-8 h-8" />
    },
    {
      id: "mixing",
      title: "Mixing",
      description: "Transform your raw tracks into a polished, professional sound. I specialize in mixing for all genres, ensuring that your music stands out on any platform. With a keen ear for detail and a deep understanding of sonic balance, I'll help your music reach its full potential. Each mixing project receives personalized attention to bring out the best in your recordings while maintaining your artistic vision.",
      icon: <Sliders className="w-8 h-8" />
    },
    {
      id: "composition",
      title: "Composition & Scoring",
      description: "Looking for custom music? Whether for an album, film, or ad, I compose original pieces that capture the essence of your project and bring it to life with emotional depth. My background in various musical styles allows me to create unique compositions that resonate with your audience. From concept to completion, I'll work closely with you to ensure the music perfectly complements your creative vision.",
      icon: <Music2 className="w-8 h-8" />
    }
  ];

  const featuredWorks = [
    {
      title: "Addison Jordan - Keep That Same Old Feeling",
      role: "Recording, Mixing",
      link: "https://open.spotify.com/track/6ZrT4g0XttXoyOA8XzHOGU"
    },
    {
      title: "Prisha Mehta - Leaving you (For now)",
      role: "Production, Recording, Mixing",
      link: "https://open.spotify.com/track/4GxH4w1kwuR7VtbBWpALn1"
    },
    {
      title: "Mike Jones - Slums",
      role: "Recording",
      link: "https://open.spotify.com/track/0sG5nT03mSwzW4kg5xXcWL"
    },
    {
      title: "Quentin Moore Ft. Snoop Dogg - BFU (Remix)",
      role: "Recording",
      link: "https://open.spotify.com/track/3HgwUyJXSP1i5j4ZVxjvC7"
    },
    {
      title: "Bobby Sparks II - Letter to Mumbai",
      role: "Production, Recording",
      link: "https://open.spotify.com/track/7wxjnfO4CBkgQodEwqP7Gu"
    },
    {
      title: "Bobby Sparks II - Musical Diarrhea",
      role: "Tracking Engineer",
      link: "https://open.spotify.com/track/1FTn7MpMDidWYLyKdj5680"
    },
    {
      title: "Bobby Sparks II - Sodom and Gomorrah",
      role: "Tracking Engineer",
      link: "https://open.spotify.com/track/6kSwjQHgWVzsSPsNGEEIx7"
    },
    {
      title: "Bobby Sparks II - Mayday",
      role: "Tracking Engineer",
      link: "https://open.spotify.com/track/16l5PQbX9X4H8QLdsCcqHr"
    },
    {
      title: "Addison Jordan - Reverence",
      role: "Recording, Mixing",
      link: "https://open.spotify.com/track/2N8ATWkeG3Qks1KaZzas2C"
    },
    {
      title: "Porte Diferente - El Pochito",
      role: "Recording, Mixing",
      link: "https://open.spotify.com/track/52UekrYckRIekXj7rlO2hl"
    },
    {
      title: "Frank Hamlin, The Brothers McDavid - My Favorite Love Song",
      role: "Recording, Mixing",
      link: "https://open.spotify.com/track/400fAkHKjAnrUulH8rx8zm"
    },
    {
      title: "Porte Diferente - Quedate Aqui",
      role: "Recording, Mixing",
      link: "https://open.spotify.com/track/3fcpIfwb6VBjj9bZKXnoxK"
    },
    {
      title: "Sophie Drago - Perfect Show",
      role: "Production, Recording, Mixing",
      link: "https://open.spotify.com/track/5EAtwsiuev9rDNBjaDNug7"
    },
    {
      title: "Sarah Hanks - Eternity in my mind",
      role: "Production, Recording, Mixing",
      link: "https://open.spotify.com/track/2f0fDWcm7Wevh0ukzFI67V"
    },
    {
      title: "Zak Azoury - Christmas Love",
      role: "Production, Recording, Mixing",
      link: "https://open.spotify.com/track/4uhAogfaSYeCApgDxs76Zt"
    },
    {
      title: "Zak Azoury - Might as well be coal",
      role: "Production, Recording, Mixing",
      link: "https://open.spotify.com/track/781O7fXNl3sgDL80gHSX1H"
    },
    {
      title: "Shama Judah - Shikwa",
      role: "Mixing, Mastering",
      link: "https://open.spotify.com/track/3TOeHJ8Y08UqsiEaIFVs0V"
    },
    {
      title: "Altercations - Wait",
      role: "Recording, Mixing",
      link: "https://open.spotify.com/track/6rdMb9dW9zonR3GfvbeZ7x"
    },
    {
      title: "Addison Jodan - Queen Val",
      role: "Recording, Mixing",
      link: "https://open.spotify.com/track/3A1IUAtKIsteyHTSPIcrbi"
    },
    {
      title: "Nibal Malshi - Isma' Albi",
      role: "Production, Recording, Mixing",
      link: "https://open.spotify.com/track/5CkPDhVkqmjNqRTtfmltFx"
    },
    {
      title: "Oasis Worship - My Revival",
      role: "Recording, Mixing",
      link: "https://open.spotify.com/track/243BMQW71Vt0MgCGRtQx8K"
    },
    {
      title: "Akshara - Ethereal",
      role: "Production",
      link: "https://open.spotify.com/track/2m5QniDzGkjcHcTCHj4Qc5"
    }
  ];

  const featuredVideos = [
    {
      title: "Leaving You (for now) - Music Video",
      description: "Produced, Engineered and Mixed",
      embedId: "QGp-qfhQtAc"
    },
    {
      title: "Nibal Malshi - Isma' Albi (Majida El Roumi)",
      description: "Produced, Engineered and Mixed",
      embedId: "U48ew-pjpWA"
    },
    {
      title: "Sarah Hanks - \"Eternity in my Mind\"",
      description: "Produced, Engineered and Mixed",
      embedId: "RH1Fhqm_6V0"
    },
    {
      title: "Sabina Chamoy - Full Moon (Official Music Video)",
      description: "Produced, Engineered and Mixed",
      embedId: "T1mE5HwH_gQ"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section with reduced height like in Bio page */}
      <div className="h-[50vh] relative">
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/lovable-uploads/688646cc-2ad2-4d62-a487-e64b409ec429.png" 
            alt="Shariq in studio" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Navigation */}
        <div className="relative z-10">
          <Navbar />
          
          {/* Hero content */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/90 to-transparent">
            <div className="container-custom">
              <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">Services</h1>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-10">
        <section className="py-12 bg-gradient-to-b from-background to-secondary/10">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary text-center">Bring Your Music to Life</h2>
              <p className="text-xl text-primary/80 text-center">
                Music isn't just sound—it's an experience. I produce, mix, and compose tracks that capture emotion and depth. 
                Let's create something unforgettable.
              </p>
            </div>
            
            <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-8 border border-border/20">
              <p className="text-primary/80 leading-relaxed">
                Every song has a story, and my job is to bring that story to life. Whether it's producing a full track, 
                fine-tuning a mix, or composing original music, I focus on delivering a sound that resonates. With experience 
                working alongside industry-leading artists, I craft music with depth, clarity, and emotional impact. 
                Whether you're crafting your debut single or scoring a cinematic project, I ensure a polished, 
                professional sound that stands out.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background relative" id="services">
          {/* Background Image with Overlay - fixing the visibility issue */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 z-0" 
            style={{ backgroundImage: 'url("/lovable-uploads/8c8728bf-ab7a-4c4c-b4f8-dcb8665ede8c.png")' }}
          ></div>
          
          <div className="container-custom relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-primary text-center">Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  id={service.id}
                  className="bg-secondary/30 backdrop-blur-sm rounded-xl p-8 border border-border/10 h-full"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/50 text-accent mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-primary">{service.title}</h3>
                  </div>
                  <p className="text-primary/80 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-background">
          <FeaturedWork />
        </div>

        <div className="bg-secondary/10">
          <Testimonials />
        </div>

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
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
