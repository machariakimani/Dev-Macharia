import Isosoft from "./assets/Isosoft.PNG"
import JohnTech from "./assets/JohnTech.PNG"
import CoolNdeadly from "./assets/CoolNdeadly.PNG"
import { ExternalLink, Wrench, Car, Code } from "lucide-react"

const Projects = () => {
    return(<>
    <main id="Projects" className="min-h-screen  bg-gradient-to-br from-blue-50 via-purple-50 to-slate-100 py-6 px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-6">
           <h2 className="text-3xl font-bold text-black mb-2">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">Projects</span>
        </h2>
            <div className="w-28 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
        </header>
        <div className="max-w-6xl mx-auto space-y-10">
            {/**first project */}
            <div className="">
                <div className="bg-white/80  rounded-3xl shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden border  ">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 relative ">
                            <img 
                                src={JohnTech} 
                                alt="johntech" 
                                className="w-full h-64 lg:h-full   "
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <div className="lg:w-1/2 p-4 lg:p-8 flex flex-col justify-between">
                            <article className="space-y-3">
                                <div className="flex items-center space-x-3 mb-1">
                                    <div className="p-2 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl">
                                        <Wrench className="w-5 h-5 text-white" />
                                    </div>
                                    <h1 className="md:text-2xl text-lg font-semibold text-slate-800  ">JohnTech Repairs</h1>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-lg">John-Tech repairs is firm that does all sorts of electric appliances repairs. The system enables the staff at John-Tech to assign a note with information pertaining appliances to be repaired and the note is stored in an online database instead of the traditional physical stiky note papers</p>
                            </article>
                            <a 
                                href="https://john-tech-repairs-t4sv.onrender.com"
                                className="inline-flex items-center space-x-3 mt-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group/btn"
                            >
                                <span>Visit Site</span>
                                <ExternalLink className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/**second project */}
            <div className="">
                <div className="bg-white/80  rounded-3xl shadow-sm hover:shadow-lg transition-all duration-500 ">
                    <div className="flex flex-col lg:flex-row-reverse">
                        <div className="lg:w-1/2 relative overflow-hidden">
                            <img src={CoolNdeadly} alt="CoolnDeadly" className="w-full  h-64 lg:h-full  "
                            />
                    </div>
                        <div className="lg:w-1/2 p-4 lg:p-8 flex flex-col justify-between">
                            <article className="space-y-3">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="p-2 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl">
                                        <Car className="w-5 h-5 text-white" />
                                    </div>
                                    <h1 className="md:text-2xl text-lg font-bold text-gray-800 ">CoolN'Deadly</h1>
                                </div>
                                <p className="text-gray-600 leading-relaxed md:text-lg">CoolN'Deadly is an Kenyan based company that deals with Automotive related activities such as Cars Sale, SpareParts sale and installation,Vehicle repairs and Garage services. The system enables them to showcase their products and manage their products inventory</p>
                            </article>
                            <a 
                                href="https://coolndeadly.onrender.com"
                                className="inline-flex items-center space-x-3 mt-8 px-8 py-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group/btn"
                            >
                                <span>Visit Site</span>
                                <ExternalLink className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/**Third project */}
            <div className="">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-md hover:shadow-lg transition-all duration-500 ">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 relative overflow-hidden">
                            <img 
                                src={Isosoft} 
                                alt="isosoft" 
                                className="w-full h-64 lg:h-full object-cover transition-transform duration-700 "
                            />
                           
                        </div>
                        <div className="lg:w-1/2 p-4 lg:p-4 flex flex-col justify-between">
                            <article className="space-y-3">
                                <div className="flex items-center space-x-2 mb-2">
                                    <div className="p-2 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl">
                                        <Code className="w-5 h-5 text-white" />
                                    </div>
                                    <h1 className="md:text-2xl text-lg font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">Isosoft Softwares</h1>
                                </div>
                                <p className="text-gray-600 leading-relaxed md:text-lg">Isosoft Softwares is a company that deals with software develpment.They create products ranging from web application,business management systems,mobile aplications. The company dashboard enables them to manage their work inventory with ease</p>
                            </article>
                            <a 
                                href="https://dev-macharia.onrender.com"
                                className="inline-flex items-center space-x-2 mt-2 px-8 py-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group/btn"
                            >
                                <span>View Site</span>
                                <ExternalLink className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>)
}
export default Projects