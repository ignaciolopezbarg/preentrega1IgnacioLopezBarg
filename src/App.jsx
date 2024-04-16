import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Main from "./components/main.jsx";
import Ofertas from "./pages/Contacto.jsx";
import Contacto from "./pages/Contacto.jsx";
import harry_potter from "./pages/harry_potter.jsx";
import pokemon from "./pages/pokemon.jsx";
import stars_wars from "./pages/stars_wars.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Ofertas" element={<Ofertas />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/" element= {<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
