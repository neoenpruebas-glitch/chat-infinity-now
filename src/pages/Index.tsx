import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Clock, Zap, Users, TrendingUp, Settings, ShieldCheck, Sparkles, Bot } from "lucide-react";
import ChatInterface from "@/components/ChatInterface";
import ContactDialog from "@/components/ContactDialog";
const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Main content */}
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-12 lg:py-20">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-32">
            {/* Text content */}
            <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="glow-text text-primary">
                    Atiende a tus clientes 24 h
                  </span>
                  <br />
                  en tu web, sin esfuerzo
                </h1>
                
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Es el momento de integrar la IA en tu negocio para hacer más y mejor.
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group relative overflow-hidden shadow-2xl hover:shadow-primary/50 transform transition-all duration-300 hover:-translate-y-1" 
                  onClick={async () => {
                    try {
                      await fetch("https://primary-production-51ca.up.railway.app/webhook/f5f52f87-bfb8-41a6-80c8-3c204e93e1e6", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ "1boton": "clicado", timestamp: new Date().toISOString() })
                      });
                    } catch (error) {
                      console.error("Error enviando webhook:", error);
                    }
                    setDialogOpen(true);
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                  <span className="relative z-10 text-lg font-bold tracking-wide">🚀 Quiero mi chatbot</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>
              </div>
            </div>

            {/* Chat Interface */}
            <div id="chat-section" className="flex-1 relative animate-fade-in">
              <div className="relative animate-float">
                <ChatInterface />
              </div>
            </div>
          </div>

          {/* Main Value Proposition */}
          <div className="max-w-6xl mx-auto mb-32">
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                Te ofrecemos un <span className="glow-text text-primary">Chatbot inteligente</span> para tu negocio
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                que informa, asiste y convierte visitantes en potenciales clientes
              </p>
              
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 lg:p-12 mt-12">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  El chatbot de <span className="text-primary font-semibold">Vega Consultores</span> es una solución completa para tu web: 
                  responde a preguntas frecuentes sobre productos o servicios, guía al cliente por tus productos/servicios 
                  y reduce la carga de trabajo de soporte mejorando la experiencia del usuario.
                </p>
              </div>

              <button onClick={() => document.getElementById('chat-section')?.scrollIntoView({
              behavior: 'smooth'
            })} className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-secondary/20 via-primary/10 to-secondary/20 border-2 border-secondary/40 rounded-full animate-pulse-glow mt-8 hover:scale-105 transition-all duration-300 group cursor-pointer glow-box">
                <MessageSquare className="w-6 h-6 text-secondary group-hover:rotate-12 transition-transform" />
                <span className="text-lg font-bold">
                  <span className="text-foreground">Pincha en el </span>
                  <span className="text-secondary glow-text">Chatbot</span>
                  <span className="text-foreground"> de nuestra web para vivir la experiencia</span>
                </span>
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              </button>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="max-w-6xl mx-auto mb-32">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
              <span className="glow-text text-primary">Beneficios clave</span> para tu negocio
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Atención al cliente 24/7</h3>
                <p className="text-muted-foreground">
                  Tu chatbot nunca descansa. Atiende consultas en cualquier momento del día.
                </p>
              </div>

              <div className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Respuestas rápidas y coherentes</h3>
                <p className="text-muted-foreground">
                  Responde instantáneamente a consultas de visitantes con información precisa.
                </p>
              </div>

              <div className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Captura de leads</h3>
                <p className="text-muted-foreground">
                  Captura datos de interesados y genera leads cualificados automáticamente.
                </p>
              </div>

              <div className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reducción del tiempo de soporte</h3>
                <p className="text-muted-foreground">
                  Automatiza respuestas a preguntas repetitivas y libera a tu equipo.
                </p>
              </div>

              <div className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mejora la experiencia del usuario</h3>
                <p className="text-muted-foreground">
                  Ofrece una experiencia fluida y personalizada que encanta a tus clientes.
                </p>
              </div>

              <div className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Escalable y personalizable</h3>
                <p className="text-muted-foreground">
                  Se adapta según tu catálogo de productos y servicios, creciendo contigo.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="max-w-5xl mx-auto mb-32">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Perfecto para <span className="glow-text text-primary">cualquier negocio</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Este chatbot se adapta a ti, sin importar tu sector
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-3xl p-8 lg:p-12 border border-border/50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["Tiendas online", "Talleres", "Abogacía", "Construcción", "Formación", "Hostelería", "Servicios locales", "Y mucho más..."].map((item, index) => <div key={index} className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-colors">
                    <p className="font-semibold text-foreground">{item}</p>
                  </div>)}
              </div>
            </div>
          </div>

          {/* Special Offer Section */}
          <div className="max-w-5xl mx-auto">
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
                    ¡Ahorra el 40% en la implementación y el 50% en la cuota mensual durante 14 meses!
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
                          <span className="text-2xl text-muted-foreground line-through">730€</span>
                          <span className="text-5xl font-bold text-primary glow-text">435€</span>
                        </div>
                        
                        <div className="inline-block px-4 py-1 bg-primary/20 border border-primary/30 rounded-full">
                          <span className="text-sm font-semibold text-primary">Ahorra 40% • 295€ de descuento</span>
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
                    className="group text-lg relative overflow-hidden shadow-2xl hover:shadow-secondary/50 transform transition-all duration-300 hover:-translate-y-1 animate-pulse-glow" 
                    onClick={async () => {
                      try {
                        await fetch("https://primary-production-51ca.up.railway.app/webhook/f5f52f87-bfb8-41a6-80c8-3c204e93e1e6", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ "2boton": "clicado", timestamp: new Date().toISOString() })
                        });
                      } catch (error) {
                        console.error("Error enviando webhook:", error);
                      }
                      setDialogOpen(true);
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                    <span className="relative z-10 text-xl font-bold tracking-wide">🚀 Activar mi chatbot ahora</span>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </Button>
                  <p className="mt-4 text-sm text-muted-foreground">
                </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>;
};
export default Index;