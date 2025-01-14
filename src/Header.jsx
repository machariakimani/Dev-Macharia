import Tag from './assets/Code Tag.png'

import React, { useState } from 'react';



function Header() {

    const [menu, setmenu] = useState(true);

   
    

    return (
        <header className='bg-gradient-to-r from-blue-600 from-10% via-sky-400 via-30% to-gray-300 to-90% ... fixed right-0 left-0 top-0 z-10 '>
            <div className="py-3   z-10 flex justify-between px-2    ">
                <div className='flex items-center justify-center px-2 '>
                    <img src={Tag} className='h-14 border-2 border-gray-300 rounded-xl ' />
                    <h1 className='font-bold text-3xl   '>Dev Macharia</h1> 
                </div>
                <div className='flex items-center gap-4  '>
                <button className="text-3xl sm:hidden focus:outline-none" id="mobile-open" onClick={() => setmenu(!menu)}> &#9776;</button>


                    <div className={`sm:hidden absolute top-20 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${ menu ? "opacity-100" : "opacity-0"} `} style={{transition : "transform 0.3s ease, opacity 0.3s ease"}}>
                        <a href='#home' className='list-none w-full text-center p-4 hover:bg-sky-500 hover:text-white transition-all cursor-pointer'>Home</a>

                        <li className='list-none w-full text-center p-4 hover:bg-sky-500 hover:text-white transition-all cursor-pointer'>Services</li>

                        <li className='list-none w-full text-center p-4 hover:bg-sky-500 hover:text-white transition-all cursor-pointer'>Tech stach</li>

                        <a href="#contacts" className='list-none w-full text-center p-4 hover:bg-sky-500 hover:text-white transition-all cursor-pointer'>Contacts</a>
                    </div>


                <div  className="hidden lg:block space-x-8 " aria-label="main">
                <a href='#home' className='   hover:scale-110 hover:font-semibold transition-transform hover:bg-gray-100 px-2 py-3 hover:rounded-md cursor-pointer ' >Home</a>
                    <a  className=' hover:scale-110 hover:font-semibold transition-transform hover:bg-gray-100 px-2 py-3 hover:rounded-md cursor-pointer ' href='#Services'>Services</a>
                    <a href='#stack' className=' hover:scale-110 hover:font-semibold transition-transform hover:bg-gray-100 px-2 py-3 hover:rounded-md cursor-pointer '>Tech Stack</a>
                    
                    <a href="#contacts" className=' hover:scale-110 hover:font-semibold transition-transform hover:bg-gray-100 px-2 py-3 hover:rounded-md cursor-pointer '>contacts</a>
                </div>
                   
                </div>
                <div className='hidden sm:block'>
                <div className=' flex items-center gap-3  '>
                    <button  className=" bg-blue-700  text-white   rounded-md hover:bg-blue-500 px-6 py-2  " >Email</button>
                    <button className="  border border-black  text-white   rounded-md  hover:bg-green-500 hover:border-gray-300 px-6 py-2  ">Whatsapp</button>
                </div>
                </div>
                
               

            </div>


        </header>

    );
}


export default Header