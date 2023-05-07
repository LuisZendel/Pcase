import Navbar from "../components/navbar/Navbar";
import Image from "next/image";
import Carousel from "../components/Carousel";
export default function Home() {
  const image = ["/Portada.png","/iphone.jpg"]
  return (
    <div className="bg-white h-screen w-screen">
      <Navbar />
      <br />
      <div className="mt-14">
        <div className="mx-4 overflow-hidden flex">
          <Image
            src={"/inicio/main.jpeg"}
            alt="Logo"
            width={300}
            height={100}
          />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2">
        <div className="flex">
        <Image src="/Portada.png" alt="Logo" width={600} height={100} className="md:mx-auto"/>

        </div>
        <div className="flex">
        <Image src="/iphone.jpg" alt="iphone" width={600} height={100} className="md:mx-auto" />
</div>
      </div>
      <Carousel images={image}/>
      <div className="mt-5 w-3/4 flex ml-auto mr-auto justify-center aling-center content-center text-2xl font-bold">
        <h1>¿Qué Somos?</h1>
      </div>
      <div className="mt-5 w-3/4 flex ml-auto mr-auto justify-center aling-center content-center">
        <p>
          ¡Hola! Bienvenido a nuestra tienda en línea especializada en artículos
          para dispositivos móviles. Estamos entusiasmados de presentarte
          nuestra amplia selección de productos, que incluyen fundas,
          cargadores, audífonos y mucho más. Sabemos lo importante que son los
          dispositivos móviles en tu vida cotidiana, y es por eso que nos
          dedicamos a ofrecerte los mejores accesorios para mejorar tu
          experiencia móvil. En nuestra tienda en línea, encontrarás productos
          de alta calidad y de las marcas más reconocidas del mercado. Nuestro
          objetivo es brindarte una experiencia de compra fácil y sin problemas,
          con envíos rápidos y un servicio al cliente excepcional. Desde fundas
          resistentes para proteger tu dispositivo hasta cargadores portátiles
          para mantener tu teléfono cargado todo el día, nuestra tienda en línea
          tiene todo lo que necesitas para mantener tus dispositivos móviles en
          excelente estado. Estamos comprometidos con ofrecerte los mejores
          productos a precios competitivos. ¡Gracias por elegirnos como tu
          tienda en línea de accesorios para dispositivos móviles! Estamos
          emocionados de ser parte de tu experiencia móvil y esperamos ayudarte
          a encontrar el accesorio perfecto para ti.
        </p>
      </div>
    </div>
  );
}

