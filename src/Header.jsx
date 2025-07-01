import Tag from './assets/Macha.jpg'
import React, { useState, useEffect } from 'react';
import { Link  } from 'react-scroll'

function Header() {
    const activeClass = "bg-blue-500 text-white";
    const linkClass = "hover:opacity-90  hover:bg-blue-500   p-2 rounded-md hover:text-white"
    
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
<header className={`fixed w-full top-0 left-0 right-0 z-50 p-2 transition-colors duration-500 ${scrolled ? 'bg-white bg-opacity-90' : 'bg-transparent'}`} >
    <section className="max-w-7xl   mx-auto px-3 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center gap-3">
            <img src={Tag} className="h-12 " />
            <h1 className="text-yellow-500" ></h1>

        </div>
        {/**Small screen Navigation Menu **/}
        <div>
            {/**Open and Close buttons for small screen Navigation menu  **/}
            <button onClick={() => setmenu(!menu)} className="text-3xl text-white  sm:hidden focus:outline-none" >
                {menu ? (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12">
                        </path>

                    </svg>

                ) : (
                    <svg
                        className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 25 25 "
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"            ></path>
                    </svg>
                )}
            </button>

            {/** Small screen  menu  **/}

            <div className={`sm:hidden absolute top-[63px] right-0 w-full bg-blue-500 text-white flex flex-col items-center gap-3 font-semibold text-lg transform transition-transform ${menu ? "block" : "hidden"} `} style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>
                <Link onClick={closeMenu} to="Home" className='list-none w-full text-center p-4 hover:bg-blue-400 hover:text-white transition-all cursor-pointer'>Home</Link>

                <Link onClick={closeMenu} to="/Services" className='list-none w-full text-center p-4 hover:bg-blue-400 hover:text-white transition-all cursor-pointer'>Services    </Link>
              
                <Link onClick={closeMenu} to="/About" className='list-none w-full text-center p-4 hover:bg-blue-400 hover:text-white transition-all cursor-pointer'>Skills</Link>

                <Link onClick={closeMenu} to="/Projects" className='list-none w-full text-center p-4 hover:bg-blue-400 hover:text-white transition-all cursor-pointer'>Projects</Link>

                <Link onClick={closeMenu} to="/Contacts" className='list-none w-full text-center p-4 hover:bg-blue-400 hover:text-white transition-all cursor-pointer'>Contacts</Link>

                
            </div>


            {/**Large Screen navigation links menu  */}
            <nav className={`hidden sm:block space-x-4 text-lg text-nowrap font-semibold  ${scrolled ? "text-black " : "text-white"} `}  >
                <Link to="Home" smooth={true} spy={true} duration={1000}  activeClass={activeClass} className={linkClass} >Home</Link>
                <Link  to="Services" smooth={true} spy={true} duration={1000} activeClass={activeClass}  className={linkClass} >Services</Link>
                <Link  to="Stack" smooth={true} spy={true} duration={1000} activeClass={activeClass}  className={linkClass} >Skills</Link>
                <Link   smooth={true} spy={true} duration={1000} activeClass={activeClass}  className={linkClass} >Projects</Link>
                <Link  to="Contacts" smooth={true} spy={true} duration={1000} activeClass={activeClass}  className={linkClass} >Contact Us</Link>
               

            </nav>
        </div>
        {/**Project Estimate page Link */}
        <div className="hidden lg:block" >
            <a href="Estimate" > <button className="bg-blue-500 text-white text-lg  hover:bg-blue-400 p-2 rounded-md" >Email </button></a>
            <a href="Estimate" > <button  className={`rounded-md  hover:bg-green-500  px-6 py-2 ${scrolled ? "border border-gray-800  text-black" : "text-white border border-white "} `}   >WhatsApp </button></a>
        </div>

    </section>
</header>
</div>
);

}


export default Header;