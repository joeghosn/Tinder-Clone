import { useContext } from "react";
import { StepperContext } from "../contexts/UserStepper";
import { UserContext } from "../contexts/user";

const StepperHandlers=()=>{

    const {step,setStep,direction,setDirection}=useContext(StepperContext);
    const {user,setUser}=useContext(UserContext);

    const initializeUserData=()=>{
        setUser({
            phoneNumber:'',
            email:'',
            passions:[],
            gender:{
                genderType:'',
                showGender:'',
            },
            age:'',
            birthDate:{
                day:'',
                month:'',
                year:'',
            },
            location:'',
            device:'',
            photos:[],
            firstName:'',
            });
    }





    const handleNextStep=(userField)=>{
        if(user[userField]){
           setStep(step+1);
           setDirection("next");
        }   
    }

    const handlePreviousStep=()=>{
        setStep(step-1);
        setDirection("previous");
    }

    const initializeStep=()=>{
        setStep(0);
        setDirection("")
    }

    const skipStep=()=>{
        setStep(step+1);
        setDirection("next");
    }






    return{
        initializeStep,
        handleNextStep,
        handlePreviousStep,
        skipStep,
        initializeUserData,
      
    }

}

export default StepperHandlers;
