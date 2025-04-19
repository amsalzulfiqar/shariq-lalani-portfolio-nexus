
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import NotFound from "./pages/NotFound";
import BioPage from "./pages/BioPage";
import ArtistPage from "./pages/ArtistPage";
import FeaturedWorksPage from "./pages/FeaturedWorksPage";

// Add version for cache busting
const APP_VERSION = "1.0.2";



//function ScrollToTop() {
 // const { pathname } = useLocation();

  //useEffect(() => {
    //console.log("🌀 ScrollToTop firing for", pathname);

    // Brute-force scroll to top twice: now, and shortly after layout settles
    //window.scrollTo(0, 0);
    //const timeout = setTimeout(() => {
      //window.scrollTo(0, 0);
    //}, 100); // Try increasing to 200 if needed

    //return () => clearTimeout(timeout);
  //}, [pathname]);

  //return null;
//}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    console.log("🧷 Forcing scroll to top for", pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Configure query client with cache settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      gcTime: 0,
    },
  },
});

const App = () => {
  // Clear browser cache for static assets
  useEffect(() => {
    if ('caches' in window) {
      caches.keys().then((names) => {
        names.forEach(name => {
          caches.delete(name);
        });
      });
    }
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
