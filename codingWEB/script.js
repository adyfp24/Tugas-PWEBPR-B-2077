const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', scrollToSection);
});

function scrollToSection(e) {
  e.preventDefault();
  const target = document.querySelector(e.target.getAttribute('href'));
  target.scrollIntoView({ behavior: 'smooth' });
}

function toggleNavbar() {
  var navList = document.getElementById("nav-list");
  var toggleButton = document.querySelector(".toggle-button");
  navList.classList.toggle("active");
  if (navList.classList.contains("active")) {
    toggleButton.innerHTML = "✕"; 
  } else {
    toggleButton.innerHTML = "☰";
  }
}