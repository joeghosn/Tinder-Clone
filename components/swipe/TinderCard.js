
//Icons:
import {FaHeart, FaInfo,FaArrowDown, FaSuitcase} from 'react-icons/fa'
import { MdClose, MdLocationPin,MdPerson, MdHome, MdChevronLeft, MdChevronRight } from "react-icons/md";
//Hooks:
import { useState } from "react";
//Framer Motion:
import {AnimatePresence,motion,  useTransform, useMotionValue, useAnimation, useDragControls, AnimateSharedLayout} from "framer-motion";









const TinderCard=({index,handleSwipeLeft,handleSwipeRight,passions,firstName,gender,showGender,location,biography,job,photos,age})=>{

const controls=useDragControls();
const [isUserInfo,setIsUserinfo]=useState(false);
const [isRight,setIsRight]=useState(false);
const [isLeft,setIsLeft]=useState(false);
const [photoIndex,setPhotoIndex]=useState(0);
const [isClicked,setIsClicked]=useState(false);
const opacityControls=useAnimation();
const rotateControls=useAnimation();
const offset=useMotionValue(0);
const rightButtonSize=useTransform(offset,[0,1,250],[64,48,64]);
const leftButtonSize=useTransform(offset,[0,-1,-250],[64,48,64]);
const rightIconColor=useTransform(offset,[0,1,249,250],["#2BE8C9","#fff",'#fff',"#2BE8C9"]);
const leftIconColor=useTransform(offset,[0,-1,-249,-250],["#D6002F","#fff","#fff","#D6002F"]);
const leftBackgroundColor=useTransform(offset,[0,1,-125,-250],["#D6002F00","#D6002FFF","#D6002F80","#D6002F00"]);
const rightBackgroundColor=useTransform(offset,[0,1,125,250],["#2BE8C900","#2BE8C9FF","#2BE8C980","#2BE8C900"])










const handleUserInfo=()=>{
    setIsUserinfo(true);
    }

const handleCloseUserInfo=()=>{
    setIsUserinfo(false);  
    }

  
const handleLeft=()=>{
    handleSwipeLeft();
    setIsLeft(true);
    setIsRight(false);
    setIsClicked(true);
}

const handleRight=()=>{
    handleSwipeRight();
    setIsRight(true);
    setIsLeft(false);
    setIsClicked(true);
}

const handlePreviousPhoto=()=>{
    if(photoIndex>0){
        setPhotoIndex(photoIndex-1);
    }
}

const handleNextPhoto=()=>{
    if(photoIndex<photos.length-1){
        setPhotoIndex(photoIndex+1);   
    }
}
   

 

const cardVariants={
    hidden:{},
    visible:{},
    exit:{
        x:isRight?"100vw":"-100vw", 
        rotate:isClicked&&isRight?30:-30,
        transition:{
            type:"tween",
            ease:"easeIn",
            duration:0.25,
            delay:isClicked?0.25:0,       
        }, 
    }
   };





return (
  
    <motion.div layout  id={`tinder-card-${index}`} style={{x:offset}} animate={rotateControls}  variants={cardVariants} exit={"exit"}    drag dragConstraints={{left:0, right:0, top:0, bottom:0}} dragControls={controls} dragListener={isUserInfo?false:true}   dragElastic={0.75} 

   onDrag={(event,info)=>{
    

   const x=info.offset.x;
   rotateControls.set({x:x});

if(x>0){
setIsRight(true);
setIsLeft(false);
opacityControls.set({opacity:(x/1250)*4});
rotateControls.set({rotate:-7.5*x/125});





}else if(x<0){
    setIsRight(false);
    setIsLeft(true);
    opacityControls.set({opacity:(-x/1250)*4});
    rotateControls.set({rotate:-7.5*x/125})


    
    
   
}else{
    setIsRight(false);
    setIsLeft(false);
    
    
    
   
   
    
    
}
    }} onDragEnd={(event, info)=>{
        const x=info.offset.x;
       
        if(x>250){
            handleSwipeRight();
            
        }
        else if(x<-250){
            handleSwipeLeft();
            
        }
        else{
            setIsRight(false);
            setIsLeft(false);
            rotateControls.start({rotate:0, transition:{type:"tween", ease:"easeOut"},x:0});
        
            
           
         
        }
    }}   className={`flex flex-col w-full    h-[90%] md:w-96  absolute z-10 bg-white rounded-md  `}>

{/* Images Swiper */}

<div  className="w-full h-full flex relative">

    
      
<AnimatePresence exitBeforeEnter initial={false} >  
  
<motion.div layout key={photoIndex}  className="w-full h-full bg-center bg-cover bg-no-repeat relative rounded-md " style={{backgroundImage: `url(${photos[photoIndex]})`}}>
    {isLeft&&<motion.div animate={opacityControls}    className={` flex items-center justify-center border-[4px] border-tinder-red-light absolute top-12 right-8 text-tinder-red-light w-fit h-fit text-4xl px-2 py-1 rotate-12 rounded-md`}>NOPE</motion.div>}
    {isRight&&<motion.div animate={opacityControls}   className={`  flex items-center justify-center border-[4px] border-tinder-green absolute top-12 left-8 text-tinder-green w-fit h-fit text-4xl px-2 py-1 -rotate-12 rounded-md`}>LIKE</motion.div>}
    <MdChevronLeft  size={50} onClick={handlePreviousPhoto} color={"white"} className={`${photoIndex===0?'hidden':''} absolute top-[50%] left-4`}></MdChevronLeft>
  <MdChevronRight size={50} onClick={handleNextPhoto} color={"white"} className={ `${photoIndex===photos.length-1?'hidden':''} absolute top-[50%] right-4`}></MdChevronRight>
    <div className="flex space-x-2 items-center justify-center mt-4">
    {  
        photos.map((photo,idx)=>{
            console.log({idx});
            console.log({photoIndex});
            
            return(
                <div key={idx} className={`${idx===photoIndex?"bg-white ":"bg-black bg-opacity-20"}  w-16 h-1 bg-white rounded-full`}></div>
            ) 
        })
    }
    </div>

    

    </motion.div>
    
    </AnimatePresence>   
     
      
 

    
  
{/* Close Info Button */}
    {isUserInfo&&
    <button onClick={handleCloseUserInfo} className="flex items-center justify-center w-6 h-6 px-5 py-5 z-10 absolute bottom-2 right-4  rounded-full bg-gradient-to-r from-tinder-pink via-tinder-light-pink to-tinder-orange  ">
       <span><FaArrowDown size={22} color='white'/></span>
    </button>
    }
{/* Close Info Button */}

{/* Info Button */}
    {!isUserInfo&&
    <button onClick={handleUserInfo} className="flex items-center justify-center w-6 h-6 rounded-full  z-10 absolute right-4 bottom-24  bg-white ">
      <span><FaInfo size={12}/></span>
    </button>
    }
{/* Info Button */}
</div>
{/* Images Swiper */}            

{/* Black Swipe Left/Right */}
    {!isUserInfo&&<div className="flex  justify-center items-center w-full space-x-4 py-3 rounded-md  z-10 bg-opacity-25 absolute bottom-0 bg-gradient-to-b from-transparent  to-black ">
<motion.div  style={{width:leftButtonSize, height:leftButtonSize, backgroundColor:leftBackgroundColor}}  className={`${isLeft?'  rounded-full':'rounded-full'}`}>
    <motion.button style={{width:leftButtonSize, height:leftButtonSize}}  onClick={handleLeft} className={`flex items-center justify-center w-16 h-16 rounded-full   border border-tinder-red`}><motion.span style={{color:leftIconColor}}><MdClose size={30}/></motion.span></motion.button></motion.div>
<motion.div style={{width:rightButtonSize, height:rightButtonSize, backgroundColor:rightBackgroundColor}}  className={`${isRight?'   rounded-full':'rounded-full'}`}>
    <motion.button style={{width:rightButtonSize, height:rightButtonSize}}   onClick={handleRight}  className={`flex items-center justify-center w-16 h-16 rounded-full  border border-tinder-green`}><motion.span style={{color:rightIconColor}}><FaHeart  size={30}/></motion.span></motion.button>
</motion.div>
   
     </div>
    }
{/* Black Swipe Left/Right */}

{/* White Swipe Left/Right */}
    {isUserInfo&&
    <div className="flex justify-center items-center w-full  space-x-4 pb-2  h-fit  rounded-t-lg shadow-md  absolute bottom-0 z-20 bg-white bg-opacity-10 ">
    
    <motion.button whileTap={{scale:0.9}} whileHover={{scale:1.1}}   onClick={handleLeft} className={`bg-white flex items-center justify-center h-16 w-16  rounded-full   z-20 `}><span><MdClose color={"#D2002E"} size={30}/></span></motion.button>
    <motion.button whileTap={{scale:0.9}} whileHover={{scale:1.1}}    onClick={handleRight} className={`bg-white flex items-center justify-center  h-16 w-16 rounded-full  z-20`}><span><FaHeart color={"#2BE8C9"} size={30}/></span></motion.button>
    </div>
    }
{/* White Swipe Left/Right */}



{/* User Info */}
<AnimatePresence>
{isUserInfo&&
<motion.div layout initial={{opacity:0, height:0}} animate={{opacity:1, height:"25%"}} exit={{opacity:0, height:0}} transition={{duration:0.2}}   className="flex flex-col py-2 px-2 rounded-md overflow-y-scroll scroll scroll-smooth bg-white z-10     ">

{/* First Name/Age */}
    <div className="flex space-x-4 mb-2">
    <h1 className="text-4xl font-semibold">{firstName}</h1>
    <h2 className="self-end text-2xl font-medium">{age}</h2>
    </div>
{/* First Name/Age */}

{/*Additional Information*/}
<div className="flex flex-col space-y-1 my-2">
<div className="flex  space-x-2 items-center">
<span><FaSuitcase size={18} color=" rgb(107 114 128)"/></span>
<p className="text-xl text-gray-500">{job}</p>
</div>

<div className="flex space-x-2 items-center">
<span><MdHome size={18} color="rgb(107 114 128)"/></span>
<p className="text-xl text-gray-500">{`Lives In ${location}`}</p>
</div>

{showGender&&
<div className="flex space-x-2 items-center">
<span><MdPerson size={18} color="rgb(107 114 128)"/></span>
<p className="text-xl text-gray-500">{gender==='male'?'man':'woman'}</p>
</div>
}


<div className="flex space-x-2 items-center">
<span><MdLocationPin size={18} color="rgb(107 114 128)"/></span>
<p className="text-xl text-gray-500">10 Kilometers Away </p>
</div>
</div>
{/*Additional Information*/}


<hr className="border-[1px]"/>


{/* Biography */}
<p className="text-gray-500 my-2 ">
    {biography}
</p>
{/* Biography */}

<hr className="border-[1px] "/>

{/* Passions */}
<div className="flex items-center flex-wrap mt-2 mb-16 ">
    {passions.map((passion,idx)=>{
        return(
<button  key={idx}  className={`py-1 px-1  mb-2 mr-2 rounded-full border-gray-500 text-gray-500 focus:outline-none border-[1px]  `}>{passion}</button>
        );
    })}

</div>
{/* Passions */}
  
</motion.div>
}

</AnimatePresence>
{/* User Info */} 

    </motion.div>

  
    
);    
}
export default TinderCard;
