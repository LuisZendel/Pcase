import Navbar from "../components/navbar/Navbar";
import Image from "next/image";
import Carousel from "../components/Carousel";
import Link from "next/link";
import PhoneCase from "../components/navbar/products/phonecase";
import { useState } from "react";
export default function Home() {
  const image = ["/inicio/1.png", "/inicio/2.png"];
  const [shopping, setShopping] = useState([]);

  return (
    <div className="bg-white h-screen w-screen">
      <Navbar shopping={shopping}/>
      <br />
      <Carousel images={image} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Link
          className=" w-full sm:w-64 bg-pink-200 h-64 rounded rounded-md flex items-center justify-center mx-auto"
          href={"./fundas"}
        >
          <div>
            <Image width={100} height={100} src="/inicio/fundas.png" />
            <div className="flex mt-12">
              <p className="mx-auto ">Fundas</p>
            </div>
          </div>
        </Link>
        <Link
          className=" w-full sm:w-64 bg-pink-200 h-64 rounded rounded-md flex items-center justify-center mx-auto"
          href={"/audifonos"}
        >
          <div>
            <Image
              width={130}
              height={100}
              src="/inicio/audifonos.png"
              className="mb-10"
            />
            <div className="flex">
              <p className="mx-auto -mt-5">Audifonos</p>
            </div>
          </div>
        </Link>
        <div className=" w-full sm:w-64 bg-pink-200 h-64 rounded rounded-md flex items-center justify-center mx-auto">
          <div>
            <Image width={100} height={100} src="/inicio/cargadores.png" />
            <div className="flex mt-12">
              <p className="mx-auto ">Cargadores</p>
            </div>
          </div>
        </div>
        <div className=" w-full sm:w-64 bg-pink-200 h-64 rounded rounded-md flex items-center justify-center mx-auto">
          <div>
            <Image width={100} height={100} src="/inicio/accesorios.png" />
            <div className="flex mt-12">
              <p className="mx-auto ">Otros</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2">
        <div className="flex">
          <Image
            src="/Portada.png"
            alt="Logo"
            width={600}
            height={100}
            className="md:mx-auto"
          />
        </div>
        <div className="flex">
          <Image
            src="/iphone.jpg"
            alt="iphone"
            width={600}
            height={100}
            className="md:mx-auto"
          />
        </div>
      </div>
      <div className="mt-5 bg-gradient-to-r from-purple-200 to-pink-200 p-5 w-full md:flex bblock">
        <div className="md:w-1/3 flex justify-center items-center">
          <Image
            src={"/inicio/main.jpeg"}
            alt="Logo"
            width={300}
            height={100}
          />
        </div>
        <div className="md:w-2/3">
          <div className="mt-5 w-3/4 flex ml-auto mr-auto justify-center aling-center content-center text-2xl font-bold">
            <h1>¿Qué Somos?</h1>
          </div>
          <div className="mt-5 md:w-3/4 flex ml-auto mr-auto justify-center aling-center content-center mb-5">
            <p>
              ¡Hola! Bienvenido a nuestra tienda en línea especializada en
              artículos para dispositivos móviles. Estamos entusiasmados de
              presentarte nuestra amplia selección de productos, que incluyen
              fundas, cargadores, audífonos y mucho más. Sabemos lo importante
              que son los dispositivos móviles en tu vida cotidiana, y es por
              eso que nos dedicamos a ofrecerte los mejores accesorios para
              mejorar tu experiencia móvil. En nuestra tienda en línea,
              encontrarás productos de alta calidad y de las marcas más
              reconocidas del mercado. Nuestro objetivo es brindarte una
              experiencia de compra fácil y sin problemas, con envíos rápidos y
              un servicio al cliente excepcional. Desde fundas resistentes para
              proteger tu dispositivo hasta cargadores portátiles para mantener
              tu teléfono cargado todo el día, nuestra tienda en línea tiene
              todo lo que necesitas para mantener tus dispositivos móviles en
              excelente estado. Estamos comprometidos con ofrecerte los mejores
              productos a precios competitivos. ¡Gracias por elegirnos como tu
              tienda en línea de accesorios para dispositivos móviles! Estamos
              emocionados de ser parte de tu experiencia móvil y esperamos
              ayudarte a encontrar el accesorio perfecto para ti.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 text-2xl flex justify-center items-center">
        <p>Productos Más Vendidos</p>
      </div>
      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 mx-3 gap-3">
        <PhoneCase
          image={"/case1.jpg"}
          price="$540"
          description={"description"}
          nombre={"Funda Gatitos"}
        />
        <PhoneCase
          image={"/case2.jpg"}
          price="$540"
          description={"description"}
          nombre={"Funda Silicon"}
        />
        <PhoneCase
          image={"/audifonos5.jpeg"}
          price="$540"
          description={"description"}
          nombre={"Audifonos inalambricos"}
        />
        <PhoneCase
          image={"/case4.jpg"}
          price="$540"
          description={"description"}
          nombre={"Transparente uso rudo"}
        />
      </div>
    </div>
  );
}
