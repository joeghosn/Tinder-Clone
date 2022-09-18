
//Next Components:
import Image from "next/image";

const Header=({colEnd,colStart,margins})=>{
return(
<div className={`col-start-${colStart} col-end-${colEnd} ${margins} `} >
<Image src='/assets/tinder-logo-home-page.svg' alt='Tinder Logo' width={220} height={90}/>
<hr className="border-[1px]" />
</div>

);
}


export default Header;