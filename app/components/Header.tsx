import LogoIcon from "./icons/logo";

function Header() {
    return (
        <>
            <header className="hidden sm:flex justify-between items-end py-4">
                <h2 className="text-xl font-bold"><LogoIcon /></h2>
                <nav className="flex  gap-4 font-medium">
                    <a className="cursor-pointer">Inicio</a>
                    <a href="#services" className="cursor-pointer" >Servicios</a>
                    {/* <a className="cursor-poi">Blog</a> */}
                    <a className="cursor-pointer">Planes</a>
                    <a className="cursor-pointer">Promociones</a>
                </nav>
                <a href="" className="bg-secondary text-co-primary py-2 px-6  rounded-full ">Conectar</a>
            </header>
            <HeaderMobile />
        </>
    );
}


function HeaderMobile() {
    return (
        <header className="sm:hidden flex justify-between py-4">
            <div>Scalo</div>

            <div>
                <a href="" className="bg-secondary text-co-primary py-2 px-6  rounded-full ">Start Frre Trial</a>
            </div>
        </header>
    );
}


export default Header;