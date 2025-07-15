import { Shield, Lock, Network, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Sicurezza & Compliance",
      description: "Implementazione soluzioni di sicurezza e adeguamento normative GDPR per aziende"
    },
    {
      icon: Network,
      title: "Reti Aziendali",
      description: "Progettazione e manutenzione reti LAN, WAN, VPN e MPLS con apparati enterprise"
    },
    {
      icon: Eye,
      title: "System Integration",
      description: "Integrazione sistemi complessi e gestione infrastrutture virtualizzate"
    },
    {
      icon: Lock,
      title: "Consulenza IT",
      description: "Consulenza strategica e supporto tecnico per PMI e aziende enterprise"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Chi Sono
            </h2>
            <div className="w-24 h-1 gradient-accent mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Consulente informatico con oltre 20 anni di esperienza nel settore IT, 
                specializzato in infrastrutture enterprise, sicurezza informatica e system integration.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Dal 2017 lavoro come consulente indipendente, dopo aver fondato e gestito per 14 anni 
                Next World S.r.l., acquisendo competenze complete nella gestione di progetti IT complessi 
                per PMI e aziende enterprise.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La mia passione per l'innovazione tecnologica mi porta a studiare costantemente 
                le nuove tecnologie emergenti, dalla blockchain alle moderne architetture cloud.
              </p>
            </div>
            
            <div className="gradient-card p-8 rounded-lg shadow-cyber animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Aree di Specializzazione
              </h3>
               <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Sistemi Windows/Linux/Mac & Virtualizzazione
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-security-green rounded-full mr-3"></div>
                  Reti LAN/WAN/VPN & Sicurezza Informatica
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Sviluppo Web & Database Management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-security-green rounded-full mr-3"></div>
                  System Integration & Backup Solutions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Blockchain & Tecnologie Emergenti
                </li>
               </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="hover-glow transition-smooth border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;