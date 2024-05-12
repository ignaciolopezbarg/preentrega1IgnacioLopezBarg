import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UsersCardList from "./UsersCardList";
import { getProducts, getProductsFromCategories } from "../../utils";

function UsersCardContainer() {

  const [characters, setCharacters] = useState([]);
  const params = useParams();

  useEffect(()=>{

    if (params.category) {
      getProductsFromCategories(params.category)
      .then((resultado) => {
        setCharacters(resultado)
      })
    } else {
      getProducts()
      .then((resultado) => {
        setCharacters(resultado);
      })
    }

},[params.category])

return (
  <div>
    <h2 className=" mb-6 text-4xl font-bold">PERSONAJES</h2>
    <UsersCardList characters={characters} />

  </div>
)
}
export default UsersCardContainer
