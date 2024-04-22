
import logo from '../src/assets/images/images/more/logo1.png'

import fb from '../src/assets/images/images/social/facebook (1).png'

import insta from '../src/assets/images/images/social/instagram (1).png'

import  lin from '../src/assets/images/images/social/linkedin.png'

import x from '../src/assets/images/images/social/twitter (1).png'

import email from '../src/assets/images/images/social/gmail.png'

import phn from '../src/assets/images/images/social/phone-call (1).png'




const Footer = () => {
    return (

        <div>
     


        <div className=' rounded-xl border-[1px] border-[#994735] flex-col md:flex-row mt-20 flex justify-center items-center gap-60 bg-no-repeat bg-cover p-3 '   style={{backgroundImage:  "url(https://i.ibb.co/pRhb9Q9/13.png)"}}  >


            <div>

                 <img className=' h-[80px]' src={logo} alt="" />


                 <h1 className=' mt-5 text-2xl font-serif  font-bold  text-[#6C3428]'>Apon Cafe adda</h1>

                 <p className=' mt-5 text-xl '>Always ready to be your friend.<br></br> Come & Contact with us to <br></br>share your memorable moments,<br></br> to share with your best companion.</p>

                 
                 <div className=' flex items-center gap-3 mt-5'>

                    <img    className=' h-[40px]' src={fb} alt="" />
                    <img    className=' h-[40px]' src={insta} alt="" />
                    <img    className=' h-[40px]' src={lin} alt="" />
                    <img    className=' h-[40px]' src={x} alt="" />
                 </div>


                 <p className=' mt-5 text-4xl font-bold text-[#6C3428] font-serif'>Get In Touch</p>

                

                <div className=' mt-5 flex items-center gap-2'>
                   <img className=' h-[30px]  ' src={phn} alt="" />
                   <p   className=' text-xl font-bold text-[#6C3428]' >019500000000</p>
                </div>
                <div className=' mt-5 flex items-center gap-2'>
                   <img className=' h-[30px]  ' src={email} alt="" />
                   <p   className=' text-xl font-bold text-[#6C3428]' >AponcafeAdda@gmail.com</p>
                </div>
                <div className=' mt-5 flex items-center gap-2'>
                   <img className=' h-[30px]  ' src="https://i.ibb.co/kyjrLtf/location.png" alt="" />
                   <p   className=' text-xl font-bold text-[#6C3428]' >72, Wall street, King Road, Dhaka</p>
                </div>
            </div>


       
        <div>


          <h1 className=' text-4xl font-bold  text-[#6C3428] '>Connect with Us</h1>


        <div>

               <input className=' h-[40px] w-[400px] p-3 bg-[#6C3428]  text-black rounded-2xl mt-3
                ' placeholder='Name' type="text" />
                <br></br>
                <input  className=' h-[40px] w-[400px] p-3 bg-[#6C3428]  text-black rounded-2xl mt-3   ' type="email" name="Email" id="" placeholder='Email' />
               <br></br>

               <textarea className=' h-[180px] w-[400px] p-3 bg-[#6C3428]  text-black rounded-2xl mt-3   ' placeholder='Message' name="message" id="" cols="30" rows="10"></textarea>

           </div>
 
  
            <input className=' btn w-[400px]  border-[1px] border-[#6C3428]  text-[#6C3428] text-xl ' type="submit" value="Submit" />


        

        </div>



        


            
        </div>
        
          


         <div className=' bg-no-repeat bg-cover p-2 rounded-xl '  
           style={{backgroundImage:  "url(https://i.ibb.co/PYmsvsV/24.png)"}}  >


          <h1 className=' text-center text-xl font-bold text-white'>Copyright Apon Cafe adda ! All Rights Reserved</h1>



         </div>





        </div>
        
    );
};

export default Footer;


