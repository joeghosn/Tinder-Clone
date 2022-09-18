
//Icons:
import {MdChevronLeft } from "react-icons/md";
//Utils:
import StepperHandlers from "../../utils/stepperHandlers";
//Contexts:
import { UserContext } from "../../contexts/user";
import {StepperContext} from "../../contexts/UserStepper";
//Hooks:
import { useContext } from "react";
//Framer Motion:
import { motion } from "framer-motion";


const Gender=()=>{
  
    
    const {handleNextStep,handlePreviousStep}=StepperHandlers();
    const {step}= useContext(StepperContext);
const {setUser,user}=useContext(UserContext);  

const {gender,showGender}=user;



    const handleOnClick=()=>{
        handleNextStep('gender');
    }



    const handleOnChange=(event)=>{
        setUser({...user,
        gender:event.target.value});
    }

   const handleCheckbox=(event)=>{
    setUser({
        ...user,
        showGender:event.target.checked,
    })
   }
    
  
            
return (
  <motion.div initial={{opacity:0,x:"-100vh"}} animate={{x:0,opacity:1}} exit={{opacity:0,x:"100vw"}}  transition={{type:"tween", ease:"easeIn"}} className="relative flex flex-col h-screen   ">
        <MdChevronLeft onClick={handlePreviousStep} size={40}  className="absolute top-6 left-6"/>
        <h1 className="font-semibold text-4xl text-gray-800 mb-8 mt-28 mx-10  ">I am a</h1>
        <div className="flex flex-col items-center">
        <button   value={'male'} onClick={handleOnChange} className={`${gender==='male'?'text-tinder-pink border-tinder-pink':'border-gray-700 text-gray-800'} border-[2.2px] py-4 rounded-full w-3/4 text-xl cursor-pointer text-center  mb-4 `}>Male</button>
        <button   value={'female'} onClick={handleOnChange} className={`${gender==='female'?'text-tinder-pink border-tinder-pink':'border-gray-700 text-gray-800'} border-[2.2px] py-4 rounded-full w-3/4 text-xl cursor-pointer text-center  mb-4 `}>Female</button>
        </div>

        <div className="flex space-x-2 items-center mt-4 mx-10 ">
        <input onChange={handleCheckbox} type={'checkbox'} checked={showGender}></input>
        <p>Show gender on my profile</p>
        </div>
        <button  onClick={handleOnClick} type='submit' className={`self-center rounded-full focus:outline-none  font-medium text-lg w-[90%] py-4 mt-6 ${gender?'bg-gradient-to-r from-tinder-pink via-tinder-light-pink to-tinder-orange text-white':'bg-tinder-light-grey text-gray-400'}`}>CONTINUE</button>
       
       
      
    </motion.div>
 
)
    }
    
    export default Gender;