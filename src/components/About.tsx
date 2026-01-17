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
    <section id="sobre" className="py-20 md:py-32 bg-navy relative overflow-hidden">
      {/* Gold accent */}
      <div className="absolute right-0 top-0 bottom-0 w-2 md:w-4 bg-gold" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold text-sm tracking-widest uppercase mb-4">
              Sobre Nós
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Walber Vieira
              <span className="block text-gold text-xl md:text-2xl font-normal mt-2">
                Advogado
              </span>
            </h2>

            <div className="space-y-4 text-primary-foreground/80">
              <p>
                Com mais de uma década de experiência em advocacia, atuo de forma especializada em Direito do Consumidor, Direito Médico e Direito Civil, oferecendo soluções jurídicas personalizadas para cada cliente.
              </p>
              <p>
                Minha abordagem é baseada na prevenção de conflitos e na proteção dos direitos dos meus clientes. Acredito que o Direito não é só para quando há problemas – é uma ferramenta essencial para proteger seu patrimônio e garantir sua tranquilidade.
              </p>
              <p>
                Conectado com os seus direitos, estou sempre acessível e pronto para orientar você nas melhores decisões jurídicas.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/5549999219490"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-navy font-semibold px-8 py-4 rounded hover:bg-gold-light transition-colors"
              >
                Entre em Contato
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-navy-dark p-6 rounded-lg text-center"
              >
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
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
