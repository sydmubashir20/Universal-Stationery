// Navbar functionality starts
 const menu = document.querySelector(".menu");
 const menuMain = menu.querySelector(".menu-main");
 const goBack = menu.querySelector(".go-back");
 const menuTrigger = document.querySelector(".mobile-menu-trigger");
 const closeMenu = menu.querySelector(".mobile-menu-close");
 let subMenu;
 menuMain.addEventListener("click", (e) =>{
 	if(!menu.classList.contains("active")){
 		return;
 	}
   if(e.target.closest(".menu-item-has-children")){
   	 const hasChildren = e.target.closest(".menu-item-has-children");
      showSubMenu(hasChildren);
   }
 });
 goBack.addEventListener("click",() =>{
 	 hideSubMenu();
 })
 menuTrigger.addEventListener("click",() =>{
 	 toggleMenu();
 })
 closeMenu.addEventListener("click",() =>{
 	 toggleMenu();
 })
 document.querySelector(".menu-overlay").addEventListener("click",() =>{
 	toggleMenu();
 })
 function toggleMenu(){
 	menu.classList.toggle("active");
 	document.querySelector(".menu-overlay").classList.toggle("active");
 }
 function showSubMenu(hasChildren){
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML=menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
 }

 function  hideSubMenu(){  
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() =>{
       subMenu.classList.remove("active");	
    },300); 
    menu.querySelector(".current-menu-title").innerHTML="";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
 }
 
 window.onresize = function(){
    if(this.innerWidth >991){
       if(menu.classList.contains("active")){
          toggleMenu();
         }
         
      }
   }
   //dynamic nav work
   const NAV_NEW=document.querySelector('#nav-new')
   const FABERCASTELL=document.querySelector('#FABERCASTELL')
   const SAKURA=document.querySelector('#SAKURA')
   const STEADTLER=document.querySelector('#STEADTLER')
   const TYPO=document.querySelector('#TYPO')
   const Mixed_Products=document.querySelector('#Products')
   fetch('json/allproducts.json')
   .then(res => res.json())
   .then(function(newNav){
    let html=''
    for (navNew of newNav) {
        if(navNew.id <= 4){
        html +=`
        <div class="list-content text-center">
            <a href="spec.html?id=${navNew.id}&product_image=${navNew.Product_img}&product_title=${navNew.Product_title}&product_brand=${navNew.Brand_name}&product_price=${navNew.Product_price}&product_del=${navNew.Deleted_price}&product_desc=${navNew.Product_desc}">
            <img src="${navNew.Product_img}" alt="new Product">
            <h4 class="title">${navNew.Product_title}</h4>
            </a>
        </div>
        ` 
    }
}
NAV_NEW.innerHTML=html;
   });

//Fabercastel links
fetch('json/FABER-CASTELL.JSON')
.then(res => res.json())
.then(function(fabcastel){
    let html=''
    for (castelfaber of fabcastel) {
        if(castelfaber.id <= 4){
            html +=`
            <li><a href="spec.html?id=${castelfaber.id}&product_image=${castelfaber.Product_img}&product_title=${castelfaber.Product_title}&product_brand=${castelfaber.Brand_name}&product_price=${castelfaber.Product_price}&product_del=${castelfaber.Deleted_price}&product_desc=${castelfaber.Product_desc}">
            ${castelfaber.Product_title}</a></li>
            `
        }
    }
    FABERCASTELL.innerHTML=html;
});   
//Sakura links
fetch('json/SAKURA.JSON')
.then(res => res.json())
.then(function(Sakura){
    let html=''
    for (sakura of Sakura) {
        if(sakura.id <= 4){
            html +=`
            <li><a href="spec.html?id=${sakura.id}&product_image=${sakura.Product_img}&product_title=${sakura.Product_title}&product_brand=${sakura.Brand_name}&product_price=${sakura.Product_price}&product_del=${sakura.Deleted_price}&product_desc=${sakura.Product_desc}">
            ${sakura.Product_title}</a></li>
            `
        }
    }
    SAKURA.innerHTML=html;
});   
//STEADTLER links
fetch('json/STEADTLER.json')
.then(res => res.json())
.then(function(steadler){
    let html=''
    for (Steadler of steadler) {
        if(Steadler.id <= 4){
            html +=`
            <li><a href="spec.html?id=${Steadler.id}&product_image=${Steadler.Product_img}&product_title=${Steadler.Product_title}&product_brand=${Steadler.Brand_name}&product_price=${Steadler.Product_price}&product_del=${Steadler.Deleted_price}&product_desc=${Steadler.Product_desc}">
            ${Steadler.Product_title}</a></li>
            `
        }
    }
    STEADTLER.innerHTML=html;
});   
//TYPO links
fetch('json/TYPO.JSON')
.then(res => res.json())
.then(function(typo){
    let html=''
    for (Typo of typo) {
        if(Typo.id <= 4){
            html +=`
            <li><a href="spec.html?id=${Typo.id}&product_image=${Typo.Product_img}&product_title=${Typo.Product_title}&product_brand=${Typo.Brand_name}&product_price=${Typo.Product_price}&product_del=${Typo.Deleted_price}&product_desc=${Typo.Product_desc}">
            ${Typo.Product_title}</a></li>
            `
        }
    }
    TYPO.innerHTML=html;
});   
//Mixed Products links
fetch('json/allproducts.json')
.then(res => res.json())
.then(function(product){
    let html=''
    for (Product of product) {
        if(Product.id <= 9){
            html +=`
            <li><a href="spec.html?id=${Product.id}&product_image=${Product.Product_img}&product_title=${Product.Product_title}&product_brand=${Product.Brand_name}&product_price=${Product.Product_price}&product_del=${Product.Deleted_price}&product_desc=${Product.Product_desc}">
            ${Product.Product_title}</a></li>
            `
        }
    }
    Mixed_Products.innerHTML=html;
});  

