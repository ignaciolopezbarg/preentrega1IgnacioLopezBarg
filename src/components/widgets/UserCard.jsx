import { Link } from "react-router-dom";

const UserCard = ({ character }) => {
  const { img, name, id } = character;

  return (
    <div className=" p-4 mx-auto max-w">
        <div className="w-full">
      <img
        src={`/img/${character.img}`}
        alt={character.name}
        className=" w-full "
      />
      </div>
      <div>
      <h3 className="text-lg font-semibold">{character.name}</h3>
      <Link to={`/characters/${id}`}>Ver Detalles </Link> 
      </div>
    </div>
  )
};
export default UserCard;
