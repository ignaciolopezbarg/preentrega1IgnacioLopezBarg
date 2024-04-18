import React, { useState } from "react";
import ImageList from "./ImageList";
import ItemList from "./ItemList";
import Saludo from "./saludo";

function Main() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Saludo />
      <ImageList setSelectedItem={setSelectedItem} />
      {selectedItem && <ItemList selectedItem={selectedItem} />}
    </>
  );
}

export default Main;



