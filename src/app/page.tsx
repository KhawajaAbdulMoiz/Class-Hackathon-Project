import Image from "next/image";
import Main from "./components/page";
import Two from "./components/laptop-page/page";
import Three from "./components/Category/page";
import Four from "./components/New Arrival/page";
import Five from "./components/Featured/page";
import Six from "./components/Discount/page";
import Banner from "./components/Banner/page";
import Footer from "./footer/footer";

export default function Home() {
  return (
  <div>
      <Main/>
      <Two/>
      <Three/>
      <Four/>
      <Five/>
      <Six/>
      <Banner/>
     
  </div>      
   
  );
}
