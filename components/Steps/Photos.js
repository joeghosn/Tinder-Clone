//Hooks:
import { useContext, useState } from "react";
import { useRouter } from "next/router";
//Contexts:
import { UserContext } from "../../contexts/user";
import {StepperContext} from "../../contexts/UserStepper";

//Components:
import PhotoCard from './PhotoCard';
//utils:
import StepperHandlers from "../../utils/stepperHandlers";
//Icons:
import { MdChevronLeft } from "react-icons/md";
//Framer Motion:
import { motion } from "framer-motion";








const Photos=()=>{

    const {user,setUser}=useContext(UserContext);
    const {step}= useContext(StepperContext);
    
 
    
    const {photos}=user;



    const {handlePreviousStep}=StepperHandlers();

    const router=useRouter();

    const handlePushRoute=()=>{
        if(photos.length>=2){
            router.push('/swipe');
        }
    }

          
   const imageHandler=(event,idx)=>{
    
    const reader=new FileReader();
        reader.onload = () => {
            const image={
                id:idx,
                imageUrl:reader.result,
            }
            if(reader.readyState===2){
                      
                setUser({
                    ...user,
                    photos:[...photos,image],
                  }); 

                 
                
            }
        };   
        reader.readAsDataURL(event.target.files[0]);     
   }


 

   

   const handleRemoveImage=(idx)=>{
    photos=photos.filter((photo)=>{
       
        return photos[idx].id!==photo.id;
    })

    photos=photos.map((photo,idx)=>{
        return {
            ...photo,
            id:idx
        } 
    })

    setUser({
        ...user,
        photos,
    });

}




    return (
       
   <motion.div initial={{opacity:0,x:"-100vh"}} animate={{x:0,opacity:1}} exit={{opacity:0,x:"100vw"}}  transition={{type:"tween", ease:"easeIn"}} className="flex flex-col relative ">

    <MdChevronLeft onClick={handlePreviousStep} size={40}  className="absolute top-6 left-6"/>

    <div className="flex flex-col mx-10 mt-20">
    <h1 className="font-semibold text-4xl mb-2 text-gray-800">Add Photos</h1>
    <p>Add at least two photos to continue</p>

    <div className="grid grid-cols-3  gap-4 mt-8 " >
      {
        [0,1,2,3,4,5].map((idx)=>{
            
            return(
 <PhotoCard  key={idx} bgUrl={photos[idx]?`url(data:${photos[idx].imageUrl})`:''} imageHandler={()=>{imageHandler(event,idx)}} handleRemoveImage={()=>{handleRemoveImage(idx)}} />
            )
           
    
        })
    
      }
    </div>

    </div>

 

    
        <button onClick={handlePushRoute} className={`${photos.length>=2?'bg-gradient-to-r from-tinder-pink via-tinder-light-pink to-tinder-orange text-white':'bg-tinder-light-grey text-gray-500'} self-center w-[90%] py-3.5 mt-16 mb-6  rounded-full font-medium text-lg focus:outline-none`}>SIGN UP</button>





 
      
    </motion.div>

        )
    }

    
    export default Photos;