//  Navbar functionality ends

//Brand content
//scroll card print
const card_scroll=document.querySelector('#scroll-print');
fetch('json/allproducts.json')
.then(res => res.json())
.then(function(scrollCards){
    let html='';
    for (sCards of scrollCards) {
        
        html+=`
        <div class="b-prodcut-card">
            <div class="b-product-image">
                <span class="b-discount-tag">${sCards.Product_sale_offer} off</span>
                <img src="${sCards.Product_img}" alt="Brand-product" class="b-product-thumb">
                <a href="spec.html?id=${sCards.id}&product_image=${sCards.Product_img}&product_title=${sCards.Product_title}&product_brand=${sCards.Brand_name}&product_price=${sCards.Product_price}&product_del=${sCards.Deleted_price}&product_desc=${sCards.Product_desc}" class="b-card-btn text-center">Show details</a>
            </div>
            <div class="b-product-inform">
              <h2 class="b-product-brand">${sCards.Brand_name}</h2>
              <p class="b-product-short-description">${sCards.Product_desc}</p>
              <span class="b-price">Price ${sCards.Product_price}</span><span class="b-actual-price">Rs:${sCards.Deleted_price}</span>
            </div>
        </div>
 `
    }
    card_scroll.innerHTML=html;
});
// owl carousal
const PRODUCT_CONTAINERS=[...document.querySelectorAll('.b-product-container')];
const NXT_BTN=[...document.querySelectorAll('.b-nxt-btn')];
const PRE_BTN=[...document.querySelectorAll('.b-pre-btn')];

PRODUCT_CONTAINERS.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth =containerDimensions.width;

    NXT_BTN[i].addEventListener('click',()=>{
        item.scrollLeft +=containerWidth;
    });

    PRE_BTN[i].addEventListener('click',()=>{
        item.scrollLeft -=containerWidth;
    });
})
// owl carousel end

//Brand content ends

