/**
 * Tomato Soup / Manveer's Visual Journal
 * Core Interactive Application Engine
 */

(function () {
  'use strict';

  // --- Photo Archive Catalog ---
  const PHOTOS = [
    {
      id: 'after-rain',
      src: 'Images/after rain.webp',
      title: 'Holding Onto the Rain',
      caption: 'Holding onto the rain.',
      category: 'nature',
      categoryLabel: 'Nature & Plants',
      tags: ['Rain', 'Macro', 'Greenery', 'Quiet'],
      downloadName: 'manveer-after-rain.webp'
    },
    {
      id: 'cove',
      src: 'Images/cove.webp',
      title: 'Solitary Cove',
      caption: 'Looked like a good place to sit and think.',
      category: 'vistas',
      categoryLabel: 'Skies & Horizons',
      tags: ['Water', 'Pond', 'Solitude', 'Peace'],
      downloadName: 'manveer-cove.webp'
    },
    {
      id: 'clouds',
      src: 'Images/Clouds.webp',
      title: 'Towering Cloudscape',
      caption: "Don't know why but I am always kinda scared after looking at clouds like this.",
      category: 'vistas',
      categoryLabel: 'Skies & Horizons',
      tags: ['Clouds', 'Storm', 'Atmosphere', 'Scale'],
      downloadName: 'manveer-clouds.webp'
    },
    {
      id: 'farm',
      src: 'Images/farm.webp',
      title: 'Pastoral Farmland',
      caption: 'Slow Life does sound nice sometimes.',
      category: 'vistas',
      categoryLabel: 'Skies & Horizons',
      tags: ['Farm', 'Countryside', 'Fields', 'Simplicity'],
      downloadName: 'manveer-farm.webp'
    },
    {
      id: 'green',
      src: 'Images/green.webp',
      title: 'Whispering Branch',
      caption: 'The branch really wants to talk to the wheatgrass.',
      category: 'nature',
      categoryLabel: 'Nature & Plants',
      tags: ['Wheatgrass', 'Branch', 'Flora', 'Growth'],
      downloadName: 'manveer-green.webp'
    },
    {
      id: 'love',
      src: 'Images/love.webp',
      title: 'The Old Tube Well',
      caption: 'There a 2 kinds of people in the world, people who can hear this picture and the rest.',
      category: 'nostalgia',
      categoryLabel: 'Memories',
      tags: ['Water', 'Childhood', 'Nostalgia', 'Rural'],
      downloadName: 'manveer-tube-well.webp'
    },
    {
      id: 'mountains',
      src: 'Images/Mountains.webp',
      title: 'Silent Giants',
      caption: "I am realizing I'm just scared of big things.",
      category: 'vistas',
      categoryLabel: 'Skies & Horizons',
      tags: ['Mountains', 'Grandeur', 'Horizon', 'Vast'],
      downloadName: 'manveer-mountains.webp'
    },
    {
      id: 'orange-sky',
      src: 'Images/orange sky.webp',
      title: 'Burning Horizon',
      caption: 'I assure you the photo does not capture how orange the sky was in person.',
      category: 'vistas',
      categoryLabel: 'Skies & Horizons',
      tags: ['Sunset', 'Orange Sky', 'Twilight', 'Radiance'],
      downloadName: 'manveer-orange-sky.webp'
    },
    {
      id: 'parade',
      src: 'Images/parade.webp',
      title: 'Procession in the Dark',
      caption: 'My Chemical Romance',
      category: 'mood',
      categoryLabel: 'Night',
      tags: ['Night', 'Lanterns', 'Mystery', 'Procession'],
      downloadName: 'manveer-midnight-parade.webp'
    },
    {
      id: 'window',
      src: 'Images/Window.webp',
      title: 'Canopy Skylight',
      caption: 'The trees are always kind enough to leave some space for the sky to peek through.',
      category: 'nature',
      categoryLabel: 'Nature & Plants',
      tags: ['Canopy', 'Forest', 'Trees', 'Perspective'],
      downloadName: 'manveer-canopy-window.webp'
    },
    {
      id: 'pink',
      src: 'Images/pink.webp',
      title: 'Wild Petals',
      caption: 'Roses are overrated anyway.',
      category: 'nature',
      categoryLabel: 'Nature & Plants',
      tags: ['Bloom', 'Pink', 'Floral', 'Macro'],
      downloadName: 'manveer-pink-flower.webp'
    },
    {
      id: 'sunset',
      src: 'Images/sunset.webp',
      title: 'Golden Hour Journey',
      caption: "I'll alwas prefer sunsets over sunrises because Sunsets always let me know that it's time to head home.",
      category: 'vistas',
      categoryLabel: 'Skies & Horizons',
      tags: ['Sunset', 'Golden Hour', 'Homeward', 'Warmth'],
      downloadName: 'manveer-sunset.webp'
    },
    {
      id: 'webs',
      src: 'Images/webs.webp',
      title: 'Dew & Geometry',
      caption: 'Some little spider worked very hard on this',
      category: 'nature',
      categoryLabel: 'Nature & Plants',
      tags: ['Spider', 'Web', 'Dew', 'Architecture'],
      downloadName: 'manveer-spider-webs.webp'
    },
    {
      id: 'peeking',
      src: 'Images/Peeking.webp',
      title: 'Peekaboo Peak',
      caption: 'Even mountains play peekaboo sometimes.',
      category: 'vistas',
      categoryLabel: 'Skies & Horizons',
      tags: ['Mountains', 'Peekaboo', 'Fog', 'Trees'],
      downloadName: 'manveer-peeking-mountain.webp'
    },
    {
      id: 'lights',
      src: 'Images/lights.webp',
      title: 'Beacon in the Night',
      caption: 'Moths were going crazy around this.',
      category: 'mood',
      categoryLabel: 'Night',
      tags: ['Floodlights', 'Night', 'Moths', 'Industrial'],
      downloadName: 'manveer-floodlights.webp'
    }
  ];

  // --- Initial Default Likes ---
  const INITIAL_LIKES = {
    'after-rain': 42,
    'cove': 29,
    'clouds': 54,
    'farm': 33,
    'green': 26,
    'love': 67,
    'mountains': 48,
    'orange-sky': 71,
    'parade': 39,
    'window': 45,
    'pink': 31,
    'sunset': 83,
    'webs': 37,
    'peeking': 52,
    'lights': 28
  };

  // --- App State ---
  const state = {
    filter: 'all',
    view: 'masonry',
    search: '',
    currentFilteredList: [...PHOTOS],
    lightboxIndex: -1,
    isZoomed: false,
    soundEnabled: localStorage.getItem('tomato_sound') === 'true',
    userFavorites: new Set(JSON.parse(localStorage.getItem('tomato_favorites') || '[]')),
    likesCount: JSON.parse(localStorage.getItem('tomato_likes') || JSON.stringify(INITIAL_LIKES))
  };

  // --- Web Audio Tactile Camera Shutter ---
  let audioCtx = null;
  function playShutterSound() {
    if (!state.soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const now = audioCtx.currentTime;
      // White noise buffer for mechanical click
      const bufferSize = audioCtx.sampleRate * 0.05;
      const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = audioCtx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(1200, now);

      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      whiteNoise.start(now);
      whiteNoise.stop(now + 0.05);
    } catch (e) {
      // Audio fallback silent
    }
  }

  // --- DOM Elements ---
  const galleryContainer = document.getElementById('galleryContainer');
  const emptyGallery = document.getElementById('emptyGallery');
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const filterPills = document.querySelectorAll('.tape-tab, .filter-pill');
  const viewBtns = document.querySelectorAll('.darkroom-mode-btn, .view-btn');
  const resultsCountEl = document.getElementById('resultsCount');
  const toastContainer = document.getElementById('toastContainer');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const randomPhotoBtn = document.getElementById('randomPhotoBtn');
  const shortcutsModal = document.getElementById('shortcutsModal');
  const openShortcutsBtn = document.getElementById('openShortcutsBtn');
  const closeShortcutsBtn = document.getElementById('closeShortcutsBtn');
  const copyEmailBtn = document.getElementById('copyEmailBtn');

  // Lightbox DOM
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxImgWrap = document.getElementById('lightboxImgWrap');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCaptionText = document.getElementById('lightboxCaptionText');
  const lightboxCaptionTag = document.getElementById('lightboxCaptionTag');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxLikeBtn = document.getElementById('lightboxLikeBtn');
  const lightboxZoomBtn = document.getElementById('lightboxZoomBtn');
  const lightboxFullscreenBtn = document.getElementById('lightboxFullscreenBtn');
  const lightboxDownloadBtn = document.getElementById('lightboxDownloadBtn');
  const lightboxShareBtn = document.getElementById('lightboxShareBtn');
  const dockStrip = document.getElementById('dockStrip');

  // --- Toast Manager ---
  function showToast(message, icon = '✓') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px) scale(0.95)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2600);
  }

  // --- Filtering & Searching Logic ---
  function computeFilteredPhotos() {
    let list = PHOTOS;

    // Filter Category
    if (state.filter === 'favorites') {
      list = list.filter(p => state.userFavorites.has(p.id));
    } else if (state.filter !== 'all') {
      list = list.filter(p => p.category === state.filter);
    }

    // Search Query
    if (state.search.trim() !== '') {
      const q = state.search.toLowerCase().trim();
      list = list.filter(p => {
        return (
          p.title.toLowerCase().includes(q) ||
          p.caption.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.tags.some(t => t.toLowerCase().includes(q))
        );
      });
    }

    state.currentFilteredList = list;
    return list;
  }

  // --- Dynamic Category Pill Counts ---
  function updateCategoryPillCounts() {
    const counts = { all: PHOTOS.length, favorites: state.userFavorites.size };
    PHOTOS.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });

    filterPills.forEach(pill => {
      const filter = pill.dataset.filter;
      const countEl = pill.querySelector('.pill-count');
      if (countEl && counts[filter] !== undefined) {
        countEl.textContent = counts[filter];
      }
    });
  }

  // --- Render Gallery Cards ---
  function renderGallery() {
    updateCategoryPillCounts();
    const filtered = computeFilteredPhotos();
    
    // Update counter
    resultsCountEl.textContent = `${filtered.length} / ${PHOTOS.length} PHOTOS`;

    if (filtered.length === 0) {
      galleryContainer.innerHTML = '';
      emptyGallery.classList.add('visible');
      return;
    }

    emptyGallery.classList.remove('visible');

    // Build Cards HTML (Captions only show when clicked and enlarged in lightbox!)
    const cardsHtml = filtered.map((photo, index) => {
      const isLiked = state.userFavorites.has(photo.id);

      return `
        <article class="photo-card" data-id="${photo.id}" data-index="${index}" tabindex="0" role="button" aria-label="View photo: ${photo.title}">
          <div class="card-meta-top">
            <span class="card-frame-no">#${String(index + 1).padStart(2, '0')}</span>
            <div class="card-actions-quick">
              <button class="quick-pin-btn ${isLiked ? 'liked' : ''}" data-action="like" data-id="${photo.id}" title="${isLiked ? 'Unlike' : 'Save'}">
                ${isLiked ? '★ SAVED' : '☆ SAVE'}
              </button>
              <a class="quick-pin-btn" href="${photo.src}" download="${photo.downloadName}" data-action="download" title="Download photo">
                ⬇
              </a>
            </div>
          </div>

          <div class="card-img-wrap">
            <img src="${photo.src}" alt="${photo.title}" loading="lazy" decoding="async">
          </div>
        </article>
      `;
    }).join('');

    galleryContainer.innerHTML = cardsHtml;
  }

  // --- Toggle Favorite / Like ---
  function toggleLike(photoId) {
    playShutterSound();
    const isLiked = state.userFavorites.has(photoId);

    if (isLiked) {
      state.userFavorites.delete(photoId);
      state.likesCount[photoId] = Math.max(0, (state.likesCount[photoId] || 1) - 1);
      showToast('Removed from favorites', '♡');
    } else {
      state.userFavorites.add(photoId);
      state.likesCount[photoId] = (state.likesCount[photoId] || 0) + 1;
      showToast('Saved to favorites!', '❤️');
    }

    // Persist
    localStorage.setItem('tomato_favorites', JSON.stringify([...state.userFavorites]));
    localStorage.setItem('tomato_likes', JSON.stringify(state.likesCount));

    // Re-render gallery & update lightbox if open
    renderGallery();
    if (state.lightboxIndex >= 0) {
      updateLightboxControls();
    }
  }

  // --- Build Lightbox Filmstrip Dock ---
  function buildLightboxDock() {
    dockStrip.innerHTML = state.currentFilteredList.map((photo, idx) => `
      <div class="dock-thumb ${idx === state.lightboxIndex ? 'active' : ''}" data-dock-index="${idx}" title="${photo.title}">
        <img src="${photo.src}" alt="${photo.title}" loading="lazy">
      </div>
    `).join('');

    // Center active thumb
    const activeThumb = dockStrip.querySelector('.dock-thumb.active');
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  // --- Open Lightbox ---
  function openLightbox(index) {
    if (index < 0 || index >= state.currentFilteredList.length) return;
    playShutterSound();

    state.lightboxIndex = index;
    state.isZoomed = false;
    lightboxImgWrap.classList.remove('zoomed');

    const photo = state.currentFilteredList[index];

    // Image & details
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.title;
    lightboxCounter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(state.currentFilteredList.length).padStart(2, '0')}`;
    lightboxTitle.textContent = photo.title;
    lightboxCaptionText.textContent = `"${photo.caption}"`;
    lightboxCaptionTag.textContent = `${photo.categoryLabel} • ${photo.tags.join(' • ')}`;

    // Download Button setup
    lightboxDownloadBtn.setAttribute('href', photo.src);
    lightboxDownloadBtn.setAttribute('download', photo.downloadName);

    // Deep link in URL
    history.replaceState(null, '', `#photo-${photo.id}`);

    // Update controls and thumbnails
    updateLightboxControls();
    buildLightboxDock();

    // Show modal
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // --- Update Lightbox Controls (Liked status, Zoom) ---
  function updateLightboxControls() {
    if (state.lightboxIndex < 0) return;
    const photo = state.currentFilteredList[state.lightboxIndex];
    const isLiked = state.userFavorites.has(photo.id);

    if (isLiked) {
      lightboxLikeBtn.classList.add('liked');
      lightboxLikeBtn.innerHTML = '<span>★ SAVED</span>';
    } else {
      lightboxLikeBtn.classList.remove('liked');
      lightboxLikeBtn.innerHTML = '<span>☆ SAVE</span>';
    }
  }

  // --- Close Lightbox ---
  function closeLightbox() {
    state.lightboxIndex = -1;
    state.isZoomed = false;
    lightboxImgWrap.classList.remove('zoomed');
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
    history.replaceState(null, '', ' ');
  }

  // --- Navigate Lightbox ---
  function navigateLightbox(direction) {
    if (state.lightboxIndex < 0) return;
    const len = state.currentFilteredList.length;
    let nextIndex = state.lightboxIndex + direction;
    if (nextIndex < 0) nextIndex = len - 1;
    if (nextIndex >= len) nextIndex = 0;
    openLightbox(nextIndex);
  }

  // --- Toggle Zoom in Lightbox ---
  function toggleZoom() {
    state.isZoomed = !state.isZoomed;
    lightboxImgWrap.classList.toggle('zoomed', state.isZoomed);
  }

  // --- Toggle Fullscreen ---
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  // --- Surprise Me / Random Photo ---
  function surpriseMe() {
    playShutterSound();
    const len = state.currentFilteredList.length;
    if (len === 0) return;
    const randomIndex = Math.floor(Math.random() * len);
    openLightbox(randomIndex);
    showToast('Revealed random photo!', '✨');
  }

  // --- Sound Toggle ---
  function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    localStorage.setItem('tomato_sound', state.soundEnabled);
    updateSoundBtn();
    if (state.soundEnabled) {
      playShutterSound();
      showToast('Tactile shutter click ON', '🔊');
    } else {
      showToast('Shutter sound MUTED', '🔇');
    }
  }

  function updateSoundBtn() {
    if (!soundToggleBtn) return;
    if (state.soundEnabled) {
      soundToggleBtn.classList.add('active');
      soundToggleBtn.setAttribute('title', 'Shutter sound: ON');
      soundToggleBtn.innerHTML = '<span>🔊 SHUTTER ON</span>';
    } else {
      soundToggleBtn.classList.remove('active');
      soundToggleBtn.setAttribute('title', 'Shutter sound: MUTED');
      soundToggleBtn.innerHTML = '<span>🔇 SHUTTER OFF</span>';
    }
  }

  // --- Event Listeners Initialization ---
  function initEvents() {
    // Gallery Card clicks (delegation)
    galleryContainer.addEventListener('click', e => {
      const likeBtn = e.target.closest('[data-action="like"]');
      if (likeBtn) {
        e.stopPropagation();
        const photoId = likeBtn.dataset.id;
        toggleLike(photoId);
        return;
      }

      const downloadBtn = e.target.closest('[data-action="download"]');
      if (downloadBtn) {
        e.stopPropagation();
        playShutterSound();
        showToast('Downloading photo...', '⬇');
        return;
      }

      const card = e.target.closest('.photo-card');
      if (card) {
        const index = parseInt(card.dataset.index, 10);
        openLightbox(index);
      }
    });

    // Keyboard support on cards
    galleryContainer.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('.photo-card');
        if (card) {
          e.preventDefault();
          const index = parseInt(card.dataset.index, 10);
          openLightbox(index);
        }
      }
    });

    // Search input
    searchInput.addEventListener('input', e => {
      state.search = e.target.value;
      if (state.search.length > 0) {
        searchClearBtn.classList.add('visible');
      } else {
        searchClearBtn.classList.remove('visible');
      }
      renderGallery();
    });

    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.search = '';
      searchClearBtn.classList.remove('visible');
      searchInput.focus();
      renderGallery();
    });

    // Filter pills
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        playShutterSound();
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.filter = pill.dataset.filter;
        renderGallery();
      });
    });

    // View switcher buttons
    viewBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        playShutterSound();
        viewBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.view = btn.dataset.view;

        galleryContainer.classList.remove('view-masonry', 'view-grid', 'view-filmstrip');
        galleryContainer.classList.add(`view-${state.view}`);
      });
    });

    // Lightbox Controls
    lightboxPrevBtn.addEventListener('click', e => {
      e.stopPropagation();
      navigateLightbox(-1);
    });

    lightboxNextBtn.addEventListener('click', e => {
      e.stopPropagation();
      navigateLightbox(1);
    });

    lightboxCloseBtn.addEventListener('click', closeLightbox);

    lightboxLikeBtn.addEventListener('click', () => {
      if (state.lightboxIndex >= 0) {
        const photo = state.currentFilteredList[state.lightboxIndex];
        toggleLike(photo.id);
      }
    });

    lightboxZoomBtn.addEventListener('click', toggleZoom);
    lightboxImgWrap.addEventListener('click', toggleZoom);
    lightboxFullscreenBtn.addEventListener('click', toggleFullscreen);

    lightboxShareBtn.addEventListener('click', () => {
      playShutterSound();
      const currentUrl = window.location.href;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(currentUrl).then(() => {
          showToast('Direct photo link copied!', '🔗');
        });
      } else {
        showToast('Link copied to URL bar', '🔗');
      }
    });

    // Dock thumbnail clicks
    dockStrip.addEventListener('click', e => {
      const thumb = e.target.closest('.dock-thumb');
      if (thumb) {
        const idx = parseInt(thumb.dataset.dockIndex, 10);
        openLightbox(idx);
      }
    });

    // Close lightbox on backdrop click
    lightboxModal.addEventListener('click', e => {
      if (e.target === lightboxModal || e.target.classList.contains('lightbox-stage')) {
        closeLightbox();
      }
    });

    // Sound and Random Buttons
    if (soundToggleBtn) soundToggleBtn.addEventListener('click', toggleSound);
    if (randomPhotoBtn) randomPhotoBtn.addEventListener('click', surpriseMe);

    // Shortcuts Modal
    if (openShortcutsBtn) {
      openShortcutsBtn.addEventListener('click', () => {
        shortcutsModal.classList.add('active');
      });
    }
    if (closeShortcutsBtn) {
      closeShortcutsBtn.addEventListener('click', () => {
        shortcutsModal.classList.remove('active');
      });
    }
    shortcutsModal.addEventListener('click', e => {
      if (e.target === shortcutsModal) {
        shortcutsModal.classList.remove('active');
      }
    });

    // Copy Email Button
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        playShutterSound();
        const email = 'manveerparmar@protonmail.com';
        if (navigator.clipboard) {
          navigator.clipboard.writeText(email).then(() => {
            showToast('Email copied to clipboard!', '📋');
          });
        } else {
          showToast(`Contact: ${email}`, '✉');
        }
      });
    }

    // Back to top & Scroll Progress
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) : 0;

      if (scrollTop > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Global Keyboard Shortcuts
    window.addEventListener('keydown', e => {
      // If typing in input, skip shortcut handling
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        if (e.key === 'Escape') {
          document.activeElement.blur();
        }
        return;
      }

      if (e.key === '/' || (e.ctrlKey && e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        searchInput.focus();
        return;
      }

      if (e.key === '?') {
        shortcutsModal.classList.toggle('active');
        return;
      }

      // Lightbox Shortcuts
      if (state.lightboxIndex >= 0) {
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
          navigateLightbox(1);
        } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
          navigateLightbox(-1);
        } else if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'f' || e.key === 'F') {
          toggleFullscreen();
        } else if (e.key === 'z' || e.key === 'Z') {
          toggleZoom();
        } else if (e.key === 'l' || e.key === 'L') {
          const photo = state.currentFilteredList[state.lightboxIndex];
          toggleLike(photo.id);
        }
        return;
      }

      // Global Shortcuts outside lightbox
      if (e.key === 'Escape') {
        shortcutsModal.classList.remove('active');
      } else if (e.key === 'r' || e.key === 'R') {
        surpriseMe();
      } else if (e.key === 'm' || e.key === 'M') {
        toggleSound();
      }
    });

    // Touch Swipe Gestures in Lightbox
    let touchStartX = 0;
    let touchStartY = 0;
    lightboxModal.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    lightboxModal.addEventListener('touchend', e => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          navigateLightbox(1); // Swipe left -> Next
        } else {
          navigateLightbox(-1); // Swipe right -> Prev
        }
      } else if (diffY > 80 && Math.abs(diffY) > Math.abs(diffX)) {
        closeLightbox(); // Swipe down -> Close
      }
    }, { passive: true });
  }

  // --- Deep Linking on Load ---
  function checkUrlHash() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#photo-')) {
      const photoId = hash.replace('#photo-', '');
      const idx = PHOTOS.findIndex(p => p.id === photoId);
      if (idx !== -1) {
        // Switch to all photos if needed
        state.filter = 'all';
        filterPills.forEach(p => p.classList.toggle('active', p.dataset.filter === 'all'));
        renderGallery();
        openLightbox(idx);
      }
    }
  }

  // --- App Initialization ---
  function init() {
    updateSoundBtn();
    renderGallery();
    initEvents();
    checkUrlHash();
  }

  // Boot on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
