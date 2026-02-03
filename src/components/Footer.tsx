import { Instagram, MessageCircle } from 'lucide-react';
import { SiTiktok, SiLinkedin, SiYoutube } from 'react-icons/si';
import logoWhite from '@/assets/logo-white.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="bg-navy-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <img 
            src={logoWhite} 
            alt="Walber Vieira Advocacia" 
            className="h-12"
          />

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:bg-navy transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Walber Vieira Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
