
import React, {useState, useEffect} from "react";
import FrontEnd from "./assets//front.jpg"
import React10 from "./assets/r2.jpg"
import Wind from './assets/Tail.jpg'
import backend from './assets/back.jpg'
import nodejs from './assets/node.jpg'
import Restfull from './assets/api.jpg'
import Mobile from './assets/app.jpg'
import capacitor from './assets/capacitor.jpg'
import Data from './assets/Data.jpg'
import Git from './assets/Git.jpg'
import Github from './assets/Github.jpg'
import Render from './assets/Render.jpg'
import Mysql from './assets/mysql.jpg'
import Render2 from './assets/Render2.jpg'
import MongoDb from './assets/Mongodb.jpg'


 


function Skills(){

    return(
        <>

        <div className="h-full flex flex-col justify-center items-center sm:items-stretch  bg-gray-200 scroll-mt-20 px-16 py-10" id="stack">
        <div>
             <p className=" text-2xl text-center underline-offset-8 underline ">Tech Stack</p>
             
        </div>
        <div className="grid   md:grid-cols-2 lg:grid-cols-3  justify-between gap-x-2 gap-y-4 px-20 py-10">
            <div className="bg-gray-300 hover:bg-gray-400 h-[350px] w-80  shadow-red-500-shadow-xl ">
                <div> <img src={FrontEnd}/></div>
                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <img src={React10} className="h-10 bg-gray-400"/>
                    <p> React JS</p>
                </div>

                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <img src={Wind} className="h-10 w-10 bg-gray-400"/>
                    <p> Tailwind CSS</p>
                </div>

                
            </div>

            <div className="bg-gray-300 hover:bg-gray-400 h-[350px] w-80 hover:shadow-xl">
                <div> <img src={backend} className="h-[186px] w-[400px]"/></div>
                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <img src={nodejs} className="h-10 w-12"/>
                    <p> Node JS</p>
                </div>
                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <img src={Restfull} className="h-10 w-12"/>
                    <p> Architecture - Restfull API </p>
                </div>
                </div>

            <div className="bg-gray-300 hover:bg-gray-400 h-[350px] w-80 hover:shadow-xl">
                <div> <img src={Mobile} className="h-[186px]"/></div>
                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <img src={React10} className="h-10 bg-gray-400"/>
                    <p> React Native</p>
                </div>

                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <img src={capacitor} className="h-10 bg-gray-400"/>
                    <p> Capacitor</p>
                </div>
            </div>

            <div className="bg-gray-300 hover:bg-gray-400 h-[350px] w-80 hover:shadow-xl">
                <div> <img src={Data}/></div>
                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <img src={Mysql} className="h-10 bg-gray-400"/>
                    <p> Mysql</p>
                </div>

                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <img src={Render2} className="h-10 bg-gray-400"/>
                    <p> Render.com</p>
                </div>

                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <img src={MongoDb} className="h-10 bg-gray-400"/>
                    <p> MongoDB</p>
                </div>
            </div>


            <div className="bg-gray-300 hover:bg-gray-400 h-[350px] w-80 hover:shadow-xl">
                <div> <img src={Github}/></div>
                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <img src={Git} className="h-10 bg-gray-400"/>
                    <p> Git And Github (machariakimani)</p>
                </div>
                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <img src={Render} className="h-10 bg-gray-400"/>
                    <p> Render Teams</p>
                </div>
            </div>


            

            

            
        </div>
        </div>

        </>
        
    );

}
export default Skills