import Navbar from "../../components/navbar/Navbar"
import PhoneCase from "../../components/navbar/products/phonecase"
export default function Home() {
  return (
    <div className="bg-white h-screen w-screen">
      <Navbar />
      <br/>
      <div className="mt-14 flex">
      <PhoneCase image={"/case1.jpg"} price="$540" description={"description"}/>
      <PhoneCase image={"/case2.jpg"} price="$540" description={"description"}/>

      
      </div>
      <div className="mt-5 flex">
      <PhoneCase image={"/case3.jpg"} price="$540" description={"description"}/>
      <PhoneCase image={"/case4.jpg"} price="$540" description={"description"}/>
      
      </div>
    </div>
  )
}