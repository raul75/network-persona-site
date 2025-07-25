import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import minimalSymbol from "@/assets/minimal-tech-symbol.png";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Animated cyber elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-cyan-400/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-blue-500/30 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 border border-cyan-300/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/2 w-48 h-48 border border-blue-400/30 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Cyber glow effect */}
              <div className="absolute inset-0 -m-6">
                <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400/20 rounded-full animate-pulse blur-xl"></div>
                <div className="absolute top-2 left-2 w-28 h-28 bg-blue-500/15 rounded-full animate-ping blur-lg" style={{animationDuration: '2s'}}></div>
              </div>
              {/* Logo container with cyber styling */}
              <div className="relative z-10 p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/60 rounded-full shadow-2xl border border-cyan-400/30 backdrop-blur-sm">
                <img 
                  src={minimalSymbol} 
                  alt="Tech Symbol" 
                  className="w-28 h-28 object-contain hover-scale filter drop-shadow-lg" 
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Alessio Romano
            <span className="block text-3xl md:text-4xl text-cyan-400 mt-2 font-light">
              Consulente Informatico & Security Specialist
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Sistemista esperto con oltre 30 anni di esperienza in infrastrutture IT, 
            reti aziendali, sicurezza informatica e virtualizzazione enterprise
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 border-0"
              onClick={scrollToAbout}
            >
              Scopri di più
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-300 backdrop-blur-sm transition-all duration-300"
            >
              Contattami
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400/80" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
