
import React from "react";

function ItemList({ selectedItem }) {
  console.log(selectedItem);
  return (
    <div>
      {selectedItem && (
        <div>
          <img src={`/img/${selectedItem.img}`} alt={selectedItem.name} />
          <p>{selectedItem.name}</p>
        
        </div>
      )}
    </div>
  );
}

export default ItemList;



