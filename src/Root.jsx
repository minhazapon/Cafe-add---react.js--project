import { Outlet } from "react-router-dom";
import Head from "./Head";
import Footer from "./Footer";





const Root = () => {
    return (
        <div>
            
              <Head></Head>
              <Outlet></Outlet>
              <Footer></Footer>


        </div>
    );
};

export default Root;