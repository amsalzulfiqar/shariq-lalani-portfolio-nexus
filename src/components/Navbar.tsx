
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
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/bio', label: 'Bio' },
    { href: '/artist', label: 'Artist' },
  ];

  return (
    <header className="w-full bg-transparent relative z-50">
      <Logo 
        fixed={false} 
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
                  <div className="grid w-[200px] gap-2 p-4 bg-popover">
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
            <a href="mailto:info@shariqlalani.com">
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
              <a href="mailto:info@shariqlalani.com">
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

