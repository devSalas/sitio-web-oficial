import BannerPromotion from "./BannerPromotion";
import Header from "./Header";

function Main() {
    return (
        <main className="min-h-screen">
            <Header />
            {/* <BannerPromotion/> */}
            <h1 className="text-3xl mt-20 mb-8 text-center  font-semibold sm:text-5xl">Sunetya</h1>
            <p className="my-8   text-pretty sm:max-w-lg sm:mx-auto">En Sunetya, nos dedicamos apasionadamente a convertir tus ideas en realidad en el mundo digital. Como expertos en desarrollo de páginas web, nuestro equipo fusiona creatividad y tecnología para crear experiencias en línea cautivadoras y funcionales. </p>
            <div className="text-center text-co-primary mb-8">
                <a className="bg-secondary py-4 px-16 rounded-full ">
                    Ver planes
                </a>
            </div>
            <div className="flex justify-center gap-2 my-8 text-xs font-semibold">
                <span>transparencia</span>y
                <span>Compromiso</span>
            </div>

            <video src="./presentation.mp4" className="rounded-md my-16 sm:px-8"   >

            </video>

            {/* <div className="flex flex-col  justify-center gap-4 mt-16 ">
                <p className="text-xs text-center">Confiado por empresas de todos los tamaños.</p>
                <p className="flex gap-4 justify-center ">
                    <span>NIKE</span>
                    <span>ADIDAS</span>
                    <span>CONECTICA</span>
                </p>
            </div> */}

        </main>)
}

export default Main;