import JsonLd from "@/components/JsonLd";
import HeroBlock from "@/components/HeroBlock";
import FactsStrip from "@/components/FactsStrip";
import WhySection from "@/components/WhySection";
import BentoCollections from "@/components/BentoCollections";
import CompareTable from "@/components/CompareTable";
import CtaBand from "@/components/CtaBand";
import LocationBlock from "@/components/LocationBlock";
import FaqSection from "@/components/FaqSection";
import { homepageGraph } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageGraph()} />
      <HeroBlock />
      <FactsStrip />
      <WhySection />
      <BentoCollections />
      <CompareTable />
      <CtaBand id="register-mid" />
      <LocationBlock />
      <FaqSection />
      <CtaBand id="register-footer" title="Get floor plans & pricing for all 15 models" />
    </>
  );
}
