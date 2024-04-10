import Header from "./components/header.jsx";
import Main from "./components/main.jsx";
import Footer from "./components/footer.jsx";
import { BrowserRouter } from "react-router-dom";

/*import fetch_pruebas from "./components/fetch_pruebas.jsx";*/

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <BrowserRouter />

      {/* <fetch_pruebas /> */}
    </>
  );
}

export default App;
