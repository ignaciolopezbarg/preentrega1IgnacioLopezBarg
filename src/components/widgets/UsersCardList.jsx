import UserCard from "./UserCard";

function UsersCardList({ characters }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {characters.map((character) => {
        return <UserCard key={character.id} character={character} />;

      })}
    </div>
  )
}
export default UsersCardList;