// featured content area js
// generating cards
const FEATURED_CARDS=document.querySelector('#card-print');
fetch('json/allproducts.json')
.then(res => res.json())
.then(function(cardsData){
   let html ='';
  
   for (cards of cardsData) {
        if(cards.id <=8){   
      html+=`
      <div class="col-md-3 mb-5">
      <div class="product-box">
      <div class="product-inner-box position-relative">
      <div class="icons position-absolute">
          <a href="#" class="text-decoration-none text-dark"><i class="fa-solid fa-heart"></i></a>
          <a href="#" class="text-decoration-none text-dark"><i class="fa-solid fa-eye"></i></a>
      </div>
      <div class="onsale">
          <span class="badge rounded-0"><i class="fa-solid fa-arrow-down"></i>${cards.Product_sale_offer}</span>
      </div>
      <img src="${cards.Product_img}" alt="products" class="img-fluid">
      <div class="cart-btn">
          <button class="btn btn-white"><i class="fa-solid fa-cart-arrow-down"></i>Details</button>
      </div>
      </div>
      <div class="product-info">
          <div class="product-name mt-4 text-center">
              <h3>${cards.Product_title}</h3>
          </div>
          <div class="product-brand text-secondary text-center">
              <h5>Brand:${cards.Brand_name}</h5>
          </div>
          <div class="product-price text-center">
              Price <span> ${cards.Product_price}</span><span class="b-actual-price">Rs:${cards.Deleted_price}</span>
          </div>
          <div class="product-btn text-center mt-2">
              <a href="spec.html?id=${cards.id}&product_image=${cards.Product_img}&product_title=${cards.Product_title}&product_brand=${cards.Brand_name}&product_price=${cards.Product_price}&product_del=${cards.Deleted_price}&product_desc=${cards.Product_desc}" class="btn details_btn"><b>Show details</b></a>
          </div>
      </div>
  </div>
  </div>
      `
    
}
}


   
   FEATURED_CARDS.innerHTML=html;
});
// Brand content area js
// generating cards for fabercastell
const Brands_Area=document.querySelector('#Brand-card-print1');
fetch('json/FABER-CASTELL.JSON')
.then(res => res.json())
.then(function(cardsData){
   let html ='';
  
   for (cards of cardsData) {
        if(cards.id <=4){   
      html+=`
      <div class="col-md-3 mb-5">
      <div class="product-box">
      <div class="product-inner-box position-relative">
      <div class="icons position-absolute">
          <a href="#" class="text-decoration-none text-dark"><i class="fa-solid fa-heart"></i></a>
          <a href="#" class="text-decoration-none text-dark"><i class="fa-solid fa-eye"></i></a>
      </div>
      <div class="onsale">
          <span class="badge rounded-0"><i class="fa-solid fa-arrow-down"></i>${cards.Product_sale_offer}</span>
      </div>
      <img src="${cards.Product_img}" alt="products" class="img-fluid">
      <div class="cart-btn">
          <button class="btn btn-white"><i class="fa-solid fa-cart-arrow-down"></i>Details</button>
      </div>
      </div>
      <div class="product-info">
          <div class="product-name mt-4 text-center">
              <h3>${cards.Product_title}</h3>
          </div>
          <div class="product-brand text-secondary text-center">
              <h5>Brand:${cards.Brand_name}</h5>
          </div>
          <div class="product-price text-center">
              Price <span> ${cards.Product_price}</span></span><span class="b-actual-price">Rs:${cards.Deleted_price}</span>
          </div>
          <div class="product-btn text-center mt-2">
              <a href="spec.html?id=${cards.id}&product_image=${cards.Product_img}&product_title=${cards.Product_title}&product_brand=${cards.Brand_name}&product_price=${cards.Product_price}&product_del=${cards.Deleted_price}&product_desc=${cards.Product_desc}" class="btn details_btn"><b>Show details</b></a>
          </div>
      </div>
  </div>
  </div>
      `
    
}
}   
Brands_Area.innerHTML=html;
});
// generating cards for steadtler
const Brands_Area2=document.querySelector('#Brand-card-print2');
fetch('json/STEADTLER.json')
.then(res => res.json())
.then(function(cardsData){
   let html ='';
  
   for (cards of cardsData) {
        if(cards.id <=4){   
      html+=`
      <div class="col-md-3 mb-5">
      <div class="product-box">
      <div class="product-inner-box position-relative">
      <div class="icons position-absolute">
          <a href="#" class="text-decoration-none text-dark"><i class="fa-solid fa-heart"></i></a>
          <a href="#" class="text-decoration-none text-dark"><i class="fa-solid fa-eye"></i></a>
      </div>
      <div class="onsale">
          <span class="badge rounded-0"><i class="fa-solid fa-arrow-down"></i>${cards.Product_sale_offer}</span>
      </div>
      <img src="${cards.Product_img}" alt="products" class="img-fluid">
      <div class="cart-btn">
          <button class="btn btn-white"><i class="fa-solid fa-cart-arrow-down"></i>Details</button>
      </div>
      </div>
      <div class="product-info">
          <div class="product-name mt-4 text-center">
              <h3>${cards.Product_title}</h3>
          </div>
          <div class="product-brand text-secondary text-center">
              <h5>Brand:${cards.Brand_name}</h5>
          </div>
          <div class="product-price text-center">
              Price <span> ${cards.Product_price}</span></span><span class="b-actual-price">Rs:${cards.Deleted_price}</span>
          </div>
          <div class="product-btn text-center mt-2">
              <a href="spec.html?id=${cards.id}&product_image=${cards.Product_img}&product_title=${cards.Product_title}&product_brand=${cards.Brand_name}&product_price=${cards.Product_price}&product_del=${cards.Deleted_price}&product_desc=${cards.Product_desc}" class="btn details_btn"><b>Show details</b></a>
          </div>
      </div>
  </div>
  </div>
      `
    
}
}   
Brands_Area2.innerHTML=html;
});
// generating cards for Sakura
const Brands_Area3=document.querySelector('#Brand-card-print3');
fetch('json/SAKURA.JSON')
.then(res => res.json())
.then(function(cardsData){
   let html ='';
  
   for (cards of cardsData) {
        if(cards.id <=4){   
      html+=`
      <div class="col-md-3 mb-5">
      <div class="product-box">
      <div class="product-inner-box position-relative">
      <div class="icons position-absolute">
          <a href="#" class="text-decoration-none text-dark"><i class="fa-solid fa-heart"></i></a>
          <a href="#" class="text-decoration-none text-dark"><i class="fa-solid fa-eye"></i></a>
      </div>
      <div class="onsale">
          <span class="badge rounded-0"><i class="fa-solid fa-arrow-down"></i>${cards.Product_sale_offer}</span>
      </div>
      <img src="${cards.Product_img}" alt="products" class="img-fluid">
      <div class="cart-btn">
          <button class="btn btn-white"><i class="fa-solid fa-cart-arrow-down"></i>Details</button>
      </div>
      </div>
      <div class="product-info">
          <div class="product-name mt-4 text-center">
              <h3>${cards.Product_title}</h3>
          </div>
          <div class="product-brand text-secondary text-center">
              <h5>Brand:${cards.Brand_name}</h5>
          </div>
          <div class="product-price text-center">
              Price <span> ${cards.Product_price}</span></span><span class="b-actual-price">Rs:${cards.Deleted_price}</span>
          </div>
          <div class="product-btn text-center mt-2">
              <a href="spec.html?id=${cards.id}&product_image=${cards.Product_img}&product_title=${cards.Product_title}&product_brand=${cards.Brand_name}&product_price=${cards.Product_price}&product_del=${cards.Deleted_price}&product_desc=${cards.Product_desc}" class="btn details_btn"><b>Show details</b></a>
          </div>
      </div>
  </div>
  </div>
      `
    
}
}   
Brands_Area3.innerHTML=html;
});
// generating cards for Typo
const Brands_Area4=document.querySelector('#Brand-card-print4');
fetch('json/TYPO.JSON')
.then(res => res.json())
.then(function(cardsData){
   let html ='';
  
   for (cards of cardsData) {
        if(cards.id <=4){   
      html+=`
      <div class="col-md-3 mb-5">
      <div class="product-box">
      <div class="product-inner-box position-relative">
      <div class="icons position-absolute">
          <a href="#" class="text-decoration-none text-dark"><i class="fa-solid fa-heart"></i></a>
          <a href="#" class="text-decoration-none text-dark"><i class="fa-solid fa-eye"></i></a>
      </div>
      <div class="onsale">
          <span class="badge rounded-0"><i class="fa-solid fa-arrow-down"></i>${cards.Product_sale_offer}</span>
      </div>
      <img src="${cards.Product_img}" alt="products" class="img-fluid">
      <div class="cart-btn">
          <button class="btn btn-white"><i class="fa-solid fa-cart-arrow-down"></i>Details</button>
      </div>
      </div>
      <div class="product-info">
          <div class="product-name mt-4 text-center">
              <h3>${cards.Product_title}</h3>
          </div>
          <div class="product-brand text-secondary text-center">
              <h5>Brand:${cards.Brand_name}</h5>
          </div>
          <div class="product-price text-center">
              Price <span> ${cards.Product_price}</span></span><span class="b-actual-price">Rs:${cards.Deleted_price}</span>
          </div>
          <div class="product-btn text-center mt-2">
              <a href="spec.html?id=${cards.id}&product_image=${cards.Product_img}&product_title=${cards.Product_title}&product_brand=${cards.Brand_name}&product_price=${cards.Product_price}&product_del=${cards.Deleted_price}&product_desc=${cards.Product_desc}" class="btn details_btn"><b>Show details</b></a>
          </div>
      </div>
  </div>
  </div>
      `
    
}
}   
Brands_Area4.innerHTML=html;
});

let card =document.querySelectorAll('.product-box');

[...card].forEach((cards)=>{
   cards.addEventListener('mouseover', function(){
    cards.classList.add('is-hover')
   });
   
   cards.addEventListener('mouseleave', function(){
    cards.classList.remove('is-hover')
   });
});

// featured content area  js ends