const IMG=document.querySelector('#productImg');
const brand_name=document.querySelector('#Brand-name');
const Title=document.querySelector('#title-s');
const Description=document.querySelector('#desc');
const Price=document.querySelector('#Price');
const Canceled=document.querySelector('#delete');

    

    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    
  
  let img=urlParams.get('product_image');
  let Tilte=urlParams.get('product_title');
  let desc=urlParams.get('product_desc');
  let pirce=urlParams.get('product_price');
  let brandName=urlParams.get('product_brand');
  let overLine=urlParams.get('product_del');
  

  IMG.src=img;
  brand_name.innerHTML=brandName;
  Description.innerHTML=desc;
  Price.innerHTML=pirce;
  Title.innerHTML=Tilte;
  Canceled.innerHTML=overLine;
  
// similar products card print
const SIMILAR_CARDS=document.querySelector('#similar-card-print');
fetch('json/allproducts.json')
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
 
SIMILAR_CARDS.innerHTML=html;
});