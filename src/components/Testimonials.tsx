
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
      content: "Working with a professional like Shariq Lalani, 'The Ear,' has been an incredible journey over the years. His expertise in engineering, producing, and providing creative suggestions for my multi-genre music is exceptional. No matter the project, Shariq brings remarkable artistic input to everything we work on.",
      author: "Christine Winburn",
      role: "Singer-Songwriter"
    },
    {
      content: "Shariq helped me create my first music album with incredible energy and passion. He poured his dedication into making something truly special, and it's clear from the final product. If you have a vision, Shariq will go above and beyond to bring it to life! Thank you, Shariq!",
      author: "Austin McAllister",
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
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handlePrevious = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const handleNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  // Update current slide when the carousel changes
  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    
    // Initial slide position
    setCurrentSlide(api.selectedScrollSnap());

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <section id="testimonials" className="section-padding bg-secondary/10">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Testimonials
          </h2>
          <p className="text-primary/70 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Hear from the artists I've collaborated with
          </p>
        </div>
        
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <Carousel
            opts={{
              align: "start",
              loop: false // Disable looping
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
            
            <div className="flex flex-col items-center gap-2 mt-6">
              {/* Pagination dots */}
              <div className="flex space-x-2 mb-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-accent' : 'bg-accent/30'
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Navigation buttons */}
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handlePrevious}
                  disabled={currentSlide === 0}
                  className={`rounded-full ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handleNext}
                  disabled={currentSlide === testimonials.length - 1}
                  className={`rounded-full ${currentSlide === testimonials.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
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
