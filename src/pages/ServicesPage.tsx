
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';
import { Brain, Sparkles, Code, BarChart2, Zap, LineChart, MessageCircle, PenTool } from 'lucide-react';

const ServicesPage = () => {
  const serviceDetails = [
    {
      id: "ai-strategy",
      title: "AI Strategy & Integration",
      description: "I help organizations develop and implement comprehensive AI strategies that drive measurable business value. From identifying high-impact AI opportunities to designing and deploying customized solutions, my approach focuses on practical applications that deliver tangible results. My work spans generative AI, machine learning, and advanced data analytics, with experience across multiple industries.",
      benefits: [
        "Comprehensive assessment of AI opportunities for your business",
        "Strategic planning for AI integration with existing systems and workflows",
        "Identification of high-ROI AI use cases tailored to your objectives",
        "Implementation roadmaps that balance innovation with practical execution",
        "Custom AI solution development and deployment support"
      ],
      icon: <Brain className="w-8 h-8" />,
    },
    {
      id: "product-strategy",
      title: "Product Strategy",
      description: "I develop product strategies that transform business objectives into successful digital experiences. Working at the intersection of user needs, business goals, and technology capabilities, I help organizations define clear product visions and executable roadmaps. My approach combines market research, user insights, and competitive analysis to create differentiated product offerings with sustainable value propositions.",
      benefits: [
        "Product vision and roadmap development aligned with business goals",
        "User research and validation to ensure product-market fit",
        "Go-to-market strategies that maximize adoption and engagement",
        "Feature prioritization frameworks for efficient resource allocation",
        "Metrics definition for measuring product success and ROI"
      ],
      icon: <BarChart2 className="w-8 h-8" />,
    },
    {
      id: "creative-technology",
      title: "Creative Technology",
      description: "I specialize in creating innovative digital experiences that leverage emerging technologies to deliver unique and engaging interactions. Blending technical expertise with creative vision, I develop solutions that push boundaries while remaining focused on user needs and business objectives. My work spans interactive installations, immersive web experiences, and technology-driven storytelling.",
      benefits: [
        "Unique digital experiences that differentiate your brand",
        "Integration of emerging technologies into compelling user journeys",
        "Creative concepting that balances innovation with usability",
        "Technical feasibility assessment and implementation planning",
        "Cross-platform experiences that create cohesive brand moments"
      ],
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      id: "technical-development",
      title: "Technical Development",
      description: "I build robust, scalable digital solutions using modern technology stacks. From interactive prototypes to production-ready applications, my development approach emphasizes code quality, performance, and maintainability. With expertise across frontend, backend, and cloud technologies, I deliver technical solutions that bring product visions to life while establishing strong technical foundations.",
      benefits: [
        "Full-stack development using cutting-edge technologies",
        "Scalable architecture design for long-term product growth",
        "Performance optimization for exceptional user experiences",
        "Development of APIs and integration systems",
        "Technical documentation and knowledge transfer"
      ],
      icon: <Code className="w-8 h-8" />,
    },
    {
      id: "growth-analytics",
      title: "Growth & Analytics",
      description: "I implement data-driven strategies to optimize user acquisition, engagement, and retention. By establishing robust analytics frameworks and growth methodologies, I help organizations make informed decisions about product development and marketing initiatives. My approach connects user behavior insights to business metrics, creating feedback loops that drive continuous improvement.",
      benefits: [
        "Analytics implementation to capture meaningful user insights",
        "Growth frameworks for systematic acquisition and retention",
        "A/B testing strategies to optimize conversion funnels",
        "User segmentation and personalization approaches",
        "Performance dashboards that connect user actions to business outcomes"
      ],
      icon: <LineChart className="w-8 h-8" />,
    },
    {
      id: "innovation-consulting",
      title: "Innovation Consulting",
      description: "I help organizations build innovation capabilities and navigate emerging technologies. Through structured innovation programs and technology assessments, I enable teams to identify new opportunities and develop the processes needed to bring innovative ideas to market. My consulting approach combines strategic thinking with practical implementation plans that align innovation efforts with business objectives.",
      benefits: [
        "Innovation workshops and ideation facilitation",
        "Assessment of emerging technology opportunities",
        "Development of innovation processes and governance",
        "Cross-functional collaboration frameworks",
        "Innovation portfolio management and prioritization"
      ],
      icon: <Zap className="w-8 h-8" />,
    },
    {
      id: "content-strategy",
      title: "Content Strategy",
      description: "I develop content strategies that engage audiences and support business objectives across digital channels. By aligning content creation with user journeys and business goals, I help organizations build meaningful relationships with their audiences. My approach encompasses content planning, creation guidelines, distribution strategies, and performance measurement to ensure content drives tangible value.",
      benefits: [
        "Content strategy aligned with business and audience needs",
        "Editorial calendars and content planning frameworks",
        "Content creation guidelines and governance",
        "Distribution and promotion strategies across channels",
        "Content performance measurement and optimization"
      ],
      icon: <PenTool className="w-8 h-8" />,
    },
    {
      id: "workshop-facilitation",
      title: "Workshop Facilitation",
      description: "I design and facilitate specialized workshops focused on innovation, product strategy, and creative problem-solving. Using proven methodologies and collaborative exercises, I help teams align on challenges, explore solutions, and develop actionable plans. My workshop approach emphasizes structured creativity, cross-functional collaboration, and outcome-oriented activities.",
      benefits: [
        "Customized workshop design based on specific objectives",
        "Expert facilitation to maximize team participation",
        "Collaborative problem-solving and ideation exercises",
        "Synthesis of workshop outputs into actionable plans",
        "Post-workshop support for implementation planning"
      ],
      icon: <MessageCircle className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 bg-gray-50">
        <div className="container-custom py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Services & Expertise</h1>
            <p className="text-xl text-gray-600">
              Comprehensive solutions tailored to help businesses innovate, grow, and transform in the digital age.
            </p>
          </div>
        </div>
      </div>

      {serviceDetails.map((service, index) => (
        <ServiceDetail 
          key={index}
          id={service.id}
          title={service.title}
          description={service.description}
          benefits={service.benefits}
          icon={service.icon}
        />
      ))}
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
