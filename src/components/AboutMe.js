import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {

  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section  className="py-20 bg-gradient slide-fwd-center">
      <motion.div ref={ref}
  initial={{ opacity: 0 }}
  animate={{ opacity: inView ? 1 : 0 ,
  y: inView ? 0: '50vh'}}
  transition={{ duration: 1 }} className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          About Me
        </h2>
        <div className="  grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
          <Image
          src="/images/sanuar-khan.png"
          alt="Profile"
          width={300}
          height={300}
          objectFit="cover"
          className=" rounded-lg shadow-lg relative "
            />
    
          </div>
          <div>
            <p className="  text-lg text-gray-500 leading-relaxed mb-4">
              Hi, my name is Sanuar Khan and Im a web developer based in remote job. I specialize in building responsive and performant web
              applications using React and Node.js. Im passionate about
              exploring new technologies and always striving to improve my
              skills.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed mb-4">
              In my free time, I enjoy reading, thinking, and traveling. I also
              love learning new things and taking on new challenges.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
