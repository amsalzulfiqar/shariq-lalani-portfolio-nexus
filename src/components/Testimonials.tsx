
import React from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface TestimonialProps {
  content: string;
  author: string;
  role?: string;
}

const Testimonial = ({ content, author, role }: TestimonialProps) => (
  <div className="bg-secondary/30 p-6 md:p-8 rounded-xl backdrop-blur-sm border border-border/20 h-full flex flex-col">
    <Quote className="w-10 h-10 text-accent/40 mb-4" />
    <p className="text-lg text-primary/90 italic mb-6 flex-grow">{content}</p>
    <div>
      <p className="font-semibold text-primary">{author}</p>
      {role && <p className="text-sm text-primary/70">{role}</p>}
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      content: "Working with Shariq was an incredible experience. His attention to detail and ability to bring my musical vision to life exceeded all my expectations.",
      author: "Sarah Hanks",
      role: "Recording Artist"
    },
    {
      content: "Shariq's production skills are top-notch. He has a unique ability to enhance a track while maintaining its authentic feel. I couldn't be happier with the results.",
      author: "Prisha Mehta",
      role: "Singer-Songwriter"
    },
    {
      content: "The level of professionalism and creativity that Shariq brings to the studio is unmatched. He made the recording process smooth and enjoyable.",
      author: "Bobby Sparks II",
      role: "Grammy-winning Musician"
    },
    {
      content: "Shariq has an incredible ear for detail and a deep understanding of what makes a song connect with listeners. His production elevated my music to a whole new level.",
      author: "Addison Jordan",
      role: "Jazz Musician"
    }
  ];

  const [api, setApi] = React.useState<any>(null);

  const handlePrevious = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const handleNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <section id="testimonials" className="section-padding bg-secondary/10">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Testimonials
          </h2>
          <p className="text-primary/70 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            What artists say about working with me
          </p>
        </div>
        
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Testimonial
                    content={testimonial.content}
                    author={testimonial.author}
                    role={testimonial.role}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handlePrevious} 
                  className="rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handleNext} 
                  className="rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next</span>
                </Button>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
