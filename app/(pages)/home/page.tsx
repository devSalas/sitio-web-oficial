import Header from "../../components/Header";
import Services from "../../components/Services";
import Main from "../../components/Main";
import Promotions from "../../components/Promotions";
import Footer from "../../components/Footer";
import Comments from "../../components/Comments";
import BannerPromotion from "../../components/BannerPromotion";
import Plans from "@/app/components/Plans";
function Home() {
    return (
        <div>
            <BannerPromotion/>
            <div className="max-w-5xl m-auto  p-4 pb-32">
                <Main />
                <hr />
                <Services />
                <hr />

            </div>

            <Comments />

            <hr />
            <div className="max-w-5xl m-auto">
            <Plans/>
           
                
            </div>
            <Promotions />
            <div  className="px-4 max-w-5xl m-auto ">
                <Footer /> 

            </div>
            <hr />
        </div>

    );
}

export default Home;