


const Buttons={
'download':'download-button',
'authentication':'authentication-button',
'login':'login-button',
'create-account':'create-account-button',
'login-wide':'wide-login-button',
'create-account-wide':'wide-create-account-button',

}

const Button=({id,children,buttonTextMain,buttonTextSmall,buttonType,buttonIcon,eventHandler})=>{
    
    
return(
<button  id={id}  className={`${Buttons[buttonType]} `} onClick={eventHandler}>
  <div className={`flex items-center justify-center relative ${buttonType==='download'?'space-x-10':''} `}>
  {buttonIcon&&<span className='absolute left-1 '>{children}</span>}
  <div>
  {buttonType==='download'&&<span className={`${buttonType==='download'?'download-button-small-text':''}`}>{buttonTextSmall}</span>}
  <span className={`${buttonType==='download'?'download-button-main-text':''}`}>{buttonTextMain}</span>
 
  </div>
  </div>  
</button>
);    
}

export default Button;