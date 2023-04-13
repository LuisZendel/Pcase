import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAndroid, faBars, faMobileButton, faShoppingCart, faHome, faCircleInfo} from '@fortawesome/free-solid-svg-icons'
import OptionMenu from "./OptionMenu"
import { useState } from "react"

const Navbar = () =>{
    const [dropdownMenu, activeMenu] = useState(true)
    const changeValue = () => {
        activeMenu(dropdownMenu => !dropdownMenu)
    }
    return(
        <div className="flex bg-pink-200 items-center p-4 shadow-lg text-xl fixed w-screen">
            <div className="flex-1">
                <p>Shop</p>
            </div>
            <div className="flex-1">

            </div>
            <div className="flex-1 items-end">
                <div className="flex items-end justify-end	text-xl	 hover:text-current  ">
                <button className="mr-5"
                    onClick={() => changeValue()}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
                <button className={dropdownMenu ? "w-min h-min transform rotate-180 transition duration-300" : "w-min h-min transition duration-300"} 
                    onClick={() => changeValue()}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
                </div>
                <div className={dropdownMenu ? "absolute mt-3.5 bg-white right-0 w-2/3 rounded-md transition-opacity duration-300 opacity-100" : " transition-opacity opacity-0 absolute mt-3.5 bg-white right-0 w-none rounded-md"}>
                    <ul>
                    <OptionMenu itemName={faHome} title="Inicio" link="http://192.168.1.69:3000"/>
                    <OptionMenu itemName={faMobileButton} title="Iphone" link="http://192.168.1.69:3000/iphone"/>
                    <OptionMenu itemName={faMobileAndroid} title="Android"/>
                    <OptionMenu itemName={faCircleInfo} title="Informacion"/>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}


export default Navbar