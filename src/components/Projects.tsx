import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Tam funksional onlayn mağaza platforması",
      fullDescription: "Modern e-commerce həlli - ödəniş inteqrasiyası, məhsul idarəetməsi, admin paneli və real-time inventar izləmə sistemi ilə.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Komanda üçün tapşırıq idarəetmə sistemi",
      fullDescription: "Real-time əməkdaşlıq imkanı olan layihə idarəetmə aləti. Drag-and-drop interfeys, notification sistemi və analitika.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      tags: ["TypeScript", "Next.js", "Supabase"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Müasir portfolio şablonu",
      fullDescription: "Responsiv və animasiyalı portfolio dizaynı. Dark mode, smooth keçidlər və peşəkar görünüş.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      tags: ["React", "Tailwind", "Framer Motion"],
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "Content idarəetmə sistemi",
      fullDescription: "Markdown dəstəyi, tag sistemi, axtarış funksiyası və SEO optimallaşdırılması olan blog platforması.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
      tags: ["Next.js", "MDX", "MongoDB"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Layihələrim</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real müştəri layihələri və demo işlər
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden cursor-pointer hover-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button variant="secondary" size="sm">
                    Ətraflı <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-base">
                  {selectedProject.fullDescription}
                </DialogDescription>
              </DialogHeader>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-lg"
              />
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {selectedProject.demoUrl && (
                  <Button className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                )}
                {selectedProject.githubUrl && (
                  <Button variant="outline" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
