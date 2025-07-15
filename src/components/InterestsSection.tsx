import { Waves, Cpu, TrendingUp, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const InterestsSection = () => {
  const interests = [
    {
      icon: Cpu,
      title: "Blockchain & Crypto",
      description: "Studio approfondito delle tecnologie blockchain dal 2012, con particolare focus su Ethereum, DApp e smart contracts sviluppati in Solidity.",
      tags: ["Ethereum", "Smart Contracts", "Solidity", "DeFi", "Mining"]
    },
    {
      icon: TrendingUp,
      title: "Trading & Fintech",
      description: "Analisi dei mercati crypto e trading algoritmico, con interesse per l'evoluzione delle tecnologie finanziarie decentralizzate.",
      tags: ["Crypto Trading", "DeFi", "Market Analysis", "Fintech"]
    },
    {
      icon: Waves,
      title: "Nuoto Agonistico",
      description: "Campione Italiano 1998 nei 50m stile libero. Attualmente pratico nuoto Master partecipando a competizioni regionali e nazionali.",
      tags: ["Master Swimming", "Competizioni", "Istruttore CONI"]
    },
    {
      icon: Trophy,
      title: "Innovazione Tecnologica",
      description: "Ricerca costante e sperimentazione di tecnologie emergenti, dall'AI alle nuove architetture cloud e edge computing.",
      tags: ["Emerging Tech", "Cloud Computing", "Innovation"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Interessi & Passioni
            </h2>
            <div className="w-24 h-1 gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oltre il lavoro: le passioni che alimentano la mia curiosità 
              e mantengono viva la voglia di innovare e crescere
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {interests.map((interest, index) => (
              <Card key={index} className="shadow-cyber border-border/50 hover-glow transition-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <div className="p-3 bg-primary/10 rounded-full mr-4">
                      <interest.icon className="w-6 h-6 text-primary" />
                    </div>
                    {interest.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {interest.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {interest.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className="border-security-green/30 text-security-green hover:bg-security-green/10 transition-smooth"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="gradient-card shadow-cyber border-border/50 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Un Approccio Olistico all'Innovazione
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  La mia passione per il nuoto mi ha insegnato la disciplina e la determinazione, 
                  qualità che applico quotidianamente nel lavoro. L'interesse per le tecnologie 
                  blockchain e crypto mi mantiene sempre aggiornato sulle innovazioni più 
                  avanzate, permettendomi di anticipare le tendenze tecnologiche e offrire 
                  soluzioni all'avanguardia ai miei clienti.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;