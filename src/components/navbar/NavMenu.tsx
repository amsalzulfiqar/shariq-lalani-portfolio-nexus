
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export const NavMenu = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/bio', label: 'Bio' },
    { href: '/artist', label: 'Artist' },
  ];

  return (
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
    </nav>
  );
};
