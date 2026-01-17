import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PracticeAreas from '@/components/PracticeAreas';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PracticeAreas />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
