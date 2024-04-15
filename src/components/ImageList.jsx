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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-7xl">
  {images.map((image, index) => (
    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
      <img
        src={`/img/${image.img}`}
        alt={image.name}
        className="w-full"
      />
      <div className="p-4">
        <p className="text-lg font-semibold">{image.name}</p>
        <button className="bg-slate-400 w-full rounded-md font-serif text-sm text-white mt-2">
          Comprar
        </button>
      </div>
    </div>
  ))}
</div>

  );
}
export default ImageList;

