

(function () {
  'use strict';

  const PHOTOS = [
    {
      id: 'clouds',
      src: 'Images/Clouds.webp',
      title: 'Towering Cloudscape',
      caption: "Don't know why but I am always kinda scared after looking at clouds like this.",
      downloadName: 'manveer-clouds.webp'
    },
    {
      id: 'mountains',
      src: 'Images/Mountains.webp',
      title: 'Silent Giants',
      caption: "I am realizing I'm just scared of big things.",
      downloadName: 'manveer-mountains.webp'
    },
    {
      id: 'peeking',
      src: 'Images/Peeking.webp',
      title: 'Peekaboo Peak',
      caption: 'Even mountains play peekaboo sometimes.',
      downloadName: 'manveer-peeking-mountain.webp'
    },
    {
      id: 'window',
      src: 'Images/Window.webp',
      title: 'Canopy Skylight',
      caption: 'The trees are always kind enough to leave some space for the sky to peek through.',
      downloadName: 'manveer-canopy-window.webp'
    },
    {
      id: 'after-rain',
      src: 'Images/after rain.webp',
      title: 'Holding Onto the Rain',
      caption: 'Holding onto the rain.',
      downloadName: 'manveer-after-rain.webp'
    },
    {
      id: 'cove',
      src: 'Images/cove.webp',
      title: 'Solitary Cove',
      caption: 'Looked like a good place to sit and think.',
      downloadName: 'manveer-cove.webp'
    },
    {
      id: 'farm',
      src: 'Images/farm.webp',
      title: 'Pastoral Farmland',
      caption: 'Slow Life does sound nice sometimes.',
      downloadName: 'manveer-farm.webp'
    },
    {
      id: 'green',
      src: 'Images/green.webp',
      title: 'Whispering Branch',
      caption: 'The branch really wants to talk to the wheatgrass.',
      downloadName: 'manveer-green.webp'
    },
    {
      id: 'lights',
      src: 'Images/lights.webp',
      title: 'Beacon in the Night',
      caption: 'Moths were going crazy around this.',
      downloadName: 'manveer-floodlights.webp'
    },
    {
      id: 'love',
      src: 'Images/love.webp',
      title: 'The Old Tube Well',
      caption: 'There are 2 kinds of people in the world: people who can hear this picture and the rest.',
      downloadName: 'manveer-tube-well.webp'
    },
    {
      id: 'orange-sky',
      src: 'Images/orange sky.webp',
      title: 'Burning Horizon',
      caption: 'I assure you the photo does not capture how orange the sky was in person.',
      downloadName: 'manveer-orange-sky.webp'
    },
    {
      id: 'parade',
      src: 'Images/parade.webp',
      title: 'Procession in the Dark',
      caption: 'My Chemical Romance',
      downloadName: 'manveer-midnight-parade.webp'
    },
    {
      id: 'pink',
      src: 'Images/pink.webp',
      title: 'Wild Petals',
      caption: 'Roses are overrated anyway.',
      downloadName: 'manveer-pink-flower.webp'
    },
    {
      id: 'sunset',
      src: 'Images/sunset.webp',
      title: 'Golden Hour Journey',
      caption: "I'll always prefer sunsets over sunrises because sunsets always let me know that it's time to head home.",
      downloadName: 'manveer-sunset.webp'
    },
    {
      id: 'webs',
      src: 'Images/webs.webp',
      title: 'Dew & Geometry',
      caption: 'Some little spider worked very hard on this.',
      downloadName: 'manveer-spider-webs.webp'
    }
  ];

  // --- DOM Elements ---
  const carouselTrack = document.getElementById('carouselTrack');
  const carouselPrevBtn = document.getElementById('carouselPrevBtn');
  const carouselNextBtn = document.getElementById('carouselNextBtn');
  const carouselCounter = document.getElementById('carouselCounter');

  // Theme Toggle DOM
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');

  // Modal DOM
  const photoModal = document.getElementById('photoModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalImg = document.getElementById('modalImg');
  const modalCaption = document.getElementById('modalCaption');
  const modalDownloadBtn = document.getElementById('modalDownloadBtn');
  const modalMinimiseBtn = document.getElementById('modalMinimiseBtn');

  // --- Render Gallery ---
  function renderCarousel() {
    carouselTrack.innerHTML = PHOTOS.map((photo, index) => `
      <article class="carousel-card" data-index="${index}" role="button" tabindex="0" aria-label="Expand photo: ${photo.title}">
        <img src="${photo.src}" alt="${photo.title}" loading="lazy">
        <div class="card-hover-caption">${photo.caption}</div>
      </article>
    `).join('');
  }

  // --- Expand Photo Modal ---
  function expandPhoto(index) {
    const photo = PHOTOS[index];
    if (!photo) return;

    modalImg.src = photo.src;
    modalImg.alt = photo.title;
    modalCaption.textContent = photo.caption;

    modalDownloadBtn.setAttribute('href', photo.src);
    modalDownloadBtn.setAttribute('download', photo.downloadName);

    photoModal.classList.add('active');
    photoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  // --- Minimise Photo Modal ---
  function minimisePhoto() {
    photoModal.classList.remove('active');
    photoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // --- Carousel Navigation & Scrolling ---
  function scrollCarousel(direction) {
    const card = carouselTrack.querySelector('.carousel-card');
    if (!card) return;
    const scrollAmount = card.offsetWidth + 32; // card width + gap
    carouselTrack.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }

  function updateCarouselCounter() {
    const cards = Array.from(carouselTrack.querySelectorAll('.carousel-card'));
    if (!cards.length) return;

    const trackLeft = carouselTrack.scrollLeft;
    let activeIdx = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const distance = Math.abs(card.offsetLeft - trackLeft - carouselTrack.offsetWidth * 0.1);
      if (distance < minDistance) {
        minDistance = distance;
        activeIdx = idx;
      }
    });

    const current = String(activeIdx + 1).padStart(2, '0');
    const total = String(PHOTOS.length).padStart(2, '0');
    carouselCounter.textContent = `[ ${current} // ${total} ]`;
  }

  // --- Mouse Drag-To-Scroll for Fluid Carousel ---
  function initDragScroll() {
    let isDown = false;
    let startX;
    let scrollLeft;
    let hasMoved = false;

    carouselTrack.addEventListener('mousedown', e => {
      isDown = true;
      hasMoved = false;
      startX = e.pageX - carouselTrack.offsetLeft;
      scrollLeft = carouselTrack.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      isDown = false;
    });

    carouselTrack.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carouselTrack.offsetLeft;
      const walk = (x - startX) * 1.5;
      if (Math.abs(walk) > 5) {
        hasMoved = true;
      }
      carouselTrack.scrollLeft = scrollLeft - walk;
    });

    // Prevent click on drag release
    carouselTrack.addEventListener('click', e => {
      if (hasMoved) {
        e.stopPropagation();
        hasMoved = false;
      }
    }, true);

    // Mouse wheel horizontal scroll
    carouselTrack.addEventListener('wheel', e => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        carouselTrack.scrollLeft += e.deltaY;
      }
    }, { passive: true });
  }

  // --- Attach Event Listeners ---
  function initEvents() {
    // Carousel navigation buttons & scroll counter
    carouselPrevBtn.addEventListener('click', () => scrollCarousel(-1));
    carouselNextBtn.addEventListener('click', () => scrollCarousel(1));
    carouselTrack.addEventListener('scroll', updateCarouselCounter, { passive: true });

    // Click on photo in Carousel to expand
    carouselTrack.addEventListener('click', e => {
      const card = e.target.closest('.carousel-card');
      if (card) {
        const index = parseInt(card.dataset.index, 10);
        expandPhoto(index);
      }
    });

    // Keyboard support on cards
    document.addEventListener('keydown', e => {
      if ((e.key === 'Enter' || e.key === ' ') && !photoModal.classList.contains('active')) {
        const activeCard = document.activeElement.closest('.carousel-card');
        if (activeCard) {
          e.preventDefault();
          const index = parseInt(activeCard.dataset.index, 10);
          expandPhoto(index);
        }
      }
    });

    // Minimise Modal events
    modalMinimiseBtn.addEventListener('click', minimisePhoto);
    modalBackdrop.addEventListener('click', minimisePhoto);

    // Keyboard close
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && photoModal.classList.contains('active')) {
        minimisePhoto();
      }
    });

    initDragScroll();
  }

  // --- AMOLED Dark / Light Theme Manager ---
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('gallery_theme', theme);
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#000000' : '#faf9f6');
    }
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  }

  function initTheme() {
    const savedTheme = localStorage.getItem('gallery_theme');
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark ? 'dark' : 'light');
    }

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }
  }

  // --- Y2K Sparkle Trail & Click Starburst Engine ---
  function initY2KSparkles() {
    const container = document.getElementById('y2kSparkleContainer');
    if (!container) return;

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const SPARKLE_CHARS = ['✦', '✧', '+', '×'];
    const SPARKLE_COLORS = [
      '#ffffff', // Pure Platinum Chrome
      '#e4e4e7', // Brushed Silver
      '#38bdf8', // Electric Ice Cyan
      '#00ff66', // Matrix Acid Phosphor
      '#94a3b8'  // Cold Gunmetal
    ];

    function spawnParticle(x, y, isBurst) {
      const particle = document.createElement('span');
      particle.className = 'y2k-sparkle-particle';
      particle.textContent = SPARKLE_CHARS[Math.floor(Math.random() * SPARKLE_CHARS.length)];

      const color = SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];
      particle.style.color = color;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      const angle = isBurst ? Math.random() * Math.PI * 2 : (Math.random() - 0.5) * Math.PI;
      const distance = isBurst ? 25 + Math.random() * 45 : 12 + Math.random() * 22;
      const xShift = Math.cos(angle) * distance;
      const yShift = Math.sin(angle) * distance - (isBurst ? 0 : 16);

      particle.style.setProperty('--x-shift', `${xShift}px`);
      particle.style.setProperty('--y-shift', `${yShift}px`);

      if (isBurst) {
        particle.style.fontSize = `${16 + Math.floor(Math.random() * 10)}px`;
      } else {
        particle.style.fontSize = `${11 + Math.floor(Math.random() * 8)}px`;
      }

      container.appendChild(particle);

      particle.addEventListener('animationend', () => {
        particle.remove();
      }, { once: true });
    }

    let lastMoveTime = 0;
    window.addEventListener('pointermove', e => {
      const now = performance.now();
      if (now - lastMoveTime > 45) {
        lastMoveTime = now;
        spawnParticle(e.clientX, e.clientY, false);
      }
    }, { passive: true });

    window.addEventListener('click', e => {
      const burstCount = 6;
      for (let i = 0; i < burstCount; i++) {
        spawnParticle(e.clientX, e.clientY, true);
      }
    }, { passive: true });
  }

  // --- Init ---
  function init() {
    initTheme();
    renderCarousel();
    initEvents();
    initY2KSparkles();
    updateCarouselCounter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
