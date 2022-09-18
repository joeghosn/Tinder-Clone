//Components:
import DefaultChatBox from "./DefaultChatBox";
//Contexts:
import { UserContext } from "../../contexts/user";
//Hooks:
import { useContext } from "react";

const ChatBox=()=>{
const {user}=useContext(UserContext);
const {matches}=user;

    return(
        <>
        {matches.length===0&&<DefaultChatBox/>}
        
        </>
    );
}

export default ChatBox;