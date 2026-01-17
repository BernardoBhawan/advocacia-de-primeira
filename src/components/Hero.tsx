import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Escritório de advocacia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      {/* Gold accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-2 md:w-4 bg-gold" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold text-sm md:text-base tracking-widest mb-4 uppercase"
          >
            Walber Vieira Advocacia
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground font-bold leading-tight mb-6"
          >
            Direito não é só para quando há{' '}
            <span className="text-gold">problemas</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mb-8"
          >
            A consultoria jurídica preventiva evita conflitos, reduz riscos e protege seu patrimônio antes que problemas aconteçam.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/5549999219490"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy font-semibold px-8 py-4 rounded hover:bg-gold-light transition-colors text-center"
            >
              Agende uma Consulta
            </a>
            <a
              href="#areas"
              className="border-2 border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-4 rounded hover:border-gold hover:text-gold transition-colors text-center"
            >
              Conheça Nossas Áreas
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#areas"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-gold transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
