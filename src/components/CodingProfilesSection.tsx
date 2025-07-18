import { Button } from "@/components/ui/button";
import { ExternalLink, Trophy, Star, Github } from "lucide-react";

const CodingProfilesSection = () => {
  const profiles = [
    {
      platform: "CodeChef",
      username: "klu_2200030389",
      stats: "★★, 300+ problems solved",
      icon: Trophy,
      link: "https://codechef.com/users/klu_2200030389",
      color: "text-yellow-600",
      bgColor: "bg-yellow-500/10"
    },
    {
      platform: "GitHub",
      username: "bhadra06",
      stats: "Open source contributions",
      icon: Github,
      link: "https://github.com/bhadra06",
      color: "text-gray-700",
      bgColor: "bg-gray-500/10"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Coding <span className="text-gradient">Profiles</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-card soft-shadow rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className={`p-3 ${profile.bgColor} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <profile.icon className={`h-6 w-6 ${profile.color}`} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {profile.platform}
                    </h3>
                    <p className="text-sm text-muted-foreground">@{profile.username}</p>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                  asChild
                >
                  <a href={profile.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="flex items-center text-muted-foreground">
                <Star className="h-4 w-4 mr-2 text-primary" />
                <span>{profile.stats}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;