

 import Navbar from "./Navbar.jsx";

 function Header() {
  return (
    <header className="max-w-1200 mx-auto h-20 flex justify-between p-3 rounded-md text-white shadow-md bg-slate-500">
      <h1 className="border-3-black pt-3 rounded-xl text-center text-4xl font-bold hover:bg-teal-200">
        FUNKOSHOP
     </h1>
     
      <Navbar />
     </header>
  )
 }
 export default Header;
