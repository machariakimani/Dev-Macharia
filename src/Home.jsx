import dev from "./assets/dev2.jpg"

function Home(){
return(

<div id="home" className="h-[570px] px-28 py-10 mt-[80px] bg-[url(./assets/image.jpg)] scroll-mt-20  bg-repeat-round flex flex-row ">
    <div className="w-1/2 flex flex-col gap-6">
        <h1 className="text-white text-3xl font-bold w-[300px] sm:w-[450px] ">Greetings! <br/> My name is Dev Macharia,a Software and Web Developer.</h1>
        <article className="text-slate-200 text-lg w-96">A deligent software and fullstack web developer knowledgable of developing technologies,which include but not limited to ReactJs, Tailwind CSS, NodeJs, Git and Github, API's</article>

        <div className="flex gap-4"> 
            <button className="bg-blue-700 p-2 rounded md hover:bg-blue-600 hover:shadow-md text-white" >Services</button>
            <button className="bg-blue-700 p-2 rounded md hover:bg-blue-600 hover:shadow-md text-white "> Ackowledgement</button>
        </div>
    </div>
    <div className="w-1/2 lg:flex justify-center hidden">
    <img src={dev} className="h-[400px] " />
    </div>

      
    

</div>
);
}

export default Home