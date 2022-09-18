//Utils:
import StepperHandlers from '../../utils/stepperHandlers';
//Icons:
import {MdChevronLeft} from 'react-icons/md';
//Hooks:
import { useContext} from 'react';
//Contexts:
import { UserContext } from '../../contexts/user';
import {StepperContext} from "../../contexts/UserStepper";

//Framer Motion:
import {motion } from 'framer-motion';









const Birthday=()=>{


    const {user,setUser}=useContext(UserContext);
    const {step}= useContext(StepperContext);

    const {birthDate}=user;
 
    const handleOnChange=(event,factor)=>{
        if(isNaN(event.target.value)){
            return false;
        }else{
            setUser({
                ...user,
                birthDate:{
                    ...birthDate,
                    [factor]:event.target.value,
                }    
            });
        }
        
        if(event.target.nextSibling&&event.target.value.length===2){
            event.target.nextSibling.focus();
           } 
    }



    const {handleNextStep,handlePreviousStep}=StepperHandlers();

    const handleOnClick=()=>{
        handleNextStep('birthDate');
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
    }
            
return (

    
<motion.div initial={{opacity:0, x:"-100vw"}} animate={{opacity:1, x:0}} exit={{x:"100vw",opacity:0}}   transition={{type:"tween",ease:"easeIn" }} className="flex flex-col relative h-screen ">
    <MdChevronLeft size={40}  className="absolute top-6 left-6" onClick={handlePreviousStep}/>
    <h1 className="font-semibold  text-4xl text-gray-800 mb-6 ml-10 mt-28">My birthday is</h1>
    <form onSubmit={handleSubmit}>
        <div className='flex flex-col '>

            <div className='flex items-center justify-center space-x-4 mt-10 mb-6'>
           
<input id="month"  onFocus={(event)=>{event.target.select()}} onChange={()=>{handleOnChange(event,'month')}} maxLength={2}  type={'tel'} placeholder={'MM'} value={user.birthDate.month} className='border-[2.5px] border-gray-300 shadow-sm focus:border-gray-500 rounded-lg w-[15%] min-w-[100px] py-5 text-center' />
<input id="day"  onFocus={(event)=>{event.target.select()}} onChange={()=>{handleOnChange(event,'day')}}  type={'tel'} maxLength={2} placeholder={'DD'} value={user.birthDate.day} className='border-[2.5px] border-gray-300 shadow-sm focus:border-gray-500 rounded-lg w-[15%] min-w-[100px] py-5 text-center'/>
<input id="year"  onFocus={(event)=>{event.target.select()}} onChange={()=>{handleOnChange(event,'year')}}  type={'tel'} maxLength={4} placeholder={'YYYY'} value={user.birthDate.year}  className='border-[2.5px] border-gray-300 shadow-sm focus:border-gray-500 rounded-lg w-[15%] min-w-[100px] py-5 text-center'/> 
</div>

<p className='text-center mb-10 text-gray-600'>Your age will be public</p>

            <button  onClick={handleOnClick} type='submit' className={`self-center rounded-full focus:outline-none  font-medium text-lg w-[90%] py-4 mt-6 ${birthDate.day&&birthDate.month&&birthDate.year?'bg-gradient-to-r from-tinder-pink via-tinder-light-pink to-tinder-orange text-white':'bg-tinder-light-grey text-gray-400'}`}>CONTINUE</button>
        </div>
    </form>  
        
</motion.div>


)
   

}

export default Birthday;