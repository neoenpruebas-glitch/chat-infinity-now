import { Button } from "@/components/ui/button";
import { MessageSquare, Clock, Zap } from "lucide-react";
import heroImage from "@/assets/chatbot-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Main content */}
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-20 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text content */}
            <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Tu negocio nunca duerme.
                  <br />
                  <span className="glow-text text-primary">
                    Tu atención al cliente, tampoco.
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Ofrece respuestas instantáneas, capta más leads y mejora la experiencia 
                  de tus clientes con un chatbot que trabaja 24/7 por ti.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-foreground/80">
                  Activa tu asistente digital hoy y sorprende a tus clientes desde el primer chat.
                </p>
                
                <Button 
                  variant="hero" 
                  size="xl"
                  className="group"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Quiero mi chatbot
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Disponible 24/7</h3>
                    <p className="text-sm text-muted-foreground">
                      Atiende a tus clientes en cualquier momento
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Respuestas instantáneas</h3>
                    <p className="text-sm text-muted-foreground">
                      Sin tiempos de espera para tus usuarios
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
                  <MessageSquare className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Capta más leads</h3>
                    <p className="text-sm text-muted-foreground">
                      Convierte visitantes en clientes potenciales
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="flex-1 relative animate-fade-in">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl" />
                <img 
                  src={heroImage} 
                  alt="Chatbot futurista"
                  className="relative rounded-3xl shadow-2xl border border-border/20 w-full"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
