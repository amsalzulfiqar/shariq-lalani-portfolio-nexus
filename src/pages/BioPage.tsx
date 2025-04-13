
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Music, Mic, Headphones, Award } from 'lucide-react';

const BioPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 z-0 bg-noise"></div>
      <div className="relative z-10">
        <Navbar />
        
        <div className="pt-24 pb-16">
          <div className="container-custom">
            {/* Hero Image */}
            <div className="w-full mb-12">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/49e22a49-e6e8-4e04-b565-62257cc3bd67.png" 
                  alt="Shariq playing piano" 
                  className="w-full h-[40vh] md:h-[60vh] object-cover object-center"
                />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Shariq</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Profile section */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  <div className="relative group">
                    <img 
                      src="/lovable-uploads/f81daf2a-d575-4ce4-a183-78f9d4f94a0a.png" 
                      alt="Shariq Lalani portrait" 
                      className="w-full rounded-lg object-cover shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="bg-secondary/30 p-6 rounded-lg backdrop-blur-sm border border-border/20">
                    <h3 className="text-xl font-semibold mb-4 text-primary">Expertise</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Music className="text-accent h-5 w-5" />
                        <span>Music Composer</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="text-accent h-5 w-5" />
                        <span>Producer</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Headphones className="text-accent h-5 w-5" />
                        <span>Audio Engineer</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mic className="text-accent h-5 w-5" />
                        <span>Multi-instrumentalist</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bio text */}
              <div className="lg:col-span-2">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Shariq Lalani is a versatile music composer, producer, audio engineer, and multi-instrumentalist based in Dallas, Texas. His musical journey began early and has led him to collaborate with top-tier artists and professionals worldwide.
                  </p>
                  
                  <p className="mb-6">
                    Shariq holds a Bachelor of Arts in Music Industry Studies with a concentration in Jazz Studies and Recording Technology from the University of Texas at Arlington. His education, combined with years of hands-on experience, has shaped him into a well-rounded artist with a deep understanding of both the technical and creative aspects of music.
                  </p>
                  
                  <p className="mb-6">
                    Shariq's journey into music took a transformative turn when he became a part of the Greater Dallas Youth Orchestras' Jazz Institute, which immersed him in the world of Jazz and shaped his creative voice. Merging his Eastern heritage with Western influences, Shariq creates a sound that blends diverse musical traditions into cohesive and innovative compositions.
                  </p>
                  
                  <p className="mb-6">
                    Shariq further honed his technical skills by studying audio engineering under veteran engineers through the Recording Connection program, an LA-based externship program. His dedication earned him a place at Audio Dallas, one of the region's top studios, where he worked his way up to become a staff engineer under the mentorship of multi-platinum producer Paul Osborn. This experience allowed him to combine his technical mastery with his deep musical intuition, producing highly polished and sonically compelling work.
                  </p>
                  
                  <h3 className="text-2xl font-bold mt-8 mb-4">Collaborations & Projects</h3>
                  <p className="mb-6">
                    Shariq's body of work spans across multiple genres, including Pop, Jazz, Hip-Hop, Electronic, Orchestral, and World Music. His credits include collaborations with Bobby Sparks II (Prince, Kirk Franklin, Snarky Puppy), Javed Bashir, Salim-Sulaiman, Olivia Holt, Nibal Malshi, Xavier Omär, The War and Treaty, Ulices Chaidez, and Fareed Ayaz & Abu Muhammad Qawwals, among others.
                  </p>
                  
                  <p className="mb-6">
                    Beyond his independent work, Shariq is also associated with Merchant Records and A for Alpeh Records, where he has released original compositions, further establishing his presence in the global music scene.
                  </p>
                  
                  <p className="mb-6">
                    Whether he is producing, mixing, or composing for film and live performances, Shariq is committed to crafting music that leaves a lasting impact. He continues to push musical boundaries, delivering authentic, polished, and impactful sound.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default BioPage;
