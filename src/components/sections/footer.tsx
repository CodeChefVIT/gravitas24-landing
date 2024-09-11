import Image from "next/image";
import Link from "next/link";
//use LinkedIn
const links = [
  { key: "WEBSITE", href: "https://www.codechefvit.com" },
  { key: "HOME", href: "/" },
  { key: "COOKOFF", href: "https://gravitas.vit.ac.in/events/a1175a7a-750f-4c66-8e08-429c9e4768d7" },
  { key: "CLUEMINATI", href: "https://gravitas.vit.ac.in/events/25adae11-f820-421a-9a82-222945de9010" },
];

const social = [
  { key: "Facebook", href: "https://www.facebook.com/codechefvit/" },
  { key: "Twitter", href: "https://x.com/codechefvit?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" },
  { key: "Youtube", href: "https://www.youtube.com/c/CodeChefVIT" },
  { key: "insta", href: "https://www.instagram.com/codechefvit?igsh=anNqd3Y5YmcxczMz" },
  { key: "LinkedIn", href: "https://www.linkedin.com/company/codechef-vit-chapter/mycompany/" },
]
const Footer = () => {
  return (
    <div>
      <div className="h-[22vh] md:h-[24vh] lg:h-[40vh] 2xl:h-[30vh] max-h-[40vh] bg-black flex items-center justify-around">

        <div className="flex-shrink-1 ">
          <Image
            className="lg:mr-[40px] w-[130px] sm:w-[150px] md:w-[180px] lg:w-[200px] Codechef_Logo max-w-full"
            src="/CodeChef-VIT_Logo.svg"
            alt="Codechef_Logo"
            width={60}
            height={60}
            sizes="(max-width: 768px) 50px, (max-width: 1024px) 80px, 100px"
          />
        </div>
        <div
          className=" grid grid-cols-2 gap-4 sm:gap-6 md:gap-10"
          style={{
            fontFamily: "Anton Regular",
            fontStyle: "normal",
            fontWeight: 50,
          }}
        >
          {links.map((item) => (
            <div className="relative group">
              <Link key={item.key} href={item.href}>
                <div className="absolute inset-0 bg-black border-4 border-[#D9D9D9] transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="relative bg-[#D9D9D9] text-black border-black border-2 font-bold py-1 sm:py-1.5 px-2 sm:px-3 md:px-6 cursor-pointer text-center text-[3.2vw] sm:text-[2.4vw] md:text-[1.5vw] ibm-plex-mono-bold hover:bg-black hover:text-white hover:border-white">
                  {item.key}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>


      <div className="h-[12vh] lg:h-[15vh] bg-black flex flex-col xl:flex-row items-center justify-around text-white">
        <div className="md:ml-[-30px] 2xl:ml-[-60px] flex items-center ml-2 sm:ml-4">
          <span className="px-2 sm:px-2 md:px-4 text-sm sm:text-lg md:text-3xl font-mono tracking-tight">
            Co-hosted by :
          </span>
          <Link href="https://musclemind.com/?srsltid=AfmBOopLCJTyvzcH_VZov3Cs97BCeOrmiZ3NORI11Q0KkCXPqSJPWYRQ">
            <span className="font-bold text-lg sm:text-lg md:text-3xl font-mono">
              Musclemind
            </span>
          </Link>
        </div>

        <div className="logo_div flex space-x-3 sm:space-x-6 md:space-x-11">
          {social.map(
            (platform) => (
              <Link key={platform.key} href={platform.href} target="_blank" rel="noopener noreferrer">
                <Image
                  className="footer-logo max-w-full hover:border-2 hover:border-white hover:rounded-full"
                  src={`${platform.key}.svg`}
                  alt={`${platform.key} Logo`}
                  width={24}
                  height={24}
                />
              </Link>
            )
          )}
        </div>
      </div>
    </div >
  );
};

export default Footer;
