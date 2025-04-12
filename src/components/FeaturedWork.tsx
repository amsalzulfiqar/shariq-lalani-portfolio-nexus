
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface FeaturedWorkItem {
  title: string;
  artist: string;
  role: string;
  spotifyUrl: string;
  image?: string;
}

const FeaturedWork = () => {
  const [page, setPage] = useState(0);
  
  const featuredWorks: FeaturedWorkItem[] = [
    {
      artist: "Addison Jordan",
      title: "Keep That Same Old Feeling",
      role: "Recording, Mixing",
      spotifyUrl: "https://open.spotify.com/track/6ZrT4g0XttXoyOA8XzHOGU?si=309de37935074539"
    },
    {
      artist: "Prisha Mehta",
      title: "Leaving you (For now)",
      role: "Production, Recording, Mixing",
      spotifyUrl: "https://open.spotify.com/track/4GxH4w1kwuR7VtbBWpALn1?si=380544eb81fe4c90"
    },
    {
      artist: "Mike Jones",
      title: "Slums",
      role: "Recording",
      spotifyUrl: "https://open.spotify.com/track/0sG5nT03mSwzW4kg5xXcWL?si=d5c923ae39904184"
    },
    {
      artist: "Quentin Moore Ft. Snoop Dogg",
      title: "BFU (Remix)",
      role: "Recording",
      spotifyUrl: "https://open.spotify.com/track/3HgwUyJXSP1i5j4ZVxjvC7?si=5aaaf907d6784cfb"
    },
    {
      artist: "Bobby Sparks II",
      title: "Letter to Mumbai",
      role: "Production, Recording",
      spotifyUrl: "https://open.spotify.com/track/7wxjnfO4CBkgQodEwqP7Gu?si=08887737a38a4c85"
    },
    {
      artist: "Bobby Sparks II",
      title: "Musical Diarrhea",
      role: "Tracking Engineer",
      spotifyUrl: "https://open.spotify.com/track/1FTn7MpMDidWYLyKdj5680?si=48cdc91f8b5a4b41"
    },
    {
      artist: "Bobby Sparks II",
      title: "Sodom and Gomorrah",
      role: "Tracking Engineer",
      spotifyUrl: "https://open.spotify.com/track/6kSwjQHgWVzsSPsNGEEIx7?si=c99119e5ac01435f"
    },
    {
      artist: "Bobby Sparks II",
      title: "Mayday",
      role: "Tracking Engineer",
      spotifyUrl: "https://open.spotify.com/track/16l5PQbX9X4H8QLdsCcqHr?si=2ebd3072692546b9"
    },
    {
      artist: "Addison Jordan",
      title: "Reverence",
      role: "Recording, Mixing",
      spotifyUrl: "https://open.spotify.com/track/2N8ATWkeG3Qks1KaZzas2C?si=2a27d892eb2541a2"
    },
    {
      artist: "Porte Diferente",
      title: "El Pochito",
      role: "Recording, Mixing",
      spotifyUrl: "https://open.spotify.com/track/52UekrYckRIekXj7rlO2hl?si=d12af1fbe50a405f"
    },
    {
      artist: "Frank Hamlin, The Brothers McDavid",
      title: "My Favorite Love Song",
      role: "Recording, Mixing",
      spotifyUrl: "https://open.spotify.com/track/400fAkHKjAnrUulH8rx8zm?si=bb56a8733907433e"
    },
    {
      artist: "Porte Diferente",
      title: "Quedate Aqui",
      role: "Recording, Mixing",
      spotifyUrl: "https://open.spotify.com/track/3fcpIfwb6VBjj9bZKXnoxK?si=d5fcc772a7d541b3"
    },
    {
      artist: "Sophie Drago",
      title: "Perfect Show",
      role: "Production, Recording, Mixing",
      spotifyUrl: "https://open.spotify.com/track/5EAtwsiuev9rDNBjaDNug7?si=26e369479d9a4daf"
    },
    {
      artist: "Sarah Hanks",
      title: "Eternity in my mind",
      role: "Production, Recording, Mixing",
      spotifyUrl: "https://open.spotify.com/track/2f0fDWcm7Wevh0ukzFI67V?si=fb62867208ad455f"
    },
    {
      artist: "Zak Azoury",
      title: "Christmas Love",
      role: "Production, Recording, Mixing",
      spotifyUrl: "https://open.spotify.com/track/4uhAogfaSYeCApgDxs76Zt?si=92cc19e9a44046aa"
    },
    {
      artist: "Zak Azoury",
      title: "Might as well be coal",
      role: "Production, Recording, Mixing",
      spotifyUrl: "https://open.spotify.com/track/781O7fXNl3sgDL80gHSX1H?si=793e5dba906347b9"
    },
    {
      artist: "Shama Judah",
      title: "Shikwa",
      role: "Mixing, Mastering",
      spotifyUrl: "https://open.spotify.com/track/3TOeHJ8Y08UqsiEaIFVs0V?si=65ba35b2da29426c"
    },
    {
      artist: "Altercations",
      title: "Wait",
      role: "Recording, Mixing",
      spotifyUrl: "https://open.spotify.com/track/6rdMb9dW9zonR3GfvbeZ7x?si=634954db8cda4cda"
    },
    {
      artist: "Addison Jordan",
      title: "Queen Val",
      role: "Recording, Mixing",
      spotifyUrl: "https://open.spotify.com/track/3A1IUAtKIsteyHTSPIcrbi?si=29334c1236c748e4"
    },
    {
      artist: "Nibal Malshi",
      title: "Isma' Albi",
      role: "Production, Recording, Mixing",
      spotifyUrl: "https://open.spotify.com/track/5CkPDhVkqmjNqRTtfmltFx?si=a24cc2ad60a142fd"
    },
    {
      artist: "Oasis Worship",
      title: "My Revival",
      role: "Recording, Mixing",
      spotifyUrl: "https://open.spotify.com/track/243BMQW71Vt0MgCGRtQx8K?si=9031b47c8d774bd1"
    },
    {
      artist: "Akshara",
      title: "Ethereal",
      role: "Production",
      spotifyUrl: "https://open.spotify.com/track/2m5QniDzGkjcHcTCHj4Qc5?si=a672d24a641f4aba"
    },
  ];

  const FeaturedWorkCard = ({ work }: { work: FeaturedWorkItem }) => (
    <a 
      href={work.spotifyUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block h-full transition-all duration-300 hover:scale-[1.02]"
    >
      <Card className="bg-secondary/30 border-border/20 h-full">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
              <circle cx="12" cy="12" r="10"/>
              <path d="M16.5 12a4.5 4.5 0 0 0-6.75-3.9"/>
              <path d="M16.5 9A6.5 6.5 0 0 0 8 12.4"/>
              <circle cx="12" cy="12" r="2"/>
            </svg>
          </div>
          
          <h3 className="font-bold text-lg mb-1 text-primary">{work.title}</h3>
          <p className="text-primary/80 font-medium mb-2">{work.artist}</p>
          <p className="text-primary/60 text-sm mt-auto">{work.role}</p>
        </CardContent>
      </Card>
    </a>
  );

  return (
    <section id="featured-work" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Featured Work
          </h2>
          <p className="text-primary/70 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Notable projects I've worked on
          </p>
        </div>
        
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {featuredWorks.map((work, index) => (
                <CarouselItem key={index} className="pl-4 basis-1/3 md:basis-1/3 lg:basis-1/3">
                  <div className="h-full">
                    <FeaturedWorkCard work={work} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static mr-2 transform-none" />
              <CarouselNext className="relative static transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
