import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Xəta",
        description: "Zəhmət olmasa bütün xanaları doldurun",
        variant: "destructive",
      });
      return;
    }

    // Success message
    toast({
      title: "Mesaj göndərildi!",
      description: "Tezliklə sizinlə əlaqə saxlayacağam.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Əlaqə</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Gəlin birlikdə bir şey yaradaq
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Əlaqə məlumatları</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover-glow transition-all">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:azad@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                      azad@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover-glow transition-all">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Telefon</p>
                    <a href="tel:+994501234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +994 (50) 123 45 67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover-glow transition-all">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Ünvan</p>
                    <p className="text-muted-foreground">Bakı, Azərbaycan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-[hsl(var(--gradient-from))]/10 to-[hsl(var(--gradient-to))]/10 border border-primary/20">
              <h4 className="text-lg font-semibold mb-2">İş saatları</h4>
              <p className="text-muted-foreground">Bazar ertəsi - Cümə: 9:00 - 18:00</p>
              <p className="text-muted-foreground">Şənbə - Bazar: Əlaqə forması ilə</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Ad Soyad
              </label>
              <Input
                id="name"
                placeholder="Adınızı daxil edin"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-card"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-card"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mesaj
              </label>
              <Textarea
                id="message"
                placeholder="Mesajınızı yazın..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-card resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-[hsl(var(--gradient-from))] to-[hsl(var(--gradient-to))] hover:opacity-90 transition-opacity"
            >
              Göndər
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
