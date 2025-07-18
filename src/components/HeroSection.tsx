import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = [
    "Passionate about building scalable systems, teaching, and competitive coding.",
    "Building the future, one line of code at a time.",
    "Turning complex problems into elegant solutions."
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, phrases]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen hero-gradient code-bg flex flex-col justify-center items-center relative px-4">
      <div className="text-center max-w-4xl mx-auto z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
            Chowtipalli Veera{" "}
            <span className="text-gradient">Bhadram</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-2">
            Aspiring Software Developer & Instructor
          </div>
        </div>

        <div className="h-20 md:h-16 mb-12">
          <p className="text-lg md:text-xl text-muted-foreground typing-cursor">
            {displayText}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            variant="hero"
            size="lg"
            onClick={scrollToAbout}
            className="text-lg px-8 py-3"
          >
            View My Work
          </Button>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/bhadra06" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com/in/chowtipalli-veera-bhadram" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:2200030389cseh@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;