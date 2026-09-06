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

// ===== Dynamic Highlights Loader =====
  async function loadHighlights() {
    const container = document.getElementById('highlightContainer');
    const dotsContainer = document.getElementById('highlightDots');
    if (!container) return;

    try {
      const res = await fetch('./videos.json?v=' + Date.now());
      if (!res.ok) throw new Error('Could not load videos.json');

      const videos = await res.json();

      // 1. Inject Videos
      container.innerHTML = videos.map((vid, idx) => `
        <div class="highlightVideos">
          <img src="play_btn.png" class="highlight_play_btn" id="playBtn${idx}" alt="Play video">
          <video 
            class="highlightVideos_video" 
            id="highlightVid${idx}" 
            src="${vid.videoUrl}" 
            poster="${vid.thumbnail}"
            loop 
            playsinline 
            preload="metadata">
          </video>
        </div>
      `).join('');

      // 2. Inject Dots (Only renders if dotsContainer exists)
      if (dotsContainer) {
        dotsContainer.innerHTML = videos.map((_, idx) => `
          <div class="dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></div>
        `).join('');
      }

      // 3. Play/Pause & Visibility Observer Logic
      const highlightCards = container.querySelectorAll(".highlightVideos");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            const video = entry.target.querySelector('.highlightVideos_video');
            const playBtn = entry.target.querySelector('.highlight_play_btn');
            
            if (video && !video.paused) {
              video.pause();
              if (playBtn) playBtn.style.display = "block";
            }
          }
        });
      }, { threshold: 0.1 }); 

      highlightCards.forEach(card => {
        const video = card.querySelector('.highlightVideos_video');
        const playBtn = card.querySelector('.highlight_play_btn');
        observer.observe(card);

        card.addEventListener("click", () => {
          if (video.paused) {
            video.play();
            playBtn.style.display = "none";
          } else {
            video.pause();
            playBtn.style.display = "block";
          }
        });
      });

      // 4. Carousel Navigation Logic (Mobile Only)
      const prevBtn = document.querySelector('.prev-highlight');
      const nextBtn = document.querySelector('.next-highlight');
      const dots = document.querySelectorAll('.highlight-dots .dot');

      // Calculate width of one card + the CSS gap (16px)
      const getScrollAmount = () => container.querySelector('.highlightVideos').offsetWidth + 16;

      if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
          container.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
          container.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });
      }

      // Update active dot on scroll/swipe
      container.addEventListener('scroll', () => {
        let index = Math.round(container.scrollLeft / getScrollAmount());
        index = Math.max(0, Math.min(index, videos.length - 1)); // Keep within bounds
        
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });
      });

      // Allow clicking dots to jump to video
      dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
          const index = parseInt(e.target.getAttribute('data-index'));
          container.scrollTo({ left: index * getScrollAmount(), behavior: 'smooth' });
        });
      });

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