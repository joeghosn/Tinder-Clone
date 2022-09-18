//Components:
import TinderCard from "./TinderCard"
//Hooks:
import { useState, useContext} from "react";
//Data:
import { defaultUsers } from "../../data/defaultUsers";
//Contexts:
import { UserContext } from "../../contexts/user";
import { AnimatePresence } from "framer-motion";

const TinderCardsCollection=()=>{


const [users,setUsers]=useState(defaultUsers);
const {user,setUser}=useContext(UserContext);
const {matches}=user;


const handleSwipeLeft=(idx)=>{
if(users.length>1){
    users=users.filter((user)=>{
        return users[idx]!==user
     })
     setUsers(users);   
}
}

const handleSwipeRight=(idx)=>{
    if(users.length>1){
        setUser({
            ...user,
            matches:[...matches,users[idx]],
         });

        users=users.filter((user)=>{
            return users[idx]!==user
         })
         setUsers(users);  
    }
    }











    return (
       
        <AnimatePresence initial={false}  >
    {
     
       users.map((user,idx)=>{
        const {passions,gender,showGender,location,firstName,job,biography,photos,age}=user;
       
        return (
            
    
<TinderCard index={idx} handleSwipeLeft={()=>{handleSwipeLeft(idx)}} handleSwipeRight={()=>{handleSwipeRight(idx)}}  firstName={firstName}  age={age} location={location} gender={gender}  showGender={showGender} job={job} biography={biography} passions={passions} photos={photos} key={idx}/>


        );
       })
       
    }
    </AnimatePresence>
   
    );
}

export default TinderCardsCollection;

