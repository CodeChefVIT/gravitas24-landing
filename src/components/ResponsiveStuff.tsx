import { useState, useEffect } from "react";
import Stuff from "@/components/Stuff";
import StuffMobile from "@/components/StuffMobile";

const ResponsiveStuff = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update the isMobile state based on window size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px corresponds to the md breakpoint in Tailwind CSS
    };

    // Initialize the state on component mount
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Render StuffMobile on mobile devices and Stuff on larger screens
  return isMobile ? <StuffMobile /> : <Stuff />;
};

export default ResponsiveStuff;
