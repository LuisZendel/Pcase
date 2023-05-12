import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAndroid,
  faBars,
  faMobileButton,
  faShoppingCart,
  faHome,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import OptionMenu from "./OptionMenu";
import { useState } from "react";
import Image from "next/image";

const Navbar = ({ contador, shopping, setShopping, setContador }) => {
  const [dropdownMenu, activeMenu] = useState(false);
  const [dropdowCart, setCart] = useState(false);
  

  const changeValue = () => {
    activeMenu((dropdownMenu) => !dropdownMenu);
  };
  const eliminarProducto  = (index) => {
    var aux = [...shopping]
    aux.splice(index,1)
    setShopping(aux)
    setContador(aux.length)
  }
  return (
    <div className="z-10 flex bg-pink-200 dark:bg-pink-200 items-center p-4 shadow-lg text-xl fixed w-screen">
      <div className="flex-1">
        <p>Shop</p>
      </div>
      <div className="flex-1"></div>
      <div className="flex-1 items-end">
        <div className="flex items-end justify-end	text-xl	 hover:text-current  ">
          <button
            className="mr-5"
            onClick={() => {
              setCart(!dropdowCart);
            }}
          >
            <FontAwesomeIcon icon={faShoppingCart} className="relative z-10" />
            {contador > 0 ? (
              <div className="absolute top-3 w-3 z-10 text-xs bg-red-500 rounded rounded-full">
                {contador}
              </div>
            ) : (
              <></>
            )}
          </button>
          <button
            className={
              dropdownMenu
                ? "w-min h-min transform rotate-180 transition duration-300"
                : "w-min h-min transition duration-300"
            }
            onClick={() => changeValue()}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div
          className={
            dropdownMenu
              ? "absolute mt-3.5 bg-white right-0  w-full sm:w-2/3 rounded-md transition-opacity duration-300 opacity-100"
              : " hidden"
          }
        >
          <ul>
            <OptionMenu itemName={faHome} title="Inicio" link="/" />
            <OptionMenu
              itemName={faMobileButton}
              title="Fundas"
              link="/fundas"
            />
            <OptionMenu itemName={faMobileAndroid} title="Accesorios" link={"/audifonos"} />
            <OptionMenu itemName={faCircleInfo} title="Informacion" />
          </ul>
        </div>
          <div
            className={
                dropdowCart ?
              "absolute mt-3.5 bg-white right-0  w-full sm:w-2/3 rounded-md transition-opacity duration-300 opacity-100" 
              : "hidden"
            }
          >
            <ul>
              {shopping.map((e, index) => {
                return (
                  <div
                    key={index}
                    className="p-4 justify-center items-center w-full my-3 mx-auto rounded rounded-md broder-px border shadow-lg shadow-pink-200/40 bg-white grid grid-cols-2"
                  >
                    <div className="flex justify-center">
                      <Image
                        src={`/${e.imagen[0]}`}
                        alt="Producto"
                        width={180}
                        height={100}
                      />
                    </div>
                    <div>
                      <div className="flex justify-center content-center">
                        <p className="">{e.nombre}</p>
                      </div>
                      <div className="flex justify-center font-semibold">
                        <p>{e.costo}</p>
                      </div>
                      <button onClick={()=>{eliminarProducto(index)}}>Eliminar</button>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
       
      </div>
    </div>
  );
};

export default Navbar;
