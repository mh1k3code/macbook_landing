
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import {ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger )


function App (){
    return(
      <>
       <NavBar/>
       <Hero/>
       <ProductViewer/>
      </>
    
    );
}

export default App