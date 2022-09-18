
//Hooks:
import { useContext} from "react";
//Contexts:
import { UserContext } from "../../contexts/user";
import {StepperContext} from "../../contexts/UserStepper";
//Icons:
import { MdChevronLeft } from "react-icons/md";
//Utils:
import { defaultPassions } from "../../data/defaultPassions";
import StepperHandlers from "../../utils/stepperHandlers";
//Framer Motion:
import { motion } from "framer-motion";

const Passion=()=>{

    const {handleNextStep,handlePreviousStep,skipStep}=StepperHandlers();
    const {user,setUser}=useContext(UserContext);
    const {step}= useContext(StepperContext);
  
 
    const {passions}=user;
 

    const handlePassion=(event)=>{
        const index=passions.indexOf(event.target.value);
    
            if(index===-1){
                if(passions.length<5){
                  

                    setUser({
                        ...user,
                        passions:[...passions,event.target.value],
                      })
                   
                }else{
                    return;
                }
               
                
            }else{
                passions= passions.filter((passion)=>{
                    return passion!==event.target.value;
                });

                setUser({
                    ...user,
                    passions,
                })

            }        
    }

return(

    <motion.div initial={{opacity:0,x:"-100vh"}} animate={{x:0,opacity:1}} exit={{opacity:0,x:"100vw"}}  transition={{type:"tween", ease:"easeIn"}} className="flex flex-col relative px-10 ">
        <MdChevronLeft size={40}  className="absolute top-6 left-6" onClick={handlePreviousStep}/>
        <button onClick={skipStep} className="absolute top-6 right-6 text-gray-300  font-medium focus:outline-none hover:text-gray-600">SKIP</button>
        
        <h1 className="font-semibold text-4xl text-gray-800 mt-28 mb-4  ">Passions</h1>
        <p className="mb-8 text-gray-500">let everyone know what you are passionate about by adding it to your profile.</p>
        <div className="flex flex-wrap md:h-fit  h-[160px]   space-x-2 items-center overflow-y-scroll scroll scroll-smooth mb-4  ">
            {
                defaultPassions.map((defaultPassion,idx)=>{
                    const index=passions.indexOf(defaultPassion);
                
                    if(index===-1){


                        return(
                            <button onClick={handlePassion} key={idx} value={defaultPassion} className={`focus:outline-none border-[1px] border-gray-500 text-gray-500 py-1 px-1  mb-2 rounded-full`}>{defaultPassion}</button>
                            );
                    }else{
                     
                        return(
                            <button onClick={handlePassion} key={idx} value={defaultPassion} className={`focus:outline-none border-[1px]  ${index===0?'border-tinder-red text-tinder-red':''} ${index===1?'border-tinder-pink text-tinder-pink':''} ${index===2?'border-tinder-orange text-tinder-orange':''} ${index===3?'border-yellow-500 text-yellow-500':''} ${index===4?'border-purple-400 text-purple-400':''} py-1 px-1  mb-2 rounded-full`}>{defaultPassion}</button>
                            );
                    }
                   
                })
            }
        </div>

        <button onClick={()=>{
            if(passions.length===0||passions.length===3||passions.length===5){
                handleNextStep('passions');
            }
        }}   type='submit' className={`self-center rounded-full focus:outline-none  font-medium text-lg w-[90%] py-4 mt-6 ${passions.length===0||passions.length===3||passions.length===5?'bg-gradient-to-r from-tinder-pink via-tinder-light-pink to-tinder-orange text-white':'bg-tinder-light-grey text-gray-400'}`}>CONTINUE <span className='mx-2 text-xl'>{passions.length}/5</span></button>
    
        

    </motion.div>
 
);
    
}

export default Passion;
    
    