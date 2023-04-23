
//Прикрепленный заголовок 
document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function() {
    let section1 = document.querySelector(".section-1");
    if (navbar && window.pageYOffset >= section1.offsetTop) {
      navbar.classList.add("sticky");
    } else if (navbar) {
      navbar.classList.remove("sticky");
    }
  });
});