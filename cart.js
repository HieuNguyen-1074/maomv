export default  class cart{
    constructor(){

    }
    getCart(){
      var cart = JSON.parse(localStorage.getItem('cart'));
       return cart;
    }
}