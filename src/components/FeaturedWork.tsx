
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { featuredWorks } from '@/data/featuredWorks';
import SpotifyTabContent from './featured-work/SpotifyTabContent';
import YoutubeTabContent from './featured-work/YoutubeTabContent';

const FeaturedWork = () => {
  console.log('FeaturedWork rendering');
  
  const spotifyWorks = featuredWorks.filter(work => work.type === 'spotify');
  const youtubeWorks = featuredWorks.filter(work => work.type === 'youtube');
  
  console.log('Spotify works count:', spotifyWorks.length);
  console.log('YouTube works count:', youtubeWorks.length);

  return (
    <section id="featured-work" className="section-padding bg-background pt-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Featured Works
          </h2>
          <p className="text-primary/70 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            A selection of works Produced, Engineered and/or Mixed by Shariq Lalani
          </p>
        </div>
        
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <Tabs defaultValue="spotify" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="spotify">Audio</TabsTrigger>
              <TabsTrigger value="youtube">Video</TabsTrigger>
            </TabsList>
            <TabsContent value="spotify" className="mt-0">
              <SpotifyTabContent spotifyWorks={spotifyWorks} />
            </TabsContent>
            <TabsContent value="youtube" className="mt-0">
              <YoutubeTabContent youtubeWorks={youtubeWorks} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
