//Hooks:
import { useContext} from "react";
//Contexts:
import { StepperContext } from "../../contexts/UserStepper";
//Next Components:
import Image from "next/image";
//Icons:
import {FaCheck} from 'react-icons/fa'
//Framer Motion:
import {motion, AnimatePresence } from "framer-motion";




const Welcome=()=>{
const {step,setStep}=useContext(StepperContext);
   
   const handleOnClick=()=>{
      setStep(step+1);
   
      
   }

    return(
    <div>
      <AnimatePresence>
      {step===0&&
         <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='flex justify-center items-center absolute inset-0  bg-black bg-opacity-50 '>
    <motion.div initial={{opacity:0, y:"-100vh"}}  animate={{opacity:1, y:0}} exit={{opacity:0, y:"100vh"}} transition={{type:"spring",  bounce:0 }}  className=" bg-white flex flex-col h-full w-full px-4 py-4 overflow-y-scroll scroll scroll-smooth  md:rounded-lg md:w-1/3  md:min-w-[440px] md:h-[85%]    ">

 <div className="flex flex-col items-center  mb-6  ">
    <Image src='/assets/tinder-logo-popup.svg' alt='Tinder Logo' width={40} height={40}/>
    <h1 className="font-bold text-xl">Welcome To tinder</h1>
    <h2 className="font-medium text-gray-800">Please follow these house rules</h2>
 </div>


<div className="flex flex-col  space-y-4  i">

<div className="flex flex-col ">
    <div className="flex space-x-2">
    <FaCheck size={18} color='#D2002E'/>
    <h1 className=" font-semibold  ">Be yourself</h1> 
    </div>
    <p className="max-w-xs md:max-w-md font-semibold text-gray-800">Make sure your photos, age, and bio are true to who you are.</p>
 </div>

 <div className="flex flex-col">
    <div className="flex space-x-2">
    <FaCheck size={18} color='#D2002E'/>
    <h1 className=" font-semibold  ">Stay safe</h1> 
    </div>
    <p className="max-w-xs md:max-w-md font-semibold text-gray-800">Dont be too quick to give out personal information. <span className="text-[#D2002E]">Date safely</span></p>
 </div>

 <div className="flex flex-col">
    <div className="flex space-x-2">
    <FaCheck size={18} color='#D2002E'/>
    <h1 className=" font-semibold  ">Play it cool</h1> 
    </div>
    <p className="max-w-xs md:max-w-md font-semibold text-gray-800">Respect others and treat them as you would like to be treated.</p>
 </div>

 <div className="flex flex-col   ">
    <div className="flex space-x-2">
    <FaCheck size={18} color='#D2002E'/>
    <h1 className=" font-semibold  ">Be proactive</h1> 
    </div>
    <p className="max-w-xs md:max-w-md font-semibold text-gray-800">Always report bad behavior </p>
 </div>



</div>

<button onClick={handleOnClick} className=" mt-6 self-center bg-gradient-to-r from-tinder-pink via-tinder-light-pink to-tinder-orange rounded-full text-white font-medium text-lg w-[90%] py-2.5   ">I Agree</button>

        </motion.div>
        </motion.div>
      }
      </AnimatePresence>
    
        </div>
 
    )
    }
    
    export default Welcome;