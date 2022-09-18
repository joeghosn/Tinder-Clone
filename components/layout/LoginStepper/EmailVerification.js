//Hooks:
import { useRef, useContext} from 'react';
import { useRouter } from 'next/router';
//Contexts
import { LayoutContext } from '../../../contexts/Layout';
import { UserContext } from '../../../contexts/user';
import { LoginStepperContext } from '../../../contexts/LoginStepper';
//Next Components:
import Image from 'next/image';
//Framer Motion:
import { motion } from 'framer-motion';
//Formik:
import {useFormik} from "formik";
//Schemas:
import {userVerification} from "../../../schemas/UserVerification";

const EmailVerification=()=>{

    const {values,errors,handleChange,handleBlur,isTouched}=useFormik({
        initialValues:{
            email:"",
        },
        validationSchema:userVerification,
    });


    const {user,setUser}=useContext(UserContext);
    const {isLoginOpen,setIsLoginOpen}=useContext(LayoutContext);
    const {setStep,step}=useContext(LoginStepperContext)

    const router=useRouter();

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
            phoneNumber:"",
            email:"",
        });
    }

    const handleEmail=()=>{
        setUser({
            ...user,
             email:values.email,
        });  
    }

    const handleRoutePush=()=>{
        if(!errors.email){
            router.push('/setup');     
            handleEmail();
        }   
    }

return(

<motion.div animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} className={`flex items-center justify-center fixed w-full h-screen  z-10  bg-black bg-opacity-60`}>

    <motion.div  initial={{opacity:0, x:"25%"}} animate={{opacity:1, x:0}} exit={{opacity:0, x:"-25%"}} transition={{type:"spring", damping:12.5, stiffness:125}} className="bg-white relative flex flex-col items-center w-full h-full  px-4 py-8 md:max-h-[400px] md:max-w-[440px] md:py-4 md:px-6 md:rounded-lg">

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
        <h1 className='font-bold text-2xl mb-4 hidden md:block'>Enter your email</h1>
        <h1 className="font-bold text-3xl mb-4 self-start md:hidden block">My Email is</h1>
        {/* Description */}

        {/* Input Form */}
        <form  className='flex flex-col  items-center justify-center w-full mb-4'> 
            <input  id="email" value={values.email}  className="w-[90%] md:rounded-md" type={'email'}  placeholder={'Email'}  onChange={handleChange} onBlur={handleBlur}></input>
            {errors.email&&<label className="text-[12px] text-tinder-red mt-2 ">{errors.email}</label>}
        </form>
        {/* Input Form */}

        {/* More Information */}
        <p className="text-[12px] text-gray-500 self-start  mb-7">Entering your email will help you recover your account in case of password Loss.</p>
        {/* More Information */}

        <button onClick={handleRoutePush} className={`${errors.email?'text-gray-600 bg-tinder-light-grey':'text-white bg-gradient-to-r from-tinder-pink via-tinder-light-pink to-tinder-orange'} rounded-full w-full py-4   text-md tracking-wide font-medium md:py-3.5` }>CONTINUE</button>

    </motion.div>

</motion.div>

);

}


export default EmailVerification;