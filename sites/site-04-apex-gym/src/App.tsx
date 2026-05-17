import SiteNav       from './components/SiteNav';
import HeroSection   from './components/HeroSection';
import Marquee       from './components/Marquee';
import ResultSection from './components/ResultSection';
import ProgramSection from './components/ProgramSection';
import WhySection    from './components/WhySection';
import TrainerSection from './components/TrainerSection';
import VoiceSection  from './components/VoiceSection';
import FlowSection   from './components/FlowSection';
import PriceSection  from './components/PriceSection';
import CtaSection    from './components/CtaSection';
import SiteFooter    from './components/SiteFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-apex-bg">
      <SiteNav />
      <HeroSection />
      <Marquee items={['TRANSFORM', 'COMMIT', 'EXCEED', 'RESULTS', 'APEX GYM', '限界を超えろ']} />
      <ResultSection />
      <ProgramSection />
      <Marquee
        items={['BODY MAKE', 'DIET', 'ATHLETE', 'PERSONAL TRAINING', 'ONE-ON-ONE', 'RESULTS GUARANTEED']}
        reverse
        dark
      />
      <WhySection />
      <TrainerSection />
      <VoiceSection />
      <FlowSection />
      <PriceSection />
      <CtaSection />
      <SiteFooter />
    </div>
  );
}
