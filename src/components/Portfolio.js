import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
const Works = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (

    
    <section id="works" className="bg-gray-100 py-20 bg-gradient">
      <motion.div ref={ref}
  initial={{ opacity: 0 }}
  animate={{ opacity: inView ? 1 : 0 ,
  y: inView ? 0: '50vh'}}
  transition={{ duration: 1 }} className="container mx-auto">
        <h2 className="text-4xl font-bold text-center">My Work</h2>
        <div className="flex flex-wrap justify-center mt-10">
          <div className="w-full md:w-1/3 p-3 scale-up-top">
            <div className="bg-white rounded-lg shadow-lg">
              <a href="#" className="block relative h-48 rounded overflow-hidden">
                <Image alt="Work 1" className="object-cover object-center w-full h-full block"
                 src="/images/perfect-Picture.png" width={500} height={500} />
              </a>
              <div className="mt-4 p-4">
                <h3 className="text-gray-800 font-bold text-xl mb-2">Photography Blog</h3>
                <div className="text-gray-600 text-base">This project has developed with HTML CSS Bootstrap and JAVASCRIPT. 
                <div>
                <a href="https://sanuarkhan.github.io/UYProject/" className="btn" ><button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"><span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Click here to visit
  </span>
</button></a>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full shadow-inset-bl scale-up-top md:w-1/3 p-3">
            <div className="bg-white rounded-lg shadow-lg">
              <a href="#" className="block relative h-48 rounded overflow-hidden">
                <Image alt="Work 2" className="object-cover object-center w-full h-full block" width={1000} height={1000} src="/images/React-App.png" />
              </a>
              <div className="mt-4 p-4">
                <h3 className="text-gray-800 font-bold text-xl mb-2">E-Commerce Templete</h3>
                <div className="text-gray-600 text-base">This project has developed with HTML CSS Bootstrap JAVASCRIPT JQuery.
                <div>
                <a href="https://sanuarkhan.github.io/UY_Project_3/" className="btn" ><button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"><span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Click here to visit
  </span>
</button></a>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-3 scale-up-top ">
            <div className="bg-white rounded-lg shadow-lg ">
              <a href="#" className="block relative h-48 rounded overflow-hidden">
                <Image alt="Work 3" width={1000} height={1000} className="object-cover object-center w-full h-full block" src="/images/E-commerce.png" />
              </a>
              <div className="mt-4 p-4">
                <h3 className="text-gray-800 font-bold text-xl mb-2">Project Title</h3>
                <div className="text-gray-600 text-base">This project has developed with React component. 
                <div>
                <a href="https://sanuarkhan.github.io/esolian-sanowar-khan/" className="btn" ><button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"><span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Click here to visit
  </span>
</button></a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Works;
