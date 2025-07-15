import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Consulente Informatico",
      company: "Libero Professionista",
      location: "Genova, Italia",
      period: "Aprile 2017 - Attuale",
      description: [
        "Gestione completa infrastrutture IT per PMI e aziende enterprise",
        "Progettazione e implementazione reti LAN/WAN/VPN sicure con apparati Cisco, SonicWall, Juniper",
        "Gestione ISP locale con VMware ESXi/vCenter: 200 domini e 5000 caselle email",
        "Virtualizzazione e containerizzazione con Docker, gestione server Zimbra",
        "Implementazione soluzioni backup locali/remote con storage QNAP, Rsync, Acronis",
        "Consulenza GDPR e adeguamento normative sicurezza informatica"
      ]
    },
    {
      title: "CEO & Founder",
      company: "Next World S.r.l.",
      location: "Genova, Italia", 
      period: "Giugno 2003 - Marzo 2017",
      description: [
        "Fondazione e gestione azienda IT con negozio e laboratorio di assistenza tecnica",
        "System integrator per conto di Alpitel, Sirti, Fastweb, Telecom, Wind",
        "Gestione amministrativa, appalti e coordinamento team di dipendenti",
        "Vendita e assistenza hardware/software per privati e aziende",
        "Sviluppo business relations con major telco italiane"
      ]
    },
    {
      title: "Tecnico Apparecchi Telecomunicazioni",
      company: "System Integrator S.r.l.",
      location: "Genova, Italia",
      period: "Novembre 2002 - Maggio 2003",
      description: [
        "Installazione apparati Cisco/Aethra/Marconi presso PMI per Fastweb, Telecom, Wind",
        "Configurazione e allaccio linee telefoniche PSTN e VOIP nei PABX",
        "Manutenzione impianti su territorio ligure",
        "Prima esperienza diretta con apparati enterprise di telecomunicazioni"
      ]
    },
    {
      title: "Tecnico Sistemi Informatici",
      company: "Computer Discount",
      location: "Genova, Italia",
      period: "Settembre 2000 - Ottobre 2002",
      description: [
        "Responsabile centri assistenza da Genova a Chiavari",
        "Coordinamento tecnici e gestione interventi presso clienti aziendali",
        "Gestione clienti business con esigenze sistemistiche complesse",
        "Amministrazione magazzini e gestione resi merchandise"
      ]
    },
    {
      title: "Tecnico Sistemi Informatici",
      company: "Mantero Sistemi S.r.l.",
      location: "Genova, Italia",
      period: "Settembre 1998 - Agosto 2000",
      description: [
        "Installazione e configurazione sistemi Windows/Linux client/server",
        "Setup software gestionali ESA per aziende",
        "Manutenzione hardware HP: PC, workstation, server IBM, stampanti e plotter",
        "Gestione antivirus aziendale e monitoraggio sistemi",
        "Prime competenze sistemistiche in ambiente enterprise"
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
              Oltre 20 anni di crescita nel settore IT: dall'amministrazione di sistema 
              all'imprenditoria, fino alla consulenza specializzata in infrastrutture e sicurezza
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