import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Music, Sliders, Music2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import FeaturedWork from '@/components/FeaturedWork';
import Testimonials from '@/components/Testimonials';

const ServicesPage = () => {
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
      artist: "Addison Jordan",
      track: "Keep That Same Old Feeling",
      role: "Recording, Mixing",
      link: "https://open.spotify.com/track/6ZrT4g0XttXoyOA8XzHOGU",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02d8351852e90bd7174b66bbd2"
    },
    {
      title: "Prisha Mehta - Leaving you (For now)",
      artist: "Prisha Mehta",
      track: "Leaving you (For now)",
      role: "Production, Recording, Mixing",
      link: "https://open.spotify.com/track/4GxH4w1kwuR7VtbBWpALn1",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a75a1812fd13985527108f12"
    },
    {
      title: "Mike Jones - Slums",
      artist: "Mike Jones",
      track: "Slums",
      role: "Recording",
      link: "https://open.spotify.com/track/0sG5nT03mSwzW4kg5xXcWL",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e0266937507c23c123c73ca032a"
    },
    {
      title: "Quentin Moore Ft. Snoop Dogg - BFU (Remix)",
      artist: "Quentin Moore Ft. Snoop Dogg",
      track: "BFU (Remix)",
      role: "Recording",
      link: "https://open.spotify.com/track/3HgwUyJXSP1i5j4ZVxjvC7",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554"
    },
    {
      title: "Bobby Sparks II - Letter to Mumbai",
      artist: "Bobby Sparks II",
      track: "Letter to Mumbai",
      role: "Production, Recording",
      link: "https://open.spotify.com/track/7wxjnfO4CBkgQodEwqP7Gu",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e023121eeed397d8c7d7cf334b5"
    },
    {
      title: "Bobby Sparks II - Musical Diarrhea",
      artist: "Bobby Sparks II",
      track: "Musical Diarrhea",
      role: "Tracking Engineer",
      link: "https://open.spotify.com/track/1FTn7MpMDidWYLyKdj5680",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e023121eeed397d8c7d7cf334b5"
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
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50" 
            style={{ 
              backgroundImage: 'url("/public/lovable-uploads/8c8728bf-ab7a-4c4c-b4f8-dcb8665ede8c.png")',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute inset-0 bg-background/80"></div>
          </div>
          
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

        <section className="py-16 bg-secondary/5" id="featured-work">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-primary text-center">Featured Work</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
              {featuredWorks.slice(0, 6).map((work, index) => (
                <a 
                  key={index}
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-xl bg-red-950/90 border border-red-900/30 transition-transform hover:scale-[1.02] duration-300"
                >
                  <div className="relative aspect-square">
                    <img 
                      src={work.imageUrl} 
                      alt={work.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 p-2 bg-white rounded-full opacity-75">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16.75 16.4C16.55 16.7 16.25 16.85 15.85 16.85C15.6 16.85 15.35 16.75 15.05 16.55C14.2 16 13.3 15.55 12.4 15.2C11.65 14.9 10.85 14.7 10.05 14.6C9.1 14.5 8.2 14.5 7.25 14.6C6.9 14.65 6.7 14.5 6.55 14.2C6.4 13.9 6.35 13.6 6.45 13.3C6.55 12.95 6.8 12.75 7.15 12.7C7.8 12.6 8.5 12.55 9.2 12.55C10.45 12.6 11.65 12.8 12.8 13.25C13.65 13.55 14.45 13.95 15.2 14.45C15.55 14.7 15.75 15 15.75 15.4C15.8 15.75 15.85 16.1 15.75 16.4H16.75ZM18.05 13.15C17.8 13.5 17.45 13.65 17 13.65C16.75 13.65 16.45 13.55 16.15 13.35C15.15 12.7 14.05 12.2 12.9 11.8C12 11.5 11.05 11.25 10.1 11.15C9.34565 11.0729 8.58639 11.031 7.825 11.025C7.325 11.025 7.075 10.775 7.025 10.275C6.975 9.775 7.225 9.425 7.675 9.325C8.175 9.225 8.675 9.175 9.175 9.125C10.275 9.075 11.375 9.175 12.475 9.375C13.6 9.575 14.7 9.925 15.75 10.375C16.55 10.725 17.3 11.175 18 11.675C18.3 11.875 18.45 12.175 18.5 12.525C18.45 12.725 18.3 13.025 18 13.175L18.05 13.15ZM19.3 9.65C19 10.15 18.5 10.35 17.95 10.3C17.65 10.3 17.35 10.2 17.05 10C15.95 9.3 14.75 8.7 13.5 8.3C12.3 7.9 11.1 7.6 9.85 7.5C8.9 7.4 7.95 7.4 7 7.45C6.4 7.5 6.05 7.15 6 6.55C5.95 5.95 6.3 5.55 6.9 5.5C7.4 5.45 7.85 5.4 8.3 5.4C9.65 5.4 11 5.5 12.35 5.8C13.7 6.1 15 6.5 16.25 7.05C17.1 7.4 17.85 7.9 18.6 8.4C18.9 8.6 19.1 8.9 19.2 9.3C19.25 9.4 19.25 9.5 19.3 9.65Z" fill="#1DB954"/>
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white text-lg truncate">{work.track}</h3>
                    <p className="text-gray-300 mb-1">{work.artist}</p>
                    <p className="text-gray-400 text-sm">{work.role}</p>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="outline" className="w-full text-white hover:bg-white hover:text-red-900 border border-white/20">
                        Play on Spotify
                      </Button>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="text-center mb-16">
              <Button variant="outline" size="lg">
                <a href="#" className="inline-flex items-center">
                  View All Projects
                </a>
              </Button>
            </div>
          </div>
        </section>

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
