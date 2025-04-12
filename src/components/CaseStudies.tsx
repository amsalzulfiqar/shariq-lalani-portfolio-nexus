
import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "AI-Powered Music Production",
      category: "Creative Technology / AI",
      imageSrc: "/lovable-uploads/e3512a62-8633-4431-9bbb-7f6e9da43114.png",
      description: "Developed an innovative AI-assisted music production platform that helps artists create professional tracks with minimal technical knowledge."
    },
    {
      title: "Audio Production Suite",
      category: "Product Strategy / Development",
      imageSrc: "/lovable-uploads/194b4be4-0dd9-4045-8f80-406e77a4b8d1.png",
      description: "Redesigned a professional audio production suite, improving workflow efficiency and increasing user retention by 40%."
    },
    {
      title: "Tech-Forward Studio Design",
      category: "Creative Technology",
      imageSrc: "/lovable-uploads/6439bcb4-7775-4b6c-8b40-a988a20f19d9.png",
      description: "Created a next-generation music studio environment integrating cutting-edge technology with traditional recording techniques."
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const caseRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    caseRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      caseRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="work" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0" style={{ animationFillMode: 'forwards' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured Work
          </h2>
          <p className="text-gray-600">
            A selection of recent projects showcasing my multidisciplinary approach across AI, product strategy, and creative technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 opacity-0"
              style={{ animationDelay: `${0.3 + index * 0.2}s`, animationFillMode: 'forwards' }}
              ref={el => caseRefs.current[index] = el}
            >
              <div className="relative overflow-hidden h-60">
                <img
                  src={study.imageSrc}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{study.category}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                
                <a href="#" className="inline-flex items-center font-medium text-primary group">
                  <span className="group-hover:underline">View Case Study</span>
                  <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
