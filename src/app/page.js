import Image from "next/image";
import Welcome from "./welcome";
import Nav from "./Nav";
export default function Home() {
  return (
    <div className="bg-white"> <div>
      <Nav />

    </div>
      <div><Welcome /></div></div>
   
  
  );
}
