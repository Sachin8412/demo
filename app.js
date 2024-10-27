let menu = document.querySelector('#menu-bar');
let nav = document.querySelector('.nav');

s
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.taggle('active');
}
window.onclick  = ()=>{
    menu.classList.remove('fa-times');
    nav.classList.renove('active');
}

document.querySelector('#search-icon').onclick =() =>{
    document.querySelector('#search-from').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-from').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween:30,
    centeredSlides:true,
    autoplay:{
      delay:7500,
      disableOnInteraction:false,
    
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
  var swiper = new Swiper(".review-slider", {
    spaceBetween:30,
    centeredSlides:true,
    autoplay:{
      delay:7500,
      disableOnInteraction:false,
    
    },
  
    loop:true,
  });
