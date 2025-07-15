import { Shield, Lock, Network, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Sicurezza Proattiva",
      description: "Implementazione di misure preventive per proteggere l'infrastruttura aziendale"
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Progettazione e configurazione di architetture di rete sicure e scalabili"
    },
    {
      icon: Eye,
      title: "Threat Detection",
      description: "Monitoraggio continuo e identificazione tempestiva delle minacce informatiche"
    },
    {
      icon: Lock,
      title: "Compliance",
      description: "Conformità agli standard di sicurezza ISO 27001, GDPR e normative settoriali"
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
                Security Specialist con oltre 8 anni di esperienza nella protezione di infrastrutture 
                critiche e nella gestione della sicurezza informatica per aziende enterprise.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                La mia expertise spazia dalla progettazione di architetture di rete sicure 
                al penetration testing, dall'implementazione di sistemi SIEM alla gestione 
                della compliance normativa.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sono specializzato nella creazione di strategie di cybersecurity complete 
                che bilanciano sicurezza, usabilità e performance, garantendo la continuità 
                operativa del business.
              </p>
            </div>
            
            <div className="gradient-card p-8 rounded-lg shadow-cyber animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Aree di Specializzazione
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Network Security & Firewall Management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-security-green rounded-full mr-3"></div>
                  Penetration Testing & Vulnerability Assessment
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  SIEM Implementation & Log Analysis
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-security-green rounded-full mr-3"></div>
                  Incident Response & Forensics
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Compliance & Risk Management
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