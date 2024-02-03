function Comments() {
    return (<div className="bg-third px-4 md:px-auto  relative left-0 right-0 py-32">
        <div className="max-w-5xl m-auto">
            <h3 className="text-5xl font-semibold text-co-primary  text-center mb-16">Algunas palabras de nuestros usuarios</h3>
            {/* AQUI ESTAN LOS GRID */}
            <div className="grid grid-cols-1 gap-8  lg:grid-cols-2 ">
                {/* primer hijo */}
                <div className="grid grid-cols-2 aspect-video m-auto  gap-4 max-w-md text-sm md:text-base ">
                    <figure className="w-full">
                    <img className="rounded-lg w-full h-full object-cover" src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                    </figure>
                    <div className="flex flex-col py-2 justify-between gap-4">
                         <p>⭐⭐⭐⭐⭐</p>
                        <p className="text-co-primary text-pretty ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptate animi aliquam minima consequatur necessitatibus!
                        </p>
                        <p className="text-co-primary">Juan Oscar Hermosa</p>
                    </div>
                    
                </div>
                <div className="grid grid-cols-2 aspect-video m-auto  gap-4 max-w-md text-sm md:text-base ">
                    <figure className="w-full">
                    <img className="rounded-lg w-full h-full object-cover" src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                    </figure>
                    <div className="flex flex-col py-2 justify-between gap-4">
                         <p>⭐⭐⭐⭐⭐</p>
                        <p className="text-co-primary text-pretty ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptate animi aliquam minima consequatur necessitatibus!
                        </p>
                        <p className="text-co-primary">Juan Oscar Hermosa</p>
                    </div>
                    
                </div>
                

            </div>
        </div>
    </div>);
}

export default Comments;