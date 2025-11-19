import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingConsultButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToContact}
      className="fixed bottom-8 right-8 z-50 shadow-2xl hover:shadow-orange-500/50 bg-gradient-to-r from-[#C1272D] to-[#FF4D00] hover:from-red-700 hover:to-orange-600 rounded-full w-16 h-16 p-0 group transition-all duration-300"
      aria-label="Book Consultation"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
    </Button>
  );
}
