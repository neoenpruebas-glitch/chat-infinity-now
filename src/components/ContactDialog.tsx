import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Send, Sparkles } from "lucide-react";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nombre || !telefono) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa nombre y teléfono",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://primary-production-0bdc.up.railway.app/webhook-test/d0bced49-eaca-4a78-a558-cf2ba604ccf9",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre,
            telefono,
            timestamp: new Date().toISOString(),
          }),
        }
      );

      if (response.ok) {
        toast({
          title: "¡Solicitud enviada!",
          description: "Nos pondremos en contacto contigo pronto",
        });
        setNombre("");
        setTelefono("");
        onOpenChange(false);
      } else {
        throw new Error("Error al enviar");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar la solicitud. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-background via-background to-primary/5 border-primary/20">
        <DialogHeader className="space-y-4">
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center glow-box">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <DialogTitle className="text-3xl font-bold text-center">
            <span className="glow-text text-primary">¡Activa tu Chatbot!</span>
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Déjanos tus datos y nos pondremos en contacto contigo para activar tu asistente inteligente
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="nombre" className="text-base font-semibold">
              Nombre *
            </Label>
            <Input
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre completo"
              required
              className="h-12 text-base border-border/50 focus:border-primary bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefono" className="text-base font-semibold">
              Teléfono *
            </Label>
            <Input
              id="telefono"
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="+34 600 000 000"
              required
              className="h-12 text-base border-border/50 focus:border-primary bg-background/50"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 glow-box transition-all duration-300 hover:scale-[1.02]"
          >
            {isLoading ? (
              <>Enviando...</>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Solicitar mi chatbot
              </>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Al enviar este formulario aceptas que nos pongamos en contacto contigo
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
