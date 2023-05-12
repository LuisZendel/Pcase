import Image from "next/image"

const PhoneCase = ({image, description, price, nombre, addCar, id, e}) =>{
    return(
        <div className="p-4 justify-center items-center w-full my-3 mx-auto rounded rounded-md broder-px border shadow-lg shadow-pink-200/40 bg-white">
            <div className="flex justify-center">
            <Image src={image}
            alt="Producto"
            width={180}
            height={100}/>
            </div>
            <div className="flex justify-center content-center">
            <p className="">{nombre}</p>
            </div>
            <div className="flex justify-center font-semibold">
            <p>{price}</p>
            </div>
            <div className="justify-center content-center mt-1 flex">
                <button className="mx-2 bg-pink-100 px-3 h-7 justify-center content-center rounded-md flex w-max"
                onClick={()=>{addCar(e)}}>Añadir <span className="hidden sm:flex">, al carrito</span></button>
            </div>
        </div>
    )
}

export default PhoneCase