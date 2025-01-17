import Mobile from './assets/mobile.jpg';
import sms from './assets/sms.jpg';
import Webdev from './assets/web.jpg'
import payment from './assets/payment2.jpg'


function Services(){


    return(
        <div  className=" justify-center py-5 flex flex-col scroll-mt-24   w-full  h-full bg-gradient-to-t from-blue-600 to-gray-200 " id='Services'>
          <div className='  '>
            <p className="text-center text-2xl underline underline-offset-8 "> Services</p>
            </div>
       
      <div className="flex flex-col md:flex-row items-center justify-center   gap-x-8 mt-4 px-20">
                 <div className=' h-[321px] w-full md:w-1/4 py-12 items-center flex flex-col hover:border-b-4 hover:border-solid  hover:border-gray-100'>
                    <img src={Mobile} className='h-48   mb-4 rounded-xl'/>
                    <p>Mobile apps Developments</p>

                  </div>     
                 <div  className=' h-[320px] w-full  md:w-1/4 py-12 items-center flex flex-col  hover:border-gray-100 hover:border-b-4 hover:border-solid'>
                    <img src={sms} className='h-48 w-56 mb-4 rounded-xl'/>
                    <p className='w-[201px] text-center'>Bulk sms disbusment and Integration</p>
                 </div>

                 <div  className=' h-[320px] w-full md:w-1/4 py-12 items-center flex flex-col hover:border-b-4 hover:border-solid  hover:border-gray-100'>
                    <img src={payment} className = "h-48 w-56 mb-4 rounded-xl"/>
                    <p className='w-[300px] text-center'>Payment Gateway Integration Mpesa,Paypal,Stripe</p>
                 </div>
                 <div  className=' h-[320px] w-full md:w-1/4 py-12 items-center flex flex-col hover:border-b-4 hover:border-solid  hover:border-gray-100'>
                    <img src={Webdev} className='h-48   mb-4 rounded-xl'/>
                    <p>Web and software delelopment</p>
                 </div>
        </div>
      
        </div>
    );

}
export default Services