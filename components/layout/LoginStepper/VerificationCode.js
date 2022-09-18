//Hooks:
import {useState, useRef, useContext} from 'react';
//Contexts
import { LayoutContext } from '../../../contexts/Layout';
import { LoginStepperContext } from '../../../contexts/LoginStepper';
import { UserContext } from '../../../contexts/user';
//Next Components:
import Image from 'next/image';
//Framer Motion:
import {motion} from "framer-motion";

const VerificationCode=()=>{

    const {user,setUser}=useContext(UserContext);
    const [verificationCode,setVerificationCode]=useState(new Array(6).fill(""));


    const {step,setStep}=useContext(LoginStepperContext);
    const {isLoginOpen,setIsLoginOpen}=useContext(LayoutContext);
    
    const closeButtonRef=useRef();
    const closeBars1=useRef();
    const closeBars2=useRef();

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

    const handleCloseSmsLogin=()=>{
        setIsLoginOpen(false);
        setStep(0);
        setUser({
            ...user,
            phoneNumber:'',
        });
    }
    
 

    const handleOnChange=(event,index)=>{
        
       if(isNaN(event.target.value)){
        return false;
       }

       setVerificationCode([...verificationCode.map((digit,idx)=>idx===index?event.target.value:digit)]);
       if(event.target.nextSibling&&event.target.value){
        event.target.nextSibling.focus();
       } 
      
    }


    const handleNextStep=()=>{

    if(verificationCode.join("").length===6){
        setStep(step+1);
        setUser({
            ...user,
            verificationCode:verificationCode.join(""),
        })
    }
    }

    return(

<motion.div animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} className={`flex items-center justify-center fixed w-full h-screen  z-10  bg-black bg-opacity-60`}>

    <motion.div initial={{opacity:0, x:"-25%"}} animate={{opacity:1, x:0}} exit={{opacity:0, x:"25%"}} transition={{type:"spring", damping:12.5, stiffness:125}} className="bg-white relative flex flex-col items-center w-full h-full  px-4 py-8 md:max-h-[400px] md:max-w-[440px] md:py-4 md:px-6 md:rounded-lg">

        {/* Logo */}
        <div className='relative bottom-[1rem] md:mb-2  md:static '>
        <Image src='/assets/tinder-logo-popup.svg' alt='tinder logo' width={44} height={44} />
        </div>
        {/* Logo */}

        <hr className="block w-full mb-3  md:hidden"/>

        {/* Animated Close Button */}
        <button  className={`block popup-close  focus:outline-none  `} ref={closeButtonRef} onClick={handleCloseSmsLogin} onMouseEnter={handleHover} onMouseLeave={handleUnhover} >
            <div className="flex items-center justify-center ">
            <span ref={closeBars1} className=" popup-close-left"></span>
            <span ref={closeBars2} className=" popup-close-right"></span>
            </div>
        </button>
        {/* Animated close Button */}

        {/* Description */}
        <h1 className='font-bold text-2xl mb-4 hidden md:block'>Enter verification code</h1>
        {/* Description */}

        {/* Input Form */}
        <form className='flex flex-col  justify-center items-center w-full  mb-4 '>
            <div className="flex space-x-2">
                {
                    verificationCode.map((digit,idx)=>{
                        return (
                            <input key={idx} type={"tel"} maxLength={1} value={digit} onFocus={(event)=>{event.target.select()}} onChange={(event)=>handleOnChange(event,idx)} className='border-b-2px   border-black md:focus:border-gray-300    focus:outline-none  w-1/6 h-[60px] py-5 text-center md:border-[2.5px] md:border-gray-300  md:shadow-sm md:w-[60px] md:rounded-lg'/>
                        );
                    })
                }
            </div>
            {false&&<motion.label initial={{y:-50,opacity:0}} animate={{y:0, opacity:1}} transition={{type:"tween", ease:"easeIn"}} className=' text-[12px] text-tinder-red mt-2'></motion.label>}
        </form>
        {/* Input Form */}

        {/* More Information */}
        <p className="text-[12px] text-gray-500 self-start  mb-7">Verify your phone number so we can confirm that this is you</p>
        {/* More Information */}

        <button onClick={handleNextStep}  type="submit" className={`${!(verificationCode.join("").length===6)?'text-gray-600 bg-tinder-light-grey':'text-white bg-gradient-to-r from-tinder-pink via-tinder-light-pink to-tinder-orange'} rounded-full w-full py-4   text-md tracking-wide font-medium md:py-3.5` }>CONTINUE</button>

    </motion.div>

</motion.div>
    );
}

export default VerificationCode;