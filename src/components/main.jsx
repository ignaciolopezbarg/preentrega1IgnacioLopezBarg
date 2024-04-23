import React, { useState } from "react";
import ImageList from "./ImageList";
import ItemList from "./ItemList";


function Main() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      
      <ImageList setSelectedItem={setSelectedItem} />
      {selectedItem && <ItemList selectedItem={selectedItem} />}
      
    </>
  );
}

export default Main;



