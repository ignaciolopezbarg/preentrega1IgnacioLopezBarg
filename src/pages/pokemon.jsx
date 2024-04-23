import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Pokemon() {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/imagenes.json') // Reemplaza 'tu_archivo.json' con la ubicación de tu archivo JSON
      .then(response => response.json())
      .then(data => {
        const categoryItems = data.filter(item => item.category === category);
        setItems(categoryItems);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [category]);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {items.map(item => (
        <div key={item.id} className="bg-gray-200 p-4">
          <img src={item.img} alt={item.name} className="mx-auto" />
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p className="text-gray-700">{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Pokemon;


