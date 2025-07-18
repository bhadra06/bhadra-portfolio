import { Code, Database, Cloud, Wrench } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages & DSA",
      skills: ["Java", "Python", "C", "C++", "Data Structures & Algorithms", "Competitive Programming"]
    },
    {
      icon: Wrench,
      title: "Web Development",
      skills: ["MERN Stack", "Spring Boot", "REST APIs"]
    },
    {
      icon: Wrench,
      title: "Frameworks & Tools",
      skills: ["React.js", "Node.js", "Spring MVC", "Django", "Git", "Postman", "VS Code", "IntelliJ IDEA"]
    },
    {
      icon: Database,
      title: "Databases & Cloud",
      skills: ["MySQL", "PostgreSQL", "AWS"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card soft-shadow rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold ml-4">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;