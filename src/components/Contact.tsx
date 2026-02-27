import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { MessageCircle, Instagram, MapPin, Phone, Mail, Shield, CheckCircle, Send } from 'lucide-react';
import { SiTiktok, SiLinkedin, SiYoutube } from 'react-icons/si';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

const contactSchema = z.object({
  nome: z.string().trim().min(1, 'Campo obrigatório').max(100),
  whatsapp: z.string().trim().min(1, 'Campo obrigatório').max(20),
  email: z.string().trim().email('E-mail inválido').max(255),
  cidadeEstado: z.string().trim().min(1, 'Campo obrigatório').max(100),
  areaDireito: z.string().min(1, 'Selecione uma área'),
  processoAndamento: z.string().min(1, 'Selecione uma opção'),
  descricao: z.string().trim().min(1, 'Campo obrigatório').max(2000),
  urgencia: z.string().min(1, 'Selecione o nível de urgência'),
  lgpd: z.boolean().refine(val => val === true, 'Você precisa autorizar o tratamento de dados'),
});

type ContactForm = z.infer<typeof contactSchema>;

const areaOptions = [
  'Direito da Família',
  'Direito Previdenciário',
  'Direito Trabalhista',
  'Direito Empresarial',
  'Outro',
];

const processoOptions = ['Sim', 'Não', 'Não sei informar'];

const urgenciaOptions = [
  'Preciso de atendimento imediato',
  'Posso aguardar retorno',
  'Desejo apenas orientação inicial',
];

