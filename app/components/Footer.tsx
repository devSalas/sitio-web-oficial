
import Contact from "./Contact";


function Footer() {
    return (<footer className="pt-32   ">
        <div className="grid md:grid-cols-2 mb-16">
            <div>
                <h3 className="text-5xl mb-8 font-bold">Sunetya</h3>
                <p className="max-w-sm mb-8">En Sunetya, nos dedicamos apasionadamente a convertir tus ideas en realidad en el mundo digital.</p>
            </div>
            <Contact/>
        </div>
        <div>
            <hr />
            <p className="py-4 text-center">  © 2024 CompuSalas | Todos los derechos reservados. Esteban Salas Sulca - Lima, Perú.</p>
        </div>

    </footer>);
}

export default Footer;