// function Fetch() {
//   return fetch("http://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//       const data = res.json();
//       return data;
//     })
//     .then((res) => { 
//       console.log(res);
//       console.log("todo bien");
//     })
//     .catch((err) => {
//       console.log(err);
//       console.log("todo mal");
//     });
// }

// export default Fetch;


// //
//  const imageUrl = 'https://raw.githubusercontent.com/ignaciolopezbarg/funkos_img/main/1.jpg';


// fetch(imageUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.blob();
//   })
//   .then(blob => {
    
//     const imgUrl = URL.createObjectURL(blob);
    
//     console.log(imgUrl);
//   })
//   .catch(error => {
//     console.error('Hubo un problema con la operación fetch:', error);
//   });


   
// fetch('https://6617d551ed6b8fa43483e4b0.mockapi.io/api/v1/pokemon')
// .then(response => {
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// })
// .then(data => {
  
//   data.forEach(item => {
    
//     const imageUrl = item.avatar;
    
//   });
// })
// .catch(error => {
//   console.error('There was a problem with the fetch operation:', error);
// });


// import React, { useState, useEffect } from 'react';

// function Gallery() {
//   const [imageList, setImageList] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await fetch('https://api.github.com/repos/ignaciolopezbarg/funkos_img/contents/images');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         const images = data.filter(item => item.type === 'file' && /\.(jpg|jpeg|png|gif)$/i.test(item.name));
//         setImageList(images);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     fetchImages();
//   }, []);

//   return (
//     <div className="gallery">
//       {imageList.map((image, index) => (
//         <img key={index} src={image.download_url} alt={image.name} />
//       ))}
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('//github.com/ignaciolopezbarg/funkos_img.git');
        if (!response.ok) {
          throw new Error('Error al cargar la imagen');
        }
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
      } catch (error) {
        console.error('Error al cargar la imagen:', error);
      }
    };

    fetchImage();

    // Limpiar la URL del objeto cuando el componente se desmonte para evitar memory leaks
    return () => URL.revokeObjectURL(imageSrc);
  }, []); // Ejecutar solo una vez al montar el componente

  return (
    <div>
      {imageSrc && <img src={imageSrc} alt="Imagen" />}
    </div>
  );
};

export default MyComponent;




  