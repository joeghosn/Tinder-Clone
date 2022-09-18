
//Components:
import NewMatchesPage from "./NewMatchesPage";
import DefaultMatchesPage from "./DefaultMatchesPage";
//Hooks:
import { useContext } from "react";
//Contexts:
import { UserContext } from "../../contexts/user";
import { AnimatePresence } from "framer-motion";



const MatchesBox=()=>{

    const {user}=useContext(UserContext);
    const {matches}=user

    return(
    <div className="h-full" >
    {matches.length===0&&<DefaultMatchesPage/>}
    {matches.length!==0&&<NewMatchesPage/>}
    </div>
    );
}

export default MatchesBox;