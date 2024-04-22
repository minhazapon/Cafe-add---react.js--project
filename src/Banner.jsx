




const Banner = () => {
    return (
        <div className=" flex-col md:flex-row ">

            <div className=" flex justify-end items-center    bg-no-repeat bg-cover h-[600px] rounded-xl " 
            
            style={{backgroundImage:  "url(https://i.ibb.co/qDJtTZR/3.jpg)"}}  >


                 <div className=" mr-[200px] text-white  ">
                   
                   <h1 className=" text-2xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                   <p className=" text-xl mt-3"> Coffee is the best thing to douse the sunrise with<br></br> - Terri Guillemets</p>
                    <button className=" btn bg-[#C08B5C] text-xl mt-2 text-white">Learn More</button>

                 </div>


            </div>
            
        </div>
    );
};

export default Banner;