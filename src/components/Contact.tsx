import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { MessageCircle, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { SiTiktok, SiLinkedin, SiYoutube } from 'react-icons/si';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: '-50px' });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const m = isMobile ? 0.3 : 1;
  const headerY = useTransform(scrollYProgress, [0, 1], [60 * m, -60 * m]);
  const leftY = useTransform(scrollYProgress, [0, 1], [80 * m, -80 * m]);
  const rightY = useTransform(scrollYProgress, [0, 1], [120 * m, -120 * m]);
  const bgY = useTransform(scrollYProgress, [0, 1], [-30 * m, 30 * m]);

  const socialLinks = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/5549999754550',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/walbervieira.adv',
    },
    {
      icon: SiTiktok,
      label: 'TikTok',
      href: 'https://www.tiktok.com/@walber.vieira?lang=pt-BR',
    },
    {
      icon: SiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/wvieirajr/',
    },
    {
      icon: SiYoutube,
      label: 'YouTube',
      href: 'https://www.youtube.com/@walbervieira.advocacia',
    },
  ];

  const contactItems = [
    {
      icon: Phone,
      title: 'Telefone / WhatsApp',
      content: '+55 (49) 99975-4550',
      href: 'https://wa.me/5549999754550',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@walbervieira.adv.br',
      href: 'mailto:contato@walbervieira.adv.br',
    },
    {
      icon: MapPin,
      title: 'Atendimento',
      content: 'Presencial e Online\nSegunda a Sexta, 8h às 18h',
      href: null,
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="contato" 
      className="py-24 md:py-32 bg-muted relative overflow-hidden"
    >
      {/* Subtle background decoration with parallax */}
      <motion.div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy/5 rounded-full blur-3xl pointer-events-none"
        style={{ y: bgY }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header with parallax */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          style={{ y: headerY }}
          className="text-center max-w-2xl mx-auto mb-16 will-change-transform"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold text-sm tracking-[0.2em] uppercase mb-4 font-medium"
          >
            Contato
          </motion.p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Conectado com os seus
            <br />
            <span className="text-gold">direitos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Entre em contato conosco para uma consultoria jurídica personalizada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ y: leftY }}
            className="space-y-8 will-change-transform"
          >
            {contactItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <item.icon className="w-5 h-5 text-gold" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground whitespace-pre-line">{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6 }}
              className="pt-6 border-t border-border"
            >
              <h3 className="font-semibold text-foreground mb-4">Redes Sociais</h3>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    className="w-12 h-12 bg-background rounded-xl flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-navy transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Card with faster parallax (closer layer) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ y: rightY }}
            whileHover={{ scale: 1.02 }}
            className="bg-navy rounded-2xl p-8 md:p-12 text-center shadow-2xl will-change-transform"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
            >
              <MessageCircle className="w-16 h-16 text-gold mx-auto mb-6" />
            </motion.div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Agende sua Consulta
            </h3>
            <p className="text-primary-foreground/70 mb-8">
              Clique no botão abaixo para falar diretamente conosco pelo WhatsApp. Resposta rápida e atendimento personalizado.
            </p>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/5549999754550?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20jurídica."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold text-navy font-semibold px-8 py-4 rounded-lg hover:bg-gold-light transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Falar pelo WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
