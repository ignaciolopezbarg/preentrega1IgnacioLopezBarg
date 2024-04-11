import { BrowserRouter } from "react-router-dom";
import Header from "./components/header.jsx";
// import Main from "./components/main.jsx";
import Footer from "./components/footer.jsx";


// import Fetch from "./components/fetch_pruebas.jsx";
// import Gallery from "./components/fetch_pruebas.jsx";

function App() {
  return (
    <BrowserRouter>
       <Header /> 
       <Footer />   
    </BrowserRouter>
  )
}

export default App
