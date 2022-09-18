//Icons:
import {MdAdd, MdClose} from 'react-icons/md';
import { MdRemove } from 'react-icons/md';
//Contexts:
import { UserContext } from '../../contexts/user';
//Hooks:
import { useContext, useState} from 'react';
//Framer Motion:
import { AnimatePresence, motion } from 'framer-motion';










const PhotoCard=({imageHandler,bgUrl,handleRemoveImage,isRemoved})=>{

console.log({bgUrl})



   

    return(
        <motion.div className='relative'  >

   
        <label>

        <div style={{backgroundImage:  bgUrl}} className={`flex bg-origin-border aspect-[6/8]   normal:w-[130px] normal:aspect-[8/12] relative border-[4px] shadow-md  rounded-lg ${bgUrl===''?'cursor-pointer hover:scale-x-105':''} bg-no-repeat bg-cover bg-center  border-tinder-gray-600  bg-tinder-light-grey`}>



<input type={bgUrl!==''?'':'file'} className='hidden' accept={'.jpg, .jpeg'} onChange={imageHandler}/>

</div>
</label>
{bgUrl===''&&<MdAdd className="rounded-full absolute -bottom-2 -right-2 bg-gradient-to-b from-tinder-pink to-tinder-orange " color="#fff" size={23} />}
{bgUrl!==''&& <MdClose className={`${bgUrl!==''?'cursor-pointer':''} rounded-full absolute -bottom-2 -right-2 bg-gradient-to-b from-tinder-pink to-tinder-orange hover:scale-110 `} color="#fff" size={23} onClick={handleRemoveImage}  />}
</motion.div>
    );
}

export default PhotoCard;