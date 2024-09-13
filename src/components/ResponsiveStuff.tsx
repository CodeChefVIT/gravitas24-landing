import { useState, useEffect } from "react";
import Stuff from "@/components/Stuff";
import StuffMobile from "@/components/StuffMobile";

const ResponsiveStuff = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    
    handleResize();

   
    window.addEventListener("resize", handleResize);

    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 
  return isMobile ? <StuffMobile /> : <Stuff />;
};

export default ResponsiveStuff;
