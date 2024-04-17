import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItemList({ selectedItem, setSelectedItem }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/imagenes.json");
        if (!response.ok) {
          throw new Error("Error al cargar los datos de las imágenes");
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error al buscar los datos de las imágenes:", error);
      }
    };

    fetchData();
  }, []);

  const handleBuyClick = (itemId) => {
    setSelectedItem(itemId);
  };

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-7xl">
      
    
      {images.map((image, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <img src={`/img/${image.img}`} alt={image.name} className="w-full" />
          <div className="p-4">
            <p className="text-lg font-semibold">{image.name}</p>
            <button
              onClick={() => handleBuyClick(image.id)}
              className="bg-slate-400 w-full rounded-md font-serif text-sm text-white mt-2"
            >
              Comprar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;



