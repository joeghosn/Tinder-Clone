//Contexts:
import { useContext, useState } from "react";
//Next Components:
import Image from "next/image";
//Components:
import ChatBox from '../components/swipe/ChatBox'
import MatchesBox from '../components/swipe/MatchesBox';
import TinderCardsCollection from "../components/swipe/TinderCardsCollection";

//Contexts:
import { UserContext } from "../contexts/user";
//Icons:
import {MdManageSearch,MdShield,MdOutlineCases} from 'react-icons/md'
//Framer Motion:
import {motion, AnimatePresence} from "framer-motion";

const Swipe=()=>{
const {user}=useContext(UserContext);
const {firstName,photos}=user;
const [isMessages,setIsMessages]=useState(false);
const [isMatches,setIsMatches]=useState(true);
const randomNumber=Math.floor(Math.random()*5) +1;


const handleMessages=()=>{
    setIsMessages(true);
    setIsMatches(false);
}

const handleMatches=()=>{
    setIsMatches(true);
    setIsMessages(false);
}



return(

<motion.div   className="h-screen flex " >

    {/* Left Container */}
    <div className='hidden flex-col  md:flex md:w-1/4 md:min-w-[350px] z-30  '>
{/* User Menu */}
<div className="flex items-center bg-gradient-to-r from-tinder-pink via-tinder-light-pink to-tinder-orange min-h-20 py-2 justify-around ">

<button className="flex items-center justify-center space-x-2 rounded-full h-fit px-4 py-1 hover:bg-black hover:bg-opacity-20 ">
<span>
    <Image src={'/assets/mary-2.jpeg'} alt={`Profile Picture`} width={35} height={35} className="rounded-full text-white text-[10px]"/>
</span>
<span className="text-white font-medium">
{firstName}  
</span>    
</button>

<div className="flex space-x-4 items-center justify-center">
<button className=" flex justify-center items-center  rounded-full bg-black bg-opacity-40  w-10 h-10 hover:bg-opacity-20 "><span><MdManageSearch size={22} color="white"/></span></button>
<button className=" flex justify-center items-center rounded-full bg-black bg-opacity-40  w-10 h-10 hover:bg-opacity-20 "><span><MdOutlineCases size={22} color="white"/></span></button>
<button className=" flex justify-center items-center  rounded-full bg-black bg-opacity-40  w-10 h-10 hover:bg-opacity-20 "><span><MdShield size={22} color="white"/></span></button>
</div>

</div>
{/* User Menu */}


<div className="py-2 bg-white h-full space-y-4   ">

<div className="flex space-x-4 px-6 ">
    <button onClick={handleMatches} className={`font-semibold border-b-4 ${isMatches?'border-tinder-pink':'border-transparent'} `}>Matches</button>
    <button onClick={handleMessages} className={`font-semibold border-b-4 ${isMessages?'border-tinder-pink':'border-transparent'} `}>Messages</button>
</div>
<AnimatePresence initial={false} mode="wait">
{isMatches&&<MatchesBox key={1}/>}
{isMessages&&<ChatBox key={2}/>}
</AnimatePresence>

</div>

    </div>
    {/* Right Container */}
    <div className='flex flex-col w-full h-full  items-center bg-gray-100 md:w-3/4'>
    <TinderCardsCollection/>


    </div>





</motion.div>

);
   
}

export default Swipe;