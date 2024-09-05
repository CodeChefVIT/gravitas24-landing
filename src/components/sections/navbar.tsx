import Link from "next/link"
import Image from "next/image"
const Navbar=()=>{
    return(
       <div  className="h-screen bg-black bg-[url('/magicpattern-grid-pattern.svg')]">
       <div className="flex justify-between  max-w-full 
       relative px-6 py-4">
       <Link href="/" className="h-[74px] ml-6 mt-3 pt-0">
        <Image src="/vector.svg" alt="Codechef_Logo" width={74} height={15}/>
       </Link>

       <ul className="hidden gap-12 lg:flex text-3xl text-white font-bold anton-regular">
        <Link href="/" className="flexCenter mt-5 " >
            COOKOFF
        </Link>
        <Link href="/" className=" flexCenter mt-5 mr-5" >
            CLUEMINATI
        </Link>
       </ul>
       </div>
       <div className=" audiowide-regular w-full flex justify-center text-white text-center">
        Gravitas'24
        </div>
        <div className="raleway-dots-regular w-full flex justify-center text-white text-center">
            CO-HOSTED BY :
        </div>
       </div>
       
    )
}

export default Navbar