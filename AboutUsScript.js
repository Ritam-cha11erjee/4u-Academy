const navbar = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
  
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  


// Fade in each section on scroll
const sections = document.querySelectorAll('.section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);



  // Scroll Effect
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });


  document.querySelectorAll('.enroll-btn').forEach(element => element.addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex'; // Show the popup
  }));

    // Close the popup when the button is clicked
    document.getElementById('closeBtn').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
      });
