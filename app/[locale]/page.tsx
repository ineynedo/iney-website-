import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import DigitalTransformation from '@/components/sections/DigitalTransformation';
import About from '@/components/sections/About';
import UseCases from '@/components/sections/UseCases';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import InteractiveBackground from '@/components/ui/InteractiveBackground';

export default function HomePage() {
    return (
        <>
            {/* Hero section WITHOUT interactive background */}
            <Navigation />
            <Hero />

            {/* Rest of the site WITH interactive background */}
            <main className="relative min-h-screen">
                <InteractiveBackground />
                <div className="relative z-10">
                    <Services />
                    <DigitalTransformation />
                    <About />
                    <UseCases />
                    <Contact />
                    <Footer />
                </div>
            </main>
        </>
    );
}
