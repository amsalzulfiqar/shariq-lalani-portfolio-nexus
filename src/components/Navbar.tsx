import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = prevScrollY > currentScrollY;
      const isAtTop = currentScrollY < 20;
      
      setIsVisible(scrollingUp || isAtTop);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  const isHomePage = location.pathname === '/';

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/bio', label: 'Bio' },
    { href: '/artist', label: 'Artist' },
  ];
  
  const handleContactClick = (e) => {
    if (isHomePage) {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView();
      }
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        prevScrollY > 20 ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <Logo 
        fixed={true} 
        size="medium" 
        position={{ top: '2', left: '2' }} 
        zIndex={60} 
        className="absolute" 
      />

      <div className="container-custom flex items-center justify-end py-6 pr-4">
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-white/90 hover:text-white bg-transparent border border-white">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[200px] gap-2 p-4 bg-background">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/services"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        All Services
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/services/featured-works"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        Featured Works
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
            <a 
              href="#contact"
              onClick={handleContactClick}
            >
              Contact
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <nav className="container-custom py-8 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-lg font-medium text-primary/80 hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/services"
              className="text-lg font-medium text-primary/80 hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/services/featured-works"
              className="text-lg font-medium text-primary/80 hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              Featured Works
            </Link>
            <Button asChild variant="outline" className="w-full">
              <a 
                href="#contact"
                onClick={handleContactClick}
              >
                Contact
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
