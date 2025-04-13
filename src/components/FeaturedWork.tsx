import React, { useState } from 'react';
import { Youtube } from 'lucide-react';
import SpotifyIcon from './icons/SpotifyIcon';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface FeaturedWorkItem {
  type: 'spotify' | 'youtube';
  artist: string;
  title: string;
  role: string;
  url: string;
  embedId?: string;
  imageUrl?: string;
  spotifyId?: string;
}

const FeaturedWork = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  
  const featuredWorks: FeaturedWorkItem[] = [
    // First 8 songs in specified order
    {
      type: "spotify",
      artist: "Addison Jordan",
      title: "Reverence",
      role: "Recording, Mixing",
      url: "https://open.spotify.com/track/2N8ATWkeG3Qks1KaZzas2C",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02d8351852e90bd7174b66bbd2",
      spotifyId: "2N8ATWkeG3Qks1KaZzas2C"
    },
    {
      type: "spotify",
      artist: "Sophie Drago",
      title: "Perfect Show",
      role: "Production, Recording, Mixing",
      url: "https://open.spotify.com/track/5EAtwsiuev9rDNBjaDNug7",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
      spotifyId: "5EAtwsiuev9rDNBjaDNug7"
    },
    {
      type: "spotify",
      artist: "Quentin Moore Ft. Snoop Dogg",
      title: "BFU (Remix)",
      role: "Recording",
      url: "https://open.spotify.com/track/3HgwUyJXSP1i5j4ZVxjvC7",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
      spotifyId: "3HgwUyJXSP1i5j4ZVxjvC7"
    },
    {
      type: "spotify",
      artist: "Prisha Mehta",
      title: "Leaving you (For now)",
      role: "Production, Recording, Mixing",
      url: "https://open.spotify.com/track/4GxH4w1kwuR7VtbBWpALn1",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a75a1812fd13985527108f12",
      spotifyId: "4GxH4w1kwuR7VtbBWpALn1"
    },
    {
      type: "spotify",
      artist: "Mike Jones",
      title: "Slums",
      role: "Recording",
      url: "https://open.spotify.com/track/0sG5nT03mSwzW4kg5xXcWL",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e0266937507c23c123c73ca032a",
      spotifyId: "0sG5nT03mSwzW4kg5xXcWL"
    },
    {
      type: "spotify",
      artist: "Bobby Sparks II",
      title: "Letter to Mumbai",
      role: "Production, Recording",
      url: "https://open.spotify.com/track/7wxjnfO4CBkgQodEwqP7Gu",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e023121eeed397d8c7d7cf334b5",
      spotifyId: "7wxjnfO4CBkgQodEwqP7Gu"
    },
    {
      type: "spotify",
      artist: "Shama Judah",
      title: "Shikwa",
      role: "Mixing, Mastering",
      url: "https://open.spotify.com/track/3TOeHJ8Y08UqsiEaIFVs0V",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
      spotifyId: "3TOeHJ8Y08UqsiEaIFVs0V"
    },
    {
      type: "spotify",
      artist: "Nibal Malshi",
      title: "Isma' Albi",
      role: "Production, Recording, Mixing",
      url: "https://open.spotify.com/track/5CkPDhVkqmjNqRTtfmltFx",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
      spotifyId: "5CkPDhVkqmjNqRTtfmltFx"
    },
    {
      type: "spotify",
      artist: "Addison Jordan",
      title: "Keep That Same Old Feeling",
      role: "Recording, Mixing",
      url: "https://open.spotify.com/track/6ZrT4g0XttXoyOA8XzHOGU",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02d8351852e90bd7174b66bbd2",
      spotifyId: "6ZrT4g0XttXoyOA8XzHOGU"
    },
    {
      type: "spotify",
      artist: "Bobby Sparks II",
      title: "Musical Diarrhea",
      role: "Tracking Engineer",
      url: "https://open.spotify.com/track/1FTn7MpMDidWYLyKdj5680",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e023121eeed397d8c7d7cf334b5",
      spotifyId: "1FTn7MpMDidWYLyKdj5680"
    },
    {
      type: "spotify",
      artist: "Porte Diferente",
      title: "El Pochito",
      role: "Recording, Mixing",
      url: "https://open.spotify.com/track/52UekrYckRIekXj7rlO2hl",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
      spotifyId: "52UekrYckRIekXj7rlO2hl"
    },
    {
      type: "spotify",
      artist: "Frank Hamlin, The Brothers McDavid",
      title: "My Favorite Love Song",
      role: "Recording, Mixing",
      url: "https://open.spotify.com/track/400fAkHKjAnrUulH8rx8zm",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
      spotifyId: "400fAkHKjAnrUulH8rx8zm"
    },
    {
      type: "spotify",
      artist: "Porte Diferente",
      title: "Quedate Aqui",
      role: "Recording, Mixing",
      url: "https://open.spotify.com/track/3fcpIfwb6VBjj9bZKXnoxK",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
      spotifyId: "3fcpIfwb6VBjj9bZKXnoxK"
    },
    {
      type: "spotify",
      artist: "Sarah Hanks",
      title: "Eternity in my mind",
      role: "Production, Recording, Mixing",
      url: "https://open.spotify.com/track/2f0fDWcm7Wevh0ukzFI67V",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
      spotifyId: "2f0fDWcm7Wevh0ukzFI67V"
    },
    {
      type: "spotify",
      artist: "Zak Azoury",
      title: "Christmas Love",
      role: "Production, Recording, Mixing",
      url: "https://open.spotify.com/track/4uhAogfaSYeCApgDxs76Zt",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
      spotifyId: "4uhAogfaSYeCApgDxs76Zt"
    },
    {
      type: "spotify",
      artist: "Zak Azoury",
      title: "Might as well be coal",
      role: "Production, Recording, Mixing",
      url: "https://open.spotify.com/track/781O7fXNl3sgDL80gHSX1H",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
      spotifyId: "781O7fXNl3sgDL80gHSX1H"
    },
    {
      type: "spotify",
      artist: "Altercations",
      title: "Wait",
      role: "Recording, Mixing",
      url: "https://open.spotify.com/track/6rdMb9dW9zonR3GfvbeZ7x",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
      spotifyId: "6rdMb9dW9zonR3GfvbeZ7x"
    },
    {
      type: "spotify",
      artist: "Addison Jodan",
      title: "Queen Val",
      role: "Recording, Mixing",
      url: "https://open.spotify.com/track/3A1IUAtKIsteyHTSPIcrbi",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
      spotifyId: "3A1IUAtKIsteyHTSPIcrbi"
    },
    {
      type: "spotify",
      artist: "Oasis Worship",
      title: "My Revival",
      role: "Recording, Mixing",
      url: "https://open.spotify.com/track/243BMQW71Vt0MgCGRtQx8K",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
      spotifyId: "243BMQW71Vt0MgCGRtQx8K"
    },
    {
      type: "spotify",
      artist: "Akshara",
      title: "Ethereal",
      role: "Production",
      url: "https://open.spotify.com/track/2m5QniDzGkjcHcTCHj4Qc5",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
      spotifyId: "2m5QniDzGkjcHcTCHj4Qc5"
    },
    {
      type: "youtube",
      artist: "Prisha Mehta",
      title: "Leaving You (for now)",
      role: "Produced, Engineered and Mixed",
      url: "https://www.youtube.com/watch?v=2Xt5FtDGzDA",
      embedId: "2Xt5FtDGzDA"
    },
    {
      type: "youtube",
      artist: "Nibal Malshi",
      title: "Isma' Albi (Majida El Roumi)",
      role: "Produced, Engineered and Mixed",
      url: "https://www.youtube.com/watch?v=nC4onmTncpE",
      embedId: "nC4onmTncpE"
    },
    {
      type: "youtube",
      artist: "Sarah Hanks",
      title: "Eternity in my Mind",
      role: "Produced, Engineered and Mixed",
      url: "https://www.youtube.com/watch?v=OXM8e_1zEBA",
      embedId: "OXM8e_1zEBA"
    },
    {
      type: "youtube",
      artist: "Sabina Chamoy",
      title: "Full Moon",
      role: "Produced, Engineered and Mixed",
      url: "https://www.youtube.com/watch?v=mCegHzEz_xI",
      embedId: "mCegHzEz_xI"
    }
  ];

  const spotifyWorks = featuredWorks.filter(work => work.type === 'spotify');
  const youtubeWorks = featuredWorks.filter(work => work.type === 'youtube');
  
  const totalSpotifyPages = Math.ceil(spotifyWorks.length / itemsPerPage);
  
  const getCurrentSpotifyItems = () => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return spotifyWorks.slice(start, end);
  };
  
  const handleNextPage = () => {
    if (currentPage < totalSpotifyPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const SpotifyWorkCard = ({ work }: { work: FeaturedWorkItem }) => (
    <div className="bg-secondary/30 rounded-xl backdrop-blur-sm border border-border/20 h-full overflow-hidden">
      <div className="aspect-square w-full mb-0">
        <iframe
          src={`https://open.spotify.com/embed/track/${work.spotifyId}?utm_source=generator&theme=0`}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-t-xl"
        ></iframe>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <SpotifyIcon className="h-4 w-4 text-green-500" />
          <span className="text-xs text-primary/60">Spotify</span>
        </div>
        <h4 className="text-base font-semibold text-primary mb-1">{work.title}</h4>
        <p className="text-primary/80 font-medium text-sm mb-1">{work.artist}</p>
        <p className="text-primary/60 text-xs">{work.role}</p>
      </div>
    </div>
  );

  const YoutubeWorkCard = ({ work }: { work: FeaturedWorkItem }) => (
    <div className="bg-secondary/30 p-3 rounded-xl backdrop-blur-sm border border-border/20 h-full">
      <div className="aspect-video mb-3">
        <iframe 
          width="100%" 
          height="100%" 
          src={`https://www.youtube.com/embed/${work.embedId}`} 
          title={work.title} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Youtube className="h-4 w-4 text-red-500" />
        <span className="text-xs text-primary/60">YouTube</span>
      </div>
      <h4 className="text-base font-semibold text-primary mb-0.5">{work.title}</h4>
      <p className="text-primary/80 text-sm mb-1">{work.artist}</p>
      <p className="text-primary/60 text-xs">{work.role}</p>
    </div>
  );

  return (
    <section id="featured-work" className="section-padding bg-background pt-0">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Featured Works
          </h2>
          <p className="text-primary/70 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Notable projects I've worked on
          </p>
        </div>
        
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <Tabs defaultValue="spotify" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="spotify">Audio</TabsTrigger>
              <TabsTrigger value="youtube">Video</TabsTrigger>
            </TabsList>
            <TabsContent value="spotify" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getCurrentSpotifyItems().map((work, index) => (
                  <SpotifyWorkCard key={index} work={work} />
                ))}
              </div>
              
              {totalSpotifyPages > 1 && (
                <div className="flex justify-center mt-8">
                  <div className="flex space-x-4">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={handlePrevPage} 
                      disabled={currentPage === 0}
                      className="rounded-full"
                    >
                      <CarouselPrevious className="relative static transform-none h-4 w-4" />
                      <span className="sr-only">Previous</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={handleNextPage} 
                      disabled={currentPage === totalSpotifyPages - 1}
                      className="rounded-full"
                    >
                      <CarouselNext className="relative static transform-none h-4 w-4" />
                      <span className="sr-only">Next</span>
                    </Button>
                  </div>
                </div>
              )}
            </TabsContent>
            <TabsContent value="youtube" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {youtubeWorks.map((work, index) => (
                  <YoutubeWorkCard key={index} work={work} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
