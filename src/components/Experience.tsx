import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      position: "Senior Full Stack Developer",
      company: "Tech Solutions LLC",
      period: "2023 - Hazırda",
      description: "E-commerce və enterprise səviyyəli web tətbiqlərinin inkişafı. React, Node.js və PostgreSQL ilə işləyirəm.",
      achievements: [
        "5+ böyük layihə tamamlandı",
        "Performansda 40% artım",
        "Junior developerlərin mentorluğu"
      ]
    },
    {
      position: "Frontend Developer",
      company: "Digital Agency",
      period: "2022 - 2023",
      description: "Müştərilər üçün responsive web saytlar və tətbiqlər hazırlanması. Modern UI/UX standartlarına uyğun işlər.",
      achievements: [
        "10+ müştəri layihəsi",
        "95%+ müştəri məmnuniyyəti",
        "Design system yaradılması"
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Təcrübə</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Peşəkar iş təcrübəsi
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--gradient-from))] to-[hsl(var(--gradient-to))]" />
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 -ml-[7px] rounded-full bg-accent animate-glow-pulse" />

              {/* Content */}
              <div className="bg-card border border-border rounded-lg p-6 hover-glow transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{exp.position}</h3>
                    <p className="text-accent mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
