import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingContact = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('section:last-child');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="floating-contact">
      <Button
        variant="glow"
        size="icon"
        className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
        onClick={scrollToContact}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default FloatingContact;