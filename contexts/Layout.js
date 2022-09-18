//Hooks:
import { useState,createContext } from "react";

export const LayoutContext=createContext({
isOpen:false,
setIsOpen:()=>{},
isIntersecting:true,
setIsIntersecting:()=>{},
isOverlayOpen:false,
setIsOverlayOpen:()=>{},
popupActionText:'',
setPopupActionText:()=>{},
isLoginOpen:false,
setIsLoginOpen:()=>{},
isEditOpen:false,
setIsEditOpen:()=>{},

});

export const LayoutProvider=({children})=>{
    const [isOpen,setIsOpen]=useState(false);
    const [isIntersecting,setIsIntersecting]=useState(true);
    const [isAuthenticationOpen,setIsAuthenticationOpen]=useState(false);
    const [isLoginOpen,setIsLoginOpen]=useState(false);
    const [popupActionText,setPopupActionText]=useState('');
    const [isEditOpen,setIsEditOpen]=useState(false);
   
const value={isOpen,setIsOpen,isIntersecting,setIsIntersecting,isAuthenticationOpen,setIsAuthenticationOpen,isLoginOpen,setIsLoginOpen,popupActionText,setPopupActionText,isEditOpen,setIsEditOpen};
    return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
}