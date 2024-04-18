
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Main from "./components/main.jsx";
import Ofertas from "./pages/Ofertas.jsx";
import Contacto from "./pages/Contacto.jsx";
import HarryPotter from "./pages/HarryPotter.jsx";
import StarsWars from "./pages/StarsWars.jsx";
import Pokemon from "./pages/Pokemon.jsx";
import ItemList from "./components/ItemList.jsx";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/imagenes.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los datos");
        }
        return response.json();
      })
      .then((data) => {
        setImages(data);
      })
      .catch((error) => {
        console.error("Error al buscar los datos:", error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Ofertas" element={<Ofertas />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/" element={<Main />} />
        <Route path="/funkos/harry_potter" element={<HarryPotter />} />
        <Route path="/funkos/stars_wars" element={<StarsWars />} />
        <Route path="/funkos/pokemon" element={<Pokemon />} />
        <Route path="/item/:itemId" element={<ItemList images={images} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

