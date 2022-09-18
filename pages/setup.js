//Contexts:
import { StepperContext } from '../contexts/UserStepper';
import { LayoutContext } from '../contexts/Layout';
//Hooks:
import { useContext,useEffect} from 'react';
import { useRouter } from 'next/router';
//Components:
import DesktopSetup from '../components/Steps/DesktopSetup.js';
import Welcome from '../components/Steps/Welcome.js';
import FirstName from '../components/Steps/FirstName.js';
import Birthday from '../components/Steps/Birthday.js';
import Gender from '../components/Steps/Gender.js';
import Passion from '../components/Steps/Passion.js';
import Photos from '../components/Steps/Photos.js';
//Utils:
import { useWindowSize } from '../utils/screenResolution.js';
import { AnimatePresence, motion } from 'framer-motion';



const SetupAccount=()=>{

//Device Type:
const {width,height}=useWindowSize();
const mobile=width>=988?false:true;





//Stepper Info:
const {setStep,step}=useContext(StepperContext);
const {isEditOpen}=useContext(LayoutContext);

const percentage=20*step;

const router=useRouter();

useEffect(()=>{

const handleRouteChange=()=>{
setStep(0);
}



const handleError=(error)=>{
console.log("Error Occured:",error);
}

router.events.on("routeChangeComplete",handleRouteChange);
router.events.off("routeChangeError",handleError);

return ()=>{
  router.events.off("routeChangeComplete",handleRouteChange);
  router.events.off("routeChangeError",handleError);

}

});


if(typeof document !=='undefined'){
    const body=document.querySelector('html body');

    if(step===0&&!mobile){
        body.classList.add('overflow-hidden');
    }
    else if(isEditOpen&&!mobile){
body.classList.add('overflow-hidden');
    }
    
    else{
        body.classList.remove('overflow-hidden');
    }

}


return (
<div className='relative h-screen'>
    
{mobile&&<motion.div initial={{width:0}} animate={{width:`${20*step}%`}} transition={{type:"tween", ease:"circOut", duration:1}} className={`  h-3 bg-red-500`}></motion.div>}

{!mobile&&<DesktopSetup />} 

<Welcome />

{mobile&&<div>
<AnimatePresence initial={false} exitBeforeEnter >
{step===1&&<FirstName key={step} />}
{step===2&&<Birthday key={step} />} 
{step===3&&<Gender key={step}/>}
{step===4&&<Passion key={step} />} 
{step===5&&<Photos key={step}  />}
</AnimatePresence>
</div>
}




</div>
);

}

export default SetupAccount;