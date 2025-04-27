
import { Button } from "@/components/ui/button";

interface ContactButtonProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const ContactButton = ({ onClick }: ContactButtonProps) => {
  return (
    <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
      <a 
        href="#contact"
        onClick={onClick}
      >
        Contact
      </a>
    </Button>
  );
};
