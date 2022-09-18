import { createContext } from "react";
import { useState } from "react";

export const UserContext=createContext({
    user:{
        authenticated:true,
        phoneNumber:'',
        verificationCode:'',
        email:'',
        passions:[],
        gender:'',   
        showGender:'',
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
        matches:[],
        },
    setUser:()=>{},
});

export const UserProvider=({children})=>{

    const [user,setUser]=useState(
        {
phoneNumber:'',
verificationCode:'',
email:'',
passions:[],
gender:'',
showGender:'',
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
matches:[]
}
);

    const value={user,setUser};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
    
} 