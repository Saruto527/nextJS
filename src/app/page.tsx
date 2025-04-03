import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/sections/AboutSection';

export default function Home() {
  return(
    <main className="min-h-screen bg-white">
        
       

        <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />






    </main>
  )

}
