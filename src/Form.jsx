import { Link } from "react-router-dom";


const Form = () => {
    return (
        <div className=" mb-40 mt-40">
             
             <Link to="/" >

              <div className=" text-white bg-[#AF8260] btn  flex items-center mb-5 mt-5 gap-3">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
   

                <h1>back to Home</h1>
              </div>

              </Link>


            <div  className=" bg-slate-100  border-[1px] border-[#AF8260] p-5 rounded-xl" >

                      <div>

                         <h1 className=" text-[#994735] text-5xl font-mono font-bold text-center">
                        Add New Coffee</h1>
                        <p className=" text-center mt-3 text-2xl">Coffee is the common mans gold,<br></br> and like gold, it brings to every person the feeling of luxury and nobility <br></br>  - Sheik-Abd-al-Kadir</p>

                        
                      </div>

                 <div className=" mt-3 flex justify-center">
               
                 <div className=" grid  md:grid-cols-2 gap-5">

                        

                   <div>
                       <h1 className=" text-xl font-bold">Name:</h1>
                       <input className=" mt-1 bg-white p-1  w-[350px] border-[1px] border-black  "
                        placeholder="Enter coffee name" type="text" />
                   </div>

                   <div>
                       <h1 className=" text-xl font-bold">Chef:</h1>
                       <input className=" mt-1 bg-white p-1  w-[350px]  border-[1px] border-black "
                        placeholder="Enter coffee chef" type="text" />
                   </div>

                   <div>
                       <h1 className=" text-xl font-bold">Supplier:</h1>
                       <input className=" mt-1 bg-white p-1  w-[350px] border-[1px] border-black  "
                        placeholder="Enter coffee supplier" type="text" />
                   </div>

                   <div>
                       <h1 className=" text-xl font-bold">Taste:</h1>
                       <input className=" mt-1 bg-white  p-1  w-[350px] border-[1px] border-black  "
                        placeholder="Enter coffee taste" type="text" />
                   </div>

                   <div>
                       <h1 className=" text-xl font-bold">Category:</h1>
                       <input className=" p-1 mt-1 bg-white  w-[350px] border-[1px] border-black  "
                        placeholder="Enter coffee category" type="text" />
                   </div>

                   <div>
                       <h1 className=" text-xl font-bold">Details:</h1>
                       <input className=" mt-1 bg-white p-1 w-[350px]  border-[1px] border-black "
                        placeholder="Enter coffee details" type="text" />
                   </div>

                   <div>
                       <h1 className=" text-xl font-bold">Photo:</h1>
                       <input className=" mt-1 bg-white  p-1  w-[350px]  border-[1px] border-black "
                        placeholder="Enter photo URL" type="url" name="" id="" />
                   </div>

                 </div>

                 </div>
              
               
                 <div className=" flex justify-center">
                 <div className="  flex-col md:flex-row lg:flex-row   ">
                  <input className="  text-white mt-4 btn w-[720px] bg-[#AF8260]" type="submit" value="Add Coffee" />      
                 </div>
                 </div>
                













            </div>
            
        </div>
    );
};

export default Form;