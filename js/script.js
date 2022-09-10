const searchForm = document.querySelector(".search-form");
const cartItems = document.querySelector(".cart-items-container")
const navbar = document.querySelector(".navbar")

// buttons
const searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", function(){
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(searchBtn) && 
            !e.composedPath().includes(searchForm)
        ){
        searchForm.classList.remove("active")}
    })
});

const cartBtn= document.querySelector("#cart-btn");
cartBtn.addEventListener("click", function(){
    cartItems.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(cartBtn) && 
            !e.composedPath().includes(cartItems)
        ){
        cartItems.classList.remove("active")}
    })
});

const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", function(){
    navbar.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(!e.composedPath().includes(menuBtn)){
            navbar.classList.remove("active")}
    })
});