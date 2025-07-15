import { Shield, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-accent rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 border border-security-green rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/2 w-48 h-48 border border-primary/50 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-security-green/60 rounded-full" style={{animation: 'float 6s ease-in-out infinite'}}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/20 rounded-full shadow-glow">
              <Shield className="w-16 h-16 text-primary" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Alessio Romano
            <span className="block text-3xl md:text-4xl text-security-green mt-2">
              Consulente Informatico & Security Specialist
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
            Sistemista esperto con oltre 30 anni di esperienza in infrastrutture IT, 
            reti aziendali, sicurezza informatica e virtualizzazione enterprise
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber hover-glow transition-smooth"
              onClick={scrollToAbout}
            >
              Scopri di più
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-security-green text-security-green hover:bg-security-green hover:text-accent-foreground transition-smooth"
            >
              Contattami
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
