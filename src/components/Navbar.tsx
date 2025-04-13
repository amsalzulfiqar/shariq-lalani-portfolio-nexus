
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/bio', label: 'Bio' },
    { href: '/artist', label: 'Artist' },
    { href: '/services', label: 'Services' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between py-6">
        {/* Logo positioned at the far left */}
        <Logo className="text-primary mr-auto" />

        {/* Desktop Navigation */}
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
          <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
            <Link to={isHomePage ? '#contact' : '/#contact'}>Contact</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
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
            <Button asChild variant="outline" className="w-full">
              <Link to={isHomePage ? '#contact' : '/#contact'} onClick={() => setIsOpen(false)}>Contact</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
