import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Code } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Investment Portal",
      technologies: ["Java", "Spring Boot", "MySQL"],
      description: "Developed a Mutual Fund Investment Portal with Spring Boot backend, JWT security, and automated CI/CD pipelines, achieving high performance and reliability.",
      duration: "Sep 2024 — Dec 2024",
      link: "#", // placeholder
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Hospital Management System",
      technologies: ["MERN Stack"],
      description: "Optimized database queries and application performance, ensuring a 2x faster system and smooth deployment.",
      duration: "Jan 2025 — Present",
      link: "#", // placeholder
      gradient: "from-purple-500/10 to-pink-500/10"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card soft-shadow rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-300 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {project.duration}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center mb-4">
                  <Code className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm font-medium text-muted-foreground">Technologies:</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;