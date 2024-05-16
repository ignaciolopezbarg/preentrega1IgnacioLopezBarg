import { BrowserRouter } from "react-router-dom";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import CarritoProvider from "../../contexto.jsx";
import "../../contexto.jsx";
import { ToastContainer  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import Contacto from "../../pages/Contacto.jsx";


function App() {
  //const [images, setImages] = useState([]);

  // useEffect(() => {
  //   fetch("/imagenes.json")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Error al cargar los datos");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setImages(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error al buscar los datos:", error);
  //     });
  // }, []);

  return (
    <BrowserRouter>
     <CarritoProvider >
      <Header />
      <Main />
      <Footer />
     </CarritoProvider>
     <ToastContainer />
    </BrowserRouter>
  );
}

export default App;


