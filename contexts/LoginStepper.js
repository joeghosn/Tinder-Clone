
//Hooks:
import { useState, createContext } from "react";

export const LoginStepperContext=createContext({
step:0,
setStep:()=>{},
isSms:false,
setIsSms:()=>{}

});

export const LoginStepperProvider=({children})=>{
    const [step,setStep]=useState(0);
  
    const [isSms,setIsSms]=useState(false);

   

    const value={step,setStep,isSms,setIsSms};
return(
<LoginStepperContext.Provider value={value}>{children}</LoginStepperContext.Provider>
);
}
