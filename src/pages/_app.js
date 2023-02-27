import '@/styles/globals.css';


import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

function App({Component, pageProps,}) {
  const router = useRouter();

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{ duration: 0.75 }}
        variants={{
          initialState:{
            
            clipPath: "polygon(43% 1%, 54% 1%, 54% 100%, 42% 100%)"
          },
          animateState: {
            clipPath: "polygon(1% 0, 100% 0, 100% 100%, 0% 100%)"


          },
          exitState : {
            clipPath: "polygon(0 0, 100% 1%, 100% 100%, 0 100%)"

          }
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
