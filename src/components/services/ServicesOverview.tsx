
import React from 'react';
import { Music, Sliders, Music2 } from 'lucide-react';

const ServicesOverview = () => {
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

  return (
    <section className="pt-4 pb-6 bg-gradient-to-b from-background to-secondary/10">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary text-center">
            Bring Your Music to Life
          </h2>
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
  );
};

export default ServicesOverview;
