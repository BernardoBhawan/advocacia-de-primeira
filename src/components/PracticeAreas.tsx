import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scale, Heart, FileText } from 'lucide-react';

const areas = [
  {
    icon: Heart,
    title: 'Direito Médico',
    description:
      'Atuamos simultaneamente na proteção dos direitos dos pacientes diante de negativas de procedimentos cirúrgicos e de fornecimento de medicamentos por planos de saúde ou pelo poder público, e na defesa dos interesses dos profissionais da saúde, com orientação preventiva e atuação estratégica em questões éticas, administrativas e judiciais.',
    highlights: ['Negativas de Planos', 'Defesa de Profissionais', 'Questões Éticas'],
  },
  {
    icon: Scale,
    title: 'Direito do Consumidor',
    description:
      'Defendemos consumidores e empresas em relações de consumo, garantindo equilíbrio contratual, transparência e boa-fé. Nossa atuação abrange revisão de contratos, práticas abusivas, indenizações e defesa em processos administrativos e judiciais, buscando soluções eficientes e fundamentadas.',
    highlights: ['Revisão de Contratos', 'Práticas Abusivas', 'Indenizações'],
  },
  {
    icon: FileText,
    title: 'Direito Civil e Contratos',
    description:
      'Oferecemos assessoria completa em direito civil, com destaque para elaboração, revisão e gestão de contratos. Trabalhamos na prevenção de litígios, na negociação de acordos e na resolução de conflitos patrimoniais e obrigacionais, sempre com estratégia técnica e resultados práticos.',
    highlights: ['Elaboração de Contratos', 'Prevenção de Litígios', 'Conflitos Patrimoniais'],
  },
];

const AreaCard = ({ area, index }: { area: typeof areas[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="bg-card rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 group border border-border/50"
    >
      <motion.div 
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500"
      >
        <area.icon className="w-8 h-8 text-gold group-hover:text-navy transition-colors duration-500" />
      </motion.div>

      <h3 className="font-heading text-2xl font-bold text-foreground mb-4 group-hover:text-navy transition-colors">
        {area.title}
      </h3>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {area.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {area.highlights.map((highlight, i) => (
          <motion.span
            key={highlight}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
            className="text-xs font-medium bg-muted text-muted-foreground px-3 py-1.5 rounded-full"
          >
            {highlight}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const PracticeAreas = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-50px' });

  return (
    <section id="areas" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-navy/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold text-sm tracking-[0.2em] uppercase mb-4 font-medium"
          >
            Áreas de Atuação
          </motion.p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Mais do que advogar,
            <br />
            nós <span className="text-gold">cuidamos</span>.
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos assessoria jurídica especializada com foco em soluções preventivas e resultados efetivos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <AreaCard key={area.title} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
