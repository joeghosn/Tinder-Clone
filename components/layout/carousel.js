//React Hooks:
import { Children, useContext } from "react";
//Swiper:
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper';
//Swiper Styles:
import 'swiper/css';
import 'swiper/css/autoplay';
//Utils:
import { useWindowSize } from "../../utils/screenResolution";
//Contexts:
import { LayoutContext } from "../../contexts/Layout";



const Carousel=({children})=>{

 
  
 


    const {width}=useWindowSize();
    const slidesPerView= width>=768?3:1;

    return(
     <Swiper slidesPerView={slidesPerView}  spaceBetween={15} autoplay={{delay:2500, disableOnInteraction:false}}  centeredSlides={true}  loop={true} modules={[Autoplay]} className={` container  w-[90%] mySwiper  mt-8` }  >
       {
        Children.map(children,(child,idx)=>{
            return(
                <SwiperSlide  key={idx}>
                    {child}
                </SwiperSlide>
            );
        })
       }
     </Swiper>
    );
}

export default Carousel;