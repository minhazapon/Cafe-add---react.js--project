

 import c1 from '../src/assets/images/images/cups/Rectangle 9.png'
 import c2 from '../src/assets/images/images/cups/Rectangle 10.png'
 import c3 from '../src/assets/images/images/cups/Rectangle 11.png'
 import c4 from '../src/assets/images/images/cups/Rectangle 12.png'
 import c5 from '../src/assets/images/images/cups/Rectangle 13.png'
 import c6 from '../src/assets/images/images/cups/Rectangle 14.png'
 import c7 from '../src/assets/images/images/cups/Rectangle 15.png'
 import c8 from '../src/assets/images/images/cups/Rectangle 16.png'
import { Link } from 'react-router-dom'










const Follow = () => {
    return (
        <div className=" mb-10 mt-10">


            <div>


               <div>

                  <h1 className=" text-center text-xl">Follow Us Now</h1>

                  <p className=" text-center text-5xl font-mono font-bold text-[#481E14]">Follow on Instagram</p>

               </div>




              <div className=" ml-10 mr-10">




              <section className="py-6  text-gray-50">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="https://coffeecups.co.uk/cdn/shop/collections/barista-530948.jpg?v=1697022171&width=1500" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={c1} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={c2} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={c3} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={c4} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={c5} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={c6} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={c7} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={c8} />
		<img src="https://www.paintingforhome.com/cdn/shop/products/1_13_1200x1200.jpg?v=1639516931" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square" />
	</div>
</section>





              </div>
















            </div>


         <div className=' ml-14 mr-10'>

                 

       
           <Link to="/shop"  >
           <button className=' text-white bg-[#AF8260] btn flex items-center gap-2'>Going to Our Shop


           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>


           </button>
           </Link>












         </div>




            
        </div>
    );
};

export default Follow;