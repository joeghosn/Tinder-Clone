//Framer Motion:
import { AnimatePresence, motion } from "framer-motion";
//Hooks:
import { useContext } from "react";
//Contexts:
import { UserContext } from "../../contexts/user";
const DefaultMatchesPage=()=>{

    
    const {user}=useContext(UserContext);
    const {matches}=user;
    

    if(typeof document!=='undefined'){
        const htmlBody=document.querySelector('html body');
        htmlBody.classList.add('overflow-hidden')
    } 
    
const box={
    hidden:{
        x:"-40%"
    },
    visible:{
        x:0,
        transition:{
            type:"tween",
            duration:0.15,
            ease:"linear" ,
            when:"beforeChildren",
        }
    },
    exit:{
        x:"-40%",
       
        transition:{
            type:"tween",
            duration:0.15,
            ease:"linear" ,
        }
    }


};

const boxes={
    hidden:{
rotate:0,
    },
    visible:{
rotate:[0,30,0],
transition:{
    duration:1,
 
    
}
    }
}

    return(
        <>
      
    <motion.div variants={box} initial={"hidden"} animate={"visible"} exit={"exit"}   className="flex flex-col items-center justify-around  h-full ">

<div className="flex justify-center">
<motion.div variants={boxes}     className="absolute bg-gradient-to-r from-tinder-pink via-tinder-light-pink to-tinder-orange h-48 w-32 rounded-xl z-30"></motion.div>
<div className="absolute bg-gradient-to-r bg-tinder-light-grey h-48 w-32 rounded-xl z-20 ml-3 mt-3 "></div>
<div className="absolute bg-gradient-to-r bg-tinder-light-grey h-48 w-32 rounded-xl z-10 ml-6 mt-6 bg-opacity-30   "></div>
</div>

<div className="w-3/4 " >
<h1 className="text-center text-2xl font-semibold my-3">Start Matching</h1>
<p className="text-center text-gray-500">Matches will appear here once you start to Like people. You can message them directly from here when you're ready to spark up the conversation</p>
</div>


       

    </motion.div>
  
    </>
   
    );

}

export default DefaultMatchesPage; 