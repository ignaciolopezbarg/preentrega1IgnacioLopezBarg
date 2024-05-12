import Navbar from "./Navbar.jsx";
import {Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <header className="max-w-1200 mx-auto h-20 flex justify-between p-3 rounded-md text-white shadow-md bg-slate-500">
      <div className="container flex justify-between mx-auto">
        <Link to= "/">
      <h1 className="border-3-black pt-3 rounded-xl text-center text-4xl font-bold hover:bg-teal-200">
        FUNKOSHOP
      </h1>
      </Link>
      <Routes >
        <Route path="/elementos" elemento= {
          <input type="text" placeholder="elija una coleccion" className="p-1" />
        } />
      </Routes>
      <Navbar />
      </div>
    </header>
  );
}
export default Header;
