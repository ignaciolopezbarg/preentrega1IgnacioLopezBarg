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
    return;

    <div>Esperando carga...</div>;
  }

  return (
    <>
      <div>
        <h1 className="item__encabezado p-5 flex justify-center text-3xl font-bold"> BIENVENIDO A LA PAGINA DE COMPRAS </h1>
      </div>

      <div
        className=" flex flex-col p-1  justify-center  grid-cols-1 
     gap-4 mx-auto max-w-8xl"
      >
        {selectedItem && (
          <div className="border border-gray-700 bg-slate-300 rounded-lg overflow-hidden shadow-lg">
            <img
              src={`/img/${selectedItem.img}`}
              alt={selectedItem.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className=" ml-20 text-lg font-semibold mb-2">
                {selectedItem.name}
              </p>
              <p className="text-gray-700 font-bold text-xl  ml-20">
                {selectedItem.price}
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2 ml-20">
                Comprar
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ItemList;
