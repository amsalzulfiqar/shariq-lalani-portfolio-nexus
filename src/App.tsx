
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef } from "react";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import NotFound from "./pages/NotFound";
import BioPage from "./pages/BioPage";
import ArtistPage from "./pages/ArtistPage";
import FeaturedWorksPage from "./pages/FeaturedWorksPage";

// Add version for cache busting
const APP_VERSION = "1.0.2";

// Use this to force React Router to always scroll to top on route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const prevPathRef = useRef(pathname);

  // The most aggressive scroll reset approach combining multiple techniques
  useLayoutEffect(() => {
    if (prevPathRef.current !== pathname) {
      console.log("🧷 Forcing scroll to top for", pathname);
      
      // Immediate scroll reset (highest priority)
      window.scrollTo(0, 0);
      
      // Reset all potential scroll containers
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Store the new pathname
      prevPathRef.current = pathname;
    }
  }, [pathname, navigationType]);

  // Backup scrolling with slight delays to handle any race conditions
  useEffect(() => {
    // Immediate reset
    window.scrollTo(0, 0);
    
    // Short timeout (for after initial render)
    const timeoutId1 = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 10);
    
    // Longer timeout (for after any animations or transitions complete)
    const timeoutId2 = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
    
    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
    };
  }, [pathname]);

  return null;
}

// Configure query client with cache settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10,   // 10 minutes
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

const App = () => {
  // Clear browser cache for static assets
  useEffect(() => {
    // Setup a global cache strategy
    const handleLoaded = () => {
      // Create image loading and caching strategy
      const preloadImages = () => {
        const imagesToPreload = [
          "/lovable-uploads/21005048-580b-49bd-9bbb-5e9f1335a17c.png",
          "/lovable-uploads/688646cc-2ad2-4d62-a487-e64b409ec429.png",
          "/lovable-uploads/8c8728bf-ab7a-4c4c-b4f8-dcb8665ede8c.png"
        ];

        imagesToPreload.forEach(src => {
          const img = new Image();
          img.src = src;
          img.fetchPriority = "high";
        });
      };

      // Preload critical images
      preloadImages();
    };

    window.addEventListener('load', handleLoaded);
    return () => window.removeEventListener('load', handleLoaded);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index key={`index-${APP_VERSION}`} />} />
            <Route path="/services" element={<ServicesPage key={`services-${APP_VERSION}`} />} />
            <Route path="/services/featured-works" element={<FeaturedWorksPage key={`featured-works-${APP_VERSION}`} />} />
            <Route path="/bio" element={<BioPage key={`bio-${APP_VERSION}`} />} />
            <Route path="/artist" element={<ArtistPage key={`artist-${APP_VERSION}`} />} />
            <Route path="*" element={<NotFound key={`not-found-${APP_VERSION}`} />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
