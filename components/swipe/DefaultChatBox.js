//Next Components:
import Image from "next/image";
//Framer Motion:
import {motion } from "framer-motion";
const DefaultChatBox=()=>{

    const variants={
        hidden:{
            x:"40%",
        },
        visible:{
            x:0,
            transition:{
                type:"tween",
                duration:0.15,
                ease:"linear",
            }
        },
        exit:{
            x:"40%",
         
            transition:{
                type:"tween",
                duration:0.15,
                ease:"linear",
            }
        }
    }

    return (
        <motion.div variants={variants} initial={"hidden"} animate={"visible"} exit={"exit"} className="flex flex-col items-center  h-full justify-around   ">
            <Image src={''} alt='Canva Image'/>
<div className="w-3/4 " >
<h1 className="text-center text-2xl font-semibold my-3">Say Hello</h1>
<p className="text-center text-gray-500">Looking to strike up a conversation? When you match with others, you can send them a message under {'"'}Matches{'"'}</p>
</div>        
        </motion.div>
    );
}

export default DefaultChatBox