"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import MarqueeComponent from "../components/MarqueeComponent";
import Stuff from "@/components/Stuff";
import EventPage from "@/components/sections/Events/eventpage";
import Loader from "@/components/ui/Loader";
import Head from "next/head";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
    // return () => clearTimeout(timer);
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
          <Stuff />
        </div>
        <EventPage />
        <MarqueeComponent />
        <Footer />
      </main>
    </>
  );
}
