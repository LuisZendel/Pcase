import Navbar from "../../components/navbar/Navbar"
import PhoneCasePage from "../../components/navbar/products/PhoneCasePage"


const Product = () => {
    return(
        <div>
            <div>
            <Navbar />
            </div>
            <div className="mt-4 flex">
                <PhoneCasePage image={"/case1.jpg"} price="$540" description={"description"} />
            </div>

        </div>
    
    )
}

export default Product