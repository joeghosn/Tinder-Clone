//Next Components:
import Image from "next/image";
//Framer Motion:
import {motion, useAnimation, useMotionValue, useTransform} from "framer-motion";
//Hooks:
import { useContext, useState } from "react";
//Contexts:
import {UserContext} from "../../contexts/user";

const Matches=({index,firstName,age,job,location,gender,showGender,photos})=>{

const [isDeleting,setIsDeleting]=useState(false);
const {user,setUser}=useContext(UserContext)
const {matches}=user;

const controls=useAnimation();
const offset=useMotionValue(0);
const opacity=useTransform(offset,[0,-165,-330],[1,0.2,0])



const variants={
        hidden:{
            opacity:0,
        },
        visible:{
            opacity:1,
            transition:{
                duration:0.2
            }
        },   
        exit:{
            opacity:0,
            transition:{
                duration:0.2
            }
        }
    }

   

const handlePan=(event,info)=>{
    const x=info.offset.x;
    if(x<0){
        controls.set({x:x>-330?x:-330});
        setIsDeleting(true);
    }
}

const handlePanEnd=(event,info)=>{
    const x=info.offset.x;
    if(x<=-165){
     
        matches=matches.filter((match)=>{
            return match!==matches[index];
            });
            setUser({
            ...user,
            matches,
            })   
     
    }else{
        controls.start({x:0})    
    }
}



    return(
        <motion.div layout variants={variants} initial={"hidden"} animate={isDeleting?controls:"visible"} exit={"exit"} style={{x:offset, opacity}} onPan={handlePan} onPanEnd={handlePanEnd} className="flex space-x-2  py-3 px-3  bg-gray-100 bg-opacity-20 ">

            <Image src={photos[1]} alt='Profile Picture' width={52} height={52} className='rounded-full'/>

            <div className="flex flex-col">

            <div className="flex space-x-1 h-[1.9rem] ">
            <h2 className="font-semibold text-lg ">{firstName}</h2>
            <p className="self-end font-medium text-gray-700" >{age}</p>
            </div>

            <div className="flex space-x-2 ">
            <p className="text-sm font-medium text-gray-700">{job} | </p>
            <p className="text-sm font-medium text-gray-700">{location} | </p>
            {showGender&&
            <p className="text-sm font-medium text-gray-700">{gender}</p>
            }
            </div>

            </div>
          
        </motion.div>
    );
}

export default Matches;