 'use client';
import CopyIcons from "./icons/Copy";

function Contact() {



    const handleCopy  = (data)=>{
       console.log(data)
       navigator.clipboard.writeText(data);
    }

    return (
        <div className="" >
            <h3 className="text-2xl font-semibold mb-8 text-center">Contactanos</h3>
            <div className="flex gap-4 justify-center items-center">
                <p onClick={()=>handleCopy("esalassulca@gmail.com")}  className="mb-2 bg-primary/50 py-3 px-4 rounded-md flex gap-4 cursor-pointer" >
                    <span>esalassulca@gmail.com </span><CopyIcons />
                </p>
                <p onClick={()=> handleCopy("927859435")}  className="mb-2 bg-primary/50 py-3 px-4 rounded-md flex gap-4 cursor-pointer"><span >927 859 435</span><CopyIcons /></p>
                
            </div> 
        </div>
    );
}

export default Contact;