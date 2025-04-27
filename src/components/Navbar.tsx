
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { NavMenu } from './navbar/NavMenu';
import { MobileMenu } from './navbar/MobileMenu';
import { ContactButton } from './navbar/ContactButton';
import { useContactNavigation } from '@/hooks/useContactNavigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleContactClick } = useContactNavigation();

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
        <NavMenu />
        <ContactButton onClick={handleContactClick} />

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MobileMenu 
        isOpen={isOpen}
        onContactClick={handleContactClick}
        onItemClick={() => setIsOpen(false)}
      />
    </header>
  );
};

export default Navbar;
