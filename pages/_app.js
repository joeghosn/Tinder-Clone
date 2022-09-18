//Styles:
import '../styles/globals.css';
import "swiper/css/bundle";
//Contexts:
import { UserProvider } from '../contexts/user';
import { LayoutProvider } from '../contexts/Layout';
import { StepperProvider } from '../contexts/UserStepper';
import { LoginStepperProvider } from '../contexts/LoginStepper';
//Framer Motion:
import {motion, AnimatePresence} from "framer-motion";
//Next Components:
import {useRouter} from "next/router";


function MyApp({ Component, pageProps }) {
  const router=useRouter();


  return <LayoutProvider><UserProvider><StepperProvider><LoginStepperProvider><AnimatePresence initial={false} exitBeforeEnter><motion.div key={router.route}><Component {...pageProps} /></motion.div></AnimatePresence></LoginStepperProvider></StepperProvider></UserProvider></LayoutProvider>
}

export default MyApp
