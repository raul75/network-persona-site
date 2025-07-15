import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "security.specialist@email.com",
      href: "mailto:security.specialist@email.com"
    },
    {
      icon: Phone,
      label: "Telefono",
      value: "+39 333 123 4567",
      href: "tel:+393331234567"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/security-specialist",
      href: "https://linkedin.com/in/security-specialist"
    },
    {
      icon: MapPin,
      label: "Ubicazione",
      value: "Italia",
      href: null
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Messaggio inviato!",
      description: "Ti risponderò al più presto possibile.",
    });
  };

  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Contattami
            </h2>
            <div className="w-24 h-1 gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Hai un progetto di sicurezza informatica? Vuoi una consulenza? 
              Non esitare a contattarmi per discutere delle tue esigenze.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6 animate-slide-up">
              <Card className="bg-card/10 backdrop-blur-sm border-primary/20 shadow-cyber">
                <CardHeader>
                  <CardTitle className="text-primary-foreground">
                    Informazioni di Contatto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/20 rounded-full">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/60">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-primary-foreground hover:text-security-green transition-smooth"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-primary-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-card/10 backdrop-blur-sm border-primary/20 shadow-cyber">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary-foreground mb-4">
                    Disponibilità
                  </h3>
                  <div className="space-y-3 text-primary-foreground/80">
                    <div className="flex justify-between">
                      <span>Consulenze:</span>
                      <span className="text-security-green">Disponibile</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Progetti a lungo termine:</span>
                      <span className="text-security-green">Disponibile</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Interventi di emergenza:</span>
                      <span className="text-security-green">24/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/10 backdrop-blur-sm border-primary/20 shadow-cyber animate-slide-up">
              <CardHeader>
                <CardTitle className="text-primary-foreground">
                  Invia un Messaggio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Nome"
                      className="bg-background/20 border-primary/30 text-primary-foreground placeholder:text-primary-foreground/50"
                      required
                    />
                    <Input
                      placeholder="Cognome"
                      className="bg-background/20 border-primary/30 text-primary-foreground placeholder:text-primary-foreground/50"
                      required
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-background/20 border-primary/30 text-primary-foreground placeholder:text-primary-foreground/50"
                    required
                  />
                  <Input
                    placeholder="Oggetto"
                    className="bg-background/20 border-primary/30 text-primary-foreground placeholder:text-primary-foreground/50"
                    required
                  />
                  <Textarea
                    placeholder="Descrivi il tuo progetto o le tue esigenze di sicurezza..."
                    rows={5}
                    className="bg-background/20 border-primary/30 text-primary-foreground placeholder:text-primary-foreground/50 resize-none"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-security-green hover:bg-security-green-light text-accent-foreground shadow-glow hover-glow transition-smooth"
                    size="lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Invia Messaggio
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;