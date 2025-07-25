import { ChevronDown, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/60 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <div
            key={i + 20}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
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
              {/* Icon container with cyber styling */}
              <div className="relative z-10 p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/60 rounded-full shadow-2xl border border-cyan-400/30 backdrop-blur-sm">
                <div className="relative">
                  <Shield className="w-28 h-28 text-cyan-400 hover-scale filter drop-shadow-lg" />
                  <Lock className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-blue-300" />
                </div>
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
