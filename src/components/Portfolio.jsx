import React, { useState, useRef } from 'react';

// Proyectos construidos con base en tu CV y experiencia técnica
const projects = [
  {
    id: '01',
    title: 'HABÍTALO MÉXICO',
    category: 'Plataforma Inmobiliaria Fullstack',
    description: 'Portal web inmobiliario y de desarrollo urbano. Diseñado con arquitectura desacoplada, SEO avanzado y filtros en tiempo real para optimizar la gestión de propiedades.',
    type: 'link',
    linkUrl: 'https://habitalo.com.mx',
    imageUrl: '${import.meta.env.BASE_URL}habitalomx.jpeg', 
    tags: ['REACT', 'DOCKER', 'MYSQL', 'HOSTINGER', 'DEVOPS', 'REST API', 'UI/UX', 'SEO OPTIMIZED']
  },
  {
    id: '02',
    title: 'SISTEMA UQROO VIRTUAL',
    category: 'Ecosistema Educativo',
    description: 'Plataforma web integral para procesos de selección y Objetos Virtuales de Aprendizaje con optimización de consultas SQL.',
    type: 'link',
    linkUrl: 'https://virtual.uqroo.mx/',
    imageUrl: '${import.meta.env.BASE_URL}uqroovirtual.jpeg',
    tags: ['ORACLE', 'MYSQL', 'BOOTSTRAP', 'PHP', 'JAVASCRIPT']
  },
  {
    id: '03',
    title: 'PRIVATIE APP & CONTROL DE ACCESOS',
    category: 'Seguridad & IoT',
    description: 'Solución móvil multiplataforma para autenticación y gestión de accesos residenciales mediante códigos QR dinámicos.',
    type: 'pdf',
    pdfUrl: '${import.meta.env.BASE_URL}pdf/Privatie.pdf',
    imageUrl: '${import.meta.env.BASE_URL}privatie.jpeg',
    tags: ['REACT NATIVE', 'EXPO', 'AWS', 'NESTJS', 'POSTGRE SQL']
  },
  {
    id: '04',
    title: 'PLATAFORMA CENEVAL & CHATBOT SEQ',
    category: 'Gubernamental / Automatización',
    description: 'Sistema de evaluación académica remota e integración de Asistente Virtual en WhatsApp para consultas masivas.',
    type: 'none',
    imageUrl: '${import.meta.env.BASE_URL}chatbot.jpeg',
    tags: ['JAVA SPRING BOOT', 'WHATSAPP API', 'ORACLE', 'JAVASCRIPT']
  },
  {
    id: '05',
    title: 'AUTOMATIZACIÓN & CONSTANCIAS MASIVAS',
    category: 'Herramientas Internas',
    description: 'Módulo automatizado para la generación de certificados digitales y despacho masivo de correos institucionales.',
    type: 'none',
    imageUrl: '${import.meta.env.BASE_URL}moodle.jpeg',
    tags: ['PHP', 'MYSQL', 'ORACLE', 'JS', 'BOOTSTRAP', 'MOODLE']
  }
];

const experience = [
  {
    period: 'NOV 2024 - MAR 2026',
    role: 'Jefe de Dpto. Soporte Técnico y Telecomunicaciones',
    company: 'Agencia de Proyectos Estratégicos de Q. Roo (AGEPRO Cancún)',
    desc: 'Gestión de infraestructura tecnológica, redes y soporte técnico en Cancún, Cozumel y Tulum.'
  },
  {
    period: 'MAR 2024 - OCT 2024',
    role: 'Desarrollador Web Fullstack Freelance',
    company: 'Proyectos Independientes',
    desc: 'Arquitectura web End-to-End, modelado de bases de datos relacionales y despliegues en producción sobre AWS/Hostinger.'
  },
  {
    period: 'JUL 2022 - MAR 2024',
    role: 'Analista de Sistemas & Desarrollador Full-Stack',
    company: 'Universidad de Quintana Roo (UQROO)',
    desc: 'Desarrollo de ecosistemas educativos, optimización de base de datos SQL y automatización de procesos institucionales.'
  },
  {
    period: 'MAR 2022 - JUN 2022',
    role: 'Desarrollador Web Fullstack Freelance',
    company: 'Proyectos Independientes',
    desc: 'Arquitectura web End-to-End, modelado de bases de datos relacionales y despliegues en producción sobre AWS/Hostinger.'
  },
  {
    period: 'ENE 2021 - FEB 2022',
    role: 'Desarrollador Web Fullstack',
    company: 'Servicios Educativos de Quintana Roo (SEQ)',
    desc: 'Implementación de Chatbot institucional en WhatsApp y plataforma de evaluación en línea Ceneval.'
  }
];

