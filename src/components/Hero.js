import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import TypewriterComponent from 'typewriter-effect';
const Hero = () => {
  return (
    <AnimatePresence mode='wait'>
           <section  className="relative">
      <div className="absolute inset-0">
        <Image
          className="w-full h-full object-cover"
          src="/images/hero-background.jpeg"
          alt="Hero Background Image"
          width={500}
          height={500}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <motion.div initial={{opacity : 0 , y : 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1}} className="relative h-screen flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Hi. this is Sanuar Khan.</h1>
          <div className="text-2xl  font-light text-white mb-8">I am a  <TypewriterComponent className="inline" options={{
            strings : [' full-stack developer.',' web developer'],
            delay : "natural",
            loop : true,
            autoStart : true,
            deleteSpeed : "natural"

          
          }}/> </div>
          <a href="https://www.upwork.com/freelancers/~014d116aa11aa0b1ad" className=" text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Hire me
          </a>
        </div>
      </motion.div>
    </section>
    </AnimatePresence>
 
  );
};

export default Hero;
