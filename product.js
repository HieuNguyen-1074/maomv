class Product{
    constructor(){
      this.name = "s"
    }
    async getProducts(){
         let product = await fetch("../maomv/db.json");
          var products = product.json();
         return products;
    }
}
export default Product;