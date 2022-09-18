//Icons:
import {FaQuoteLeft} from 'react-icons/fa';

const Testimonial=({userName, testimonialText})=>{
return(
<div className=' px-6 py-5 h-[340px]  select-none rounded-lg shadow-md shadow-slate-200 border-2  border-slate-200 '>
    <div className="flex justify-between">
       <h1 className="font-medium text-lg mb-2 block">{userName}</h1>
       <FaQuoteLeft size={40} color={'#D3D3D3'} className='-rotate-1'></FaQuoteLeft>
    </div>
    <hr className="mb-3 w-4/5 border-double border-slate-300 "/>
    <p className="text-black text-base whitespace-normal">{testimonialText} </p>
</div>
);
}

export default Testimonial;

