import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scale, Heart, FileText } from 'lucide-react';

const areas = [
  {
    icon: Scale,
    title: 'Direito do Consumidor',
    description:
      'Defesa dos seus direitos nas relações de consumo. Atuamos em casos de cobranças indevidas, produtos defeituosos, contratos abusivos e problemas com fornecedores de serviços.',
    highlights: ['Cobranças Indevidas', 'Contratos Abusivos', 'Produtos Defeituosos'],
  },
  {
    icon: Heart,
    title: 'Direito Médico',
    description:
      'Assessoria jurídica especializada para profissionais da saúde e pacientes. Tratamos de responsabilidade civil médica, erro médico, consentimento informado e regulamentação sanitária.',
    highlights: ['Erro Médico', 'Responsabilidade Civil', 'Consentimento Informado'],
  },
  {
    icon: FileText,
    title: 'Direito Civil',
    description:
      'Atuação abrangente em questões patrimoniais, familiares e contratuais. Protegemos seus direitos em inventários, contratos, responsabilidade civil e disputas patrimoniais.',
    highlights: ['Contratos', 'Inventários', 'Responsabilidade Civil'],
  },
];

const AreaCard = ({ area, index }: { area: typeof areas[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group"
    >
      <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
        <area.icon className="w-8 h-8 text-gold group-hover:text-navy transition-colors" />
      </div>

      <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
        {area.title}
      </h3>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {area.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {area.highlights.map((highlight) => (
          <span
            key={highlight}
            className="text-xs font-medium bg-muted text-muted-foreground px-3 py-1 rounded-full"
          >
            {highlight}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const PracticeAreas = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="areas" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-gold text-sm tracking-widest uppercase mb-4">
            Áreas de Atuação
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Mais do que advogar, nós{' '}
            <span className="text-gold">cuidamos</span>.
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
