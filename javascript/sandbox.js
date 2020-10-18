const hambuger = document.querySelector(".menu");
const mobileNav = document.querySelector(".links_list");

hambuger.addEventListener('click', ()=>{
    mobileNav.classList.toggle('navShow');
    hambuger.classList.toggle('toggle');
});
