import Navbar from "../../components/navbar/Navbar"
import PhoneCasePage from "../../components/navbar/products/PhoneCasePage"
import { useRouter } from "next/router"
import data from "./data.json"
import { useState } from "react"
const Product = ({products}) => {
    const router = useRouter();

    const [producto, setProducto] = useState([])



    const getData = () => {
        setProducto(data);
    }
    return(
        <div className="bg-white h-screen w-screens">
            <Navbar />
            <br/>
            <br/>
            <div className="mt-10 flex">
                <PhoneCasePage image={"/case1.jpg"} price="$540" description={"description"} />
            </div>
            <div>{router.query.category}</div>
            <button onClick={getData}>A</button>
            {producto.map(e=>{
                return(
                <div key={e.id}>{e.id}</div>
                )
            })}
        </div>
    
    )
}

export default Product

