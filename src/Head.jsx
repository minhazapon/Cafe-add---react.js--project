
import logo from '../src/assets/images/images/more/logo1.png'




const Head = () => {
    return (
        <div>


            
             <div className=' border-[1px] border-[#994735] flex justify-center items-center gap-3 bg-no-repeat bg-cover rounded-2xl'  
              style={{backgroundImage:  "url(https://i.ibb.co/6P3vvsW/15-Bv6-UT1-T0.png)"}}     >
                
                <img className=' h-[80px] mt-3' src={logo} alt="" />

                <h1 className=" text-center  mt-4 text-4xl font-bold  text-white font-serif">Apon Cafe adda</h1>

             </div>



        </div>
    );
};

export default Head;