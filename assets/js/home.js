let bootStr = document.getElementById("boot");
let star = document.getElementById("srh");

let proudcts = [
  {
    name: "adids",
    name2: "shirts",
    price: 29.99,
    img: (src = "assets/images/f1.jpg"),
  },
  {
    name: "adids",
    name2: "shirts",
    price: 300,
    img: (src = "assets/images/f2.jpg"),
  },
  {
    name: "adids",
    name2: "shirts",
    price: 250,
    img: (src = "assets/images/f3.jpg"),
  },
  {
    name: "adids",
    name2: "shirts",
    price: 450,
    img: (src = "assets/images/f4.jpg"),
  },
  {
    name: "adids",
    name2: "shirts",
    price: 260,
    img: (src = "assets/images/f5.jpg"),
  },
  {
    name: "adids",
    name2: "shirts",
    price: 450,
    img: (src = "assets/images/f6.jpg"),
  },
  {
    name: "adids",
    name2: "shirts",
    price: 700,
    img: (src = "assets/images/f7.jpg"),
  },
  {
    name: "adids",
    name2: "shirts",
    price: 460,
    img: (src = "assets/images/f8.jpg"),
  },
];

for (let i = 0; i < proudcts.length; i++) {
  bootStr.innerHTML += `<div class="card col-md-6 col-sm-12 " style="width: 18rem;">
            <img src=${proudcts[i].img} alt="" width="250px" style="border-radius: 40px;">
            <div class="card-body">
              <p class="card-text">${proudcts[i].name}</p>
              <h5 class="card-title">${proudcts[i].name2}</h5>
              <div class="star-1">
                <div class="star">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                </div>
              </div>
             <div class="titel">${proudcts[i].price}</div>
           <div class="basket-1">
             <div class="basket">
             <button  onclick="addToCart()"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg></button>
             </div>
            </div>
           
          </div>
          </div>
        `;
}

let broduct = [
  {
    name1: "adids",
    name3: "shirts",
    price: 800,
    img: (src = "assets/images/n1.jpg"),
  },
  {
    name1: "adids",
    name3: "shirts",
    price: 300,
    img: (src = "assets/images/n2.jpg"),
  },
  {
    name1: "adids",
    name3: "shirts",
    price: 700,
    img: (src = "assets/images/n8.jpg"),
  },
  {
    name1: "adids",
    name3: "shirts",
    price: 460,
    img: (src = "assets/images/n4.jpg"),
  },
  {
    name1: "adids",
    name3: "shirts",
    price: 500,
    img: (src = "assets/images/n5.jpg"),
  },
  {
    name1: "adids",
    name3: "shirts",
    price: 250,
    img: (src = "assets/images/n6.jpg"),
  },
  {
    name1: "adids",
    name3: "shirts",
    price: 700,
    img: (src = "assets/images/n7.jpg"),
  },
  {
    name1: "adids",
    name3: "shirts",
    price: 300,
    img: (src = "assets/images/n8.jpg"),
  },
];

for (var A = 0; A < broduct.length; A++) {
  srh.innerHTML += `<div class="card col-md-6 col-sm-12 " style="width: 18rem;">
<img src=${broduct[A].img} alt="" width="250px" style="border-radius: 40px;">
<div class="card-body">
  <p class="card-text">${broduct[A].name1}</p>
  <h5 class="card-title">${broduct[A].name3}</h5>
  <div class="star-1">
    <div class="star">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg>
    </div>
  </div>
 <div class="titel">${broduct[A].price}</div>
<div class="basket-1">
 <div class="basket">
 <button onclick="addToCart()"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg></button>
 </div>
</div>

</div>
</div>`;
}


//Start cart task
let cartCounter=0;
let cart=document.getElementById("cart-btn");

cart.innerHTML=cartCounter
function addToCart(){
  cartCounter++;
  cart.innerHTML=cartCounter
}

window.addEventListener("load",function(){

})




