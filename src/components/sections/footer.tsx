import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      
      <div className="h-[40vh] max-h-[40vh] bg-black flex items-center justify-between px-40">
        
        <div className="flex-shrink-0 ml-10">
          <Image
            className="Codechef_Logo"
            src="/Codechef-VIT_Logo.svg"
            alt="Codechef_Logo"
            width={100}
            height={100}
          />
        </div>

        
        <div className="ml-20 grid grid-cols-2 gap-10">
          
          <div className="relative group">
            <div className="absolute inset-0 bg-black border-4 border-[#D9D9D9] transform transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-3"></div>
            <div className="relative bg-[#D9D9D9] text-black border-black border-2 font-bold py-2 px-8 cursor-pointer text-center text-[1.5vw] ibm-plex-mono-bold hover:bg-black hover:text-white hover:border-white">
              WEBSITE
            </div>
          </div>

          
          <div className="relative group">
            <div className="absolute inset-0 bg-black border-4 border-[#D9D9D9] transform transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-3"></div>
            <div className="relative bg-[#D9D9D9] text-black border-black border-2 font-bold py-2 px-8 cursor-pointer text-center text-[1.5vw] ibm-plex-mono-bold hover:bg-black hover:text-white hover:border-white">
              EVENTS
            </div>
          </div>

          
          <div className="relative group">
            <div className="absolute inset-0 bg-black border-4 border-[#D9D9D9] transform transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-3"></div>
            <div className="relative bg-[#D9D9D9] text-black border-black border-2 font-bold py-2 px-8 cursor-pointer text-center text-[1.5vw] ibm-plex-mono-bold hover:bg-black hover:text-white hover:border-white">
              SP
            </div>
          </div>

          
          <div className="relative group">
            <div className="absolute inset-0 bg-black border-4 border-[#D9D9D9] transform transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-3"></div>
            <div className="relative bg-[#D9D9D9] text-black border-black border-2 font-bold py-2 px-8 cursor-pointer text-center text-[1.5vw] ibm-plex-mono-bold hover:bg-black hover:text-white hover:border-white">
              HOME
            </div>
          </div>
        </div>
      </div>

      
      <div className="h-[15vh] bg-black flex items-center justify-between px-20  text-white ">
        
        <div className="flex items-center text-height ml-10">
          <span className="px-8 text-white text-lg text-3xl">Powered By :</span>
          <span className="font-bold text-2xl">musclemind</span>
        </div>

        
        <div className="flex space-x-11 mr-10">
        <Link href="/">
          <Image
            className="footer-logo"
            src="/Facebook.svg"
            alt="Facebook Logo"
            width={24}
            height={24}
          />
          </Link>
          <Link href="/">
          <Image
            className="footer-logo"
            src="/Twitter.svg"
            alt="Twitter Logo"
            width={24}
            height={24}
          />
          </Link>
          <Link href="/">
          <Image
            className="footer-logo"
            src="/Youtube.svg"
            alt="YouTube Logo"
            width={24}
            height={24}
          />
          </Link>
          <Link href="/">
          <Image
            className="footer-logo"
            src="/insta.svg"
            alt="Instagram Logo"
            width={24}
            height={24}
          />
          </Link>
          <Link href="/">
          <Image
            className="footer-logo"
            src="/Linkedin.svg"
            alt="LinkedIn Logo"
            width={24}
            height={24}
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
