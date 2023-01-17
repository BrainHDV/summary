(function () {
  const burger = document.querySelector(".header__burger");
  const sidebar = document.querySelector(".sidebar");

  burger.addEventListener("click", toggleBurger);

  function toggleBurger(e) {
    e = e || window.event;

    e.currentTarget.classList.toggle("active");
    sidebar.classList.toggle("mobile");
  }
})();
