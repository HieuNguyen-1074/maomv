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
             <button class="product-content-readmore" data-id="${product.id}">
                read more
            </button>
            </div>

        </div> `;
             }
             if(product.infor.kinds.indexOf("Phim kinh dị") > -1){
             elementProductMain += ` <div class="product">
             <img src="${product.src}" alt="" class="product-img">
             <div class="product-content df">
             <p> $${product.price}/1</p>
                 <button class="product-content-addcart" data-id ="${product.id}">add to cart
              </button>
              <button class="product-content-readmore" data-id="${product.id}">
                 read more
         
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
    console.log(widthScreen)

     if(widthScreen <=1153 && widthScreen>870){
        numberPageNewsProductDsiplay(6,elementNewsContainer,elementNewsProducts,elementNewsProductsMain);
        numberPageNewsProductDsiplay(6,elementKinhDiContainer,elementKinhDiProducts,elementKinhDiProductsMain);
     }
     else if(widthScreen <= 870 && widthScreen > 723){
        numberPageNewsProductDsiplay(5,elementNewsContainer,elementNewsProducts,elementNewsProductsMain);
        numberPageNewsProductDsiplay(5,elementKinhDiContainer,elementKinhDiProducts,elementKinhDiProductsMain);
     }
     else if(widthScreen <=  723 && widthScreen>584){
        numberPageNewsProductDsiplay(4,elementNewsContainer,elementNewsProducts,elementNewsProductsMain);
        numberPageNewsProductDsiplay(4,elementKinhDiContainer,elementKinhDiProducts,elementKinhDiProductsMain);
     }
     else if(widthScreen <= 584 && widthScreen>438){
        numberPageNewsProductDsiplay(3,elementNewsContainer,elementNewsProducts,elementNewsProductsMain);
        numberPageNewsProductDsiplay(3,elementKinhDiContainer,elementKinhDiProducts,elementKinhDiProductsMain);
     }
     else if(widthScreen <= 438 && widthScreen>305){
        numberPageNewsProductDsiplay(2,elementNewsContainer,elementNewsProducts,elementNewsProductsMain);
        numberPageNewsProductDsiplay(2,elementKinhDiContainer,elementKinhDiProducts,elementKinhDiProductsMain);
     }
     else if(widthScreen <= 305){
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
   const elementCartsSum = document.querySelector('.sum');
   const  elementSupQuanlityCart = document.getElementById('top-nav-quanlity-cart');
  

   let sumMoney  = 0 ;
   let quanlity = 0;
   let elementCart= '';
   carts.forEach( cart => {
      // quanlity+= cart.quanlity;
      sumMoney +=( cart.price*cart.quanlity);
       elementCart += `
                      <div class="cart-product df">
                        <img src="${cart.src}" alt="">
                        <div class="cart-product-main">
                            <h1>${cart.name}</h1>
                            <p>$${cart.price}</p>
                            <button data-id="${cart.id}" class="cart-product-btn"> remove </button>
                        </div>
                        <div class="cart-product-quanlity">
                            <i class="fas fa-sort-up"  title="cart-up" data-id="${cart.id}"></i>
                            <p>${cart.quanlity}</p>
                            <i class="fas fa-sort-down" title="cart-down" data-id="${cart.id}"></i>
                        </div>
                    </div> `;
                   
   });
    elementCartsProduct.innerHTML = elementCart;
    
    if(sumMoney=== 0){
      elementCartsSum.innerHTML = `nothing here`;
    }
    else{
    elementCartsSum.innerHTML = `$${sumMoney}`;
    }
    elementSupQuanlityCart.innerHTML =  carts.length;

}
function removeCart(btns){
     let allBtns = document.querySelector('.cart-products');

    
    
     allBtns.addEventListener('click',(e)=>{
      let carts = cart.getCart();
        console.log(e);
         let valueType = e.target.localName;
         let dataId = e.target.dataset.id;
         if(valueType ==='button'){
           
           carts = carts.filter((cart)=>{
              
               return cart.id != dataId;
           })
           
           localStorage.setItem('cart',JSON.stringify(carts));
           displayCarts();
         }
         // button quanlity
         if(valueType === 'i'){
            let valueTitle = e.target.title;
            if(valueTitle === 'cart-up'){
               carts = carts.map((cart)=>{
                  
                 if(cart.id === dataId){
                    let quanlity = cart.quanlity;
                    return {...cart,quanlity :  ++quanlity};

                 }
                 else{
                    return cart;
                 }
                 
               })
            }
               else if(valueTitle === 'cart-down'){
                  carts = carts.map((cart)=>{
                    if(cart.id === dataId){
                       let quanlity = cart.quanlity;
                       return {...cart,quanlity :  --quanlity};
   
                    }
                    else{
                       return cart;
                    }
                    
                  })
                  carts = carts.filter((cart)=>{
                     return cart.quanlity != 0;
                  })
            }

         }
         localStorage.setItem("cart", JSON.stringify(carts));
         displayCarts();
     })
}
    function displayReadMore(){
      let elementInforMoreBtnClose = document.getElementById('close-infor-more');
      const elementInforMore = document.querySelector('.infor-movie-more');
      console.log(elementInforMoreBtnClose)
      elementInforMoreBtnClose.onclick =()=>{
         elementInforMore.classList.remove('infor-movie-more-act');
      }
   }
