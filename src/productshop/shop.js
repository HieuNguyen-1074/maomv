import Product from '../../product.js';
import Cart from "/../../cart.js"

const products = new Product();
const cart = new Cart();

   function changeWidthElementToNumber(element){
          let width;
          let styleElement= window.getComputedStyle(element);

          width = parseFloat(styleElement.width.slice( 0 , styleElement.width.length-2));
    return width;
   };


   function productStyle(products){
       const elementNewsProductsMain = document.querySelector('.news-products-main'); 
       const elementKinhdiProductMainContainerMain = document.querySelector('.kinhdi-products-main');
        let elementNewsProduct = '';
        let elementProductMain = '';
 // display Product
        products.forEach( product => {
            if(product.infor.year === "2020"){
            elementNewsProduct+= ` <div class="product">
            <img src="${product.src}" alt="" class="product-img">
            <div class="product-content df">
                <h1>${product.name}</h1>
                <button class="product-content-addcart" data-id ="${product.id}">add to cart
             </button>
             <button class="product-content-readmore" data-id="${product.id}"><a href="#">
                read more
               </a>
            </button>
            </div>

        </div> `;
             }
             if(product.infor.kinds.indexOf("Phim kinh dị") > -1){
             elementProductMain += ` <div class="product">
             <img src="${product.src}" alt="" class="product-img">
             <div class="product-content df">
             <p> ${product.price}/1</p>
                 <button class="product-content-addcart" data-id ="${product.id}">add to cart
              </button>
              <button class="product-content-readmore" data-id="${product.id}"><a href="#">
                 read more
                </a>
             </button>
             </div>
             <h1>${product.name}</h1>
            
         </div> `
             }
        });
        elementNewsProductsMain.innerHTML = elementNewsProduct;
        // console.log(elementProductMain)
     elementKinhdiProductMainContainerMain.innerHTML = elementProductMain;

    }
    function numberPageNewsProductDsiplay(number,elementContainer ,product,productMain){
        // const elementProducts = document.querySelector('.news-products');
        // const elementProductsMain = document.querySelector('.news-products-main'); 
        let widthElementNewsProducts = changeWidthElementToNumber(product);
        let allElementNewsProductImg = productMain.querySelectorAll('.product-img');
        const elementNewProductBtnRight =elementContainer.querySelector(".fa-arrow-right");
        const elementNewProductBtnLeft =elementContainer.querySelector(".fa-arrow-left")

        let count = 1;
        allElementNewsProductImg.forEach( img => {
            img.style.width =` ${(widthElementNewsProducts/number)}px`;
        });
        elementNewProductBtnRight.addEventListener('click',()=>{
            if(count > (parseInt(allElementNewsProductImg.length-1)/number)) {
    
            }
            else{
    
            let styleTransform =Math.abs(parseFloat(window.getComputedStyle(productMain).transform.split("(")[1].split(',')[4]));
            productMain.style.transform = `translateX(-${widthElementNewsProducts*count}px)`;
            count++;
            }
        })
        elementNewProductBtnLeft.addEventListener('click',()=>{
            if(count === 1 ){
            }
            else{
            let styleTransform = Math.abs(parseFloat(window.getComputedStyle(productMain).transform.split("(")[1].split(',')[4]));
            productMain.style.transform = `translateX(${widthElementNewsProducts-styleTransform}px)`;
            count--;
            }
        })
    }

 function pageNewsProductDsiplay(){
    const elementNewsContainer = document.querySelector('.news-container');
    const elementNewsProducts = elementNewsContainer.querySelector('.news-products');
    const elementNewsProductsMain = elementNewsContainer.querySelector('.news-products-main'); 

    const elementKinhDiContainer = document.querySelector('.kinhdi-container');
    const elementKinhDiProducts = elementKinhDiContainer.querySelector('.kinhdi-products');
    const elementKinhDiProductsMain = elementKinhDiContainer.querySelector('.kinhdi-products-main'); 

    
     let widthScreen = document.body.clientWidth;


     if(widthScreen <950 && widthScreen>808){
        numberPageNewsProductDsiplay(6,elementNewsContainer,elementNewsProducts,elementNewsProductsMain);
        numberPageNewsProductDsiplay(6,elementKinhDiContainer,elementKinhDiProducts,elementKinhDiProductsMain);
     }
     else if(widthScreen < 808 && widthScreen>665){
        numberPageNewsProductDsiplay(5,elementNewsContainer,elementNewsProducts,elementNewsProductsMain);
        numberPageNewsProductDsiplay(5,elementKinhDiContainer,elementKinhDiProducts,elementKinhDiProductsMain);
     }
     else if(widthScreen < 665 && widthScreen>535){
        numberPageNewsProductDsiplay(4,elementNewsContainer,elementNewsProducts,elementNewsProductsMain);
        numberPageNewsProductDsiplay(4,elementKinhDiContainer,elementKinhDiProducts,elementKinhDiProductsMain);
     }
     else if(widthScreen < 535 && widthScreen>405){
        numberPageNewsProductDsiplay(3,elementNewsContainer,elementNewsProducts,elementNewsProductsMain);
        numberPageNewsProductDsiplay(3,elementKinhDiContainer,elementKinhDiProducts,elementKinhDiProductsMain);
     }
     else if(widthScreen < 405 && widthScreen>271){
        numberPageNewsProductDsiplay(2,elementNewsContainer,elementNewsProducts,elementNewsProductsMain);
        numberPageNewsProductDsiplay(2,elementKinhDiContainer,elementKinhDiProducts,elementKinhDiProductsMain);
     }
     else if(widthScreen < 271){
        numberPageNewsProductDsiplay(1,elementNewsContainer,elementNewsProducts,elementNewsProductsMain);
        numberPageNewsProductDsiplay(1,elementKinhDiContainer,elementKinhDiProducts,elementKinhDiProductsMain);
     }
     else{
     numberPageNewsProductDsiplay(8,elementNewsContainer,elementNewsProducts,elementNewsProductsMain );
     numberPageNewsProductDsiplay(8,elementKinhDiContainer,elementKinhDiProducts,elementKinhDiProductsMain);
     }
 }
 function displayCarts(){
   let carts = cart.getCart();
   const elementCartsProduct = document.querySelector('.cart-products');


   console.log(carts);
   let elementCart= '';
   carts.forEach( cart => {
       elementCart += `
                      <div class="cart-product df">
                        <img src="${cart.src}" alt="">
                        <div class="cart-product-main">
                            <h1>${cart.name}</h1>
                            <p>${cart.price}</p>
                        </div>
                        <div class="cart-product-quanlity">
                            <i class="fas fa-sort-up"  title="cart-up" ></i>
                            <p>${cart.quanlity}</p>
                            <i class="fas fa-sort-down" title="cart-down"></i>
                        </div>
                    </div> `;
   });
    elementCartsProduct.innerHTML = elementCart;
}
 function  addToCart(products){
    let carts = cart.getCart();
    let newCart ;
    const allAddToCartBtn = document.querySelectorAll('.product-content-addcart');
    console.log(carts);
    allAddToCartBtn.forEach( btn => {
       btn.addEventListener('click',(e)=>{
         let dataIdBtn = e.target.dataset.id;
         newCart = products.filter((product)=>{
            return product.id === dataIdBtn;
         })
        
         newCart = newCart[0];
         console.log(newCart);
         newCart = {
            name : newCart.name,
            id : newCart.id,
            price : newCart.price,
            src : newCart.src,
            quanlity : 1

         }
         if(carts.indexOf(newCart)=== -1){
            console.log(newCart);
            carts.push(newCart);
            localStorage.setItem('cart',JSON.stringify(carts));
            displayCarts();
         }
         else{
         }
         
       })
      
    });

 }

function main(){
    // if(!Cookies.get('name')){
    //     window.location.replace("/src/home/home.html");
    // }
   

   
    console.log(cart.getCart())
    
    products.getProducts().then((data)=>{
       var  products =data.products;
       productStyle(products);
       pageNewsProductDsiplay();
       localStorage.setItem('cart','[]');
       addToCart(products);
       displayCarts();
    })
   
}

main();
