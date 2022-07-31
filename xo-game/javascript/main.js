const preloader = document.querySelector("#preloader");

window.addEventListener("load", () => {

    preloader.style.animation = "fadeout 2s ease";


    setTimeout(() => {
      preloader.style.display = "none";
    },1500);
});



window.addEventListener("scroll", () => {
    // console.log(window.scrollY);

    let value = window.scrollY; 
    const text = document.querySelector(".text");

      text.style.fontSize =  (85 - value )+ "px";
    if(value >= 50){

        text.style.fontSize = 30 + "px";
    }
   
    
})
// images
const imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
// header selector
const header = document.querySelector(".header");
const settings = document.querySelector(".settings");

const gear = document.querySelector(".gear");

// change images evry 20 seconds
setInterval(() => {
  header.style.backgroundImage = `url(./img/${
    imgs[Math.floor(Math.random() * imgs.length)]
  })`;
}, 3000);

gear.addEventListener("click", () => {
  settings.classList.toggle("settings-opened");
});
