
import { motion } from 'framer-motion';
import { FaBootstrap, FaCss3, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
const Skills = () => {

  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
 
  return (
   
    <div  className="bg-gray-100 scale-up-top bg-gradient">
      <motion.div ref={ref} initial={{ opacity: 0 }}
  animate={{ opacity: inView ? 1 : 0 ,
  y: inView ? 0: '50vh'}}
  transition={{ duration: 1 }} className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Skills
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Here are some of my web development skills.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            <div className="flex items-center justify-center flex-col">
              <FaHtml5 size={48} className="mb-2 text-blue-600" />
              <p className="text-lg font-medium text-gray-900">HTML5</p>
              <div className="mt-2 w-24 h-4 bg-blue-200 rounded-full">
                <div className="h-full text-center text-xs text-white bg-blue-600 rounded-full" style={{width: "85%"}}>
                  85%
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col">
              <FaCss3 size={48} className="mb-2 text-blue-600" />
              <p className="text-lg font-medium text-gray-900">CSS3</p>
              <div className="mt-2 w-24 h-4 bg-blue-200 rounded-full">
                <div className="h-full text-center text-xs text-white bg-blue-600 rounded-full" style={{width: "90%"}}>
                  90%
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col">
              <FaBootstrap size={48} className="mb-2 text-purple-600" />
              <p className="text-lg font-medium text-gray-900">Bootstrap</p>
              <div className="mt-2 w-24 h-4 bg-purple-200 rounded-full">
                <div className="h-full text-center text-xs text-white bg-purple-600 rounded-full" style={{width: "80%"}}>
                  80%
                </div>
              </div>
            </div>



            <div className="flex items-center justify-center flex-col">
              <FaReact size={48} className="mb-2 text-purple-600" />
              <p className="text-lg font-medium text-gray-900">React</p>
              <div className="mt-2 w-24 h-4 bg-purple-200 rounded-full">
                <div className="h-full text-center text-xs text-white bg-purple-600 rounded-full" style={{width: "80%"}}>
                  80%
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col">
              <FaNodeJs size={48} className="mb-2 text-purple-600" />
              <p className="text-lg font-medium text-gray-900">NodeJs</p>
              <div className="mt-2 w-24 h-4 bg-purple-200 rounded-full">
                <div className="h-full text-center text-xs text-white bg-purple-600 rounded-full" style={{width: "80%"}}>
                  80%
                </div>
              </div>
            </div>




            <div className="flex items-center justify-center flex-col">
              <FaJsSquare size={48} className="mb-2 text-yellow-600" />
              <p className="text-lg font-medium text-gray-900">JavaScript</p>
              <div className="mt-2 w-24 h-4 bg-yellow-200 rounded-full">
                <div className="h-full text-center text-xs text-white bg-yellow-600 rounded-full" style={{width: "95%"}}>
                  95%
                </div>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
    </div>
           
  )}
  export default Skills;