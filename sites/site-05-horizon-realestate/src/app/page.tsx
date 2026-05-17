import HeroSection      from '@/components/HeroSection';
import FeatureSection   from '@/components/FeatureSection';
import PropertiesSection from '@/components/PropertiesSection';
import FlowSection      from '@/components/FlowSection';
import VoiceSection     from '@/components/VoiceSection';
import ContactCta       from '@/components/ContactCta';
import { getFeaturedProperties } from '@/lib/properties';

export default function HomePage() {
  const featured = getFeaturedProperties();
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <PropertiesSection properties={featured} />
      <FlowSection />
      <VoiceSection />
      <ContactCta />
    </main>
  );
}