function readMore(products){
   const allReadMoreBtn = document.querySelectorAll('.product-content-readmore');
   const elementInforMoreMain = document.querySelector('.infor-movie-more-main');
   let displayElementInforMore = '';
   allReadMoreBtn.forEach((btn)=>{
     
      console.log(products);
      btn.addEventListener('click',(e)=>{
         
         let dataId = e.target.dataset.id;
         products.forEach((product)=>{
            console.log(product)
            if(product.id === dataId){
               const elementInforMoreContainer = document.querySelector('.infor-movie-more-container');
               displayElementInforMore = `
               
               <h1>${product.name}</h1>
               <p class="infor-movie-more-main-director">director : ${product.infor.director}</p>
               <p class="infor-movie-more-main-year">years : ${product.infor.year}</p>
               <p class="infor-movie-more-main-company">company : ${product.infor.company}</p>
               <p class="infor-movie-more-main-content">
               ${product.infor.content}
               </p>`
               elementInforMoreContainer.style.backgoundImage = `url(${product.src})`;
            }
         })
         elementInforMoreMain.innerHTML = displayElementInforMore;
         const elementInforMore = document.querySelector('.infor-movie-more');
      
         elementInforMore.classList.add('infor-movie-more-act');
         
      })
      
   })
   
}
 function  addToCart(products){
    let carts = cart.getCart();
    let newCart ;
    const allAddToCartBtn = document.querySelectorAll('.product-content-addcart');
       allAddToCartBtn.forEach( btn => {
       btn.addEventListener('click',(e)=>{
         let dataIdBtn = e.target.dataset.id;
         newCart = products.filter((product)=>{
            return product.id === dataIdBtn;
         })
         
        
         newCart = newCart[0];
         newCart = {
            name : newCart.name,
            id : newCart.id,
            price : parseFloat(newCart.price),
            src : newCart.src,
            quanlity : 1

         }
         let checkIndex = 1;
         carts.forEach( cart => {
            if(cart.id === newCart.id){
               checkIndex ++;
            }
            else{

            }
         });
         if(checkIndex === 1){
            carts.push(newCart);
            localStorage.setItem('cart',JSON.stringify(carts));
            displayCarts();
        
         }
         else{
         }
         
       })
      
    });

 }
  function displayElementCart(){
   const elementCartBtnClose = document.getElementById('close-cart');
   const elementCartsBtn = document.querySelector('.fa-shopping-cart');
   const elementCartsContainer = document.querySelector('.cart-container');
   const elementCarts = document.querySelector('.cart');
   elementCartsBtn.addEventListener('click',()=>{
      
      elementCarts.classList.add('cart-act');
})
   elementCartBtnClose.addEventListener('click',()=>{
      elementCarts.classList.remove('cart-act');
        
         
   })
  }
  function displayNavbar(){
     const elementTopNavCenter = document.querySelector('.top-nav-center')
     const elementTopNavCenterBtn =  elementTopNavCenter.querySelector('.fa-bars');

     elementTopNavCenterBtn.onclick = ()=>{
        elementTopNavCenterBtn.classList.toggle('fa-times');
        elementTopNavCenter.classList.toggle('top-nav-center-act');

     }
  }
  function logOut(){
    const elementBtnLogOut =  document.querySelector('.fa-sign-out-alt');
     elementBtnLogOut.onclick = ()=>{
      Cookies.remove('name');
      window.location.replace("/src/home/home.html");
     }
  }
function main(){
    if(!Cookies.get('name')){
        window.location.replace("/src/home/home.html");
    }
   

   else{
    
    products.getProducts().then((data)=>{
       var  products =data.products;
       productStyle(products);
       pageNewsProductDsiplay();
       localStorage.setItem('cart','[]');
       addToCart(products);
       displayCarts();
       
       displayElementCart();
       removeCart();
       readMore(products);
      
    })
    displayReadMore();
    displayNavbar();
    logOut();
   }
}

main();
