
//Hooks:
import { useContext } from "react";
//Contexts:
import { LoginStepperContext } from "../../contexts/LoginStepper";
import { LayoutContext } from "../../contexts/Layout";
//Login Steps:
import EmailVerification from "./LoginStepper/EmailVerification";
import PhoneNumber from "./LoginStepper/PhoneNumber";
import VerificationCode from "./LoginStepper/VerificationCode";
//Framer Motion:
import { AnimatePresence } from "framer-motion";




const LoginPopup=()=>{

    const {step,isSms}=useContext(LoginStepperContext);
    const {isLoginOpen}=useContext(LayoutContext);
    
    return( 
    <>
    <AnimatePresence exitBeforeEnter>
    {(step===0&&isSms&&isLoginOpen)&&<PhoneNumber key={step}/>}
    {(step===1&&isLoginOpen)&&<VerificationCode key={step}/>}
    {(step===2&&isLoginOpen)&&<EmailVerification key={step}/>}
    </AnimatePresence>
    </>
    );

}

export default LoginPopup;