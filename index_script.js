document.addEventListener("DOMContentLoaded", function () {

  // ===== Scroll Navbar =====
  const navbar = document.querySelector('header') || document.getElementById("navbar");
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

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

  // ===== Dynamic Instagram Highlights Loader =====
  async function loadHighlights() {
    const container = document.getElementById('highlightContainer');
    if (!container) return;

    try {
      // Bust cache to ensure visitors always fetch the latest 4 reels
      const res = await fetch('./videos.json?v=' + Date.now());
      if (!res.ok) throw new Error('Could not load videos.json');

      const videos = await res.json();

      container.innerHTML = videos.map(vid => `
        <div class="highlightVideos">
          <blockquote 
            class="instagram-media" 
            data-instgrm-permalink="${vid.permalink}"
            data-instgrm-version="14"
            style="width: 100%; border: none; margin: 0; min-height: 450px;">
          </blockquote>
        </div>
      `).join('');

      // Render the Instagram iframes
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    } catch (err) {
      console.error('Error loading highlight videos:', err);
    }
  }

  loadHighlights();

  // ===== Carousel =====
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;

  function updateCarousel() {
    if (!track || items.length === 0) return;
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
  updateCarousel();

  // ===== Enroll Button (Popup) =====
  document.querySelectorAll('.enroll-Btn').forEach(element => {
    element.addEventListener('click', function () {
      const popup = document.getElementById('popup');
      if (popup) popup.style.display = 'flex';
    });
  });

  const closeBtn = document.getElementById('closeBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      const popup = document.getElementById('popup');
      if (popup) popup.style.display = 'none';
    });
  }

  // ===== Detail Page Navigation =====
  document.querySelector("#detail1")?.addEventListener("click", () => {
    window.location.href = "AdultBatch_Current.html";
  });

  document.querySelector("#detail2")?.addEventListener("click", () => {
    window.location.href = "KidsBatchPhonics.html";
  });

  document.querySelector("#detail3")?.addEventListener("click", () => {
    window.location.href = "KidsBatch.html";
  });

  // ===== Fade In Sections on Scroll =====
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
  revealOnScroll();

});