import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Pokemon() {
  const { category } = useParams();
  const [pokemonItems, setPokemonItems] = useState([]);

  useEffect(() => {
    fetch('/imagenes.json')
      .then(response => response.json())
      .then(data => {
        const pokemonItems = data.filter(item => item.category === 'pokemon');
        setPokemonItems(pokemonItems);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {pokemonItems.map(item => (
        <div key={item.id} className="bg-gray-200 p-4">
          <img src={`/img/${item.img}`} alt={item.name} className="mx-auto" />
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p className="text-gray-700">{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Pokemon;



