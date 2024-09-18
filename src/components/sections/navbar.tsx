import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-center bg-black bg-[url('/magicpattern-grid-pattern.svg')] ">
      <div className="flex flex-row pt-8 items-start justify-between px-10">
        <Link
          href="https://sulu.sh/"
          className=" z-[100] items-center mt-0 sm:mt-2 hidden lg:flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/sponsors/sulu.avif"
            alt="Right Logo"
            className="md:h-20 w-auto mb-2"
            height={100}
            width={100}
          />
        </Link>
        <div className="flex flex-col items-center gap-4 md:text-4xl text-xl mx-auto">
          <div className="flex flex-row items-center gap-4">
            <div className="text-center  sm:mb-0 text-white  font-bold audiowide">
              CodeChef-VIT
            </div>
            <p className="text-white ">&</p>
            <Link
              href="https://musclemind.com/?srsltid=AfmBOopLCJTyvzcH_VZov3Cs97BCeOrmiZ3NORI11Q0KkCXPqSJPWYRQ"
              className="flex z-[100] items-center mt-0 sm:mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/sponsors/Musclemind_Vector.svg"
                alt="Right Logo"
                className="md:h-20 w-auto mb-2 h-8 md:mt-0 mt-1"
                height={100}
                width={100}
              />
            </Link>
          </div>
          <p className="text-white  audiowide -mt-2 mb-2">Presents</p>
          <p className="text-white  fonr-bold audiowide whitespace-nowrap">
            CookOff 9.0 | Clueminati 2.0
          </p>
        </div>

        <Link
          href="https://judge0.com"
          className="flex z-[100] items-center mt-0 sm:mt-2 hidden lg:flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/sponsors/judge0.png"
            alt="Right Logo"
            className="md:h-16 w-auto mt-4"
            height={100}
            width={100}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
