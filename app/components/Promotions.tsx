function Promotions() {
    return ( <div className="mt-32 w-full bg-secondary py-32 px-4">
       {/* <h2 className="text-5xl font-bold text-center mb-16">Promociones</h2> */}
       <div>
            <h3 className=" text-5xl font-bold text-center mb-16 text-co-primary">Get started free <br /> for 60-days</h3>
            <p className="text-co-primary/80 max-w-sm m-auto mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur esse suscipit perspiciatis.</p>    
            <div className="flex justify-center items-center gap-4">
                <button className="bg-fourth text-co-primary py-3 px-8 rounded-md text-lg">
                    <a href="">
                        Cotizar ahora
                    </a>
                </button>

            </div>
       </div>
    </div> );
}

export default Promotions;