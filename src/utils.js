import {
  getFirestore,
  getDocs,
  getDoc,
  doc,
  collection,
  query,
  where,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { app } from "./firebase";

export const getProducts = () => {
  const db = getFirestore(app);

  const muñecosCollection = collection(db, "muñecos");

  const consulta = getDocs(muñecosCollection);

  return consulta
    .then((resultado) => {
      const productos = resultado.docs.map((doc) => {
        console.log(doc.id);
        console.log(doc.data());
        console.log("_______________"); //para visualizar separando los console. Debemos agregar los id de cada producto a la data para poder luego usarlo cuando busque un solo producto por id:hago una const con los data y le sumo la propiedad id:
        const producto = doc.data();
        producto.id = doc.id;

        return producto;
      });
      return productos;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getProductsFromCategories = (categoria) => {
  const db = getFirestore(app);
  const muñecosCollection = collection(db, "muñecos");
  const filtro = query(muñecosCollection, where("category", "==", categoria));
  const consulta = getDocs(filtro);
  return consulta
    .then((resultado) => {
      const productos = resultado.docs.map((doc) => {
        const producto = doc.data();
        producto.id = doc.id;

        return producto;
      });
      return productos;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getProductDetail = async (id) => {
  try {
    const db = getFirestore(app);
    const muñecosCollection = collection(db, "muñecos");
    const filtro = doc(muñecosCollection, id);
    const consulta = await getDoc(filtro);

    if (consulta.exists()) {
      const producto = consulta.data();
      producto.id = consulta.id;
      return producto;
    } else {
      throw new Error("El producto no existe");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createSale = () => {
  const db = getFirestore(app);
  const salesCollection = collection(db, "ventas");
  const venta = {
    items: [],
    usuario: { nombre: "Nacho", tel: "123456", email: "gp@gam.com" },
    fechaDeCompra: serverTimestamp(),
    status: "pendiente",
    total: 0,
  };
  const consulta = addDoc(salesCollection, venta)
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.log(error);
    });
};
