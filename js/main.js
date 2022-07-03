let menu=document.querySelector('.menu_icon'),
    menu_active=document.querySelector('.container_icon nav')
    cart=document.querySelector('.cart_icon'),
    cart_active=document.querySelector('.cart_container'),
    user=document.querySelector('.user_icon'),
    user_active=document.querySelector('.user_container'),
    container=document.querySelector('.container_icon'),
    cancel=document.querySelectorAll('.cancel'),
    search_icon=document.querySelector('.search_icon'),
    search=document.querySelector('.search');

menu.onclick=()=>{
    container.classList.add('active');
    menu_active.classList.add('active');
};
cart.onclick=()=>{
    container.classList.add('active');
    cart_active.classList.add('active');
};
user.onclick=()=>{
    container.classList.add('active');
    user_active.classList.add('active');
};
cancel.forEach(element => {
    element.onclick=()=>{
        container.classList.remove('active');
        menu_active.classList.remove('active');
        cart_active.classList.remove('active');
        user_active.classList.remove('active');
    }
});
search_icon.onclick=()=>{
    search.classList.toggle('active');
};

// Swiper home
var swiper = new Swiper(".home_container", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// For animate scrolling web page
new WOW().init();

