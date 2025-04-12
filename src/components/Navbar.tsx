
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/#work', label: 'Work' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-heading font-bold text-primary">
          Shariq Lalani
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-primary/80 hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/20 hover:text-accent">
            <Link to="/#contact">Let's Talk</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50">
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
            <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent/20 hover:text-accent">
              <Link to="/#contact" onClick={() => setIsOpen(false)}>Let's Talk</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
