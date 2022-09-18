//Hooks:
import { useContext } from "react";
//Contexts:
import { UserContext } from "../../contexts/user";
import { LayoutContext } from "../../contexts/Layout";
//Data:
import { defaultPassions } from "../../data/defaultPassions";
//Icons:
import { MdClose } from "react-icons/md";
//Framer Motion:
import { AnimatePresence, motion } from "framer-motion";

const EditPassions=()=>{
    const {user,setUser}=useContext(UserContext);

    const {passions}=user;

    const {isEditOpen,setIsEditOpen}=useContext(LayoutContext);

    const handleCloseEditPassions=()=>{
        setIsEditOpen(false);
    }

    const handleOnClick=()=>{
        setIsEditOpen(false);
    }

    const handlePassion=(event)=>{
        const index=passions.indexOf(event.target.value);
    
            if(index===-1){
                if(passions.length<5){
                  

                    setUser({
                        ...user,
                        passions:[...passions,event.target.value],
                      })
                   
                }else{
                    return;
                }
               
                
            }else{
                passions= passions.filter((passion)=>{
                    return passion!==event.target.value;
                });

                setUser({
                    ...user,
                    passions,
                })

            }        
    }

 



 


    return (<div>
        <AnimatePresence>
        {isEditOpen&&<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className={`flex justify-center items-center fixed w-full h-screen z-10  bg-black bg-opacity-50`}>
<motion.div initial={{opacity:0, width:0, height:0}} animate={{opacity:1, width:"50%", height:"80%"}} exit={{opacity:0, width:0, height:0}} transition={{type:"tween", ease:"easeOut", duration:0.3}} className="flex flex-col  items-center relative     rounded-lg bg-white overflow-y-scroll scroll scroll-smooth ">

<MdClose size={25}  className="absolute top-6 left-6 cursor-pointer" onClick={handleCloseEditPassions}/>

<h1 className="font-semibold text-4xl text-gray-800 mt-28 mb-2  ">Passions</h1>
<p className="mb-6 text-gray-500">let everyone know what you are passionate about by adding it to your profile.</p>

{/* Passions */}
    <div className="flex flex-wrap justify-center  w-3/4 space-x-2 mb-6 ">
{
                defaultPassions.map((defaultPassion,idx)=>{
                    const index=passions.indexOf(defaultPassion);
                
                    if(index===-1){


                        return(
                            <button onClick={handlePassion} key={idx} value={defaultPassion} className={`focus:outline-none border-[1px] border-gray-500 text-gray-500 py-1 px-1  mb-2 rounded-full`}>{defaultPassion}</button>
                            );
                    }else{
                     
                        return(
                            <button onClick={handlePassion}  key={idx} value={defaultPassion} className={`focus:outline-none border-[1px]  ${index===0?'border-tinder-red text-tinder-red':''} ${index===1?'border-tinder-pink text-tinder-pink':''} ${index===2?'border-tinder-orange text-tinder-orange':''} ${index===3?'border-yellow-500 text-yellow-500':''} ${index===4?'border-purple-400 text-purple-400':''} py-1 px-1  mb-2 rounded-full`}>{defaultPassion}</button>
                            );
                    }
                   
                })
            }
            </div>
{/* Passions */}   

<button onClick={handleOnClick} className={`${passions.length===0||passions.length===3||passions.length===5?'bg-gradient-to-r from-tinder-pink via-tinder-light-pink to-tinder-orange text-white':'bg-tinder-light-grey text-gray-500'} self-center w-3/4 py-3.5    rounded-full font-medium text-lg  focus:outline-none`}>Confirm</button>

</motion.div>
        </motion.div>}
        </AnimatePresence>
        </div>
    );

}

export default EditPassions;