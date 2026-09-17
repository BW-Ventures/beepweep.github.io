(() => {
  'use strict';

  document.documentElement.classList.add('enhanced');

  // 1. Dynamic current year in footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Announcement banner dismiss
  const banner = document.getElementById('announcement-banner');
  const bannerClose = document.getElementById('announcement-close');
  if (banner && bannerClose) {
    const bannerStorageKey = 'beepweep-announcement-dismissed-2026';
    try {
      if (sessionStorage.getItem(bannerStorageKey) === 'true') {
        banner.hidden = true;
      }
    } catch (e) {
      // Storage blocked fallback
    }

    bannerClose.addEventListener('click', () => {
      banner.hidden = true;
      try {
        sessionStorage.setItem(bannerStorageKey, 'true');
      } catch (e) {}
    });
  }

  // 3. Mobile Navigation Toggle & Accessible Focus
  const menuBtn = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if (menuBtn && nav) {
    const setMenu = (open) => {
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('is-open', open);
      if (open) {
        const firstLink = nav.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    };

    menuBtn.addEventListener('click', () => {
      const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      setMenu(!isOpen);
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        setMenu(false);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menuBtn.focus();
      }
    });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.site-header')) {
        setMenu(false);
      }
    });

    window.matchMedia('(max-width: 900px)').addEventListener('change', () => setMenu(false));
  }

  // 4. Accessible Product Tabs System
  const tabList = document.querySelector('[data-product-tabs]');
  if (tabList) {
    const tabButtons = Array.from(tabList.querySelectorAll('button[role="tab"]'));
    const panels = tabButtons.map((btn) => {
      const targetId = btn.getAttribute('aria-controls');
      return document.getElementById(targetId);
    }).filter(Boolean);

    const selectTab = (index, focusTab = false) => {
      tabButtons.forEach((btn, i) => {
        const active = i === index;
        btn.setAttribute('aria-selected', String(active));
        btn.tabIndex = active ? 0 : -1;
        if (panels[i]) {
          panels[i].hidden = !active;
        }
      });

      if (focusTab && tabButtons[index]) {
        tabButtons[index].focus();
      }
    };

    const selectFromHash = (focusPanel = false) => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return -1;
      const index = panels.findIndex((p) => p && p.id === hash);
      if (index !== -1) {
        selectTab(index, false);
        if (focusPanel && panels[index]) {
          panels[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      return index;
    };

    // Initialize from hash or default to 0
    if (selectFromHash() === -1) {
      selectTab(0, false);
    }

    tabButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        selectTab(index, false);
        if (panels[index]) {
          history.replaceState(null, '', `#${panels[index].id}`);
        }
      });

      btn.addEventListener('keydown', (event) => {
        let nextIndex;
        if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabButtons.length;
        if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = tabButtons.length - 1;

        if (nextIndex !== undefined) {
          event.preventDefault();
          selectTab(nextIndex, true);
          if (panels[nextIndex]) {
            history.replaceState(null, '', `#${panels[nextIndex].id}`);
          }
        }
      });
    });

    window.addEventListener('hashchange', () => {
      selectFromHash(true);
    });

    // Also handle on-page anchor links pointing to #clusterbid, etc.
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').replace('#', '');
        const targetIndex = panels.findIndex((p) => p && p.id === targetId);
        if (targetIndex !== -1) {
          selectTab(targetIndex, false);
          const fleetEl = document.getElementById('fleet');
          if (fleetEl) {
            fleetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  // 5. Privacy-First Cookie Consent & Analytics Opt-In
  const cookieBanner = document.querySelector('.cookie-banner');
  const cookieSettingsBtn = document.querySelector('.cookie-settings');
  if (cookieBanner) {
    const consentStorageKey = 'beepweep-analytics-consent';
    const analyticsId = 'G-MBHSMCVXKS';
    let analyticsLoaded = false;
    let settingsOpened = false;

    const readConsent = () => {
      try {
        return localStorage.getItem(consentStorageKey);
      } catch (e) {
        return null;
      }
    };

    const clearAnalyticsCookies = () => {
      try {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          const eqPos = cookie.indexOf('=');
          const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          if (name.startsWith('_ga')) {
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${window.location.hostname}`;
          }
        }
      } catch (e) {}
    };

    const applyConsent = (accepted) => {
      window[`ga-disable-${analyticsId}`] = !accepted;

      if (!accepted) {
        clearAnalyticsCookies();
        return;
      }

      if (analyticsLoaded) return;
      analyticsLoaded = true;

      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', analyticsId);

      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
      document.head.appendChild(script);
    };

    const recordChoice = (choice) => {
      try {
        localStorage.setItem(consentStorageKey, choice);
      } catch (e) {}

      applyConsent(choice === 'accepted');
      cookieBanner.hidden = true;

      if (settingsOpened && cookieSettingsBtn) {
        cookieSettingsBtn.focus();
      }
      settingsOpened = false;
    };

    // 5b. Header Login Dropdown Menu
    document.querySelectorAll('.login-dropdown-wrapper').forEach((wrapper) => {
      const btn = wrapper.querySelector('.login-btn');
      const menu = wrapper.querySelector('.login-dropdown-menu');
      if (!btn || !menu) return;

      const toggleMenu = (open) => {
        btn.setAttribute('aria-expanded', String(open));
        menu.hidden = !open;
      };

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        toggleMenu(!isOpen);
      });

      document.addEventListener('click', (e) => {
        if (!wrapper.contains(e.target)) {
          toggleMenu(false);
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
          toggleMenu(false);
          btn.focus();
        }
      });
    });

    // 5c. Harvey Partner Logos Ambient Wave Animation
    const partnersGrid = document.querySelector('.partners-grid');
    if (partnersGrid && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const cells = Array.from(partnersGrid.querySelectorAll('.partner-logo'));
      if (cells.length > 0) {
        let isHovered = false;
        partnersGrid.addEventListener('mouseenter', () => { isHovered = true; });
        partnersGrid.addEventListener('mouseleave', () => { isHovered = false; });

        setInterval(() => {
          if (isHovered) return;
          cells.forEach((cell, i) => {
            setTimeout(() => {
              if (isHovered) return;
              cell.classList.add('is-animating');
              setTimeout(() => cell.classList.remove('is-animating'), 900);
            }, i * 160);
          });
        }, 5500);
      }
    }

    const currentConsent = readConsent();
    cookieBanner.hidden = currentConsent === 'accepted' || currentConsent === 'declined';
    applyConsent(currentConsent === 'accepted');

    const acceptBtn = cookieBanner.querySelector('.cookie-accept');
    const declineBtn = cookieBanner.querySelector('.cookie-decline');

    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => recordChoice('accepted'));
    }
    if (declineBtn) {
      declineBtn.addEventListener('click', () => recordChoice('declined'));
    }

    if (cookieSettingsBtn) {
      cookieSettingsBtn.hidden = false;
      cookieSettingsBtn.addEventListener('click', () => {
        settingsOpened = true;
        cookieBanner.hidden = false;
        if (declineBtn) declineBtn.focus();
      });
    }
  }

  // 6. Executive Philosophy Quote Switcher
  const quoteSection = document.getElementById('philosophy');
  if (quoteSection) {
    const toggleBtns = Array.from(quoteSection.querySelectorAll('.quote-toggle-btn'));
    const quoteSlides = Array.from(quoteSection.querySelectorAll('.quote-slide'));
    const quoteIndex = quoteSection.querySelector('.quote-index');
    const prevBtn = quoteSection.querySelector('.quote-prev');
    const nextBtn = quoteSection.querySelector('.quote-next');
    const total = toggleBtns.length;
    let current = 0;

    const setQuote = (index, focusBtn = false) => {
      current = (index + total) % total;

      toggleBtns.forEach((btn, i) => {
        const active = i === current;
        btn.setAttribute('aria-selected', String(active));
        btn.classList.toggle('is-active', active);
        btn.tabIndex = active ? 0 : -1;
      });

      quoteSlides.forEach((slide, i) => {
        const active = i === current;
        slide.classList.toggle('is-active', active);
        slide.hidden = !active;
      });

      if (quoteIndex) quoteIndex.textContent = `${current + 1} / ${total}`;
      if (focusBtn && toggleBtns[current]) toggleBtns[current].focus();
    };

    setQuote(0, false);

    toggleBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => setQuote(index, false));
      btn.addEventListener('keydown', (event) => {
        let nextIndex;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = index + 1;
        else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = index - 1;
        else if (event.key === 'Home') nextIndex = 0;
        else if (event.key === 'End') nextIndex = total - 1;
        if (nextIndex !== undefined) {
          event.preventDefault();
          setQuote(nextIndex, true);
        }
      });
    });

    if (prevBtn) prevBtn.addEventListener('click', () => setQuote(current - 1, false));
    if (nextBtn) nextBtn.addEventListener('click', () => setQuote(current + 1, false));
  }
})();

  // ── Scroll-spy: keep URL hash in sync so refresh restores scroll position ──
  (function initScrollSpy() {
    const NAV_SECTION_IDS = ['platform', 'fleet', 'philosophy', 'journey', 'team', 'coordinates'];
    const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
    const sections = NAV_SECTION_IDS.map(id => document.getElementById(id)).filter(Boolean);

    if (!sections.length) return;

    let currentId = null; // null = hero/top
    let ticking = false;
    let navScrollLock = false;  // true while a nav-click smooth scroll is in flight
    let navScrollLockTimer = null;

    // The clean base URL without any hash
    const baseUrl = location.href.split('#')[0];

    function setHash(newId) {
      if (newId === currentId) return;
      currentId = newId;
      try {
        history.replaceState(null, '', newId ? baseUrl + '#' + newId : baseUrl);
      } catch (e) {}
      navLinks.forEach(a => {
        const active = newId && a.getAttribute('href') === '#' + newId;
        a.setAttribute('aria-current', active ? 'page' : 'false');
        a.classList.toggle('nav-active', !!active);
      });
    }

    function recalc() {
      ticking = false;
      if (navScrollLock) return; // nav-click scroll in flight: don't override
      const TRIGGER = window.innerHeight * 0.4;
      let active = null;
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= TRIGGER) active = s.id;
      }
      setHash(active);
    }

    // Throttled scroll listener
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(recalc); }
    }, { passive: true });

    // Intercept ALL nav anchor clicks: prevent browser from pushing a history
    // entry with the hash; instead scroll smoothly and replaceState ourselves.
    navLinks.forEach(a => {
      a.addEventListener('click', e => {
        const targetId = a.getAttribute('href').slice(1);
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;
        e.preventDefault();
        // Lock recalc() for ~900ms so the smooth scroll doesn't race with spy
        navScrollLock = true;
        clearTimeout(navScrollLockTimer);
        navScrollLockTimer = setTimeout(() => {
          navScrollLock = false;
          recalc(); // re-evaluate once scroll settles
        }, 900);
        setHash(targetId);
        targetEl.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Also intercept the announcement banner "Explore our products" link
    document.querySelectorAll('a[href^="#fleet"], a[href^="#platform"]').forEach(a => {
      if (navLinks.includes(a)) return; // already handled
      a.addEventListener('click', e => {
        const targetId = a.getAttribute('href').slice(1);
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;
        e.preventDefault();
        navScrollLock = true;
        clearTimeout(navScrollLockTimer);
        navScrollLockTimer = setTimeout(() => { navScrollLock = false; recalc(); }, 900);
        setHash(targetId);
        targetEl.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // If user manually scrolls during nav lock, release it early
    let manualScrollDetect = null;
    window.addEventListener('wheel', () => {
      if (navScrollLock) {
        navScrollLock = false;
        clearTimeout(navScrollLockTimer);
      }
    }, { passive: true });
    window.addEventListener('touchmove', () => {
      if (navScrollLock) {
        navScrollLock = false;
        clearTimeout(navScrollLockTimer);
      }
    }, { passive: true });

    // Seed on load
    recalc();
  })();

  // 7. Global Image & SVG Drag Prevention
  document.addEventListener('dragstart', (event) => {
    if (event.target && (event.target.tagName === 'IMG' || event.target.tagName === 'SVG' || (typeof event.target.closest === 'function' && event.target.closest('img, svg, picture, figure')))) {
      event.preventDefault();
    }
  });

  // 8. Journey timeline: cursor line tracks mouse/scroll and highlights the nearest row
  (function initJourneyTimeline() {
    const table = document.querySelector('.journey-table.timeline');
    if (!table) return;

    const line = table.querySelector('.timeline-cursor-line');
    const rows = Array.from(table.querySelectorAll('.journey-row'));
    if (!line || !rows.length) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let hovering = false;
    let raf = 0;

    function rowCenter(row) {
      return row.offsetTop + row.offsetHeight / 2;
    }

    function setActiveByY(y) {
      let best = 0;
      let bestDist = Infinity;
      rows.forEach((row, i) => {
        const dist = Math.abs(rowCenter(row) - y);
        if (dist < bestDist) { bestDist = dist; best = i; }
      });
      rows.forEach((row, i) => row.classList.toggle('is-active', i === best));
      return rowCenter(rows[best]);
    }

    function setLine(y, snap) {
      const max = table.offsetHeight;
      const clamped = Math.max(0, Math.min(max, y));
      line.style.transition = snap && !reduceMotion ? 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)' : 'none';
      line.style.transform = 'translateY(' + clamped + 'px)';
    }

    function highlightFromViewport() {
      const trigger = window.innerHeight * 0.45;
      let best = 0;
      rows.forEach((row, i) => {
        if (row.getBoundingClientRect().top <= trigger) best = i;
      });
      rows.forEach((row, i) => row.classList.toggle('is-active', i === best));
      if (!hovering) setLine(rowCenter(rows[best]), true);
    }

    table.addEventListener('mouseenter', () => {
      hovering = true;
      table.classList.add('is-tracking');
    });

    table.addEventListener('mouseleave', () => {
      hovering = false;
      table.classList.remove('is-tracking');
      highlightFromViewport();
    });

    table.addEventListener('mousemove', (event) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = event.clientY - table.getBoundingClientRect().top;
        const snapY = setActiveByY(y);
        setLine(y, false);
      });
    });

    window.addEventListener('scroll', () => {
      if (hovering) return;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        highlightFromViewport();
      });
    }, { passive: true });

    highlightFromViewport();
  })();
