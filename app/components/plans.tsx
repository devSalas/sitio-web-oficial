import CheckmarkIcon from "./icons/Checkmark";

function Plans() {
    return (<div className="pt-32">

        <h2 className="text-5xl font-bold text-center mb-16">Obten planes especiales</h2>

        <div className="grid md:grid-cols-3 gap-8 px-8 ">
            <div className="border-2 border-slate-200 p-4 rounded-md aspect-[3/4] shadow-md shadow-slate-500">
                <h3 className="text-2xl font-bold  text-center">Básico</h3>
                <sub className="block mb-8 mt-4 text-center text-sm text-co-secondary font-bold">Pequeñas empresas</sub>
                <div>
                    <span className="line-through text-2xl">s/600</span>
                    <span className="text-5xl">s/.499</span>
                </div>
                <button className="border-2 bg-secondary/80 text-co-primary font-bold border-slate-200 py-2 my-8 w-full rounded-md">Empezar ya</button>
                <ul className=" list-disc px-4">
                    <li className="">
                        <span className="">7 secciones/Bloques</span>
                    </li>
                    <li className="">
                        <span className="">100% Administrable</span>
                    </li>
                    <li className="">
                        <span className="">WhatsApp</span>
                    </li>
                    <li >
                        <span >Google Maps</span>
                    </li>
                    <li >
                        <span >WordPress Theme</span>
                    </li>
                    <li >
                        <span >Correos profesionales*</span>
                    </li>
                    <li >
                        <span >Hosting +. Dominio COM*</span>
                    </li>
                    <li >
                        <span >Certificado seguridad - SSL*</span>
                    </li>
                    <li >
                        <span >Soporte, tutorial</span>
                    </li>
                    <li >
                        <span >y mucho más ...</span>
                    </li>
                </ul>
            </div>
            {/* item 2  */}
            <div className="border-2 border-slate-200 bg-blue-200 shadow-md shadow-blue-400 p-4 rounded-md aspect-[3/4]">
                <sup className="text-secondary text-sm ">El más comprado</sup>
                <h3 className="text-2xl font-bold text-center">Intermedio</h3>
                <sub className="block mb-8 mt-4 text-center text-sm text-co-secondary font-bold">Pymes</sub>
                <div>
                    <span className="line-through text-2xl">s/1000</span>
                    <span className="text-5xl">s/.890</span>
                </div>
                <button className=" text-co-primary font-bold bg-secondary  py-2 my-8 w-full rounded-md">Empezar ya</button>
                <ul className="px-4">
                    <li className="list-disc">14 secciones/Bloques</li>
                    <li className="list-disc">100% Administrable</li>
                    <li className="list-disc">WhatsApp</li>
                    <li className="list-disc">WordPress Theme</li>
                    <li className="list-disc">Correos profesionales</li>
                    <li className="list-disc">Hosting +. Dominio COM</li>
                    <li className="list-disc">Certificado seguridad - SSL</li>
                    <li className="list-disc">Soporte, tutorial
1 diseño de portada facebook</li>
                    <li className="list-disc">y mucho más ...</li>
                    <li className="list-disc">Google Maps</li>
                </ul>
            </div>
            <div className="border-2 border-slate-200 p-4 rounded-md aspect-[3/4] shadow-md shadow-slate-500">
                <h3 className="text-2xl font-bold text-center">Avanzado</h3>
                <sub className="block mb-8 mt-4 text-center text-sm text-co-secondary font-bold">Grandes empresas</sub>
                <div>
                    <span className="line-through text-2xl">s/600</span>
                    <span className="text-5xl">s/.499</span>
                </div>
                <button className="border-2 bg-secondary/80 text-co-primary font-bold py-2 my-8 w-full rounded-md">Empezar ya</button>
                <ul className="px-4">
                    <li className="list-disc">20 secciones/Bloques</li>
                    <li className="list-disc">100% Administrable</li>
                    <li className="list-disc">WhatsApp</li>
                    <li className="list-disc">WordPress Theme</li>
                    <li className="list-disc">Correos profesionales*
Hosting +. Dominio COM*</li>
                    <li className="list-disc">Certificado seguridad - SSL</li>
                    <li className="list-disc">Capacitación redes sociales</li>
                    <li className="list-disc">y mucho más</li>
                </ul>
            </div>

        </div>
    </div>);
}

export default Plans;