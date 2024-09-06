import Link from "next/link";
import Image from "next/image";
// import mmLogo from "/mmLogo.png";
// import ccLogo from "/Vector.svg";

const Navbar = () => {
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-center bg-black bg-[url('/magicpattern-grid-pattern.svg')]">
      <div className="flex justify-between items-center max-w-full relative px-6 py-4">
        <Link
          href="/"
          className=" h-[74px] ml-2 sm:ml-4 md:ml-6 mt-3 pt-0 flex-shrink-0"
        >
          <Image src="/Vector.svg" alt="Codechef_Logo" width={74} height={15} />
        </Link>

        <ul
          className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 text-white font-semibold"
          style={{
            fontFamily: "Anton Regular",
            fontStyle: "normal",
            fontWeight: 50,
          }}
        >
          <Link
            href="/"
            className="flexCenter mt-5 text-xl sm:text-2xl md:text-3xl"
          >
            COOKOFF
          </Link>
          <Link
            href="/"
            className="flexCenter mt-5 mr-2 sm:mr-4 md:mr-5 text-xl sm:text-2xl md:text-3xl"
          >
            CLUEMINATI
          </Link>
        </ul>
      </div>
      <div
        style={{
          fontFamily: "AudioWide-Regular",
          fontStyle: "normal",
          fontWeight: 100,
        }}
        className="md:text-7xl text-5xl audiowide-regular w-screen flex justify-center text-white text-center"
      >
        Gravitas'24
      </div>
      <div
        style={{
          fontFamily: "AudioWide-Regular",
          fontStyle: "normal",
          fontWeight: 100,
        }}
        className="raleway-dots-regular w-full flex justify-center text-white text-center"
      >
        CO-HOSTED BY
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-25px",
        }}
      >
        <Image src="/mmLogo.png" alt="muscle mind logo" height={80} width={80} />
      </div>
      <div
        style={{
          fontFamily: "AudioWide-Regular",
          fontStyle: "normal",
          fontWeight: 100,
        }}
        className="raleway-dots-regular w-full flex justify-center text-white text-center"
      >
        Musclemind
      </div>
    </div>
  );
};

export default Navbar;
