import { Route, Routes } from "react-router-dom";
import ImageList from "./ImageList";
import Ofertas from "../pages/Ofertas";
import Contacto from "../pages/Contacto";
import Saludo from "./saludo";
import ItemListContainer from "./itemListContainer";

function Main() {
  return (
    <>
      <Saludo />
      <Routes>
         <Route path="/Ofertas" element={<Ofertas />} /> 
         <Route path="/Contacto" element={<Contacto />} /> 
        <Route path="/" element={<ImageList />} />
        <Route path="/img/:id" element={<itemListContainer />} />
      </Routes>
      
      <ImageList />
    </>
  );
}

export default Main;


 