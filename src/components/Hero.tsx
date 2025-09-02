import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Award, Feather } from "lucide-react";
import heroImage from "@/assets/hero-academic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-subtle overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Ambiente acadêmico profissional" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-6 animate-fade-in">
            {/* Logo */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="relative">
                <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-secondary" />
                <Feather className="w-6 h-6 md:w-8 md:h-8 text-secondary absolute -top-1 -right-1 rotate-45" />
              </div>
            </div>
            
            
          <div className="flex flex-col items-center gap-3 select-none mt-4">
            {/* Line 1: TEXTUS with stylized E */}
            <div className="flex items-center gap-0 leading-none">
              <span style={{fontFamily:"Cinzel, serif"}} className="text-6xl md:text-7xl font-extrabold tracking-wide">T</span>
              {/* Stylized E as inline SVG (approximation) */}
              <svg aria-hidden="true" width="62" height="76" viewBox="0 0 62 76" className="mx-1">
                <path d="M8 8h38v10H20v16h24v10H20v16h26v10H8V8z" fill="#0F172A"/>
                <!-- small book mark -->
                <path d="M22 46c6 0 10 4 10 10v12l-6-4-6 4V56c0-6 4-10 10-10z" fill="#0F172A"/>
              </svg>
              <span style={{fontFamily:"Cinzel, serif"}} className="text-6xl md:text-7xl font-extrabold tracking-wide">XTUS</span>
            </div>
            {/* Yellow swoosh */}
            <svg aria-hidden="true" viewBox="0 0 320 40" className="w-[220px] md:w-[320px]">
              <path d="M10 30c60-28 140-28 300 0" fill="none" stroke="#E0B03B" strokeWidth="8" strokeLinecap="round"/>
            </svg>
            {/* Line 2: ACADÊMICO */}
            <div>
              <span style={{fontFamily:"Cinzel, serif"}} className="text-3xl md:text-4xl font-extrabold tracking-wide">ACADÊMICO</span>
            </div>
          </div>

          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-slide-up max-w-3xl mx-auto text-balance">
            Excelência em trabalhos acadêmicos. Transformamos suas ideias em pesquisas de qualidade superior.
          </p>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-up">
            <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
              <BookOpen className="w-6 h-6 text-secondary" />
              <span className="font-medium">TCC & Dissertações</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
              <Award className="w-6 h-6 text-secondary" />
              <span className="font-medium">Qualidade Garantida</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
              <ArrowRight className="w-6 h-6 text-secondary" />
              <span className="font-medium">Entrega no Prazo</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open('https://wa.me/556196212692+55 61 9621-2692?text=Olá, gostaria de um orçamento para o meu trabalho', '_blank')}
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="academic" size="lg" className="text-lg px-8 py-6 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              Ver Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;