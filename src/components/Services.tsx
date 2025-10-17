import { Code, Layout, Smartphone, Settings, Zap, Headphones } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "Web Development",
      description: "Responsive və modern web saytlar və tətbiqlər hazırlanması. SEO optimallaşdırılması və performans.",
      features: ["Landing pages", "E-commerce", "Web applications"]
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Sizin biznes ehtiyaclarınıza uyğun fərdi həllər. Backend və frontend tam integrativ işlər.",
      features: ["API Development", "Database Design", "System Integration"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "iOS və Android üçün cross-platform mobil tətbiqlər. React Native ilə native performans.",
      features: ["React Native", "PWA", "App Store Deploy"]
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Mövcud layihələrin dəstəyi, yeniləmə və texniki xidmət. Bug fixing və performans optimizasiyası.",
      features: ["Bug Fixes", "Updates", "Performance Optimization"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Veb saytların sürətləndirilməsi və optimallaşdırılması. Core Web Vitals üzrə təkmilləşdirmə.",
      features: ["Speed Optimization", "SEO", "Analytics"]
    },
    {
      icon: Headphones,
      title: "Consultation",
      description: "Texniki məsləhət və layihə planlaması. Texnologiya seçimi və arxitektura dizaynı.",
      features: ["Tech Stack Selection", "Architecture", "Best Practices"]
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Xidmətlər</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tam spektrli web development xidmətləri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover-glow transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[hsl(var(--gradient-from))] to-[hsl(var(--gradient-to))] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
