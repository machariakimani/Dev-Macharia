import Tag from './assets/Macha.jpg'
import { FaWhatsapp} from 'react-icons/fa'
import { Home, Settings, User, FolderOpen, Mail, XCircle, MenuSquare,  } from "lucide-react"
import React, { useState, useEffect } from 'react';
import { Link  } from 'react-scroll'

function Header() {
    const activeClass = "bg-blue-500 text-white";
    const linkClass = "hover:opacity-90  hover:bg-blue-500   p-2 rounded-md hover:text-white"

    const openWhatsApp = () => {
        const phoneNumber = '254742310701';
        const message = "HELLO! Let's talk  .";
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
    };
    
    //Small screen open and close navigation bar functionality
    const [menu, setmenu] = useState(false);
    const closeMenu = () => {
        setmenu(false);
    };

    //Transparent header which gain a Bg when You scroll
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


return (
<div>
<header className={`fixed w-full top-0 left-0 right-0 z-50 p-2 transition-colors duration-500 ${scrolled ? 'bg-blue-500 bg-opacity-90' : 'bg-transparent'}`} >
    <section className="max-w-7xl   mx-auto px-3 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center gap-3">
            <img src={Tag} className="h-12 " />
            <h1 className="text-yellow-500" ></h1>

        </div>
        {/**Small screen Navigation Menu **/}
        <div>
            {/**Open and Close buttons for small screen Navigation menu  **/}
        <button
          onClick={() => setmenu(!menu)}
          className={`sm:hidden text-3xl  text-white focus:outline-none`
         }  
        >
         {menu ? <XCircle className="w-7 h-7" /> : <MenuSquare className="w-8 h-8" />}
        </button>

            {/** Small screen  menu  **/}

            <div className={`sm:hidden absolute top-[63px] right-4 w-64 bg-gradient-to-br from-blue-500 to-blue-600 text-white flex flex-col font-semibold text-lg transform transition-all duration-500 ease-out shadow-2xl rounded-lg border border-blue-400/30 backdrop-blur-sm origin-top ${menu ? "opacity-100 scale-y-100 translate-y-0 visible" : "opacity-0 scale-y-0 -translate-y-2 invisible"} `} style={{ transition: "transform 0.5s ease, opacity 0.5s ease, max-height 0.5s ease" }}>
   <Link onClick={closeMenu} offset={-60} to="Home" smooth={true} spy={true} duration={1000} className='list-none w-full text-left p-4 hover:bg-blue-400/80 hover:text-white transition-all duration-200 cursor-pointer flex items-center gap-3 group border-b border-blue-400/20 first:rounded-t-lg'>
       <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
       <span>Home</span>
   </Link>
   <Link onClick={closeMenu} offset={-60} to="Services" smooth={true} spy={true} duration={1000} className='list-none w-full text-left p-4 hover:bg-blue-400/80 hover:text-white transition-all duration-200 cursor-pointer flex items-center gap-3 group border-b border-blue-400/20'>
       <Settings className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
       <span>Services</span>
   </Link>
   <Link onClick={closeMenu} offset={-60} to="Stack" smooth={true} spy={true} duration={1000} className='list-none w-full text-left p-4 hover:bg-blue-400/80 hover:text-white transition-all duration-200 cursor-pointer flex items-center gap-3 group border-b border-blue-400/20'>
       <User className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
       <span>Skills</span>
   </Link>
   <Link onClick={closeMenu} offset={-60} to="Projects" smooth={true} spy={true} duration={1000} className='list-none w-full text-left p-4 hover:bg-blue-400/80 hover:text-white transition-all duration-200 cursor-pointer flex items-center gap-3 group border-b border-blue-400/20'>
       <FolderOpen className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
       <span>Projects</span>
   </Link>
   <Link onClick={closeMenu} offset={-60} to="Contacts" smooth={true} spy={true} duration={1000} className='list-none w-full text-left p-4 hover:bg-blue-400/80 hover:text-white transition-all duration-200 cursor-pointer flex items-center gap-3 group last:rounded-b-lg'>
       <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
       <span>Contacts</span>
   </Link>
</div>


            {/**Large Screen navigation links menu  */}
            <nav className={`hidden sm:block space-x-4 text-lg text-nowrap font-semibold  ${scrolled ? "text-black " : "text-white"} `}  >
                <Link to="Home" offset={-60} smooth={true} spy={true} duration={1000}  activeClass={activeClass} className={linkClass} >Home</Link>
                <Link  to="Services" offset={-60} smooth={true} spy={true} duration={1000} activeClass={activeClass}  className={linkClass} >Services</Link>
                <Link  to="Stack" offset={-60} smooth={true} spy={true} duration={1000} activeClass={activeClass}  className={linkClass} >Skills</Link>
                <Link to="Projects" offset={-60} smooth={true} spy={true} duration={1000}  activeClass={activeClass}  className={linkClass} >Projects</Link>
                <Link  to="Contacts" offset={-60} smooth={true} spy={true} duration={1000} activeClass={activeClass}  className={linkClass} >Contact Us</Link>
               

            </nav>
        </div>
        {/**Project Estimate page Link */}
        <div className="hidden lg:flex " >
            <a href="mailto:devmacharia7@gmail.com" className="bg-blue-500 mr-2 text-white text-lg  hover:bg-blue-400 p-2 rounded-md" > Email </a>
             <button onClick={openWhatsApp} className={`rounded-md flex items-center gap-2 hover:bg-green-500  px-6 py-2 ${scrolled ? "border border-gray-600   text-white" : "text-white hover:text-white border border-white "} `} > <FaWhatsapp className={`${scrolled ? "text-white" : " text-green-500 hover:text-white "} `} />  WhatsApp </button>
        </div>

    </section>
</header>
</div>
);

}


export default Header;