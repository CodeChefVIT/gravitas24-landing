import Component1 from "@/components/sections/Component1";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import StickyStack from '@/components/StickyStack';
import MarqueeComponent from '../components/MarqueeComponent';

export default function Home() {

  return (
    <main>

      <Navbar/>
      <StickyStack />
      <MarqueeComponent />
      <Footer/>

    </main>
  );
}