const techStack = {
  Frontend: ['Next.js (React)', 'React Native (Expo)', 'Angular 20', 'Flutter', 'Bootstrap', 'Tailwind CSS'],
  Backend: ['Node.js (NestJS)', 'Laravel', 'Python (FastAPI/Django)', 'REST APIs', 'Microservicios'],
  BasesDeDatos: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle'],
  CloudDevOps: ['AWS', 'GCP', 'Docker', 'CI/CD Pipelines']
};

export default function Portfolio() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setCurrentSlide(index);
    }
  };

  const slideTo = (direction) => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      const targetScroll = direction === 'next' 
        ? carouselRef.current.scrollLeft + clientWidth 
        : carouselRef.current.scrollLeft - clientWidth;
      
      carouselRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const handleCardClick = (proj) => {
    if (proj.type === 'pdf' && proj.pdfUrl) {
      openPdf(proj.pdfUrl);
    } else if (proj.type === 'link' && proj.linkUrl) {
      window.open(proj.linkUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const openPdf = (url) => {
    setSelectedPdf(url);
    document.body.style.overflow = 'hidden';
  };

  const closePdf = () => {
    setSelectedPdf(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-[#0a0708] text-[#ffd0d0] px-4 md:px-12 py-6 max-w-[1400px] mx-auto">
      
      {/* Encabezado Superior */}
      <header className="flex justify-between items-center text-[10px] md:text-xs tracking-widest text-[#9b7b7b] uppercase pb-6 border-b border-[#26191e]">
        <span>PORTAFOLIO WEB</span>
        <span className="hidden md:inline">MR. ALEXIMANDRO</span>
        <span className="text-[#df5555]">QUINTANA ROO, MX</span>
      </header>

      {/* Hero Principal */}
      <section className="text-center py-5 md:py-10">
        <h1 className="font-serif-display text-[5vw] md:text-[5vw] leading-none tracking-tight text-[#ffd0d0] select-none">
          José Alejandro López Doblado
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-6 text-left border-b border-[#26191e] pb-5">
          <div className="text-center md:text-left">
            <p className="text-xs md:text-sm tracking-wider uppercase text-[#9b7b7b] leading-relaxed">
              DESARROLLADOR WEB FULLSTACK & <br/>
              MAESTRO EN SISTEMAS COMPUTACIONALES <br/>
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-50 h-56 md:w-52 md:h-68 bg-[#130d10] border-2 border-[#df5555] rounded-t-full overflow-hidden relative shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0708] via-transparent to-transparent z-10" />
              <img 
                src="${import.meta.env.BASE_URL}me.jpeg" 
                alt="José Alejandro López Doblado" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="text-center md:text-right space-y-3">
            <p className="text-xs md:text-sm text-[#9b7b7b] leading-relaxed">
              Diseño y despliegue de ecosistemas web/móviles escalables, APIs de alto rendimiento e integración de IA con enfoque orientados a estabilidad y automatización de procesos.
            </p>
            <p className="text-[11px] text-[#df5555] uppercase tracking-widest">
              CED. ING: 13869057 | CED. TÉC: 11111170
            </p>
          </div>
        </div>
      </section>

      {/* Sección Proyectos */}
      <section className="py-2 border-b border-[#26191e]">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xs tracking-widest text-[#9b7b7b] uppercase">PROYECTOS DESTACADOS</h2>
            <p className="text-[11px] text-[#df5555] md:hidden mt-0.5">Desliza para explorar</p>
          </div>

          {/* Indicador Numérico y Controles (Solo Mobile) */}
          <div className="flex md:hidden items-center space-x-3">
            <button 
              onClick={() => slideTo('prev')}
              className="p-1.5 rounded border border-[#26191e] bg-[#130d10] text-xs text-[#9b7b7b] active:text-white"
              aria-label="Anterior"
            >
              ←
            </button>
            <span className="text-xs font-mono text-[#df5555] font-bold">
              {String(currentSlide + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
            <button 
              onClick={() => slideTo('next')}
              className="p-1.5 rounded border border-[#26191e] bg-[#130d10] text-xs text-[#9b7b7b] active:text-white"
              aria-label="Siguiente"
            >
              →
            </button>
          </div>

          <span className="hidden md:inline text-xs text-[#9b7b7b]">CARRUSEL INTERACTIVO E2E</span>
        </div>

        {/* Contenedor del Carrusel / Grid */}
        <div 
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pt-1 pb-4 md:pb-0"
        >
          {projects.map((proj) => {
            const isClickable = proj.type !== 'none';

            return (
              <div 
                key={proj.id}
                onClick={() => handleCardClick(proj)}
                className={`min-w-[88vw] sm:min-w-[70vw] md:min-w-0 snap-center bg-[#130d10] border border-[#26191e] p-6 rounded-xl transition-all duration-300 flex flex-col justify-between group ${
                  isClickable 
                    ? 'cursor-pointer hover:border-[#df5555]/60 hover:-translate-y-1' 
                    : 'cursor-default'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center text-xs text-[#9b7b7b] mb-3">
                    <span className="font-mono text-[#df5555] font-semibold">{proj.id}</span>
                    <span className="text-[10px] tracking-wider uppercase bg-[#0a0708] px-2 py-0.5 rounded border border-[#26191e]">
                      {proj.category}
                    </span>
                  </div>

                  {/* Recuadro de Previsualización con Borde Más Grueso y Fondo */}
                  <div className="h-40 bg-[#0a0708] border-1 border-[#26191e] rounded-lg mb-5 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-[#df5555]/50 transition-colors">
                    
                    {/* Imagen de Fondo (Si existe) */}
                    {proj.imageUrl && (
                      <img 
                        src={proj.imageUrl} 
                        alt={proj.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                      />
                    )}

                    {/* Gradient Overlay sobre la imagen */}
                    {proj.imageUrl && (
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0708] via-[#0a0708]/60 to-transparent z-10" />
                    )}

                    {/* Contenido / Icono sobre la imagen */}
                    <div className="relative z-20 text-center p-4">
                      {proj.type === 'pdf' && (
                        <>
                          <span className="text-3xl block mb-1 animate-bounce">📄</span>
                          <span className="text-[10px] text-[#ffd0d0] font-medium tracking-wider block">
                            Haz clic para visualizar
                          </span>
                        </>
                      )}

                      {proj.type === 'link' && (
                        <>
                          <span className="text-3xl block mb-1 animate-bounce group-hover:scale-110 transition-transform">🌐</span>
                          <span className="text-[10px] text-[#ffd0d0] font-medium tracking-wider block">
                            Haz clic para visitar sitio
                          </span>
                        </>
                      )}

                      {proj.type === 'none' && !proj.imageUrl && (
                        <div className="text-[#9b7b7b]">
                        </div>
                      )}
                    </div>

                  </div>

                  <h3 className="font-serif-display text-lg text-[#ffd0d0] mb-2 group-hover:text-[#df5555] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#9b7b7b] leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#26191e]">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] border border-[#26191e] px-2 py-0.5 rounded bg-[#0a0708] text-[#9b7b7b]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Experiencia Laboral */}
      <section className="py-12 border-b border-[#26191e]">
        <h2 className="text-xs tracking-widest text-[#9b7b7b] uppercase mb-8">EXPERIENCIA PROFESIONAL</h2>
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div key={idx} className="bg-[#130d10] border border-[#26191e] p-5 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#26191e]/80 transition-colors">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#df5555]">{exp.period}</span>
                <h3 className="text-sm font-bold text-[#ffd0d0]">{exp.role}</h3>
                <p className="text-xs text-[#df5555]">{exp.company}</p>
                <p className="text-xs text-[#9b7b7b] pt-1">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="py-12 border-b border-[#26191e]">
        <h2 className="text-xs tracking-widest text-[#9b7b7b] uppercase mb-8">STACK TÉCNICO & TECNOLOGÍAS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="bg-[#130d10] border border-[#26191e] p-5 rounded-lg">
              <h3 className="text-xs font-bold text-[#df5555] uppercase tracking-wider mb-3">{category}</h3>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="text-xs text-[#9b7b7b] flex items-center gap-2">
                    <span className="text-[8px] text-[#df5555]">✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contacto */}
      <footer className="py-16 text-center space-y-6">
        <div className="pt-4">
          <a 
            href="mailto:mr.aleximandro@gmail.com" 
            className="inline-block border border-[#df5555] text-[#df5555] px-8 py-3 rounded-full text-xs tracking-widest uppercase hover:bg-[#df5555] hover:text-[#0a0708] transition-all duration-300 font-semibold"
          >
            MR.ALEXIMANDRO@GMAIL.COM
          </a>
        </div>
        <p className="text-xs text-[#9b7b7b]">Contacto Profesional</p>
      </footer>

      {/* Modal interactivo para el PDF */}
      {selectedPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-6 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-5xl h-[92vh] bg-[#130d10] border border-[#26191e] rounded-xl flex flex-col overflow-hidden shadow-2xl">
            
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#26191e] bg-[#0a0708]">
              <div className="flex items-center space-x-2">
                <span className="text-xs tracking-widest text-[#df5555] uppercase font-bold">
                  Visualizando PDF
                </span>
              </div>
              <button 
                onClick={closePdf}
                className="text-xs border border-[#26191e] px-4 py-1.5 rounded-lg bg-[#130d10] hover:bg-[#26191e] text-[#ffd0d0] transition-colors flex items-center gap-1"
              >
                ✕ CERRAR
              </button>
            </div>

            <div className="flex-1 w-full bg-[#0a0708] overflow-y-auto">
              <iframe 
                src={`${selectedPdf}#toolbar=0`} 
                className="w-full h-full border-none"
                title="Curriculum Vitae PDF"
              />
            </div>

          </div>
        </div>
      )}

    </div>
  );
}