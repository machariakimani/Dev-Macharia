import { FaWhatsapp } from "react-icons/fa";
import {
  Home,
  Settings,
  User,
  FolderOpen,
  Mail,
  XCircle,
  MenuSquare
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Header() {
  

  const openWhatsApp = () => {
    const phoneNumber = "254742310701";
    const message = "HELLO! Let's talk  .";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };
  const Macharia = "Macharia";

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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeClass = "bg-blue-500 text-white";
  const linkClass =`hover:opacity-90  hover:bg-blue-500 text-black  p-2 rounded-md ${scrolled ? "text-black": "text-white"}`;

  return (
    <div>
      <header
        className={`fixed w-full top-0 left-0 right-0 z-50 p-3 transition-colors duration-500 ${
          scrolled ? "bg-gray-100 bg-opacity-100" : "bg-transparent"
        }`}
      >
        <section className="max-w-7xl   mx-auto px-3 flex justify-between items-center">
          <div className="text-2xl font-bold flex-col flex p-1  ">
            <h1 className="text-blue-600"> {"<Macharia/>"} </h1>
          </div>

          {/**Small screen Navigation Menu **/}
         <div className=" block sm:hidden">
            {/**Open and Close buttons for small screen Navigation menu  **/}
            <button
              onClick={() => setmenu(!menu)}
              className={` text-3xl ${menu ? "hidden" : "block"} ${
                scrolled ? "text-black " : "text-white "
              }  focus:outline-none`}
            >
              <MenuSquare className="w-8 h-8" />
            </button>{" "}
          </div>

          {/** Small screen  menu  **/}

          <div
            className={`sm:hidden absolute top-[55px] left-0 w-72 bg-gradient-to-br from-gray-100 to-gray-200 text-slate-800 flex flex-col font-semibold text-lg transform transition-all duration-500 ease-out shadow-2xl rounded-lg border border-blue-400/30 backdrop-blur-sm origin-top ${
              menu
                ? "opacity-100 scale-x-100 translate-x-2 visible"
                : "opacity-0 scale-x-0 -translate-x-2 invisible"
            } `}
            style={{
              transition:
                "transform 0.5s ease, opacity 0.5s ease, max-height 0.5s ease"
            }}
          >
            <div className="flex justify-between p-4">
              <div className="text-2xl font-bold flex-col flex  ">
                <h1 className="text-blue-600"> {"<Macharia/>"} </h1>
              </div>
              <button
                onClick={() => setmenu(!menu)}
                className={`sm:hidden text-3xl ${
                  menu ? "block" : "hidden"
                } text-slate-900 focus:outline-none`}
              >
                <XCircle className="w-8 h-8" />
              </button>
            </div>
            <div className="w-full h-[2px]  bg-gradient-to-tr from-blue-400 to-blue-700 "></div>
            <div>
              <Link
                onClick={closeMenu}
                offset={-60}
                to="Home"
                smooth={true}
                spy={true}
                duration={1000}
                className="list-none w-full text-left p-4 hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-pointer flex items-center gap-3 group border-b border-blue-400/20 "
              >
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Home</span>
              </Link>
              <Link
                onClick={closeMenu}
                offset={-60}
                to="Services"
                smooth={true}
                spy={true}
                duration={1000}
                className="list-none w-full text-left p-4 hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-pointer flex items-center gap-3 group border-b border-blue-400/20"
              >
                <Settings className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Services</span>
              </Link>
              <Link
                onClick={closeMenu}
                offset={-60}
                to="Stack"
                smooth={true}
                spy={true}
                duration={1000}
                className="list-none w-full text-left p-4 hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-pointer flex items-center gap-3 group border-b border-blue-400/20"
              >
                <User className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Skills</span>
              </Link>
              <Link
                onClick={closeMenu}
                offset={-60}
                to="Projects"
                smooth={true}
                spy={true}
                duration={1000}
                className="list-none w-full text-left p-4 hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-pointer flex items-center gap-3 group border-b border-blue-400/20"
              >
                <FolderOpen className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Projects</span>
              </Link>
              <Link
                onClick={closeMenu}
                offset={-60}
                to="Contacts"
                smooth={true}
                spy={true}
                duration={1000}
                className="list-none w-full text-left p-4 hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-pointer flex items-center gap-3 group "
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Contacts</span>
              </Link>
            </div>
            <div className="w-full h-[2px]  bg-gradient-to-tr from-blue-400 to-blue-700 "></div>
            <div className="p-4 flex ">
              <a
                href="mailto:devmacharia7@gmail.com"
                className="bg-blue-500 mr-2 text-white text-lg  hover:bg-blue-400 p-2 rounded-md"
              >
                {" "}
                Email{" "}
              </a>
              <button
                onClick={openWhatsApp}
                className={`group rounded-md flex items-center gap-2 hover:bg-white bg-green-500  px-6 py-2 $ border hover:text-green-500 hover-border hover:border-green-500    text-white`}
              >
                {" "}
                <FaWhatsapp
                 
                />{" "}
                WhatsApp{" "}
              </button>
            </div>

            {/**Large Screen navigation links menu  */}
            
          </div>
          <nav
              className={`hidden md:block space-x-4 text-lg text-nowrap font-semibold  ${
                scrolled ? "text-white " : "text-black"
              } `}
            >
              <Link
                to="Home"
                offset={-60}
                smooth={true}
                spy={true}
                duration={1000}
                activeClass={activeClass}
                className={linkClass}
              >
                Home
              </Link>
              <Link
                to="Services"
                offset={-60}
                smooth={true}
                spy={true}
                duration={1000}
                activeClass={activeClass}
                className={linkClass}
              >
                Services
              </Link>
              <Link
                to="Stack"
                offset={-60}
                smooth={true}
                spy={true}
                duration={1000}
                activeClass={activeClass}
                className={linkClass}
              >
                Skills
              </Link>
              <Link
                to="Projects"
                offset={-60}
                smooth={true}
                spy={true}
                duration={1000}
                activeClass={activeClass}
                className={linkClass}
              >
                Projects
              </Link>
              <Link
                to="Contacts"
                offset={-60}
                smooth={true}
                spy={true}
                duration={1000}
                activeClass={activeClass}
                className={linkClass}
              >
                Contact Us
              </Link>
            </nav>

          {/**Project Estimate page Link */}
          <div className="hidden lg:flex ">
            <a
              href="mailto:devmacharia7@gmail.com"
              className="bg-blue-500 mr-2 text-white text-lg  hover:bg-blue-400 p-2 rounded-md"
            >
              {" "}
              Email{" "}
            </a>
            <button
              onClick={openWhatsApp}
              className={`group rounded-md flex items-center gap-2 hover:bg-green-500  px-6 py-2 ${
                scrolled
                  ? "border border-gray-600   text-black"
                  : "text-white hover:text-white border border-white "
              } `}
            >
              {" "}
              <FaWhatsapp
                className={`${
                  scrolled ? "text-green-500" : " text-green-500 group-hover:text-white "
                } `}
              />{" "}
              WhatsApp{" "}
            </button>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Header;
