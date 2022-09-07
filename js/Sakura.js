const SAKURA_PRODUCT_CARDS=document.querySelector('#Sakura-card-print');
fetch('json/SAKURA.JSON')
.then(res => res.json())
.then(function(cardsData){
   let html ='';
  
   for (cards of cardsData) {
           
      html+=`
      <div class="col-md-3 mb-5 Search">
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

  
SAKURA_PRODUCT_CARDS.innerHTML=html;
});

// Search for products functionality
$(document).ready(function(){
    $("#mySearch").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".Search").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });