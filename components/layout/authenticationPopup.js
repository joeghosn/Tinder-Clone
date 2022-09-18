//Components:
import Button from "./button";
//Next Components;
import Image from "next/image";
//Icons:
import {FaGoogle, FaGooglePlay} from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaSms } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
//React Hooks:
import { useContext, useRef } from "react";
//Contexts:
import { LayoutContext } from "../../contexts/Layout";
import { LoginStepperContext } from "../../contexts/LoginStepper";
//Utils:
import { useWindowSize } from "../../utils/screenResolution";
//Framer Motion:
import {motion, AnimatePresence} from "framer-motion";

const AuthenticationPopup=()=>{

    
const {width}=useWindowSize();
   



const closeButtonRef=useRef();
const closeBars1=useRef();
const closeBars2=useRef();

const {isAuthenticationOpen,setIsAuthenticationOpen,popupActionText,setIsLoginOpen}=useContext(LayoutContext);
const {setIsSms,setStep}=useContext(LoginStepperContext);

const handleSmsLogin=()=>{
setIsLoginOpen(true);
setIsAuthenticationOpen(false);
setIsSms(true);


};

const handleFacebookLogin=()=>{
    setIsLoginOpen(true);
    setIsAuthenticationOpen(false);
    setIsSms(false);
    setStep(2);

}

const handleGoogleLogin=()=>{
    setIsLoginOpen(true);
    setIsAuthenticationOpen(false);
    setIsSms(false);
    setStep(2);

    
}

const handleCloseOverlay=()=>{
    setIsAuthenticationOpen(false);
    
    };



const handleHover=()=>{
closeButtonRef.current.classList.toggle('close');
closeBars1.current.classList.toggle('close-left-right');
closeBars2.current.classList.toggle('close-left-right');
}

const handleUnhover=()=>{
    closeButtonRef.current.classList.toggle('close');
    closeBars1.current.classList.toggle('close-left-right');
    closeBars2.current.classList.toggle('close-left-right');
}

return(
    <div>
    <AnimatePresence exitBeforeEnter>
    {isAuthenticationOpen&&<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} id="popup" className= {`flex items-center justify-center  w-full h-screen z-10 fixed bg-opacity-60 bg-black  `}>

<motion.div initial={{opacity:0, width:0, height:0}} animate={{opacity:1, width: `${width<768?"100%":"50%"}`, height:"100%"}} exit={{opacity:0, width:0, height:0}} transition={{type:"tween", ease:"easeOut", duration:0.25 }} className='bg-white  relative flex flex-col items-center   w-screen h-full   px-4 py-8 overflow-y-scroll scroll sroll-smooth md:py-4 md:px-2 md:rounded md:w-1/2   '>

<button  className={`block popup-close  focus:outline-none  `} ref={closeButtonRef} onClick={handleCloseOverlay} onMouseEnter={handleHover} onMouseLeave={handleUnhover} >
    <div className="flex items-center justify-center ">
    <span ref={closeBars1} className=" popup-close-left"></span>
    <span ref={closeBars2} className=" popup-close-right"></span>
    </div>
</button>

<div className=' relative bottom-[1.8rem] md:mb-2  md:static '>
<Image src='/assets/tinder-logo-popup.svg' alt='tinder logo' width={44} height={44} />
</div>

<h1 className='font-bold text-2xl mb-4'>{popupActionText}</h1>

<p className='text-sm max-w-sm text-center mt-2 mb-6'>By clicking Log In, You agree to our <a className='underline cursor-pointer'>Terms</a>. Learn how we process your data in our <a className='underline cursor-pointer'>Privacy Policy</a> and <a className='underline cursor-pointer'>Cookie Policy</a></p>


<div className='flex flex-col items-center w-full space-y-4 mb-5'>
<Button buttonType={'authentication'} buttonTextMain={'LOG IN WITH GOOGLE'} buttonIcon={true} eventHandler={handleGoogleLogin}><FaGoogle size={25} /></Button>
<Button buttonType={'authentication'} buttonTextMain={'LOG IN WITH FACEBOOK'} buttonIcon={true} eventHandler={handleFacebookLogin}><FaFacebook size={25 }  /></Button>
<Button buttonType={'authentication'} buttonTextMain={'LOG IN WITH PHONE NUMBER'} buttonIcon={true} eventHandler={handleSmsLogin}><FaSms size={25} /></Button>
</div>

<a className='underline mb-6 cursor-pointer'>Trouble Loggin In?</a>
<hr className='hidden  border-double border-slate-300 w-4/5 md:flex'/>
<h1 className='hidden  font-bold text-2xl mt-6 md:flex'>GET THE APP!</h1>

<div className='hidden md:flex mt-6 justify-center space-x-7'>

<Button buttonType={'download'} buttonTextMain={'App Store'} buttonTextSmall={'Download on the'} buttonIcon={true} ><FaApple size={30} color={'#fff'}/></Button>
<Button buttonType={'download'} buttonTextMain={'Google play'} buttonTextSmall={'GET IT ON'} buttonIcon={true}><FaGooglePlay size={30} color={'#fff'}/></Button>
</div> 

</motion.div>

</motion.div>}
</AnimatePresence>
</div>

);

}

export default AuthenticationPopup;