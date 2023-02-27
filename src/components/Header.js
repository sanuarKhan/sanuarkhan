import Image from "next/image";
const Header = (props) => {
  return (
    <div>
           <div class="relative">
            <div class="absolute inset-0">
                <Image src="/images/header.jpg" alt="Parallax Image" 
                width={1000} height={1000}class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>
            <div class="relative  max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 class="text-4xl font-extrabold tracking-tight  text-center text-white sm:text-5xl md:text-6xl">{props.name}</h1>
            </div>
            
        </div>

    </div>
  )
}

export default Header;
