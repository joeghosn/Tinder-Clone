//Icons:
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok, FaYoutube  } from 'react-icons/fa';
//Next Components:
import Link from 'next/link';


const Footer=({})=>{
    
return (
    <div className={` grid md:grid-cols-4 grid-cols-3 gap-x-2 gap-y-8`}>
        
<ul>
    <h2 className="font-bold md:text-lg  mb-4 ">LEGAL</h2>
    <li className='mb-2'><Link href='/'><a className='text-sm hover:text-tinder-red'>Privacy</a></Link></li>
    <li className='mb-2'><Link href='/'><a className='text-sm hover:text-tinder-red'>Terms</a></Link></li>
    <li className='mb-2'><Link href='/'><a className='text-sm hover:text-tinder-red'>Cookie Policy</a></Link></li>
    <li className='mb-2'><Link href='/'><a className='text-sm hover:text-tinder-red'>Intellectual Property</a></Link></li>
</ul>

<ul>
    <h2 className="font-bold md:text-lg mb-4 ">CAREERS</h2>
    <li className='mb-2'><Link href='/'><a className='text-sm hover:text-tinder-red'>Careers Portal</a></Link></li>
    <li className='mb-2'><Link href='/'><a className='text-sm hover:text-tinder-red'>Tech Blog</a></Link></li>
</ul>

<ul>
    <h2 className="font-bold  md:text-lg mb-3 ">SOCIALS</h2>
    <div className="flex  flex-wrap ">
    <li className='mb-2 mr-4'><Link href='/'><a className='hover:text-tinder-red'><FaFacebook size={25}></FaFacebook></a></Link></li>
    <li className='mb-2 mr-4'><Link href='/'><a className='hover:text-tinder-red'><FaInstagram size={25}></FaInstagram></a></Link></li>
    <li className='mb-2 mr-4'><Link href='/'><a className='hover:text-tinder-red'><FaTwitter size={25}></FaTwitter></a></Link></li>
    <li className='mb-2 mr-4'><Link href='/'><a className='hover:text-tinder-red'><FaYoutube size={25}></FaYoutube></a></Link></li>
    <li className='mb-2 mr-4'><Link href='/'><a className='hover:text-tinder-red'><FaTiktok  size={25}></FaTiktok></a></Link></li>
    </div>
</ul>

<ul>
    <li className='mb-2'><Link href='/'><a className='text-sm hover:text-tinder-red'>FAQ</a></Link></li>
    <li className='mb-2'><Link href='/'><a className='text-sm hover:text-tinder-red'>Destinations</a></Link></li>
    <li className='mb-2'><Link href='/'><a className='text-sm hover:text-tinder-red'>Press Room</a></Link></li>
    <li className='mb-2'><Link href='/'><a className='text-sm hover:text-tinder-red'>Contact</a></Link></li>
    <li className='mb-2'><Link href='/'><a className='text-sm hover:text-tinder-red'>Promo Code</a></Link></li>
</ul>

    </div>
);
};

export default Footer;