const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="bg-card soft-shadow rounded-2xl p-8 md:p-12 border border-border/50">
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-center">
            I'm an aspiring software developer & instructor from{" "}
            <span className="text-primary font-medium">Vijayawada, India</span>, with expertise in{" "}
            <span className="text-primary font-medium">Data Structures & Algorithms</span>,{" "}
            <span className="text-primary font-medium">competitive programming</span>, and{" "}
            <span className="text-primary font-medium">full-stack development</span> using{" "}
            <span className="text-primary font-medium">MERN & Spring Boot</span>. I love{" "}
            <span className="text-primary font-medium">mentoring peers</span>,{" "}
            <span className="text-primary font-medium">building scalable systems</span>, and helping students succeed in{" "}
            <span className="text-primary font-medium">coding interviews</span> and real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;