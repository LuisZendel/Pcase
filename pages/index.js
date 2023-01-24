import Navbar from "../components/navbar/Navbar"
import Image from "next/image"
export default function Home() {
  return (
    <div className="bg-white h-screen w-screen">
      <Navbar />
      <br/>
      <div className="mt-14">
        <Image src="/Portada.png" alt="Logo" width={600} height={100}/>
      </div>
      <div className="mt-5">
        <Image src="/iphone.jpg" alt="iphone"  width={600} height={100}/>
      </div>
      <div className="mt-5 bg-[url('/public/iphone.jpg')]">
      <p>Hola</p>
      </div>
    </div>
  )
}