import React, {useState, useEffect} from "react";
import FrontEnd from "./assets/front.jpg"
import BackEnd from "./assets/back.jpg"
import MobileApp from "./assets/App.jpg"
import Github from './assets/Github.jpg'
import DataBase from "./assets/Data.jpg"
import {     Code, 
    Server, 
    Smartphone, 
    Database, 
    GitBranch,
    Settings
} from "lucide-react";
import { 
    FaReact, 
    FaNodeJs, 
    FaGitAlt, 
    FaGithub 
} from "react-icons/fa";
import { 
    SiTailwindcss, 
    SiMysql, 
    SiPostgresql, 
    SiMongodb,
    SiExpress,
    SiAngular,
    SiNativescript,
    SiCapacitor,
    SiRender
} from "react-icons/si";

function Skills(){

    return(
        <>

        <div className="h-full flex flex-col justify-center items-center sm:items-stretch  bg-gray-50 scroll-mt-20 px-16 py-10" id="Stack">
        <div className="flex justify-center flex-col">
             <h2 className="text-3xl text-center font-bold text-black mb-2">
          Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">Stack</span>
        </h2>
        <div className="w-28 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
             

        <div className="grid   md:grid-cols-2 lg:grid-cols-3  justify-between gap-x-2 gap-y-4 px-10 py-10">
            <div className="bg-gray-100 hover:bg-gray-200 border border-gray-200 h-[351px] w-80   ">
                <div className="h-[186px] flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                    <img src={FrontEnd} className="h-full w-full text-white" />
                </div>
                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <FaReact className="h-10 w-10 text-blue-500" />
                    <p> React JS</p>
                </div>
                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <SiAngular className="h-9 w-9 text-blue-500" />
                    <p> Angular JS</p>
                </div>

                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <SiTailwindcss className="h-10 w-10 text-cyan-500" />
                    <p> Tailwind CSS</p>
                </div>

                
            </div>

            <div className="bg-gray-100 hover:bg-gray-200 border border-gray-200  h-[350px] w-80 ">
                <div className="h-[186px] flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600">
                    <img src={BackEnd} className=" w-full h-full text-white" />
                </div>
                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <FaNodeJs className="h-10 w-12 text-green-600"/>
                    <p> Node JS</p>
                </div>
                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <SiExpress className="h-10 w-12 text-green-600"/>
                    <p> Express JS</p>
                </div>
                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <Settings className="h-10 w-12 text-gray-600"/>
                    <p> Architecture - Restfull API </p>
                </div>
                </div>

            <div className="bg-gray-100 hover:bg-gray-200 border border-gray-200 h-[350px] w-80 ">
                <div className="h-[186px] flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600">
                    <img src={MobileApp} className="w-full h-full text-white" />
                </div>
                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <FaReact className="h-10 w-10 text-blue-500" />
                    <p> React Native</p>
                </div>

                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <SiCapacitor className="h-10 w-10 text-blue-600" />
                    <p> Capacitor</p>
                </div>
            </div>

            <div className="bg-gray-100 hover:bg-gray-200 border border-gray-200 h-[350px] w-80 ">
                <div className="h-[186px] flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-600">
                    <img src={DataBase} className="h-full w-full text-white" />
                </div>
                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <SiMysql className="h-10 w-10 text-blue-600" />
                    <p> Mysql</p>
                </div>

                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <SiPostgresql className="h-10 w-10 text-blue-700" />
                    <p> PostgreSql</p>
                </div>

                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <SiMongodb className="h-10 w-10 text-green-600" />
                    <p> MongoDB</p>
                </div>
            </div>


            <div className="bg-gray-100 hover:bg-gray-200 border border-gray-200 h-[350px] w-80 hover:shadow-xl">
                <div className="h-[186px] flex items-center justify-center bg-gradient-to-br from-gray-700 to-black">
                    <img src={Github} className="h-full w-full text-white" />
                </div>
                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <FaGitAlt className="h-10 w-10 text-orange-600"/>
                    <p> Git And Github (machariakimani)</p>
                </div>
                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <SiRender className="h-10 w-10 text-purple-600"/>
                    <p> Render Teams</p>
                </div>
                <div className="flex justify-start gap-2 ml-4 items-center mt-3">
                    <FaGithub className="h-10 w-10 text-gray-800"/>
                    <p>Bitbucket</p>
                </div>
            </div>


            

            

            
        </div>
        </div>

        </>
        
    );

}
export default Skills