document.addEventListener("DOMContentLoaded", function () {

  // ===== Scroll Navbar =====
  const navbar = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ===== Mobile Navbar Toggle =====
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // ===== Main Video Play Button =====
  const video = document.getElementById("myVideo");
  const play_video = document.getElementById("play_video");

  if (video && play_video) {
    play_video.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        play_video.style.display = "none";
      }
    });

    video.addEventListener("click", () => {
      if (!video.paused) {
        video.pause();
        play_video.style.display = "block";
      }
    });
  }

  // ===== Highlight Video Hover Preview =====
  let highlightVideos = document.querySelectorAll(".highlightVideos_video");

  highlightVideos.forEach(highlightVideo => {
    highlightVideo.addEventListener("mouseover", () => {
      highlightVideo.play();
    });

    highlightVideo.addEventListener("mouseleave", () => {
      highlightVideo.pause();
    });
  });

  // ===== Carousel =====
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;

  function updateCarousel() {
    const itemWidth = items[0]?.offsetWidth || 0;
    track.style.transform = `translateX(-${currentIndex * (itemWidth + 25)}px)`;
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentIndex < items.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  }

  window.addEventListener('resize', updateCarousel);
  updateCarousel(); // initialize on load

  // ===== Enroll Button (Popup) =====
  document.querySelectorAll('.enroll-Btn').forEach(element => {
    element.addEventListener('click', function () {
      document.getElementById('popup').style.display = 'flex';
    });
  });

  const closeBtn = document.getElementById('closeBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      document.getElementById('popup').style.display = 'none';
    });
  }

  // ===== Detail Page Navigation =====
  document.querySelector("#detail1")?.addEventListener("click", () => {
    window.location.href = "CorporateCommunication.html";
  });

  document.querySelector("#detail2")?.addEventListener("click", () => {
    window.location.href = "AdultBatch_Current.html";
  });

  document.querySelector("#detail3")?.addEventListener("click", () => {
    window.location.href = "KidsBatch.html";
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

});
