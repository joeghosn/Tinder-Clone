//Components:
import Matches from "./Matches";
//Hooks:
import { useContext } from "react";
//Contexts:
import { UserContext } from "../../contexts/user";
//Framer Motion:
import { AnimatePresence, motion } from "framer-motion";
//Next Components:
import Image from "next/image";

const NewMatchesPage=()=>{

    const {user}=useContext(UserContext);
    const {matches}=user;
   



    

    return (<>

     <motion.div  className=" h-screen overflow-y-scroll scroll scroll-smooth pb-9">

     
{
    matches.map((match,idx)=>{
        const {firstName,age,location,showGender,gender,job,photos}=match;

     
       
return(
<Matches  index={idx} key={idx}  photos={photos} firstName={firstName} age={age} showGender={showGender} job={job} location={location} gender={gender}/>
);
    })
}

        </motion.div>
  
        </>
    
    
    );
}

export default NewMatchesPage;