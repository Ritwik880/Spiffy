// On scrolling generate box-shadow in navbar
window.addEventListener('scroll',(e)=>{
  const nav = document.querySelector('.navbar');
  if(window.pageYOffset>0){
    nav.classList.add("shadow");
  }else{
    nav.classList.remove("shadow");
  }
});

// On clicking on arrow
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

// For anchor links *Contact Us page
var contact = document.getElementById("contact");
contact.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("contactUs").scrollIntoView();
});


// Scroll to top of the page whenever user clicks on it
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}