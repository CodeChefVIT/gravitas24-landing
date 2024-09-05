import StickyStack from '@/components/StickyStack';
import EventPage from "@/components/sections/Events/eventpage";
import { ThreeDCardDemo } from '@/components/ui/Card3d';
import MarqueeComponent from '../components/MarqueeComponent';

export default function Home() {

  return (
    <main>
      <EventPage />
      <StickyStack />
      <MarqueeComponent />
    </main>
  );
}

