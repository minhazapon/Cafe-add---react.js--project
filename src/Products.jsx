

import p1 from '../src/assets/images/images/mugs/1.png'
import p2 from '../src/assets/images/images/mugs/2.png'
import p3 from '../src/assets/images/images/mugs/3.png'
import p4 from '../src/assets/images/images/mugs/4.png'
import p5 from '../src/assets/images/images/mugs/5.png'
import p6 from '../src/assets/images/images/mugs/6.png'




const Products = () => {
    return (
        <div>

            <div className=" flex justify-center mt-10">

                   <div className="">
                      
                       <h1 className=" text-xl text-center">--- Sip & Savor ---</h1>
                       <h1 className=" text-center text-4xl text-[#994735] font-bold ">Our Popular Products</h1>

                       <div className=" flex justify-center">
                       <button className=" mt-5 text-center flex items-center btn bg-[#ED9455] text-white">Add Coffee   

                        <img className=" h-[30px]" src="https://i.ibb.co/qdxSKLc/coffee-cup.png" alt="" />

                       </button>
                       </div>


                   </div>
            </div>

{/* -------------------------------------------- */}

    {/* products section */}



                      <div>

                             <div>

                                  <img src={p1} alt="" />

                                  <div>
                                      
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Name: 
                                      </span>Americano Coffe</h1>
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Chef: 
                                      </span>Mr. matin Paul</h1>
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Price: 
                                      </span>  890 Taka</h1>


                                  </div>

                                  <div>

                                          



                                  </div>


                             </div>
                            











                      </div>







            
        </div>
    );
};

export default Products;