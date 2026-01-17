import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#areas', label: 'Áreas de Atuação' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center">
          <img 
            src={logo} 
            alt="Walber Vieira Advocacia" 
            className={`transition-all duration-300 ${
              isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className={`relative text-sm font-medium transition-colors group ${
                isScrolled 
                  ? 'text-foreground hover:text-gold' 
                  : 'text-primary-foreground hover:text-gold'
              }`}
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            href="https://wa.me/5549999219490"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-navy font-semibold px-6 py-2.5 rounded-md hover:bg-gold-light transition-all duration-300 text-sm hover:shadow-lg"
          >
            Fale Conosco
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${
            isScrolled ? 'text-foreground' : 'text-primary-foreground'
          }`}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-gold transition-colors text-sm font-medium py-2"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="https://wa.me/5549999219490"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-navy font-semibold px-5 py-3 rounded-md hover:bg-gold-light transition-colors text-sm text-center"
              >
                Fale Conosco
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
