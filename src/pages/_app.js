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
            clipPpath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)"

          },
          animateState: {
            cliPath: "polygon(35% 7%, 61% 5%, 65% 99%, 34% 100%)"

          },
          exitState : {
            clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%"

          }
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
