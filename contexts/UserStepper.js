
//Hooks:
import { useState, createContext } from "react";

export const StepperContext=createContext({
step:0,
setStep:()=>{},
direction:"",
setDirection:()=>{},
});

export const StepperProvider=({children})=>{
    const [step,setStep]=useState(0);
    const [direction,setDirection]=useState("");
   

    const value={step,setStep,direction,setDirection};
return(
<StepperContext.Provider value={value}>{children}</StepperContext.Provider>
);
}
