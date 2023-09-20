function activateSidebar() {
  const btn = document.getElementById("menu-btn");
  const btn1 = document.getElementById("menu-btn1");
  const btn2 = document.getElementById("menu-btn2");
  const btn3 = document.getElementById("menu-btn3");

  btn.classList.toggle("nav__sidebar");

  btn1.classList.toggle("nav__menu-btn1");
  btn2.classList.toggle("nav__menu-btn2");
  btn3.classList.toggle("nav__menu-btn3");
}
