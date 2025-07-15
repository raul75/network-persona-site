import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Security Specialist",
      company: "TechSecure Enterprise",
      location: "Milano, Italia",
      period: "2021 - Presente",
      description: [
        "Progettazione e implementazione di architetture di sicurezza per clienti enterprise",
        "Gestione team di 5 security analyst per monitoraggio SOC 24/7",
        "Conduzione di penetration test e vulnerability assessment su infrastrutture critiche",
        "Sviluppo di procedure di incident response e disaster recovery"
      ]
    },
    {
      title: "Network Security Engineer",
      company: "CyberDefense Solutions",
      location: "Roma, Italia", 
      period: "2019 - 2021",
      description: [
        "Configurazione e gestione di firewall enterprise (Palo Alto, Fortinet)",
        "Implementazione di sistemi SIEM e correlazione eventi di sicurezza",
        "Analisi forensics e investigazioni su incidenti di sicurezza",
        "Formazione del personale su best practices di cybersecurity"
      ]
    },
    {
      title: "IT Security Analyst",
      company: "SecureNet Consulting",
      location: "Napoli, Italia",
      period: "2017 - 2019", 
      description: [
        "Monitoraggio continuo dell'infrastruttura di rete aziendale",
        "Gestione di vulnerability assessment e remediation",
        "Supporto nella compliance GDPR e ISO 27001",
        "Documentazione di policies e procedure di sicurezza"
      ]
    },
    {
      title: "Junior Network Administrator",
      company: "DataCore Systems",
      location: "Bari, Italia",
      period: "2016 - 2017",
      description: [
        "Amministrazione sistemi Windows/Linux in ambiente enterprise",
        "Gestione backup e disaster recovery procedures",
        "Supporto tecnico e troubleshooting di rete",
        "Prima esperienza con strumenti di security monitoring"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Esperienza Professionale
            </h2>
            <div className="w-24 h-1 gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un percorso di crescita costante nel mondo della cybersecurity, 
              dalle basi dell'amministrazione di sistema alle sfide più complesse della sicurezza enterprise
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-security-green to-primary"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary border-4 border-background rounded-full shadow-glow"></div>
                  
                  <Card className="ml-20 shadow-cyber border-border/50 hover-glow transition-smooth">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <CardTitle className="text-xl text-foreground">
                          {exp.title}
                        </CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-2 text-muted-foreground">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2 text-primary" />
                          <span className="font-medium text-foreground">{exp.company}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-security-green" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-muted-foreground">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;