const trustItems = [
  'Atuação sólida e estratégica',
  'Compromisso com ética profissional',
  'Atendimento transparente',
  'Relacionamento direto com o cliente',
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: '-50px' });
  const [isMobile, setIsMobile] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { lgpd: false },
  });

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

  const onSubmit = (data: ContactForm) => {
    const message = `*Solicitação de Análise Inicial*%0A%0A` +
      `*Nome:* ${encodeURIComponent(data.nome)}%0A` +
      `*WhatsApp:* ${encodeURIComponent(data.whatsapp)}%0A` +
      `*E-mail:* ${encodeURIComponent(data.email)}%0A` +
      `*Cidade/Estado:* ${encodeURIComponent(data.cidadeEstado)}%0A` +
      `*Área do Direito:* ${encodeURIComponent(data.areaDireito)}%0A` +
      `*Processo em andamento:* ${encodeURIComponent(data.processoAndamento)}%0A` +
      `*Urgência:* ${encodeURIComponent(data.urgencia)}%0A%0A` +
      `*Descrição:* ${encodeURIComponent(data.descricao)}`;

    window.open(`https://wa.me/5549999754550?text=${message}`, '_blank');
    toast.success('Formulário enviado! Você será redirecionado ao WhatsApp.');
    reset();
  };

  const socialLinks = [
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/5549999754550' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/walbervieira.adv' },
    { icon: SiTiktok, label: 'TikTok', href: 'https://www.tiktok.com/@walber.vieira?lang=pt-BR' },
    { icon: SiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/wvieirajr/' },
    { icon: SiYoutube, label: 'YouTube', href: 'https://www.youtube.com/@walbervieira.advocacia' },
  ];

  const contactItems = [
    { icon: Phone, title: 'Telefone / WhatsApp', content: '+55 (49) 99975-4550', href: 'https://wa.me/5549999754550' },
    { icon: Mail, title: 'E-mail', content: 'contato@walbervieira.adv.br', href: 'mailto:contato@walbervieira.adv.br' },
    { icon: MapPin, title: 'Atendimento', content: 'Presencial e Online\nSegunda a Sexta, 8h às 18h', href: null },
  ];

  const inputClass = "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";
  const errorClass = "text-xs text-destructive mt-1";

  return (
    <section 
      ref={sectionRef}
      id="contato" 
      className="py-24 md:py-32 bg-muted relative overflow-hidden"
    >
      <motion.div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy/5 rounded-full blur-3xl pointer-events-none"
        style={{ y: bgY }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
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
            Fale Conosco
          </motion.p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Solicite uma análise inicial
            <br />
            <span className="text-gold">do seu caso</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Preencha as informações abaixo. Nossa equipe fará uma avaliação prévia e entrará em contato.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ y: leftY }}
            className="lg:col-span-3 will-change-transform"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-background rounded-2xl p-6 md:p-10 shadow-xl space-y-5">
              {/* Nome */}
              <div>
                <label className={labelClass}>Nome completo</label>
                <input {...register('nome')} placeholder="Seu nome completo" className={inputClass} />
                {errors.nome && <p className={errorClass}>{errors.nome.message}</p>}
              </div>

              {/* WhatsApp e Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>WhatsApp com DDD</label>
                  <input {...register('whatsapp')} placeholder="(00) 00000-0000" className={inputClass} />
                  {errors.whatsapp && <p className={errorClass}>{errors.whatsapp.message}</p>}
                </div>
                <div>
                  <label className={labelClass}>E-mail</label>
                  <input {...register('email')} type="email" placeholder="seu@email.com" className={inputClass} />
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>
              </div>

              {/* Cidade/Estado */}
              <div>
                <label className={labelClass}>Cidade e Estado</label>
                <input {...register('cidadeEstado')} placeholder="Ex: Chapecó - SC" className={inputClass} />
                {errors.cidadeEstado && <p className={errorClass}>{errors.cidadeEstado.message}</p>}
              </div>

              {/* Área do Direito */}
              <div>
                <label className={labelClass}>Área do Direito relacionada ao seu caso</label>
                <select {...register('areaDireito')} className={inputClass}>
                  <option value="">Selecione...</option>
                  {areaOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {errors.areaDireito && <p className={errorClass}>{errors.areaDireito.message}</p>}
              </div>

              {/* Processo em andamento */}
              <div>
                <label className={labelClass}>Você já possui processo em andamento?</label>
                <div className="flex flex-wrap gap-4 mt-2">
                  {processoOptions.map(opt => (
                    <label key={opt} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                      <input type="radio" value={opt} {...register('processoAndamento')} className="accent-gold w-4 h-4" />
                      {opt}
                    </label>
                  ))}
                </div>
                {errors.processoAndamento && <p className={errorClass}>{errors.processoAndamento.message}</p>}
              </div>

              {/* Descrição */}
              <div>
                <label className={labelClass}>Descreva resumidamente sua situação</label>
                <textarea
                  {...register('descricao')}
                  rows={4}
                  placeholder="Informe datas, documentos e detalhes relevantes."
                  className={inputClass + ' min-h-[100px] resize-y'}
                />
                {errors.descricao && <p className={errorClass}>{errors.descricao.message}</p>}
              </div>

              {/* Urgência */}
              <div>
                <label className={labelClass}>Qual o nível de urgência?</label>
                <div className="flex flex-col gap-2 mt-2">
                  {urgenciaOptions.map(opt => (
                    <label key={opt} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                      <input type="radio" value={opt} {...register('urgencia')} className="accent-gold w-4 h-4" />
                      {opt}
                    </label>
                  ))}
                </div>
                {errors.urgencia && <p className={errorClass}>{errors.urgencia.message}</p>}
              </div>

              {/* LGPD */}
              <div className="border-t border-border pt-5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" {...register('lgpd')} className="accent-gold w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    Autorizo o contato e o tratamento dos meus dados para fins de atendimento jurídico, conforme a Lei Geral de Proteção de Dados (LGPD).
                  </span>
                </label>
                {errors.lgpd && <p className={errorClass}>{errors.lgpd.message}</p>}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 bg-gold text-navy font-semibold px-8 py-4 rounded-lg hover:bg-gold-light transition-all duration-300 shadow-lg disabled:opacity-60"
              >
                <Send className="w-5 h-5" />
                Quero falar com um especialista
              </motion.button>
            </form>

            {/* Trust section below form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 bg-navy/5 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <Shield className="w-6 h-6 text-gold" />
                <h3 className="font-heading text-lg font-bold text-foreground">Segurança e Confiança</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {trustItems.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-4">
                Toda informação enviada é tratada com absoluta confidencialidade, conforme o Estatuto da Advocacia e a legislação vigente.
              </p>
            </motion.div>
          </motion.div>

          {/* Right sidebar: Contact info + social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ y: rightY }}
            className="lg:col-span-2 space-y-8 will-change-transform"
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
