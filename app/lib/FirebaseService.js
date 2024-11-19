import { products, coupons } from "./placeholder-data";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: "sweet-bites-fa085.firebaseapp.com",
  projectId: "sweet-bites-fa085",
  storageBucket: "sweet-bites-fa085.firebasestorage.app",
  messagingSenderId: "193035648112",
  appId: "1:193035648112:web:cdcae90b5bda6c32fcc8b5",
  measurementId: "G-T55RK981EV",
};

class DataService {
  async firebaseInyection() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    for (const element of products) {
      try {
        // Generar un documento con un ID aleatorio
        const docRef = await doc(collection(db, "products"));
        const id = docRef.id;
        // Guardamos el documento con el id generado
        await setDoc(docRef, {
          id,
          title: element.title,
          price: element.price,
          description: element.description,
          category: element.category,
          images: element.images,
          rating: element.rating,
          special_product: element.special_product,
        });
        console.log("Documento guardado con exito, bajo el Id: ", id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }
  async fetchData() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const productsCollection = collection(db, "products");
    const productsSnapShot = await getDocs(productsCollection);
    const products = productsSnapShot.docs.map((doc) => doc.data());
    return products;
  }

  async fetchCategories() {
    const categories = [];
    try {
      const allProducts = await this.fetchData();
      allProducts.forEach((product) => {
        if (!categories?.includes(product.category)) {
          categories.push(product.category);
        }
      });
    } catch (error) {
      console.log("Error realizando fetch de categorias ", error);
    }
    return categories;
  }

  async fetchProductById(id) {
    try {
      const allProducts = await this.fetchData();
      const product = allProducts.find((product) => {
        return product.id === id;
      });
      return product;
    } catch (error) {
      console.log("Error realizando fetch de un producto por ID ", error);
    }
  }

  async orderFirstFive() {
    let topFiveProducts = [];
    try {
      const allProducts = await this.fetchData();
      topFiveProducts = allProducts
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .slice(0, 5);
    } catch (error) {
      console.log("Error extrayendo los primeros 5 productos: ", error);
    }
    return topFiveProducts;
  }

  async fetchCoupons() {
    return coupons;
  }

  async generateNewOrder(newOrder) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    let id = "";
    try {
      const docRef = await doc(collection(db, "orders"));
      id = docRef.id;
      await setDoc(docRef, {
        id,
        ...newOrder,
      });
      return id;
    } catch (error) {
      console.log("Error guardando nueva orden: ", error);
    }
  }
}

export default new DataService();
