// Dependencies
// React
import { useEffect, useState } from "react";
// Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
//React routes Dom
import { Routes, Route } from "react-router-dom";

//Components
import Navbar from "./Components/Navbar/Navbar";

// Pages
import CArtPage from "./Pages/Cart/CArtPage";
import Homepage from "./Pages/Home/Homepage";
import ProductsPage from "./Pages/Products/ProductsPage";
import InitialModal from "./Components/InitialModal/InitialModal";

function App() {
  // USeStates
  const [productosData, setProductosData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [initialModal, setInitialModal] = useState(true);
  const [shoppingCart, setShoppingCart] = useState([]);

  // firebase keys
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyBMQ7zPjGGL6mOhNQ9TFHXUwGBD-3UkGPM",
    authDomain: "sweet-bites-922e3.firebaseapp.com",
    projectId: "sweet-bites-922e3",
    storageBucket: "sweet-bites-922e3.appspot.com",
    messagingSenderId: "21633216899",
    appId: "1:21633216899:web:9457a17b18cfe4246686b6",
    measurementId: "G-V459BW9BRQ",
  });

  useEffect(() => {
    // se inicializa una constante con la funcion de getFirestore con los keys de firebaseApp
    const db = getFirestore(firebaseApp);

    // se trae la coleccion
    const productos = collection(db, "productos");

    // se hace un 'fetch' de firebase
    getDocs(productos)
      .then((querySnapshot) => {
        // inicializamos un arreglo que pueda ser mutado
        const productosArray = [];
        querySnapshot.forEach((doc) => {
          productosArray.push(doc.data());
        });
        // Para poder almacenar en el array iniciado con useState
        setProductosData(productosArray); // Almacena los datos en el estado.
      })
      .catch((error) => {
        console.error("Error al obtener los documentos:", error);
      })
      .finally(() => {
        setTimeout(() => {
          setInitialModal(false);
        }, 1000);
      });
  }, []);

  // Crear un array de categorias
  useEffect(() => {
    const tempCategories = [];
    productosData.forEach((product) => {
      if (!tempCategories.includes(product.type)) {
        tempCategories.push(product.type);
      }
    });
    setCategories(tempCategories);
  }, [productosData]);

  const eliminarProducto = (id) => {
    const filteredData = shoppingCart.filter((item) => {
      return item.id !== id;
    });
    setShoppingCart(filteredData);
  };

  return (
    <div>
      {initialModal ? (
        <InitialModal />
      ) : (
        <div>
          <Navbar categories={categories} shoppingCart={shoppingCart} />
          <div className="mt-6 p-8">
            <Routes>
              <Route
                path="/"
                element={
                  <Homepage
                    categories={categories}
                    productosData={productosData}
                    setShoppingCart={setShoppingCart}
                    shoppingCart={shoppingCart}
                    eliminarProducto={eliminarProducto}
                  />
                }
              ></Route>
              <Route
                path="/carrito/"
                element={
                  <CArtPage
                    shoppingCart={shoppingCart}
                    eliminarProducto={eliminarProducto}
                  />
                }
              ></Route>
              {categories.map((item) => (
                <Route
                  key={`page_${item}`}
                  path={`/${item}/`}
                  element={
                    <ProductsPage
                      category={item}
                      productosData={productosData}
                      setShoppingCart={setShoppingCart}
                      shoppingCart={shoppingCart}
                      eliminarProducto={eliminarProducto}
                    />
                  }
                ></Route>
              ))}
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
