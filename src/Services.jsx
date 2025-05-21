import Mobile from './assets/mobile.jpg';
import sms from './assets/sms.jpg';
import Webdev from './assets/web.jpg'
import payment from './assets/payment2.jpg'


function Services(){


    return(
        <div   className="py-5 flex flex-col items-center justify-center gap-7 scroll-mt-24   w-full  h-full bg-gradient-to-b from-blue-500 to-gray-50 " id='Services'>
          <div className='  '>
            <p className="text-2xl underline underline-offset-8 "> Services</p>
            </div>
       
            <div className=" md:flex grid grid-cols-1    md:gap-x-4 gap-4" >
          <div className="items-center flex flex-col hover:border-b-[3px] border-blue-400  md:w-1/4 w-full  p-6">
            <img src={Webdev} className="h-48" />
            <h1 className="text-md text-slate-900 font-semibold" >Web and software development</h1>
          </div>

         <div className="items-center flex flex-col hover:border-b-[3px] border-blue-400   w-full md:w-1/4  p-4">
            <img src={Mobile} className="h-48" />
            <h1 className="text-md text-slate-900 font-semibold" >Mobile Application</h1>
          </div>

          <div className="items-center flex flex-col hover:border-b-[3px] border-blue-400  w-full md:w-1/5  p-4">
            <img src={payment} className="h-48" />
            <h1 className="text-md text-center text-slate-900 font-semibold" >Payment Gateway Integration

Mpesa,Paypal </h1>
          </div>

          <div className="items-center  flex flex-col hover:border-b-[3px] border-blue-400  w-full md:w-1/5  p-4">
            <img src={sms} className="h-48" />
            <h1 className=" text-center font-semibold text-slate-900 " >Bulk SMS Integration</h1>
          </div>

        </div>
      
        </div>
    );

}
export default Services