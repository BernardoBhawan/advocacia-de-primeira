import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Gold accent bars */}
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute left-0 top-0 bottom-0 w-1 md:w-2 bg-gold origin-top" 
      />
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute right-0 top-0 bottom-0 w-1 md:w-2 bg-gold origin-bottom" 
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gold text-sm md:text-base tracking-[0.3em] mb-6 uppercase font-medium"
          >
            Walber Vieira Advocacia
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground font-bold leading-tight mb-8"
          >
            Direito não é só para
            <br />
            quando há{' '}
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-gold relative inline-block"
            >
              problemas
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gold/30 origin-left"
              />
            </motion.span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A consultoria jurídica preventiva evita conflitos, reduz riscos e protege seu patrimônio antes que problemas aconteçam.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/5549999219490"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy font-semibold px-10 py-4 rounded-md hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Agende uma Consulta
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#areas"
              className="border-2 border-primary-foreground/20 text-primary-foreground font-semibold px-10 py-4 rounded-md hover:border-gold hover:text-gold transition-all duration-300"
            >
              Conheça Nossas Áreas
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#areas"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/40 hover:text-gold transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
