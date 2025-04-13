import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Music, Sliders, Music2, Mic, Headphones } from 'lucide-react';
import FeaturedWork from '@/components/FeaturedWork';
import Testimonials from '@/components/Testimonials';

const ServicesPage = () => {
  const services = [
    {
      id: "mixing",
      title: "Mixing",
      description: "Transform your raw tracks into a polished, professional sound. I specialize in mixing for all genres, ensuring that your music stands out on any platform. With a keen ear for detail and a deep understanding of sonic balance, I'll help your music reach its full potential. Each mixing project receives personalized attention to bring out the best in your recordings while maintaining your artistic vision.",
      icon: <Sliders className="w-8 h-8" />,
      image: "/lovable-uploads/03f90ead-293e-458a-9fc1-f7d151fda84f.png"
    },
    {
      id: "recording",
      title: "Recording",
      description: "Whether it's a simple vocal or a full orchestra, I have the skills and experience to capture the magic. Using top-quality equipment and years of experience, I ensure every recording session produces the best possible results. My studio provides a comfortable and creative environment that helps artists perform at their best, resulting in recordings that truly shine.",
      icon: <Mic className="w-8 h-8" />,
      image: "/lovable-uploads/3e9f29bd-2d4f-4d70-abab-9b96b6e19da2.png"
    },
    {
      id: "production",
      title: "Production",
      description: "I'm great at bringing out the best in an artist and building teams that realize their vision to the fullest. From indie artists to industry professionals, I offer music production that meets the needs of everyone. Whether you're a solo artist, a band refining your sound, or a filmmaker searching for the perfect score, I provide tailored services that suit your unique project.",
      icon: <Music className="w-8 h-8" />,
      image: "/lovable-uploads/963c09ee-bf6c-44d9-a64f-bb6f9ba54ab6.png"
    },
    {
      id: "location-recording",
      title: "Location Recording",
      description: "I can capture your next show or video shoot on location with up to 64 channels of studio quality sound. Perfect for live performances, documentary shoots, or any situation requiring high-quality audio outside the studio. My mobile recording setup provides the same level of quality you'd expect in a professional studio, ensuring your location recordings sound exceptional.",
      icon: <Headphones className="w-8 h-8" />,
      image: "/lovable-uploads/cefff9ed-ca82-4bbe-83b9-1e99715de5ba.png"
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
      <Navbar />
      <div className="pt-24">
        <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary text-center">Bring Your Music to Life</h1>
              <p className="text-xl text-primary/80 text-center">
                Music isn't just sound—it's an experience. I produce, mix, and compose tracks that capture emotion and depth. 
                Let's create something unforgettable.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background" id="services-offered">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-primary text-center">Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  id={service.id}
                  className="mb-8 bg-secondary/10 rounded-xl overflow-hidden border border-border/10"
                >
                  {service.image && (
                    <div className="w-full h-64 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/50 text-accent mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-primary">{service.title}</h3>
                    </div>
                    <p className="text-primary/80 leading-relaxed">{service.description}</p>
                  </div>
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
            <a 
              href="mailto:info@shariqlalani.com"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm"
            >
              Contact Me
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
