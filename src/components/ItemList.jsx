
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
    return 
    <div >
Esperando carga...
    </div>; 
  }

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-7xl">
      {selectedItem && (
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
          <img src={`/img/${selectedItem.img}`} alt={selectedItem.name} className="w-full h-64 object-cover" />
          <div className="p-4">
            <p className="text-lg font-semibold mb-2">{selectedItem.name}</p>
            <p className="text-gray-700">{selectedItem.price}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2">
              Comprar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemList;




