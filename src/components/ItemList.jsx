
import React, { useState, useEffect } from "react";

function ItemList({ selectedItem }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/imagenes.json"); 
        if (!response.ok) {
          throw new Error("Error al cargar los datos del producto");
        }
        const data = await response.json();
        const selectedProduct = data.find((item) => item.id === selectedItem.id);
        setProduct(selectedProduct);
      } catch (error) {
        console.error("Error al cargar los datos del producto:", error);
      }
    };

    fetchData();
  }, [selectedItem]);

  return (
    <div>
      <h1>PAGINA DE COMPRA DEL PRODUCTO SELECCIONADO</h1>
      {product && (
        <div>
          <img src={`/img/${product.img}`} alt={product.name} />
          <p>{product.name}</p>
          <p>{product.price}</p>
          
        </div>
      )}
    </div>
  );
}

export default ItemList;


