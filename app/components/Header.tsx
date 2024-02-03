function Header() {
    return (
        <>
    <header className="hidden sm:flex justify-between py-4">
        <h2 className="text-lg font-bold">Scalo</h2>
        <nav className="flex  gap-2">
            <a className="cursor-pointer">Home</a>
            <a href="#services" className="cursor-pointer" >Servicios</a>
            <a className="cursor-pointer">Blog</a>
            <a className="cursor-pointer">Contact</a>
        </nav>
        <div>
            <a href="" className="bg-secondary text-co-primary py-2 px-6  rounded-full ">Start Frre Trial</a>
        </div>
    </header>
    <HeaderMobile/>
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