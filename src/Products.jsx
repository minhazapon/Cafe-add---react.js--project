

import p1 from '../src/assets/images/images/mugs/1.png'
import p2 from '../src/assets/images/images/mugs/2.png'
import p3 from '../src/assets/images/images/mugs/3.png'
import p4 from '../src/assets/images/images/mugs/4.png'
import p5 from '../src/assets/images/images/mugs/5.png'
import p6 from '../src/assets/images/images/mugs/6.png'


// -------------------

 
import c1 from '../src/assets/images/images/card icons/delete.png'

import c2 from '../src/assets/images/images/card icons/pencil (1).png'

import c3 from '../src/assets/images/images/card icons/view (1).png'
import { Link } from 'react-router-dom'


  //-----------------






const Products = () => {
    return (
        <div className=' bg-no-repeat  bg-cover  '     style={{backgroundImage:  "url(https://i.ibb.co/PhxpLBs/1.png)"}}  >

            <div className=" flex justify-center mt-10">

                   <div className="">
                      
                       <h1 className=" text-xl text-center">--- Sip & Savor ---</h1>
                       <h1 className=" text-center text-4xl text-[#994735] font-bold ">Our Popular Products</h1>


                       <Link  to="/form" >


                       <div className=" flex justify-center">
                       <button className=" mt-5 text-center flex items-center btn bg-[#ED9455] text-white">Add Coffee   

                        <img className=" h-[30px]    " src="https://i.ibb.co/qdxSKLc/coffee-cup.png" alt="" />

                       </button>
                       </div>

                       </Link>


                   </div>
            </div>

{/* -------------------------------------------- */}

    {/* products section */}


            <div className=' flex justify-center gap-10 mt-10'>
             <div className=' grid  md:grid-cols-2 gap-8'>
                      <div className=' bg-violet-100 p-4 rounded-xl'>
                             <div className=' flex items-center'>
                                  <img className=' h-[200px] w-[150px] ' src={p1} alt="" />
                                  <div>
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Name: 
                                      </span> Americano Coffe</h1>
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Chef: 
                                      </span> Mr. matin Paul</h1>
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Price: 
                                      </span>  890 Taka</h1>
                                  </div>
                                  <div className=' ml-10'>
                                        <img className=' focus:dark:ring-violet-600    rounded-lg bg-[#ED9455] p-2 h-[40px]' src={c3} alt="" />
                                        <img className=' rounded-lg mt-3  bg-blue-600 p-2 h-[40px]' src={c2} alt="" />
                                        <img className=' rounded-lg mt-3 bg-red-600 p-2 h-[40px]' src={c1} alt="" />
                                  </div>
                             </div>
                      </div>



                      {/* ------------------------------------ */}

                      <div className='  bg-violet-100 p-4 rounded-xl  '>
                             <div className=' flex items-center'>
                                  <img  className=' h-[200px] w-[150px] ' src={p2} alt="" />
                                  <div>
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Name: 
                                      </span> Americano Coffee</h1>
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Chef: 
                                      </span> Mr. matin Paul</h1>
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Price: 
                                      </span>  890 Taka</h1>
                                  </div>
                                  <div className=' ml-10'>
                                        <img className=' rounded-lg bg-[#ED9455] p-2 h-[40px]' src={c3} alt="" />
                                        <img className=' rounded-lg mt-3  bg-blue-600 p-2 h-[40px]' src={c2} alt="" />
                                        <img className=' rounded-lg mt-3 bg-red-600 p-2 h-[40px]' src={c1} alt="" />
                                  </div>
                             </div>
                      </div>

                      {/* ------------------------------------ */}

                      <div className='   bg-violet-100 p-4 rounded-xl'>
                             <div className=' flex items-center'>
                                  <img  className=' h-[200px] w-[150px] ' src={p3} alt="" />
                                  <div>
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Name: 
                                      </span> Americano Coffe</h1>
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Chef: 
                                      </span> Mr. matin Paul</h1>
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Price: 
                                      </span>  890 Taka</h1>
                                  </div>
                                  <div className=' ml-10'>
                                        <img className=' rounded-lg bg-[#ED9455] p-2 h-[40px]' src={c3} alt="" />
                                        <img className=' rounded-lg mt-3  bg-blue-600 p-2 h-[40px]' src={c2} alt="" />
                                        <img className=' rounded-lg mt-3 bg-red-600 p-2 h-[40px]' src={c1} alt="" />
                                  </div>
                             </div>
                      </div>


                      {/* ------------------------------------ */}

                      <div className='  bg-violet-100 p-4 rounded-xl  '>
                             <div className=' flex items-center'>
                                  <img  className=' h-[200px] w-[150px] ' src={p4} alt="" />
                                  <div>
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Name: 
                                      </span> Americano Coffe</h1>
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Chef: 
                                      </span> Mr. matin Paul</h1>
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Price: 
                                      </span>  890 Taka</h1>
                                  </div>
                                  <div className=' ml-10'>
                                        <img className=' rounded-lg bg-[#ED9455] p-2 h-[40px]' src={c3} alt="" />
                                        <img className=' rounded-lg mt-3  bg-blue-600 p-2 h-[40px]' src={c2} alt="" />
                                        <img className=' rounded-lg mt-3 bg-red-600 p-2 h-[40px]' src={c1} alt="" />
                                  </div>
                             </div>
                      </div>

                      {/* ------------------------------------ */}

                      <div className='  bg-violet-100 p-4 rounded-xl  '>
                             <div className=' flex items-center'>
                                  <img  className=' h-[200px] w-[150px] ' src={p5} alt="" />
                                  <div>
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Name: 
                                      </span> Americano Coffe</h1>
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Chef: 
                                      </span> Mr. matin Paul</h1>
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Price: 
                                      </span>  890 Taka</h1>
                                  </div>
                                  <div className=' ml-10'>
                                        <img className=' rounded-lg bg-[#ED9455] p-2 h-[40px]' src={c3} alt="" />
                                        <img className=' rounded-lg mt-3  bg-blue-600 p-2 h-[40px]' src={c2} alt="" />
                                        <img className=' rounded-lg mt-3 bg-red-600 p-2 h-[40px]' src={c1} alt="" />
                                  </div>
                             </div>
                      </div>
{/* ------------------------------------ */}


                      <div className='   bg-violet-100 p-4 rounded-xl '>
                             <div className=' flex items-center'>
                                  <img  className=' h-[200px] w-[150px] ' src={p6} alt="" />
                                  <div>
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Name: 
                                      </span> Americano Coffe</h1>
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Chef: 
                                      </span> Mr. matin Paul</h1>
                                      <h1 className=' text-xl'>  <span className=' font-bold'>Price: 
                                      </span>  890 Taka</h1>
                                  </div>
                                  <div className=' ml-10'>
                                        <img className=' rounded-lg bg-[#ED9455] p-2 h-[40px]' src={c3} alt="" />
                                        <img className=' rounded-lg mt-3  bg-blue-600 p-2 h-[40px]' src={c2} alt="" />
                                        <img className=' rounded-lg mt-3 bg-red-600 p-2 h-[40px]' src={c1} alt="" />
                                  </div>
                             </div>
                      </div>

{/* ------------------------------------ */}

                    
                </div>



                </div>





            
        </div>
    );
};

export default Products;