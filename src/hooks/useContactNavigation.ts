
import { useLocation, useNavigate } from 'react-router-dom';

export const useContactNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (isHomePage) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const formSection = contactSection.querySelector('#contact-form');
        
        if (formSection) {
          const rect = formSection.getBoundingClientRect();
          const scrollPosition = window.pageYOffset + rect.top - 100;
          window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
          });
        } else {
          const rect = contactSection.getBoundingClientRect();
          const scrollPosition = window.pageYOffset + rect.top - 100;
          window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
          });
        }
      }
    } else {
      navigate('/?scrollTo=contact-form');
    }
  };

  return { handleContactClick };
};
