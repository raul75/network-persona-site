import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "Sistemi Windows/Linux", level: 95 },
    { name: "Reti & Sicurezza", level: 90 },
    { name: "Virtualizzazione", level: 88 },
    { name: "Sviluppo Web", level: 82 },
    { name: "System Integration", level: 92 },
    { name: "Backup & Storage", level: 85 }
  ];

  const technologies = [
    "Windows Server 2008/2012/2016", "CentOS", "Debian", "Ubuntu", "Mac OS X",
    "VMware ESXi", "VMware vCenter", "Docker CE", "Xenserver",
    "Cisco", "SonicWall", "Juniper", "pfSense", "Endian", "Shorewall",
    "HTML", "CSS", "PHP", "WordPress", "Joomla", "MySQL",
    "Qnap", "Rsync", "Acronis", "Nextcloud", "Zimbra",
    "VPN", "MPLS", "LAN/WAN", "GDPR Compliance"
  ];

  const certifications = [
    { name: "HP Netserver Technical Training", status: "Certified" },
    { name: "Reti Telematiche - Politecnico Milano", status: "Certified" },
    { name: "Istruttore Nuoto CONI", status: "Certified" },
    { name: "Diploma Liceo Scientifico", status: "Certified" }
  ];

  return (
    <section className="py-20 gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Competenze Tecniche
            </h2>
            <div className="w-24 h-1 gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oltre 20 anni di esperienza in sistemi IT, infrastrutture enterprise 
              e tecnologie innovative dall'amministrazione di sistema al consulting avanzato
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-cyber border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                  Competenze Principali
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primary font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-cyber border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <div className="w-3 h-3 bg-security-green rounded-full mr-3"></div>
                  Certificazioni
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium text-foreground">
                        {cert.name}
                      </span>
                      <Badge 
                        variant={cert.status === "Certified" ? "default" : "secondary"}
                        className={cert.status === "Certified" ? "bg-security-green text-accent-foreground" : ""}
                      >
                        {cert.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-cyber border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                Tecnologie & Strumenti
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="border-primary/30 text-foreground hover:bg-primary/10 transition-smooth"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;