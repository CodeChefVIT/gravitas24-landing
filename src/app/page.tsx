"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import MarqueeComponent from "../components/MarqueeComponent";
import EventPage from "@/components/sections/Events/eventpage";
import Loader from "@/components/ui/Loader";
import FAQComponent from "@/components/sections/faq";
import Timer from "@/components/timer";
import ResponsiveStuff from "@/components/ResponsiveStuff"; 
import Stuff from "@/components/Stuff";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <main>
        <Navbar />
        <div className="w-full h-[80vh] md:h-screen absolute -right-2 md:-right-0 top-32 md:-top-0 2xl:-top-12">
          <ResponsiveStuff/>
        </div>
        <EventPage />
        <Timer launchDate="2024-09-20T08:00:00" />
        <FAQComponent />
        <MarqueeComponent />
        <Footer />
      </main>
    </>
  );
}
