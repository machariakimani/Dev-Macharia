import dev from "./assets/Dev2.jpg"
import React, {useState,useEffect } from "react";
const texts = ["Fast and reliable Web Apps", "AU/AX Designs", "Mordern and Efficient Mobile Apps ", "Business Management Solutions", "Gateways for Bulk SMS Intergration"];
import "./Animations.css"

function Home(){

  useEffect(() => {
    const company = document.getElementById('Title');
    company.classList.add('slide-faq');
  }, []);

  useEffect(() => {
    const Portrait = document.getElementById('Portrait');
    Portrait.classList.add('slide-pt');
  }, []);

      //Services typing and deleting animations
const [currentText, setCurrentText] = useState("");
const [currentIndex, setCurrentIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const [loopNum, setLoopNum] = useState(0);
const [typingSpeed, setTypingSpeed] = useState(50);

useEffect(() => {
  let timer;
  const handleTyping = () => {
    const currentIndexText = texts[loopNum % texts.length];
    if (isDeleting) {
      setCurrentText(currentIndexText.substring(0, currentIndex - 1));
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentText(currentIndexText.substring(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }

    if (!isDeleting && currentIndex === currentIndexText.length) {
      setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
    } else if (isDeleting && currentIndex === 0) {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    timer = setTimeout(handleTyping, typingSpeed);
  };

  timer = setTimeout(handleTyping, typingSpeed);

  return () => clearTimeout(timer);
}, [currentText, isDeleting, loopNum, typingSpeed, currentIndex]);

return(

<div id="Home" className="h-full px-5 xl:px-28 py-10 pt-[80px] bg-[url(./assets/image.jpg)] scroll-mt-20  bg-repeat-round flex flex-row ">
    <div id="Title" className="md:w-1/2 w-full  flex flex-col pr-7 gap-6">
        <h1 className="text-white text-xl lg:text-3xl font-bold  "> <span className="text-blue-500" >Greetings!</span> <br/> Am Dev Macharia,a Software and Web Developer.</h1>
        <article className="text-white sm:text-lg ">A deligent software and fullstack web developer knowledgable of modern development tools ie,<br></br> <span className="text-blue-500 font-bold ">FrontEnd:</span>Javascript, TypeScript, ReactJs, Tailwind CSS,AngularJs. <br></br> <span className="text-blue-500 font-bold ">BackEnd:</span> NodeJs,Express Js, MongoDB, MySQL,PostGreSql and Infrastructure as code technologies like Github,Docker,Render.</article>

        <div className="flex gap-4"> 
            <button className="bg-blue-400 p-2 rounded md hover:bg-blue-500 hover:shadow-md text-white" >Services</button>
            <button className="bg-blue-400 p-2 flex rounded md hover:bg-blue-500 hover:shadow-md text-white "> 
               Blogs</button>
        </div>
        <div  className="lg:hidden flex flex-col gap-4 md:gap-0" ><h1 className="text-xl md:text-2xl h-[40px] font-bold text-blue-500 " >I do Create: <span className="text-white">{currentText}</span>  <span className="blinking-cursor">|</span> </h1>
           
            </div>
    </div>
    <div id="Portrait" className="w-1/2 lg:flex lg:flex-col px-5 gap-10 justify-center hidden">
    <div  className="flex flex-col gap-4 md:gap-0" ><h1 className="text-2xl h-[40px] font-bold text-blue-500 " >I do Create: <span className="text-white">{currentText}</span>  <span className="blinking-cursor">|</span> </h1>
           
            </div>
            <div className="flex place-content-center" ><img src={dev} className="h-80 rounded-l-[160px]  rounded-br-[170px] " /></div>
    </div>

      
    

</div>
);
}

export default Home