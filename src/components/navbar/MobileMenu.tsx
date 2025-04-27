
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onContactClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  onItemClick: () => void;
}

export const MobileMenu = ({ isOpen, onContactClick, onItemClick }: MobileMenuProps) => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/bio', label: 'Bio' },
    { href: '/artist', label: 'Artist' },
  ];

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-background/95 backdrop-blur-md">
      <nav className="container-custom py-8 flex flex-col space-y-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="text-lg font-medium text-primary/80 hover:text-accent"
            onClick={onItemClick}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/services"
          className="text-lg font-medium text-primary/80 hover:text-accent"
          onClick={onItemClick}
        >
          Services
        </Link>
        <Link
          to="/services/featured-works"
          className="text-lg font-medium text-primary/80 hover:text-accent"
          onClick={onItemClick}
        >
          Featured Works
        </Link>
        <Button asChild variant="outline" className="w-full">
          <a 
            href="#contact"
            onClick={onContactClick}
          >
            Contact
          </a>
        </Button>
      </nav>
    </div>
  );
};
