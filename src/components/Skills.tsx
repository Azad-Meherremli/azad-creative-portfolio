import { Code2, Palette, Server, Database, Globe, Smartphone } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Node.js, Express, REST APIs, GraphQL",
    },
    {
      icon: Database,
      title: "Database",
      description: "PostgreSQL, MongoDB, Supabase, Prisma",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "HTML5, CSS3, JavaScript, WebSockets",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Responsive Design, User Experience",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, Progressive Web Apps",
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Bacarıqlarım</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Müasir texnologiyalar və alətlərlə işləyirəm
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--gradient-from))] to-[hsl(var(--gradient-to))] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <skill.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
