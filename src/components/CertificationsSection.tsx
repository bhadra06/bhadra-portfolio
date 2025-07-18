import { Award, CheckCircle } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Red Hat Certified Enterprise Application Developer",
      icon: Award,
      color: "text-red-500"
    },
    {
      title: "AWS Cloud Practitioner",
      icon: CheckCircle,
      color: "text-orange-500"
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
            <div
              key={index}
              className="bg-card soft-shadow rounded-2xl p-6 border border-border/50 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="flex items-center">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <cert.icon className={`h-6 w-6 ${cert.color}`} />
                </div>
                <h3 className="text-lg font-semibold ml-4 group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;