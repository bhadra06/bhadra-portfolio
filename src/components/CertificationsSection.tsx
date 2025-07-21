import { Award, CheckCircle } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Red Hat Certified Enterprise Application Developer",
      icon: Award,
      color: "text-red-500",
      link: "https://www.credly.com/badges/27a6b448-99ac-4b7d-bbf3-ec6a57fe532f"
    },
    {
      title: "AWS Cloud Practitioner",
      icon: CheckCircle,
      color: "text-orange-500",
      link: "https://www.credly.com/badges/165a894b-869b-4594-b709-d38a95f9ea79"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card soft-shadow rounded-2xl p-6 border border-border/50 hover:border-primary/20 transition-all duration-300 group block cursor-pointer"
            >
              <div className="flex items-center">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <cert.icon className={`h-6 w-6 ${cert.color}`} />
                </div>
                <h3 className="text-lg font-semibold ml-4 group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;