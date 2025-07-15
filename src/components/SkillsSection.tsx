import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "Network Security", level: 95 },
    { name: "Penetration Testing", level: 90 },
    { name: "SIEM/SOC", level: 88 },
    { name: "Firewall Management", level: 92 },
    { name: "Incident Response", level: 85 },
    { name: "Risk Assessment", level: 87 }
  ];

  const technologies = [
    "Cisco ASA", "Palo Alto", "Fortinet", "pfSense",
    "Nessus", "OpenVAS", "Burp Suite", "Metasploit",
    "Splunk", "ELK Stack", "QRadar", "ArcSight",
    "Wireshark", "Nmap", "Aircrack-ng", "John the Ripper",
    "Python", "PowerShell", "Bash", "SQL",
    "VMware", "Docker", "Kubernetes", "AWS Security"
  ];

  const certifications = [
    { name: "CISSP", status: "Certified" },
    { name: "CEH", status: "Certified" },
    { name: "CCNA Security", status: "Certified" },
    { name: "CompTIA Security+", status: "Certified" },
    { name: "OSCP", status: "In Progress" }
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
              Un mix di competenze tecniche avanzate e certificazioni riconosciute 
              nel settore della cybersecurity
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