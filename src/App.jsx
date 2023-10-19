import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function App() {
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyBMQ7zPjGGL6mOhNQ9TFHXUwGBD-3UkGPM",
    authDomain: "sweet-bites-922e3.firebaseapp.com",
    projectId: "sweet-bites-922e3",
    storageBucket: "sweet-bites-922e3.appspot.com",
    messagingSenderId: "21633216899",
    appId: "1:21633216899:web:9457a17b18cfe4246686b6",
    measurementId: "G-V459BW9BRQ"
  })

  const [productosData, setProductosData] = useState([]);
  useEffect(() => {
    const db = getFirestore(firebaseApp);
    const productos = collection(db, 'productos');

    getDocs(productos)
      .then((querySnapshot) => {
        const productosArray = [];
        querySnapshot.forEach((doc) => {
          productosArray.push(doc.data());
        });
        setProductosData(productosArray); // Almacena los datos en el estado.
      })
      .catch((error) => {
        console.error('Error al obtener los documentos:', error);
      });
  }, []);



  const [count, setCount] = useState(0)

  return (
    <>
    <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
        <img src={productosData[1]?.image_url}/>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
