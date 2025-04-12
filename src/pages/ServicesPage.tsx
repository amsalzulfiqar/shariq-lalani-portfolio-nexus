
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Music, Sliders, Music2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
              
              <div className="flex justify-center mt-10">
                <Button asChild size="lg">
                  <a href="#contact">Let's Work Together</a>
                </Button>
              </div>
            </div>
            
            <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-8 border border-border/20">
              <h2 className="text-2xl font-semibold mb-6 text-primary">About My Work</h2>
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

        <section className="py-16 bg-background" id="services-offered">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-primary text-center">Services Offered</h2>
            
            {services.map((service, index) => (
              <div 
                key={index} 
                id={service.id}
                className="mb-16 bg-secondary/10 rounded-xl p-8 border border-border/10"
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
        </section>

        <section className="py-16 bg-secondary/10" id="featured-works">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-primary text-center">Featured Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {featuredWorks.map((work, index) => (
                <a 
                  key={index} 
                  href={work.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary/30 backdrop-blur-sm rounded-xl p-6 border border-border/20 hover:border-accent/30 transition-colors"
                >
                  <h3 className="text-lg font-medium mb-2 text-primary hover:text-accent transition-colors">{work.title}</h3>
                  <p className="text-primary/60 text-sm">{work.role}</p>
                </a>
              ))}
            </div>
            
            <h2 className="text-3xl font-bold mb-12 text-primary text-center">Featured Videos</h2>
            
            <div className="space-y-8">
              {featuredVideos.map((video, index) => (
                <div 
                  key={index} 
                  className="bg-secondary/30 backdrop-blur-sm rounded-xl p-6 border border-border/20"
                >
                  <div className="aspect-video mb-4">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={`https://www.youtube.com/embed/${video.embedId}`} 
                      title={video.title} 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  <h3 className="text-lg font-medium mb-1 text-primary">{video.title}</h3>
                  <p className="text-primary/60">{video.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background" id="biography">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-10 text-primary text-center">Bio</h2>
            
            <div className="bg-secondary/10 rounded-xl p-8 border border-border/10">
              <div className="space-y-4 text-primary/80 leading-relaxed">
                <p>
                  Shariq Lalani is a versatile music composer, producer, audio engineer, and multi-instrumentalist based in Dallas, Texas. 
                  His musical journey began early and has led him to collaborate with top-tier artists and professionals worldwide.
                </p>
                <p>
                  Shariq holds a Bachelor of Arts in Music Industry Studies with a concentration in Jazz Studies and Recording Technology from the University of Texas at Arlington. 
                  His education, combined with years of hands-on experience, has shaped him into a well-rounded artist with a deep understanding of both the technical and creative aspects of music.
                </p>
                <p>
                  Shariq's journey into music took a transformative turn when he became a part of the Greater Dallas Youth Orchestras' Jazz Institute, 
                  which immersed him in the world of Jazz and shaped his creative voice. Merging his Eastern heritage with Western influences, 
                  Shariq creates a sound that blends diverse musical traditions into cohesive and innovative compositions.
                </p>
                <p>
                  Shariq further honed his technical skills by studying audio engineering under veteran engineers through the Recording Connection program, 
                  an LA-based externship program. His dedication earned him a place at Audio Dallas, one of the region's top studios, 
                  where he worked his way up to become a staff engineer under the mentorship of multi-platinum producer Paul Osborn. 
                  This experience allowed him to combine his technical mastery with his deep musical intuition, producing highly polished and sonically compelling work.
                </p>
                <p>
                  Shariq's body of work spans across multiple genres, including Pop, Jazz, Hip-Hop, Electronic, Orchestral, and World Music. 
                  His credits include collaborations with Bobby Sparks II (Prince, Kirk Franklin, Snarky Puppy), Javed Bashir, Salim-Sulaiman, Olivia Holt, 
                  Nibal Malshi, Xavier Omär, The War and Treaty, Ulices Chaidez, and Fareed Ayaz & Abu Muhammad Qawwals, among others.
                </p>
                <p>
                  Beyond his independent work, Shariq is also associated with Merchant Records and A for Alpeh Records, where he has released original compositions, 
                  further establishing his presence in the global music scene.
                </p>
                <p>
                  Whether he is producing, mixing, or composing for film and live performances, Shariq is committed to crafting music that leaves a lasting impact. 
                  He continues to push musical boundaries, delivering authentic, polished, and impactful sound.
                </p>
              </div>
            </div>
          </div>
        </section>

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
