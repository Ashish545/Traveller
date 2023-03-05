import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./componenets/Navbar";

import "./App.css"
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App(){
  return(
    <div className="App">

    <BrowserRouter>


      {/* <Navbar/> */}

      <Routes>

        <Route exact path="/" element={<Home/>}/>


        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/service" element={<Service/>}/>
        <Route exact path="/contact" element={<Contact/>}/>


      </Routes>
    
    
    </BrowserRouter>
    
    
    
    </div>
  )
}

export default App;