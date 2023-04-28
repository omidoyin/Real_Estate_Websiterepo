import React from "react";
import Best from "./components/best/Best";
import featured from "./components/featured/featured";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";


const App = ()=>{
 return(
     <div>
         <Navbar/>
         <Hero/>
         <Best/>
         <featured/>
      
 
 
     </div>
 
 
 );
}

export default App;