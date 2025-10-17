import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Kompüter Elmləri üzrə Bakalavr",
      institution: "Bakı Dövlət Universiteti",
      period: "2018 - 2022",
      description: "Web Development, Algoritmlər və Data Strukturları üzrə ixtisaslaşma",
    },
    {
      degree: "Full Stack Development Bootcamp",
      institution: "Online Təhsil Platforması",
      period: "2022 - 2023",
      description: "Modern JavaScript frameworkləri və backend texnologiyaları",
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Təhsil</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Akademik fon və sertifikatlar
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--gradient-from))] to-[hsl(var(--gradient-to))]" />
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 -ml-[7px] rounded-full bg-primary animate-glow-pulse" />

              {/* Content */}
              <div className="bg-card border border-border rounded-lg p-6 hover-glow transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                    <p className="text-primary mb-2">{item.institution}</p>
                    <p className="text-sm text-muted-foreground mb-2">{item.period}</p>
                    <p className="text-muted-foreground">{item.description}</p>
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

export default Education;
