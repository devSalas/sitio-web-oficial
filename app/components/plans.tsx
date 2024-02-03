import CheckmarkIcon from "./icons/Checkmark";

function Plans() {
    return ( <div className="pt-32">
       <h2 className="text-5xl font-bold text-center mb-16">Obten planes especiales</h2>
       <div className="grid md:grid-cols-3 gap-8 px-8 ">
        <div className="border-2 border-slate-200 p-4 rounded-md aspect-[3/4]">
            <h3 className="text-xl font-bold mb-8">Básico</h3>
            <div>
                <span className="line-through text-2xl">s/600</span>
                <span className="text-5xl">s/.499</span>
            </div>
            <button className="border-2 text-co-third font-bold border-slate-200 py-2 my-8 w-full rounded-md">Comprar ahora</button>
            <ul className="px-4">
                <li className="list-disc">Catalo de plantillas</li>
                <li className="list-disc">Cantidad de paginas: 5</li>
                <li className="list-disc">Alojamiento hosting</li>
                <li className="list-disc">Dominio gratis</li>
            </ul>
        </div>
        <div className="border-2 border-slate-200 p-4 rounded-md aspect-[3/4]">
            <h3 className="text-xl font-bold mb-8">Básico</h3>
            <div>
                <span className="line-through text-2xl">s/600</span>
                <span className="text-5xl">s/.499</span>
            </div>
            <button className="border-2 text-co-third font-bold border-slate-200 py-2 my-8 w-full rounded-md">Comprar ahora</button>
            <ul className="px-4">
                <li className="list-disc">Catalo de plantillas</li>
                <li className="list-disc">Cantidad de paginas: 5</li>
                <li className="list-disc">Alojamiento hosting</li>
                <li className="list-disc">Dominio gratis</li>
            </ul>
        </div>
        <div className="border-2 border-slate-200 p-4 rounded-md aspect-[3/4]">
            <h3 className="text-xl font-bold mb-8">Básico</h3>
            <div>
                <span className="line-through text-2xl">s/600</span>
                <span className="text-5xl">s/.499</span>
            </div>
            <button className="border-2 text-co-primary font-bold bg-secondary py-2 my-8 w-full rounded-md">Comprar ahora</button>
            <ul className="px-4">
                <li className="list-disc">Catalo de plantillas</li>
                <li className="list-disc">Cantidad de paginas: 5</li>
                <li className="list-disc">Alojamiento hosting</li>
                <li className="list-disc">Dominio gratis</li>
            </ul>
        </div>

       </div>
    </div> );
}

export default Plans;