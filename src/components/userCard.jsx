import { useState } from "react";

// function UserCard(props) {
//   const [counter, setCounter] = useState(0);

//   const handleClick = () => {
//     setCounter(counter + 1);
//   }

  return (
    <div className="user-Card">
      <img src="https://picsum.photos/200" alt="" />
      <h3> {props.nombre} </h3>
      <button className="bg-slate-600 w-10 h-5 border-solid- rounded-md font-serif text-sm text-white">
        ver info
      </button>
      <button className="bg-slate-700 w-8 h-4 border-solid- rounded-md font-serif text-sm text-red onClick={handleClick}">like <span> {counter} </span></button>
    </div>
  );


export default UserCard;
