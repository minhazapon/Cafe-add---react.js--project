


import icon1  from '../src/assets/images/images/icons/1.png'
import icon2  from '../src/assets/images/images/icons/2.png'
import icon3  from '../src/assets/images/images/icons/3.png'
import icon4 from '../src/assets/images/images/icons/4.png'




const Items = () => {
    return (
        <div className='  bg-[#ffd8b65e] p-6   '   >
               
               <div className=' flex justify-center items-center gap-8 flex-col md:flex-row '>

                    <div>
                       <img src={icon1} alt="" />
                        <h1 className=' text-xl  text-[#481E14] mt-2'>Awesome Aroma</h1>
                        <p className=' text-[#481E14]'  >You will definitely be a fan of<br></br> the design & aroma of your coffee</p>

                    </div>


                    <div>
                       <img src={icon2} alt="" />
                        <h1 className=' text-xl  text-[#481E14] mt-2'>High Quality</h1>
                        <p className=' text-[#481E14]'  >We served the coffee to<br></br> you maintaining the best quality</p>

                    </div>



                    <div>
                       <img src={icon3} alt="" />
                        <h1 className=' text-xl  text-[#481E14] mt-2'>Pure Grades</h1>
                        <p className=' text-[#481E14]'  >The coffee is made of the green<br></br> coffee beans which you will love</p>

                    </div>


                    <div>
                       <img src={icon4} alt="" />
                        <h1 className=' text-xl  text-[#481E14] mt-2'>Proper Roasting</h1>
                        <p className=' text-[#481E14]'  >Your coffee is brewed by first<br></br> roasting the green coffee beans</p>

                    </div>










               </div>

      


            
        </div>
    );
};

export default Items;