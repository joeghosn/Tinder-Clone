
//Hooks:
import { useContext } from "react";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
//Icons:
import {MdClose} from 'react-icons/md';
//Utils:
import StepperHandlers from "../../utils/stepperHandlers";
//Contexts:
import { UserContext } from "../../contexts/user";
import {StepperContext} from "../../contexts/UserStepper";
//Framer Motion:
import { AnimatePresence, motion} from "framer-motion";


const FirstName=()=>{

  const {user,setUser} =useContext(UserContext);
  const {direction}= useContext(StepperContext);
  const {handleNextStep,initializeUserData}=StepperHandlers();

 
    const {firstName}=user;

    const [exit,setExit]=useState(false);

    const router=useRouter();

    
const handleOnChange=(event)=>{
  setUser({...user,
    firstName:event.target.value,
  });
}
  

    const handleOnClick=()=>{
        handleNextStep('firstName');
    }

    const handleInitialize=()=>{

initializeUserData();
router.push('/');
setExit(false);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
    }

    const handleCloseExit=()=>{
      setExit(false);
    }
    
    const handleOpenExit=()=>{
      setExit(true);
    }
    
    return (
    
    
  <motion.div initial={{opacity:0,x:"-100vw"}} animate={{x:0,opacity:1}} exit={{x:"100vw",opacity:0}}  transition={{type:"tween", ease:"easeIn"}}    className="flex flex-col relative h-screen ">
      {/* Exit Popup */}
      <AnimatePresence>
      {exit&&<motion.div initial={{opacity:0 }} animate={{opacity:1}} exit={{opacity:0}}   className="flex items-center justify-center absolute bg-black bg-opacity-60 inset-0 ">
            <motion.div initial={{opacity:0,height:0 }} animate={{opacity:1,height:280}}   transition={{type:"tween", ease:"easeIn",duration:0.3}}  exit={{opacity:0,width:0,height:0}}  className="flex flex-col items-center justify-center bg-white w-[320px] h-[280px] rounded-lg py-8 ">
                  <h1 className="text-2xl font-semibold ">Are you sure?</h1>
                  <p className=" mt-2 max-w-xs text-gray-600 font-semibold text-center text-lg">You will exit of this and all your information will be deleted.</p>
                  <button onClick={handleInitialize} className={`my-3 bg-gradient-to-r from-tinder-pink via-tinder-light-pink to-tinder-orange text-white  rounded-full  font-bold text-xl w-[90%] py-2.5 focus:outline-none `}>Continue</button>
                  <button onClick={handleCloseExit} className="rounded-full font-bold text-xl w-[90%] py-2.5 focus:outline-none border-2 border-gray-300 text-gray-700 ">cancel</button>
            </motion.div>
      </motion.div>
      }
      </AnimatePresence>
      {/* Exit Popup */}

      <MdClose size={25}  className="absolute top-6 left-6" onClick={handleOpenExit}/>

       {/* First Name Form */}
      <div className="mt-20 pl-10">
         <h1 className="text-4xl font-semibold text-gray-800 mb-6">My first name is</h1>
         <form onClick={handleSubmit}>
            <input id="firstName" type={'text'} value={firstName} placeholder='First Name' onChange={handleOnChange} className={`border-b w-[90%]  bg-transparent text-xl`} ></input>
            <p className={`text-sm ${firstName?'text-gray-800':'text-tinder-red'}   mb-16 mt-2`}>{firstName?'This is how it will appear in Tinder':'This field must be between 1-22 characters.'}</p>
            <button type="submit"  onClick={handleOnClick} className={`mt-6 self-center ${firstName?'bg-gradient-to-r from-tinder-pink via-tinder-light-pink to-tinder-orange text-white':'bg-tinder-light-grey text-gray-400'}  rounded-full  font-medium text-lg w-[90%] py-4 focus:outline-none `}>CONTINUE</button>
         </form>
      </div>
      {/* First Name Form */}   
    </motion.div>
 
  
    );
    }
    
    export default FirstName;