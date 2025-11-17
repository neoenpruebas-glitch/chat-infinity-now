import { Button } from "@/components/ui/button";
import { MessageSquare, Clock, Zap } from "lucide-react";
import ChatInterface from "@/components/ChatInterface";

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

            {/* Chat Interface */}
            <div className="flex-1 relative animate-fade-in">
              <div className="relative animate-float">
                <ChatInterface />
              </div>
            </div>
          </div>

          {/* Special Offer Section */}
          <div className="mt-32 max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden glow-box">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
              
              <div className="relative p-8 lg:p-12 text-center space-y-8">
                {/* Urgency Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 border border-secondary/30 rounded-full animate-pulse-glow">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-sm font-semibold text-secondary">Oferta Exclusiva por Tiempo Limitado</span>
                </div>

                {/* Main Headline */}
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                    <span className="glow-text text-primary">
                      Aprovecha esta oportunidad única
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    No dejes pasar esta oferta especial de lanzamiento
                  </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  {/* Implementation Price */}
                  <div className="relative group">
                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Implementación del Servicio</h3>
                        
                        <div className="flex items-baseline justify-center gap-3">
                          <span className="text-2xl text-muted-foreground line-through">860€</span>
                          <span className="text-5xl font-bold text-primary glow-text">385€</span>
                        </div>
                        
                        <div className="inline-block px-4 py-1 bg-primary/20 border border-primary/30 rounded-full">
                          <span className="text-sm font-semibold text-primary">Ahorra 40% • 475€ de descuento</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Monthly Fee */}
                  <div className="relative group">
                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-secondary/50 transition-all duration-300">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Cuota Mensual</h3>
                        
                        <div className="flex items-baseline justify-center gap-3">
                          <span className="text-2xl text-muted-foreground line-through">19€/mes</span>
                          <span className="text-5xl font-bold text-secondary glow-text">9,50€/mes</span>
                        </div>
                        
                        <div className="inline-block px-4 py-1 bg-secondary/20 border border-secondary/30 rounded-full">
                          <span className="text-sm font-semibold text-secondary">50% OFF para siempre</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Button 
                    variant="hero" 
                    size="xl"
                    className="group text-lg"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    Activar mi chatbot ahora
                  </Button>
                  <p className="mt-4 text-sm text-muted-foreground">
                    💎 Precio garantizado de por vida · Sin permanencia · Cancela cuando quieras
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
