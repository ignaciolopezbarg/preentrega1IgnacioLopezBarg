// import React, { useState } from "react";
// import ImageList from "./ImageList";
// import ItemList from "./ItemList";
// import Saludo from "./saludo";

// function Main() {
//   const [selectedImageItem, setSelectedImageItem] = useState(null);
//   const [selectedListItem, setSelectedListItem] = useState(null);

//   return (
//     <>
//       <Saludo />
//       <ImageList setSelectedItem={setSelectedImageItem} />
//       <ItemList selectedItem={selectedListItem} />
//     </>
//   );
// }

// export default Main;
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
      <ItemList selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
    </>
  );
}

export default Main;



