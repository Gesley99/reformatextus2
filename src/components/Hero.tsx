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
            {/* Linha 1: TEXTUS com 'E' estilizado */}
            <div className="flex items-center gap-0 leading-none">
              <span style={{fontFamily:"Cinzel, serif"}} className="text-6xl md:text-7xl font-extrabold tracking-wide">T</span>
              {/* 'E' estilizado inspirado no logo */}
              <svg aria-hidden="true" width="70" height="84" viewBox="0 0 70 84" className="mx-1">
                <path d="M10 10h48v12H22v16h30v12H22v16h36v12H10V10z" fill="#0F172A"/>
                <path d="M24 56c7 0 12 5 12 12v14l-7-5-7 5V68c0-7 5-12 12-12z" fill="#0F172A"/>
              </svg>
              <span style={{fontFamily:"Cinzel, serif"}} className="text-6xl md:text-7xl font-extrabold tracking-wide">XTUS</span>
            </div>
            {/* Traço amarelo com leve brilho */}
            <svg aria-hidden="true" viewBox="0 0 360 60" className="w-[240px] md:w-[340px]">
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path d="M15 40c70-34 170-34 330 0" fill="none" stroke="#E0B03B" strokeWidth="9" strokeLinecap="round" filter="url(#glow)"/>
            </svg>
            {/* Linha 2: ACADÊMICO */}
            <div>
              <span style={{fontFamily:"Cinzel, serif"}} className="text-3xl md:text-4xl font-extrabold tracking-wide">ACADÊMICO</span>
            </div>
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
              <span className="font-medium">Consultoria Acadêmica</span>
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