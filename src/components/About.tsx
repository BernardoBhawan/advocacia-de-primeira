import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const stats = [
  { icon: Award, value: '10+', label: 'Anos de Experiência' },
  { icon: Users, value: '500+', label: 'Clientes Atendidos' },
  { icon: Clock, value: '24h', label: 'Resposta Rápida' },
  { icon: Shield, value: '100%', label: 'Comprometimento' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sobre" className="py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold rounded-full blur-3xl pointer-events-none"
      />
      
      {/* Gold accent */}
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute right-0 top-0 bottom-0 w-1 md:w-2 bg-gold origin-top" 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.7 }}
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gold text-sm tracking-[0.2em] uppercase mb-4 font-medium"
            >
              Sobre Nós
            </motion.p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-2">
              Walber Vieira
            </h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-16 h-1 bg-gold mb-4 origin-left"
            />
            <p className="text-gold text-lg font-medium mb-6">Advogado</p>

            <div className="space-y-5 text-primary-foreground/80 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
              >
                Com mais de uma década de experiência em advocacia, atuo de forma especializada em Direito do Consumidor, Direito Médico e Direito Civil, oferecendo soluções jurídicas personalizadas para cada cliente.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                Minha abordagem é baseada na prevenção de conflitos e na proteção dos direitos dos meus clientes. Acredito que o Direito não é só para quando há problemas.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
              >
                Conectado com os seus direitos, estou sempre acessível e pronto para orientar você nas melhores decisões jurídicas.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/5549999219490"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-navy font-semibold px-8 py-4 rounded-md hover:bg-gold-light transition-all duration-300 shadow-lg"
              >
                Entre em Contato
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-navy-dark p-6 rounded-xl text-center border border-primary-foreground/10 hover:border-gold/30 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                </motion.div>
                <div className="text-3xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
