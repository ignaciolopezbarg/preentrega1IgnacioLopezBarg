import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../utils";
import { app } from "../firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

function ImageList({ setSelectedItem }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
   
    //const app = initializeApp(firebaseConfig)
    //acceso a la bd del proyecto(getFirestore)
  //  const db = getFirestore(app);
    //acceso a mi coleccion (que se llama id)
  //  const idCollection = collection(db, "id");
  //  const query = getDocs(idCollection);

   // query
    //  .then((resultado) => {
        //       console.log(resultado);
        //       console.log(resultado.docs); //valores que trae la consulta
        //       console.log(resultado.empty)
        //       console.log(resultado.size)
     //   const productos = resultado.docs.map((doc) => {
       //   return doc.data();
       // })
       // setImages(productos)
      })
    //  .catch((error) => {
    //    console.log(error);
   //   });
 // });

  //    fetch("/imagenes.json")
  //      .then((response) => {
  //        if (!response.ok) {
  //          throw new Error("Error al cargar los datos");
  //        }
  //        return response.json();
  //      })
  //      .then((data) => {
  //        setImages(data);
  //      })
  //      .catch((error) => {
  //        console.error("Error busqueda de los datos:", error);
  //     });
  //  }, []);

  const handleBuyClick = (itemId) => {
    const selectedItem = images.find((image) => image.id === itemId);
    setSelectedItem(selectedItem);
  };

  return (
    <div>
      <div>
        <p className="text-4xl text-blue-500 text-bold text-center">
          Bienvenidos a FUNKOSHOP
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4 mx-auto max-w-7xl">
        {images.map((image, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <img
              src={`/img/${image.img}`}
              alt={image.name}
              className="w-full"
            />
            <div className="p-4">
              <p className="text-lg font-semibold">{image.name}</p>
              <Link
                to={`/item/${image.id}`}
                onClick={() => handleBuyClick(image.id)}
                className="bg-slate-400 w-full rounded-md font-serif text-sm text-white mt-2"
              >
                Ver Detalle
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageList;