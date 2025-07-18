import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "2200030389cseh@gmail.com",
      link: "mailto:2200030389cseh@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9396161616",
      link: "tel:+919396161616"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Chowtipalli Veera Bhadram",
      link: "https://linkedin.com/in/chowtipalli-veera-bhadram"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "bhadra06",
      link: "https://github.com/bhadra06"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a chat about technology!
          </p>
        </div>

        <div className="bg-card soft-shadow rounded-2xl p-8 md:p-12 border border-border/50">
          <div className="flex items-center justify-center mb-8">
            <div className="p-3 bg-primary/10 rounded-lg">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <span className="ml-3 text-lg font-medium">Vijayawada, India</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto p-6 flex-col items-start hover:border-primary/40 transition-all duration-300 group"
                asChild
              >
                <a href={contact.link} target={contact.link.startsWith('http') ? '_blank' : undefined} rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <div className="flex items-center w-full mb-2">
                    <contact.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <span className="ml-3 font-medium">{contact.label}</span>
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {contact.value}
                  </span>
                </a>
              </Button>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="glow"
              size="lg"
              className="text-lg px-8 py-3"
              asChild
            >
              <a href="mailto:2200030389cseh@gmail.com">
                Send Me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;