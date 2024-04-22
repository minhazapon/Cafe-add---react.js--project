
import logo from '../src/assets/images/images/more/logo1.png'

import fb from '../src/assets/images/images/social/facebook (1).png'

import insta from '../src/assets/images/images/social/instagram (1).png'

import  lin from '../src/assets/images/images/social/linkedin.png'

import x from '../src/assets/images/images/social/twitter (1).png'

import email from '../src/assets/images/images/social/gmail.png'

import phn from '../src/assets/images/images/social/phone-call (1).png'




const Footer = () => {
    return (


     


        <div className=' mt-20 '>


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





            
        </div>

        
    );
};

export default Footer;


