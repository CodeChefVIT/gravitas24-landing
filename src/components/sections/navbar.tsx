import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-center bg-black bg-[url('/magicpattern-grid-pattern.svg')]">
      <div className="h-24 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 mx-10">
        <Link href="https://www.codechefvit.com" className="flex z-[100] items-center mb-4 mt-2 sm:mb-0" target="_blank" rel="noopener noreferrer">
          <Image
            src="Cookoff_Vector.svg"
            alt="Left Logo"
            height={100}
            width={100}
            className="h-12 w-auto sm:h-16"
          />
        </Link>

        <div className="text-center mb-4 sm:mb-0">
          <h1 className="text-white text-3xl sm:text-7xl mt-1 md:mt-20 font-bold audiowide">
            CodeChef-VIT
          </h1>
          <p className="text-white text-lg sm:text-xl my-1 md:my-2 font-light audiowide">
            Presents
          </p>
          <p className="text-white text-xl sm:text-3xl hidden sm:block font-bold audiowide">
            CookOff 9.0 | Clueminati 2.0
          </p>
          <p className="text-white text-xl sm:text-3xl sm:hidden font-bold audiowide">
            CookOff 9.0 and <br /> Clueminati 2.0
          </p>
        </div>

        <Link href="https://musclemind.com/?srsltid=AfmBOopLCJTyvzcH_VZov3Cs97BCeOrmiZ3NORI11Q0KkCXPqSJPWYRQ" className="flex z-[100] items-center mt-0 sm:mt-2" target="_blank" rel="noopener noreferrer">
          <Image
            src="Musclemind_Vector.svg"
            alt="Right Logo"
            className="h-12 w-auto sm:h-16"
            height={100}
            width={100}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
