import Image from "next/image"


const PhoneCasePage = ({image, description, price}) => {
    return(
        <div className="bg-white h-screen w-screen">
            <div>
                {/*Descripcion*/ }
            </div>
            <div className="block">
                <div className="flex justify-center content-center">
                    <Image
                    alt="Imagend e producto"
                    width={200}
                    height={100}
                    src={image}
                    />
                </div>
                <div>
                    <div className="mt-2 text-2xl justify-center content-center flex">Funda tal</div>
                    <div className=" p-3 text-2xl">{price}</div>
                    <div className=" p-3 flex ">{description}</div>
                </div>
                <div className="flex justify-center">
                    <button
                    className="flex justify-center content-center w-screen mx-4 rounded-md bg-pink-100 h-7 justify-center"
                    >Añadir a carrito</button>
                </div>
            </div>
        </div>
    )
}

export default PhoneCasePage