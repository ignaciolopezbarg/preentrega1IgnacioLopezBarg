// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronDown } from 'lucide-react';

// function FunkosMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   const subMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={subMenu}
//         className="hover:bg-teal-300 rounded-md px-2 py-1 flex items-center focus:outline-none "
//       >
//         <span className="">Funkos</span>
//          <ChevronDown  />
//       </button>
//       {isOpen &&  (
//         <div className=" absolute top-full left-0  bg-black shadow-lg rounded-md p-2">
//           <Link to="/funkos/harry_potter" className="block hover:text-blue-500">
//            <span className='submenu__title'> harry_potter</span>
//           </Link>
//           <Link to="/funkos/pokemon" className="block hover:text-blue-500">
//             <span className='submenu__title'>pokemon</span>
//           </Link>
//           <Link to="/funkos/stars_wars" className="block hover:text-blue-500">
//            <span className='submenu__title'>stars_wars</span> 
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }

// export default FunkosMenu;
