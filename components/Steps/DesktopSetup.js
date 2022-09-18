//Contexts:
import { UserContext } from "../../contexts/user";
import { LayoutContext } from "../../contexts/Layout";

//Hooks:
import { useContext, useState } from "react";
import { useRouter } from "next/router";
//Next Components:
import Image from "next/image";
//Icons:

import { FaPen } from "react-icons/fa";
import {FaUser} from 'react-icons/fa';
import { MdMail } from "react-icons/md";

//Components:
import PhotoCard from "./PhotoCard";
import EditPassions from "./EditPassions";
import Header from "../layout/Header";
//Framer Motion:
import {AnimatePresence} from "framer-motion";




const DesktopSetup=()=>{

    const {user,setUser}=useContext(UserContext);
    const {setIsEditOpen}=useContext(LayoutContext);

   
  


    const {firstName,birthDate,gender,showGender,email,photos,passions}=user;

    const router=useRouter();

    const submit= (firstName&&birthDate.month&&birthDate.day&&birthDate.year&&gender&&(showGender===true||showGender===false)&&(passions.length===0||passions.length===3||passions.length===5)&&(photos.length>=2))?'bg-gradient-to-r from-tinder-pink via-tinder-light-pink to-tinder-orange text-white':'bg-tinder-light-grey text-gray-500';

    const handleFirstName=(event)=>{
        setUser({
            ...user,
            firstName:event.target.value,
        })
    }

    const handleBirthdate=(event,type)=>{
        if(isNaN(event.target.value)){
            return false;
        }else{
            setUser({
                ...user,
                birthDate:{
                    ...birthDate,
                    [type]:event.target.value,
                }    
            });
        }
        
        if(event.target.nextSibling&&event.target.value.length===2){
            event.target.nextSibling.focus();
           } 
    }

    const handleGender=(event)=>{
        setUser({
            ...user,
            gender:event.target.value,
        });
    }

    const handleShowGender=(event)=>{
        setUser({
            ...user,
            showGender:event.target.checked,
        })
    }

    const handleRoutePush=()=>{
        if(firstName&&birthDate.month&&birthDate.day&&birthDate.year&&gender&&(showGender===true||showGender===false)&&(passions.length===0||passions.length===3||passions.length===5)&&(photos.length>=2)){
            router.push('/swipe');
        }
    }

    const handleEditPassions=()=>{
setIsEditOpen(true);
    }


      
   const imageHandler=(event,idx)=>{
    
    const reader=new FileReader();
        reader.onload = () => {
            if(reader.readyState===2){
                const image={
                    id:idx,
                    imageUrl:reader.result,
                }
                      
                setUser({
                    ...user,
                    photos:[...photos,image],
                  }); 
            }
        };   
        reader.readAsDataURL(event.target.files[0]);     
   }

  


 

   

   const handleRemoveImage=(idx)=>{

    photos=photos.filter((photo)=>{
       
        return photos[idx].id!==photo.id;
    })

    photos=photos.map((photo,idx)=>{
        return {
            ...photo,
            id:idx
        } 
    })


    setUser({
        ...user,
        photos,
    });
   
   
}
 
    return (
        <div className={`grid grid-cols-2 relative`}>
            
            <EditPassions/>

<Header colEnd={3} colStart={1} margins={'mb-14'}/>

{/* Title */}
        <div className="col-start-1 col-end-3 mb-14">
        <h1 className="text-center text-4xl font-bold ">CREATE ACCOUNT</h1>
        </div>
        
{/* Title */}

<div className="mx-6 flex justify-center space-x-4 col-start-1 col-end-3  mb-6 ">

<div className="flex flex-col">
{/* User Data */}
<div className="flex">

{/* Part 1 */}
<div className="flex flex-col space-y-4 mb-16 ">

{/* First Name */}
<div className="flex flex-col space-y-4">
<label className="font-semibold text-lg" >First Name</label>            
<input onChange={handleFirstName}  type={'text'} placeholder='First Name' value={firstName} className='w-2/3 min-w-[420px] border-[2.5px] shadow-sm rounded-lg py-5 px-5 border-slate-300 focus:border-gray-500 focus:outline-none'></input>
<p className={`text-sm ${firstName?'text-gray-600':'text-tinder-red'}    `}>{firstName?'This is how it will appear in Tinder':'This field must be between 1-22 characters.'}</p>
</div>
{/* First Name */}

{/* Birth Date */}
<div className="flex flex-col space-y-4   ">
<label  className="font-semibold text-lg">Birthday</label>
<div className="flex space-x-4">
<input onChange={()=>{handleBirthdate(event,'month')}}  type={'text'} placeholder={'MM'} value={user.birthDate.month} className='w-[15%] min-w-[100px] border-[2.5px] shadow-sm rounded-lg text-center py-5 border-slate-300  focus:border-gray-500 focus:outline-none' />
<input onChange={()=>{handleBirthdate(event,'day')}}  type={'text'} placeholder={'DD'} value={user.birthDate.day} className='w-[15%] min-w-[100px] border-[2.5px] shadow-sm rounded-lg text-center py-5 border-slate-300  focus:border-gray-500 focus:outline-none'/>
<input onChange={()=>{handleBirthdate(event,'year')}}  type={'text'} placeholder={'YYYY'} value={user.birthDate.year}  className='w-[15%] min-w-[100px] border-[2.5px] shadow-sm rounded-lg text-center py-5 border-slate-300  focus:border-gray-500 focus:outline-none'/> 
</div>
<p className='text-center  text-gray-600 self-start'>Your age will be public</p>
</div>
{/* Birth Date */}

{/* Gender */}
<div className="flex flex-col space-y-4">

<label className="font-semibold text-lg" >Gender</label>

<div className="flex space-x-4">
<button onClick={handleGender}   className={`${gender==='male'?'border-tinder-pink text-tinder-pink':'border-gray-300 text-gray-600 '} rounded-lg border-[3px]  w-[15%]  min-w-[100px] py-3.5 text-center font-medium text-lg focus:outline-none`} value={'male'} >Male</button>
<button onClick={handleGender}   className={`${gender==='female'?'border-tinder-pink text-tinder-pink':'border-gray-300 text-gray-600'} rounded-lg  border-[3px]  w-[15%] min-w-[100px] py-3.5 text-center font-medium text-lg focus:outline-none`} value={'female'}>Female</button>
</div>

<div className="flex space-x-3">
<input id='show-gender' onChange={handleShowGender} type={'checkbox'} checked={showGender} className='w-5 h-5 border-[3px]' />
<label htmlFor="show-gender"    className="font-medium text-[15px] text-gray-500 " >Show my gender on my profile</label>
</div>

</div>
{/* Gender */}


{/* Email */}
<div className="flex flex-col space-y-4 ">
<label  className="font-semibold text-lg" >Email Adress</label>
<input type={'text'}  readOnly value={email} className="w-2/3 min-w-[420px] border-[2.5px] shadow-sm rounded-lg  py-5 px-5  border-slate-300  focus:border-slate-300 focus:outline-none"/>
</div>
{/* Email */}

</div>
{/* Part 1 */}

{/* Part 2 */}

{/* Photos */}
<div className="flex flex-col space-y-4  h-3/4 w-2/3 items-center ">
<label className="font-semibold text-lg ">Profile Photo</label>

<div className="grid grid-cols-3 gap-4  ">

{

[0,1,2,3,4,5].map((idx)=>{

   
            
            return(
 <PhotoCard key={idx}  bgUrl={photos[idx]?`url(data:${photos[idx].imageUrl})`:''} imageHandler={()=>{imageHandler(event,idx)}}handleRemoveImage={()=>{handleRemoveImage(idx)}} />
            )
           
    
        })
    
  
}


    

</div>

<p className="self-center font-medium text-[15px] text-gray-600 ">Add at least 2 photos to continue</p>


</div>
{/* Photos */}

{/* Part 2 */}





</div>
{/* User Data */}

    {/* Optional */}
    <div className="flex items-center justify-center  space-x-16 col-start-1 col-end-3 mb-4">
<hr className="w-1/4 border-[1px] border-tinder-light-grey"/>
<h2 className="font-semibold text-xl">Optional</h2>
<hr className="w-1/4 border-[1px] border-tinder-light-grey "/>
</div>
{/* Optional */}

{/* Passions */}
<div className="flex flex-col space-y-4">

    <label className="font-semibold text-lg">Passions</label>

    <button onClick={handleEditPassions} className="flex w-40 items-center justify-center space-x-2 py-1 px-1 border rounded text-[14px]  border-slate-300 bg-tinder-light-grey focus:outline-none">
    <span><FaPen  size={13} color={ '#4B5563'}/></span>
    <span className="text-lg text-gray-600">Edit Passions</span>
    </button>

    <div className="flex flex-wrap items-center space-x-1 mt-4">
        {
            passions.length!==0&&passions.map((interest,idx)=>{
                return  <button key={idx} readOnly   className={`w-fit h-fit border-[1.5px] py-1.5 px-3 mb-2 rounded-full text-sm font-medium border-gray-600 text-gray-600 `}>{interest}</button>
            })
        }
    </div>

</div>
{/* Passions */}

</div>

</div>

{/* Submit */}
<div className="flex flex-col items-center justify-center space-y-12 mb-20 mt-8 col-start-1 col-end-3">
    <button onClick={handleRoutePush} className={`${submit} rounded-full  py-2.5 px-6 text-lg font-medium`}>CONTINUE</button>
    <h2 className="text-lg font-medium text-gray-600 ">ALREADY HAVE AN ACCOUNT? LOG IN.</h2>
</div>
{/* Submit */}


    </div>
    )
    }
    
    export default DesktopSetup;






