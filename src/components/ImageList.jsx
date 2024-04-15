import React, { useState, useEffect } from "react";

function ImageList() {
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
        console.error("Error busqueda de los datos:", error);
      });
  }, []);

  return (
    <div className="flex flex-wrap ml-10 max-w-1200 mx-auto ">
     
      {images.map((image) => (
        
        <div key={image.id} className="m-2 flex flex-col items-center border-2 solid rounded-xl">
          <img
            src={`/img/${image.img}`}
            alt={image.name}
            className="w-48 h-48 object-cover  "
          />
          <div className="mt-2  gap-2 flex flex-col items-center md:flex-row md:justify-between">
            <p className="text-xxs font-bold">{image.name}</p>
            <button className="bg-slate-400 w-14 h-6 rounded-md font-serif text-sm text-white">
              comprar
            </button>
          </div>
        </div>
      ))}
      
    </div>
  );
}
export default ImageList;
