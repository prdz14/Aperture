const burger = document.querySelector(".burger"),
  headerBurger = document.querySelector(".header_burger");

burger.addEventListener("click", function openBurger() {
  headerBurger.classList.toggle("media");
});
