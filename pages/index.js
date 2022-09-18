//Next Components:
import Head from 'next/head';
import { useRouter } from 'next/router';
//Components:
import Navbar from '../components/layout/navbar';
import Button from '../components/layout/button';
import Testimonial from '../components/layout/testimonial';
import Carousel from '../components/layout/carousel';
import Footer from '../components/layout/footer';
import AuthenticationPopup from '../components/layout/authenticationPopup';
import LoginPopup from '../components/layout/loginPopup';
//Data:
import { menu } from '../data/menu';
import { testimonials } from '../data/testimonials';
//Styles:
import styles from '../styles/Home.module.css'
//Hooks:
import { useContext, useEffect } from 'react';
//Contexts:
import { LayoutContext } from '../contexts/Layout';
import { LoginStepperContext } from '../contexts/LoginStepper';











export default function Home() {

  const {setIsOpen,isOpen,setIsAuthenticationOpen,isAuthenticationOpen,setIsIntersecting,setPopupActionText,isLoginOpen,setIsLoginOpen}=useContext(LayoutContext);
  const {setStep,step}=useContext(LoginStepperContext)
  const handleCreateAccount=()=>{
    setIsAuthenticationOpen(true);
    setPopupActionText('CREATE ACCOUNT');
  }
  
  const handleLogin=()=>{
    setIsAuthenticationOpen(true);
    setPopupActionText('GET STARTED');
  }




if(typeof document !=='undefined'){
  const body=document.querySelector('html body');

  if(isAuthenticationOpen){
    body.classList.add('overflow-hidden');
  }else if(isLoginOpen){
    body.classList.add('overflow-hidden');
  }
  else{
      body.classList.remove('overflow-hidden');
  }

}

  const options={
    root:null,
    threshold:0,
  };

  if (typeof document !== 'undefined'){
    const section=document.querySelector('main');
    const hamburgerDashes=document.querySelectorAll('#hamburger-dash');
   

    if(typeof IntersectionObserver!=='undefined'){
      const observer= new IntersectionObserver(function(entries,observer){
        entries.forEach(entry=>{
hamburgerDashes.forEach(hamburgerDash=>{
  hamburgerDash.classList.toggle('hamburger-black',!entry.isIntersecting);
});
          setIsIntersecting(entry.isIntersecting);
        });
      },options);

if(section){
  observer.observe(section);
}
 

      
    }
  }

const backgrounState= isOpen?"bg-white":"bg-[url('/assets/tinder-background-1.jpg')]";

const router=useRouter();

useEffect(()=>{


const handleRouteChange=()=>{
setIsLoginOpen(false);
setIsOpen(false);
setStep(0);

}
const handleError=(error)=>{
console.log("Error Occured:",error);
}

router.events.on("routeChangeComplete",handleRouteChange);
router.events.off("routeChangeError",handleError);

return ()=>{
  router.events.off("routeChangeComplete",handleRouteChange);
  router.events.off("routeChangeError",handleError);
}

},[])

  return (
    <div  className={`${styles.container} relative`} >
      <Head>
        <title>Tinder</title>
        <meta name="Tinder" content="Dating Website" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

{/* Authentication Popup */}
<AuthenticationPopup/> 
{/* Authentication Popup */}


{/* Login Popup */}
<LoginPopup/>
{/* Login Popup */}

      
      <main  className={`${styles.main} ${backgrounState}   object-cover  bg-cover lg:bg-[center_top_11%] md:bg-[top_left] sm:bg-[center] `}>
{/* Navbar */}
        <Navbar  imageUrl={'/assets/tinder-logo-home-page.svg'} backgroundColor="white" menu={menu}/>
{/* Navbar */}

{/* Background Image: */}
        {!isOpen&&<div className={`flex  background  flex-col items-center justify-center   space-y-40 h-screen md:space-y-10 `}>
          <h1 className='text-white font-bold md:text-7xl sm:text-6xl  text-5xl'>Swipe Right</h1>
          <Button id='create-account'  buttonTextMain={'Create account'} buttonType={'create-account'} buttonIcon={false} eventHandler={handleCreateAccount}/>
          <div className='flex flex-col w-full space-y-5 items-center '>
          <Button id='create-account'   buttonTextMain={'Create account'} buttonType={'create-account-wide'} buttonIcon={false} eventHandler={handleCreateAccount}/>
          <Button id='login'  buttonTextMain={'Log in'} buttonType={'login-wide'} buttonIcon={false} eventHandler={handleLogin}/>
          </div>
        </div>}
{/* Background Image: */} 
      </main>
{/* Testimonials */}
{!isOpen&&<Carousel>
{
 testimonials.map((testimonial,idx)=>{
  const {testimonialText,userName}=testimonial;
  return (
    <Testimonial key={idx} testimonialText={testimonialText} userName={userName}/>
  )
  ;
 })
}
</Carousel>}
{/* Testimonials */}

{/* Footer */}
{!isOpen&&<footer className={` container w-[90%] mt-8  mx-auto`}>
<Footer></Footer>

</footer>}
{/* Footer */}




    </div>
  )
}
