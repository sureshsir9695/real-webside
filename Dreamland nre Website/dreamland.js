//  ===============  toggle icon navbar ======================
let menuIcon = document.querySelector("#meru-icon"); // सही किया गया
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

//  ===============  scroll section active link ======================
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY; // सही किया गया
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        // सही किया गया
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  //  =============== sticky navbar ======================
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //  =============== toggle navbar off when scrolling ======================
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

// =========== //

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img,.services-container,.Portfolio-box, .content form",
  { origin: "buttom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// type s  js  file  ////

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Web Designer", "Computer Teacher"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
