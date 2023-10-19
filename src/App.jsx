// Dependencies
// React
import { useEffect, useState } from 'react'
// Firebase
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function App() {
  // USeStates 
  const [productosData, setProductosData] = useState([]);
  const [categories, setCategories] = useState([])


  // firebase keys
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyBMQ7zPjGGL6mOhNQ9TFHXUwGBD-3UkGPM",
    authDomain: "sweet-bites-922e3.firebaseapp.com",
    projectId: "sweet-bites-922e3",
    storageBucket: "sweet-bites-922e3.appspot.com",
    messagingSenderId: "21633216899",
    appId: "1:21633216899:web:9457a17b18cfe4246686b6",
    measurementId: "G-V459BW9BRQ"
  })

  useEffect(() => {
    // se inicializa una constante con la funcion de getFirestore con los keys de firebaseApp
    const db = getFirestore(firebaseApp);
    
    // se trae la coleccion 
    const productos = collection(db, 'productos');
    
    // se hace un 'fetch' de firebase
    getDocs(productos)
      .then((querySnapshot) => {
        // inicializamos un arreglo que pueda ser mutado
        const productosArray = [];
        querySnapshot.forEach((doc) => {
          productosArray.push(doc.data())
        })
        // Para poder almacenar en el array iniciado con useState
        setProductosData(productosArray); // Almacena los datos en el estado.
      })
      .catch((error) => {
        console.error('Error al obtener los documentos:', error);
      });
  }, []);

  // Crear un array de categorias
  useEffect(() => {
      const tempCategories = []
      productosData.forEach((product) => {
        if (!tempCategories.includes(product.type)){
          tempCategories.push(product.type)
        }
      })
      setCategories(tempCategories)
  },[productosData])


  return (
    <>
    <h1>Hello world</h1>
    </>
  )
}

export default App
