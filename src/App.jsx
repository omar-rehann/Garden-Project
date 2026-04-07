// Content Raect Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Homepage from "./pages/homepage";
import ServicesPage from "./pages/servicespage";
import Projectpage from "./pages/projectpage";
import Articel from "./components/articels/article";
import Contactus from "./components/contactus/contactus";

import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/service" element={<ServicesPage/>} />
        <Route path="/project" element={<Projectpage/>} />
        <Route path="/article" element={<Articel/>} />
        <Route path="/contactus" element={<Contactus/>} />

      </Routes>
          <Footer/>

      </BrowserRouter>
   
    </div>

  );
}

export default App;
