import Header from "./Header";

function Main() {
    return (
        <main className="min-h-screen">
            <Header />
            <h1 className="text-3xl mt-20 mb-8 text-center  font-semibold sm:text-5xl">CompuSalas</h1>
            <p className="my-8   text-pretty sm:max-w-lg sm:mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat perspiciatis quam libero, fugiat laborum deserunt eveniet aliquid inventore, qui iusto commodi iure quae voluptatum repudiandae nobis doloribus reiciendis corrupti non.</p>
            <div className="text-center text-co-primary mb-8">
                <a className="bg-secondary py-3 px-6 rounded-full ">
                    Get 14 Days Free Trial --z
                </a>
            </div>
            <div className="flex justify-center gap-2 my-8 text-xs font-semibold">
                <span>No credit car required</span>
                <span>Cancel anytime</span>
            </div>

            <video src="./presentation.mp4" className="rounded-md my-16 sm:px-8"   >

            </video>

            <div className="flex flex-col  justify-center gap-4 mt-16 ">
                <p className="text-xs text-center">Confiado por empresas de todos los tamaños.</p>
                <p className="flex gap-4 justify-center ">
                    <span>NIKE</span>
                    <span>ADIDAS</span>
                    <span>CONECTICA</span>
                </p>
            </div>

        </main>)
}

export default Main;