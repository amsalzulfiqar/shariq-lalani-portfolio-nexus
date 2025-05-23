
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import NotFound from "./pages/NotFound";
import BioPage from "./pages/BioPage";
import ArtistPage from "./pages/ArtistPage";
import FeaturedWorksPage from "./pages/FeaturedWorksPage";
import { register as registerServiceWorker } from "./registerServiceWorker";

// Add version for cache busting
const APP_VERSION = "1.0.3";

// Simple, direct scroll reset on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
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
  // Register service worker for caching
  useEffect(() => {
    registerServiceWorker();
  }, []);

  // Setup image preloading and caching
  useEffect(() => {
    // Setup a global cache strategy
    const handleLoaded = () => {
      // Create image loading and caching strategy
      const preloadImages = () => {
        const imagesToPreload = [
          "/lovable-uploads/21005048-580b-49bd-9bbb-5e9f1335a17c.png",
          "/lovable-uploads/688646cc-2ad2-4d62-a487-e64b409ec429.png",
          "/lovable-uploads/8c8728bf-ab7a-4c4c-b4f8-dcb8665ede8c.png",
          "/lovable-uploads/cf679340-41be-421e-a167-6db583bdf43b.png",
          "/lovable-uploads/6f6bc79b-11f3-4bb4-a730-61666af2c750.png"
        ];

        // Preload using the browser's cache
        imagesToPreload.forEach(src => {
          const img = new Image();
          img.src = src;
          img.fetchPriority = "high";
          img.onload = () => console.log(`Preloaded: ${src}`);
          img.onerror = (e) => console.error(`Failed to preload: ${src}`, e);
        });
      };

      // Implement IntersectionObserver for lazy loading
      const setupLazyLoading = () => {
        if ('IntersectionObserver' in window) {
          const lazyImageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const lazyImage = entry.target as HTMLImageElement;
                if (lazyImage.dataset.src) {
                  lazyImage.src = lazyImage.dataset.src;
                  lazyImage.removeAttribute('data-src');
                  lazyImageObserver.unobserve(lazyImage);
                }
              }
            });
          });

          document.querySelectorAll('img[data-src]').forEach(img => {
            lazyImageObserver.observe(img);
          });
        }
      };

      // Preload critical images
      preloadImages();
      
      // Setup lazy loading
      setupLazyLoading();
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
