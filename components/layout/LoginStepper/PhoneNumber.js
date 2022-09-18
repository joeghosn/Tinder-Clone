//Hooks:
import {useState, useRef, useContext} from 'react';
//Contexts
import { LayoutContext } from '../../../contexts/Layout';
import { UserContext } from '../../../contexts/user';
import { LoginStepperContext } from '../../../contexts/LoginStepper';
//Next Components:
import Image from 'next/image';
//Framer Motion:
import {motion} from "framer-motion";


const PhoneNumber=()=>{

    const {user,setUser}=useContext(UserContext);
    const {phoneNumber}=user;

    const [countryCode,setCountryCode]=useState('+961');

    const {setIsLoginOpen}=useContext(LayoutContext);
    const {step,setStep}=useContext(LoginStepperContext);

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

    const handleCountryCode=(event)=>{
        setCountryCode(event.target.value);
    }
   
    const handleOnChange=(event)=>{
        
        if(isNaN(event.target.value)){
            return false;
        }else{
            setUser({
                ...user,
                phoneNumber:event.target.value,
            });
        }
        
      
    }
  
    const handleNextStep=()=>{
        if(phoneNumber.length>=4){
            setStep(step+1);
            }
    }

    const handleCloseSmsLogin=()=>{
        setIsLoginOpen(false);
        setStep(0);
        setUser({
            ...user,
            phoneNumber:''
        })
    }

    return(
       
<motion.div animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}}  className={`flex  items-center justify-center fixed w-full h-screen  z-10  bg-black bg-opacity-60`}>

    <motion.div animate={{opacity:1, y:0}} initial={{opacity:0, y:"-100vh"}} exit={{opacity:0, y:"100vh"}} transition={{type:"spring", damping:12.5, stiffness:125}}    className="bg-white relative flex flex-col items-center w-full h-full  px-4 py-8 md:max-h-[400px] md:max-w-[440px] md:py-4 md:px-6 md:rounded-lg">

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
        <h1 className='font-bold text-2xl mb-4 hidden md:block'>Enter your mobile number</h1>
        <h1 className="font-bold text-3xl mb-4 self-start md:hidden block">My number is</h1>
        {/* Description */}

        {/* Input Form */}
        <form className='flex flex-col items-center justify-center w-full mb-4 '>

        <div >   
        <select className="cursor-pointer  w-[5.2rem] mr-2 md:rounded "  onInput={handleCountryCode}>
            <option>+961</option>
            <option>+971</option>
            <option>+966</option>
            <option>+974</option>
            <option>+965</option>
        </select>

        <input className="w-16 md:rounded-l"  type={'text'} readOnly placeholder={`${countryCode}`}></input>

        <input className="md:w-[55%] w-[40%] md:rounded-r" type={'tel'} value={phoneNumber} minLength={4} maxLength={13} onChange={handleOnChange} ></input>

        </div> 
       
        {phoneNumber.length<4&&<motion.label  initial={{opacity:0,y:50}} animate={{opacity:1, y:0}} transition={{type:"tween", ease:"easeIn", duration:0.2}} htmlFor="phoneNumber" className=' self-start mt-2  text-tinder-red text-[12px]'>{phoneNumber.length===0?"Phone Number Is Required":"Enter a Valid Phone Number"}</motion.label>}
               
        </form>
        {/* Input Form */}

        {/* More Information */}
        <p className="text-[12px] text-gray-500 self-start  mb-7">When you tap continue, tinder will send a text with a verification code. Message 
        and data rates should apply. The verified phone number can be used to login. <a className="underline">Learn what happens when your number changes.</a></p>
        {/* More Information */}

        <button onClick={handleNextStep} className={`${!(phoneNumber.length>=4)?'text-gray-600 bg-tinder-light-grey':'text-white bg-gradient-to-r from-tinder-pink via-tinder-light-pink to-tinder-orange'} rounded-full w-full py-4   text-md tracking-wide font-medium md:py-3.5` }>CONTINUE</button>


        </motion.div>
     
</motion.div>

  
 
    );
}

export default PhoneNumber;