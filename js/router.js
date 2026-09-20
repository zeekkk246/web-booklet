/**
 * MAPALA WANASAGARA - SPA HASH ROUTER & TRANSITION ENGINE
 * Manages client-side hash routing with dramatic cinematic transitions:
 * 1. Top progress bar
 * 2. Wipe curtain overlay (dual-tone forest & ocean)
 * 3. Quick splash logo flash (350-400ms)
 * 4. Page reveal animation (scale + fade)
 */

class WanasagaraRouter {
  constructor() {
    this.appView = document.getElementById('app-view');
    this.progressBar = document.getElementById('transition-progress-bar');
    this.curtain = document.getElementById('transition-curtain');
    this.splash = document.getElementById('transition-splash');
    this.isNavigating = false;
    this.currentRoute = null;

    // Audio synthesizer for tactile navigation feel (optional subtle audio)
    this.audioEnabled = false;
    this.initAudio();

    // Bind hash changes and initial load
    window.addEventListener('hashchange', () => this.handleRoute());
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(() => this.handleRoute(), 10);
    } else {
      window.addEventListener('DOMContentLoaded', () => this.handleRoute());
      window.addEventListener('load', () => this.handleRoute());
    }
  }

  initAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    } catch (e) {
      this.audioCtx = null;
    }
  }

  playTransitionSound() {
    if (!this.audioEnabled || !this.audioCtx) return;
    try {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, this.audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.25);
    } catch (e) {
      // Ignore audio failure
    }
  }

  getRoute() {
    const rawHash = window.location.hash || '#/home';
    const cleanHash = rawHash.split('?')[0]; // strip query params
    return cleanHash;
  }

  getQueryParams() {
    const rawHash = window.location.hash || '';
    const parts = rawHash.split('?');
    if (parts.length < 2) return {};
    const query = new URLSearchParams(parts[1]);
    const params = {};
    for (const [key, value] of query.entries()) {
      params[key] = value;
    }
    return params;
  }

  async handleRoute() {
    const fullHash = window.location.hash || '#/home';
    const route = this.getRoute();
    
    // Redirect removed pages to home
    if (route === '#/testimoni' || route === '#/pendaftaran') {
      window.location.hash = '#/home';
      return;
    }

    // If exact same full hash including query params and view already has content, ignore
    if (this.isNavigating) return;
    if (this.currentFullHash === fullHash && this.appView.innerHTML.trim() !== '') return;

    // Fast-path: If already on #/divisi and only switching division query param, update instantly without curtain reload
    if (this.currentRoute === '#/divisi' && route === '#/divisi' && this.appView.innerHTML.trim() !== '') {
      this.currentFullHash = fullHash;
      const queryParams = this.getQueryParams();
      if (window.WanasagaraApp && typeof window.WanasagaraApp.renderDivisi === 'function') {
        this.appView.innerHTML = `
          <div class="page-container page-reveal w-full">
            ${window.WanasagaraApp.renderDivisi(queryParams)}
          </div>
        `;
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons();
        }
        if (window.WanasagaraApp && typeof window.WanasagaraApp.initPageInteractions === 'function') {
          window.WanasagaraApp.initPageInteractions(route, queryParams);
        }
        this.updateActiveNav(route);
        return;
      }
    }

    this.isNavigating = true;
    this.currentFullHash = fullHash;
    this.playTransitionSound();

    // Map route to render function
    const routeMap = {
      '': 'renderHome',
      '#/': 'renderHome',
      '#/home': 'renderHome',
      '#/tentang': 'renderTentang',
      '#/struktur': 'renderStruktur',
      '#/kegiatan': 'renderKegiatan',
      '#/divisi': 'renderDivisi',
      '#/gallery': 'renderGallery',
      '#/kontak': 'renderKontak'
    };

    const renderMethod = routeMap[route] || 'renderHome';

    // 1. Trigger Loading Bar (progress to 60%)
    if (this.progressBar) {
      this.progressBar.classList.add('active');
      this.progressBar.style.width = '65%';
    }

    // 2. Trigger Wipe Curtain In
    if (this.curtain) {
      this.curtain.style.visibility = 'visible';
      this.curtain.style.pointerEvents = 'auto';
      this.curtain.classList.remove('curtain-wipe-out');
      this.curtain.classList.add('curtain-wipe-in');
    }

    // 3. Show Splash Logo with slight delay to sync with curtain close
    await this.sleep(180);
    if (this.splash) {
      this.splash.classList.add('show');
    }

    // Wait for curtain to fully cover the screen and display splash (350ms total)
    await this.sleep(320);

    // 4. Swap page content completely in background while curtain is shut
    try {
      if (window.WanasagaraApp && typeof window.WanasagaraApp[renderMethod] === 'function') {
        const queryParams = this.getQueryParams();
        const contentHtml = window.WanasagaraApp[renderMethod](queryParams);
        
        this.appView.innerHTML = `
          <div class="page-container page-reveal w-full">
            ${contentHtml}
          </div>
        `;
      } else {
        this.appView.innerHTML = `<div class="p-12 text-center text-red-400">Halaman tidak ditemukan.</div>`;
      }
    } catch (err) {
      console.error('Error rendering page:', err);
    }

    // 5. Scroll to top immediately while view is hidden behind curtain
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // 6. Update Active Navigation Links in Navbar & Mobile Drawer
    this.updateActiveNav(route);

    // 7. Initialize Lucide Icons for the newly mounted page
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }

    // 8. Call post-render handlers for page interactivity (e.g. filters, accordions)
    if (window.WanasagaraApp && typeof window.WanasagaraApp.initPageInteractions === 'function') {
      window.WanasagaraApp.initPageInteractions(route, this.getQueryParams());
    }

    // Complete loading bar to 100%
    if (this.progressBar) {
      this.progressBar.style.width = '100%';
    }

    // 9. Hide Splash Logo
    if (this.splash) {
      this.splash.classList.remove('show');
    }

    // 10. Trigger Curtain Wipe Out to reveal the newly rendered page
    await this.sleep(60);
    if (this.curtain) {
      this.curtain.classList.remove('curtain-wipe-in');
      this.curtain.classList.add('curtain-wipe-out');
    }

    // Clean up after wipe out animation completes
    await this.sleep(450);
    if (this.curtain) {
      this.curtain.style.visibility = 'hidden';
      this.curtain.style.pointerEvents = 'none';
      this.curtain.classList.remove('curtain-wipe-out');
    }

    // Fade out progress bar
    if (this.progressBar) {
      this.progressBar.classList.remove('active');
      this.progressBar.style.width = '0%';
    }

    this.currentRoute = route;
    this.isNavigating = false;
  }

  updateActiveNav(currentRoute) {
    // Standardize route name
    let normalized = currentRoute;
    if (normalized === '#/' || normalized === '') normalized = '#/home';

    const allNavLinks = document.querySelectorAll('.nav-link');
    allNavLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      if (href.startsWith(normalized)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close mobile menu drawer if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Global navigate helper
window.navigateTo = function(route) {
  if (window.location.hash === route) {
    // force re-render if needed
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  } else {
    window.location.hash = route;
  }
};

// Initialize router instance
window.wanasagaraRouter = new WanasagaraRouter();
