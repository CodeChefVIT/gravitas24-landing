"use client";
import ResponsiveStuff from "@/components/ResponsiveStuff";
import EventPage from "@/components/sections/Events/eventpage";
import FAQComponent from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/navbar";
import Timer from "@/components/timer";
import Loader from "@/components/ui/Loader";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MarqueeComponent from "../components/MarqueeComponent";

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
          <ResponsiveStuff />
        </div>
        <div className="bg-black mx-auto items-center w-full block lg:hidden pt-8">
          <div className=" flex flex-row w-fit mx-auto gap-8 ">
            <Link
              href="https://sulu.sh/"
              className=" z-[100] items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/sponsors/sulu.avif"
                alt="Right Logo"
                className="h-12 w-auto"
                height={100}
                width={100}
              />
            </Link>
            <Link
              href="https://judge0.com"
              className="z-[100] items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/sponsors/judge0.png"
                alt="Right Logo"
                className="h-8 w-auto mt-3"
                height={100}
                width={100}
              />
            </Link>
          </div>
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
