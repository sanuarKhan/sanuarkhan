import Link from 'next/link';
import { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    
    <nav className="scale-up-top flex w-full top-0 z-10 fixed items-center text-slate-800 justify-between flex-wrap bg-transparent p-6">

      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span id='logo' className="font-semibold text-xl tracking-tight">Sanuar Khan</span>
      </div>
      <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <IoCloseOutline className="text-white w-8 h-8" />
              ) : (
                <IoMenuOutline className="text-white w-8 h-8" />
              )}
            </button>
      </div>

      <div className="hidden md:flex w-full  flex-grow lg:flex lg:items-center lg:w-auto">
         <div className="text-sm lg:flex-grow flex mr-24 justify-end">
           <Link href="/" legacyBehavior>
             <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white hover:bg-gray-700 mr-4">
               Home
             </a>
           </Link>
   
           <Link href="/about" legacyBehavior>
             <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:bg-gray-700 hover:text-white mr-4">
               About
             </a>
           </Link>
           <Link href="/blog" legacyBehavior >
             <a className="block mt-4 lg:inline-block hover:bg-gray-700 lg:mt-0 text-gray-200 hover:text-white mr-4">
               Blog
             </a>
           </Link>
           <Link href="/services" legacyBehavior >
             <a className="block mt-4 lg:inline-block lg:mt-0 hover:bg-gray-700 text-gray-200 hover:text-white mr-4">
               Services
             </a>
           </Link>
           <Link href="/contact" legacyBehavior >
             <a className="block mt-4 lg:inline-block lg:mt-0 hover:bg-gray-700 text-gray-200 hover:text-white">
               Contact
             </a>
           </Link>
           

         </div>
         <button class="hidden md:flex bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded justify-end  items-center">
              <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>

             <Link href="https://docs.google.com/document/d/1zfK4LoRGhsXiTIyAYJGtrLynA-MFTss1iKcJrUMoK40/edit?usp=sharing"><span>Download</span> </Link> 
          </button>
     </div> 
     <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden w-screen h-screent bg-black p-20 opacity-80 b-shadow top-0 left-0 grid place-items-center mt-2`}
        >
          <Link href="/" legacyBehavior>
             <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white hover:bg-gray-700 mr-4">
               Home
             </a>
           </Link>
   
           <Link href="/about" legacyBehavior>
             <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:bg-gray-700 hover:text-white mr-4">
               About
             </a>
           </Link>
           <Link href="/blog" legacyBehavior >
             <a className="block mt-4 lg:inline-block hover:bg-gray-700 lg:mt-0 text-gray-200 hover:text-white mr-4">
               Blog
             </a>
           </Link>
           <Link href="/services" legacyBehavior >
             <a className="block mt-4 lg:inline-block lg:mt-0 hover:bg-gray-700 text-gray-200 hover:text-white mr-4">
               Services
             </a>
           </Link>
           <Link href="/contact" legacyBehavior >
             <a className="block mt-4 lg:inline-block lg:mt-0 hover:bg-gray-700 text-gray-200 hover:text-white">
               Contact
             </a>
           </Link>
        </div>


    </nav>
  );
}

export default Navbar;



