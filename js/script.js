// toggle navbar
const toggleButton = document.getElementById("toggleButton");
const navbar = document.getElementById("navbar");
const closeNav = document.getElementById("closeNav");
const mobileOverlay = document.getElementById("mobile_overlay");
const navLinks = document.querySelectorAll(".navbar a");

toggleButton.addEventListener("click", function () {
  navbar.classList.toggle("active");
  mobileOverlay.classList.toggle("active");
});

closeNav.addEventListener("click", function () {
  navbar.classList.remove("active");
  mobileOverlay.classList.remove("active");
});

// Add event listener to each link inside the navbar
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Close the navbar when a link is clicked
    navbar.classList.remove("active");
    mobileOverlay.classList.remove("active");

    // Remove 'active' class from all links
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    this.classList.add('active');
  });
});
