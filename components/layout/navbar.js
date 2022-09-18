//Next Components:
import Image from 'next/image';
import Link from 'next/link';
//React Hooks:
import { useEffect,useContext, useState } from 'react';
//Components:
import Button from './button';
//Utils:
import { useWindowSize } from '../../utils/screenResolution';
//Contexts:
import { LayoutContext } from '../../contexts/Layout';
//Icons:
import {FaGlobe} from 'react-icons/fa';
//Framer Motion:
import { AnimatePresence, motion } from 'framer-motion';

const Navbar=({imageUrl,menu})=>{

const {width}=useWindowSize();

          

useEffect(()=>{      
if(width>=768 && isOpen){
setIsOpen(false);

}},[width])
      



 



const {setIsOpen,isOpen, isAuthenticationOpen, setIsAuthenticationOpen,setPopupActionText,isLoginOpen, isIntersecting}=useContext(LayoutContext);
const [isProductsDropDown,setIsProductsDropDown]=useState(false);
const [isSafetyDropDown,setIsSafetyDropDown]=useState(false);

const handleOpen=()=>{
  setIsOpen(!isOpen);    
  }

  const handleCreateAccount=()=>{
    setIsAuthenticationOpen(true);
    setPopupActionText('CREATE ACCOUNT');
  }
  

  
  const handleLogin=()=>{
    setIsAuthenticationOpen(true);
    setPopupActionText('GET STARTED');
  }

  const handleProductsDropDown=()=>{
setIsProductsDropDown(true);
  }

  const handleCloseProductsDropDown=()=>{

      setIsProductsDropDown(false);
 
   
  }

  const handleSafetyDropDown=()=>{

    setIsSafetyDropDown(true);

 
}

const handleCloseSafetyDropDown=()=>{

  setIsSafetyDropDown(false);


}


const preventClick=isAuthenticationOpen||isLoginOpen?'pointer-events-none':'';
const navbarOpacity=isAuthenticationOpen||isLoginOpen?'opacity-30':'';


const openClass=isOpen?'open':'';
const translationClass=isIntersecting?'text-white':'text-black';
const translationClassHover=isIntersecting?'text-slate-200':'text-tinder-red';
const hideEveythingPopup=isAuthenticationOpen||isLoginOpen?'hidden':'';
const hideNavBarForPopup=(isAuthenticationOpen||isLoginOpen)&&width<=768?'hidden':'';





return(
   <nav className={` ${navbarOpacity} ${hideNavBarForPopup}   fixed w-full z-10 ${preventClick}`  }   >
{/* Main Container */}
{!isOpen&&<div className={` flex  justify-between bg-transparent px-4 py-2.5 md:px-8`} >

{/* Container Left */}
<div className='flex space-x-6'>

{/* Logo */}
<Link href={'/'}>
<a>
<Image src={imageUrl} alt='Tinder Logo' width={150} height={45} />
</a>
</Link>
   
{/* Logo */}

{/* Menu */}
<div className=' hidden justify-center items-center  space-x-12 relative   md:flex  '>
  
<div className={`${translationClass}   `} onMouseLeave={handleCloseProductsDropDown}   onMouseEnter={handleProductsDropDown}>
  <Link href={'/'}><a className={`hover:${translationClassHover} hover:underline  text-xl font-semibold`}>Products</a></Link>
  <div   className={`${isProductsDropDown?'flex':'hidden'} flex-col absolute py-5 px-6`}>
  <Link href={'/'}><a className={`hover:${translationClassHover} text-xl font-semibold mb-3`}>Premium Features</a></Link>
  <Link href={'/'}><a className={`hover:${translationClassHover} text-xl font-semibold mb-1`}>Subscription Tears</a></Link>
  <div className='flex flex-col pl-6 mb-3'>
  <Link href={'/'}><a className={`hover:${translationClassHover} text-lg font-semibold`}>Tinder Plus</a></Link>
  <Link href={'/'}><a className={`hover:${translationClassHover} text-lg font-semibold`}>Tinder Gold</a></Link>
  <Link href={'/'}><a className={`hover:${translationClassHover} text-lg font-semibold`}>Tinder Platinum</a></Link>
  </div>

  <Link href={'/'}><a className=' text-xl font-semibold'>Swipe Night</a></Link>

  </div>

</div>

<div className={`${translationClass} hover:${translationClassHover} `}><Link href={'/'}><a className='hover:underline text-xl font-semibold'>Learn</a></Link></div>

<div className={`${translationClass} `} onMouseLeave={handleCloseSafetyDropDown}   onMouseEnter={handleSafetyDropDown}  >
<Link href={'/'}><a className={`hover:${translationClassHover} hover:underline text-xl font-semibold`}>Safety</a></Link>
<div   className={`${isSafetyDropDown?'flex':'hidden'} flex-col absolute  space-y-3   py-5 px-6`}>
  <Link href={'/'}><a className={`hover:${translationClassHover} text-xl font-semibold`}>Community Guidelines</a></Link>
  <Link href={'/'}><a className={`hover:${translationClassHover} text-xl font-semibold`}>Safety Tips</a></Link>
  <Link href={'/'}><a className={`hover:${translationClassHover} text-xl font-semibold`}>Safety & Policy</a></Link>
  <Link href={'/'}><a className={`hover:${translationClassHover} text-xl font-semibold`}>Safety & Reporting</a></Link>
  <Link href={'/'}><a className={`hover:${translationClassHover} text-xl font-semibold`}>Security</a></Link>
  </div>

</div>
<div className={`${translationClass} hover:${translationClassHover}`}><Link href={'/'}><a className='hover:underline text-xl font-semibold'>Support</a></Link></div>
<div className={`${translationClass} hover:${translationClassHover}`}><Link href={'/'}><a className='hover:underline text-xl font-semibold'>Download</a></Link></div>
</div>

{/* Menu */}

</div>
{/* Container Left */}

{/* Container Right: */}
<div className={`hidden space-x-10 items-center md:flex `}>
  <button  className={`flex  items-center text-white ${translationClass} text-xl font-medium hover:${translationClassHover}`}>
       <FaGlobe size={14} color={translationClass} className={'mr-2'} ></FaGlobe>
       English
  </button>
    
    <Button buttonTextMain={'Log in'} buttonType={'login'} buttonIcon={false} eventHandler={handleLogin}/>
</div>
{/* Container Right: */}

{/* Hamburger Button */}
<button  className={`${openClass}   block hamburger  focus:outline-none  self-center  right-4 md:hidden`} onClick={handleOpen}>
    <span id='hamburger-dash' className="hamburger-top"></span>
    <span id='hamburger-dash' className="hamburger-middle"></span>
    <span id='hamburger-dash' className="hamburger-bottom"></span>
</button>
{/* Hamburger Button */}

</div>}
{/* Main Container */}

{/* Responsive Container */}
<AnimatePresence>
{isOpen&&<motion.div initial={{opacity:0, width:0, height:0}} animate={{opacity:1, width:"100%", height:"100%"}} exit={{opacity:0, width:0, height:0, duration:1}} transition={{type:"tween", ease:"easeOut", duration:0.3}} className={`flex  flex-col   px-4 min-h-screen justify-between `} >

   {/* Upper Container */}
    <div className='relative '>

   {/* Logo */}
    <Image src='/assets/tinder-logo-home-page.svg' alt='Tinder Logo' width={130} height={50}  />
   {/* Logo */}

   {/* Close Button */}
    <button  className={`focus:outline-none absolute top-4 right-12 `} onClick={handleOpen}>
        <Image src={'/assets/close-icon.svg'} alt='Close Icon' width={20} height={20}/>
    </button>
   {/* Close Button */}

   {/* Dropdown Container */}
    <div className={`flex-col space-y-5 `}>
      {menu.map((menuFeature,idx)=>{
    
        return(
<motion.div key={idx} className=' bg-gray-200 font-medium   py-2 px-2   '>
  <a href='#'>{menuFeature}</a>
</motion.div>

        );
      })}
    </div>
  {/* Dropdown Container */}

    </div>
  {/* Upper Container */}
 



   
{/* Lower Container */}
    <div className=' flex flex-col items-center    mb-32 mt-12 space-y-4  '>
       <button id='login-nav' className='w-11/12 rounded-full text-white bg-gradient-to-r from-tinder-pink to-tinder-orange text-xl font-bold bg-white py-2 px-6' onClick={handleLogin}>Log in</button>
       <button className='flex items-center justify-center w-11/12 rounded-full  text-xl text-slate-600 hover:bg-slate-200 tracking-wide font-bold  py-2 px-6'>
       <FaGlobe size={14} color={translationClass} className={'mr-2'} ></FaGlobe>
        English</button>
      
   </div>
{/* Lower Container */}


</motion.div>}
</AnimatePresence>
{/* Responsive Container */}



   
</nav>   
);

}
export default Navbar;