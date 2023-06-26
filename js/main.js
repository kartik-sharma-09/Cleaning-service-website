const menuBtn = document.querySelector(".menu-bar");
const menu = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("fa-times");
});

const navLi = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("active");
    document
      .querySelector("nav ul li a[href*=" + current + "]")
      .classList.add("active");
  });
});
