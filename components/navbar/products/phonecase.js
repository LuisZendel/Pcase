import Image from "next/image"

const PhoneCase = ({image, description, price}) =>{
    return(
        <div className="p-4 justify-center content-center w-1/2">
            <div className="flex justify-center">
            <Image src={image}
            alt="Producto"
            width={180}
            height={100}/>
            </div>
            <div className="flex justify-center content-center">
            <p className="">{description}</p>
            </div>
            <div className="flex justify-center font-semibold">
            <p>{price}</p>
            </div>
            <div className="justify-center content-center mt-1 flex">
                <button className="mx-2 bg-cyan-400 px-3 h-7 justify-center content-center rounded-md flex w-max">Añadir a carrito</button>
            </div>
        </div>
    )
}

export default PhoneCase