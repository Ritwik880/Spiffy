
window.addEventListener('scroll',(e)=>{
  const nav = document.querySelector('.navbar');
  if(window.pageYOffset>0){
    nav.classList.add("shadow");
  }else{
    nav.classList.remove("shadow");
  }
});
var first = document.getElementById("go1");
first.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("section1").scrollIntoView();
});
var second = document.getElementById("go2");
second.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("section2").scrollIntoView();
});
var third = document.getElementById("go3");
third.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("section3").scrollIntoView();
});
var fourth = document.getElementById("go4");
fourth.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("section4").scrollIntoView();
});
var fifth = document.getElementById("go5");
fifth.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("section5").scrollIntoView();
});
