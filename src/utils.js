import { getFirestore, getDocs,getDoc, doc, collection,query, where, orderBy,limit, startAt, endAt } from "firebase/firestore";
import { app } from "./firebase";

export const getProducts = () => {
  const db = getFirestore(app);

  const muñecosCollection = collection(db, "muñecos");

  const consulta = getDocs(muñecosCollection);

  return consulta
    .then((resultado) => {
      //resultado==lo que viene de la bd
      //resultado.docs es un array, trae una propiedad que sirve, es el id, (resultado.docs.id) pero para verlos lo mapeo, con una funcion que se llama data, que trae todo menos el id
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
     const db = getFirestore(app)
     const muñecosCollection = collection(db, "muñecos")
     const filtro = query(muñecosCollection,where("category", "==", "categoria"))
     const consulta = getDocs(filtro)
     return consulta
     .then((resultado) => {
      
       const productos = resultado.docs.map((doc) => {
       
        const producto = doc.data()
         producto.id = doc.id

         return producto;
       });
       return productos;
     })
     .catch((error) => {
       console.log(error);
     });
 };

 export const getProductsFromCategories2 = () => {
//     const db = getFirestore(app)
//     const muñecosCollection = collection(db, "muñecos")
//     const filtro = query(muñecosCollection,where("category", "==", "starswars"))
//     const consulta = getDocs(filtro)
//     return consulta
//     .then((resultado) => {
      
//       const productos = resultado.docs.map((doc) => {
       
//         const producto = doc.data()
//         producto.id = doc.id

//         return producto;
//       });
//       return productos;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
 };

 export const getProductsFromCategories3 = () => {
//     const db = getFirestore(app)
//     const muñecosCollection = collection(db, "muñecos")
//     const filtro = query(muñecosCollection,where("category", "==", "harrypotter"))
//     const consulta = getDocs(filtro)
//     return consulta
//     .then((resultado) => {
      
//       const productos = resultado.docs.map((doc) => {
       
//         const producto = doc.data()
//         producto.id = doc.id

//         return producto;
//       });
//       return productos;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
 };

  export const getProductDetail = (id) => {
     const db = getFirestore(app)
     const muñecosCollection = collection(db,"muñecos")
     const filtro = doc(muñecosCollection,id )
     const consulta = getDoc(filtro) 

   return consulta
     .then ((resultado)=>{
        
         const producto = resultado.data()
         producto.id = resultado.id
         return producto
    })
   .catch((error)=>{
         console.log(error)
     })
      }


export const createSale = () => {};
