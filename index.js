function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle('active');
}

const btnMobile = document.getElementById("btn-mobile");
btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
