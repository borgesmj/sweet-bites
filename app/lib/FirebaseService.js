import { products } from "./placeholder-data";
class DataService {
  async fetchData() {
    /**
     * * Este método utilizará las funciones de firebase para traer
     * * los productos de la base de datos
     */
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
      console.log("Error realizando fetch de un producto por ID ",error);
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
      console.log("Error extrayendo los primeros 5 productos: ",error);
    }
    return topFiveProducts
  }
}

export default new DataService();
