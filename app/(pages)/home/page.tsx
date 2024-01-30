import Header from "../../components/Header";
import Services from "../../components/Services";
import Main from "../../components/Main";
import Promotions from "../../components/Promotions";
import Plans from "../../components/plans";
import Footer from "../../components/Footer";
function Home() {
    return (
        <div>
            <Header />
            <hr />
            <Main />
            <hr />
            <Services />
            <hr />
            <Promotions />
            <hr />
            <Plans />
            <hr />
            <Footer />
        </div>

    );
}

export default Home;