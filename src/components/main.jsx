import imagen1 from "../img/mountain-bikes.jpg";
import ItemListContainer from './itemListContainer.jsx';
function Main() {
  return (
    <main className="h-screen p-2">
      <section
        className="p-10 w-auto"
        style={{
          border: "solid color:green solid",
          backgroundImage: `url(${imagen1})`,
          backgroundSize: "auto 100%",
          backgroundPosition: "center",
        }}
      ></section>
      <h2 class="flex justify-center p-3 text 2xl: bold">
        BIENVENIDOS A TODO 2RUEDAS2
      </h2>
      <section class="flex flex-col align items-center justify-center text-green-600 text-xl border-2 rounded 6 border-green-500  ">
      <ItemListContainer greeting="¡Hola desde Coder House!" />
      <ItemListContainer greeting="¡Hola desde React-Vite-Tailwind!!" />
      </section>
    </main>
  );
}
export default Main;
