
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemList() {
  const { itemId } = useParams();
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

  const selectedItem = images.find((image) => image.id === itemId);

  if (!selectedItem) {
    return <div>Loading...</div>; // O cualquier indicador de carga que desees mostrar
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <img src={`/img/${selectedItem.img}`} alt={selectedItem.name} className="w-full" />
      <div className="p-4">
        <p className="text-lg font-semibold">{selectedItem.name}</p>
        <p className="text-lg font-semibold">{selectedItem.price}</p>
      </div>
    </div>
  );
}

export default ItemList;




