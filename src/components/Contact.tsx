import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const socialLinks = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/5549999219490',
      color: 'hover:text-green-500',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/walbervieira.adv',
      color: 'hover:text-pink-500',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/walbervieira.adv',
      color: 'hover:text-blue-500',
    },
  ];

  return (
    <section id="contato" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-gold text-sm tracking-widest uppercase mb-4">
            Contato
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Conectado com os seus{' '}
            <span className="text-gold">direitos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Entre em contato conosco para uma consultoria jurídica personalizada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Telefone / WhatsApp</h3>
                <a
                  href="https://wa.me/5549999219490"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  +55 (49) 99921-9490
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                <a
                  href="mailto:contato@walbervieira.adv.br"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  contato@walbervieira.adv.br
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Atendimento</h3>
                <p className="text-muted-foreground">
                  Presencial e Online<br />
                  Segunda a Sexta, 8h às 18h
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-muted-foreground ${social.color} transition-colors`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-navy rounded-2xl p-8 md:p-12 text-center"
          >
            <MessageCircle className="w-16 h-16 text-gold mx-auto mb-6" />
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Agende sua Consulta
            </h3>
            <p className="text-primary-foreground/70 mb-8">
              Clique no botão abaixo para falar diretamente conosco pelo WhatsApp. Resposta rápida e atendimento personalizado.
            </p>
            <a
              href="https://wa.me/5549999219490?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20jurídica."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold text-navy font-semibold px-8 py-4 rounded-lg hover:bg-gold-light transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Falar pelo WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
