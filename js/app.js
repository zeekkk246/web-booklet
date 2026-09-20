/**
 * DIVERVENTURE PRESIDENT UNIVERSITY - VIEW RENDERERS & INTERACTIVITY
 * Berisi komponen render untuk 6 halaman resmi (SPA Hash Routing):
 * 1. Home
 * 2. Tentang Kami (dengan fitur Pencarian Arsip Sejarah sejak tahun 2000-an)
 * 3. Struktur Organisasi (Badan Pengurus 2 & Ketua Divisi)
 * 4. Kegiatan (Filter tunggal "Semua Kegiatan" & Lightbox HD)
 * 5. Divisi & Minat Khusus (7 Divisi dengan pergantian instan tanpa bug)
 * 6. Kontak & Media Sosial (@diverventurepresuniv)
 */

const WanasagaraApp = {
  // =========================================================================
  // 1. HOME VIEW
  // =========================================================================
  renderHome() {
    const data = window.DIVERVENTURE_DATA || window.MAPALA_DATA;
    return `
      <!-- HERO SECTION -->
      <section class="relative min-h-[88vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 topo-lines">
        <!-- Mountain & Ocean Background Overlay -->
        <div class="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80" 
            alt="Diverventure Gunung dan Samudra" 
            class="w-full h-full object-cover object-center opacity-30 filter saturate-150 brightness-75 scale-105 transition-transform duration-10000 ease-out"
          />
          <div class="absolute inset-0 hero-mountain-ocean-gradient"></div>
        </div>

        <!-- Hero Content -->
        <div class="relative z-10 max-w-5xl mx-auto text-center py-12 sm:py-16">
          <!-- Top Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-forest text-xs sm:text-sm font-mono-coord uppercase tracking-widest mb-6">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            ${data.org.university} • ${data.org.generation}
          </div>

          <!-- Main Title -->
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4 font-heading">
            DIVERVENTURE <span class="gradient-text-forest-ocean">PRESUNIV</span>
          </h1>

          <!-- Tagline -->
          <p class="text-lg sm:text-2xl text-emerald-200/90 font-medium italic max-w-3xl mx-auto mb-6">
            "${data.org.tagline}"
          </p>

          <p class="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Organisasi pecinta alam mahasiswa President University yang memadukan ketangguhan rimba pegunungan vulkanik dan keluasan samudra kepulauan nusantara dalam riset ilmiah, konservasi alam, dan persaudaraan tanpa batas.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <a 
              href="#/kegiatan" 
              class="btn-beacon px-8 py-3.5 rounded-xl font-semibold text-white inline-flex items-center gap-3 shadow-lg group text-sm sm:text-base"
            >
              <span>Jelajahi Kegiatan</span>
              <i data-lucide="camera" class="w-4 h-4 group-hover:scale-110 transition-transform"></i>
            </a>

            <a 
              href="#/divisi" 
              class="glass-card px-7 py-3.5 rounded-xl font-semibold text-emerald-300 hover:text-white inline-flex items-center gap-2.5 text-sm sm:text-base border border-emerald-500/30"
            >
              <i data-lucide="compass" class="w-4 h-4 text-emerald-400"></i>
              <span>Jelajahi 7 Divisi</span>
            </a>

            <a 
              href="#/tentang" 
              class="px-6 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white inline-flex items-center gap-2 text-sm sm:text-base transition-colors"
            >
              <i data-lucide="history" class="w-4 h-4 text-cyan-400"></i>
              <span>Arsip Sejak 2000-an</span>
            </a>
          </div>

          <!-- Location & Coordinates Footer Tag -->
          <div class="mt-12 flex items-center justify-center gap-4 text-xs font-mono-coord text-slate-400">
            <span class="flex items-center gap-1.5"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-emerald-400"></i> President University • Cikarang</span>
            <span>•</span>
            <span class="text-amber-300/80">Est. 2000</span>
          </div>
        </div>

        <!-- Mountain & Wave SVG Edge Divider -->
        <div class="absolute bottom-0 inset-x-0 z-10 pointer-events-none">
          <svg class="w-full h-12 sm:h-16 text-[#070d0f] fill-current preserve-3d" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,32L60,42.7C120,53,240,75,360,69.3C480,64,600,32,720,32C840,32,960,64,1080,69.3C1200,75,1320,53,1380,42.7L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      <!-- STATS STRIP -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          ${data.org.stats.map(st => `
            <div class="glass-card p-5 sm:p-6 rounded-2xl border border-emerald-500/20 text-center relative overflow-hidden group">
              <div class="w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center text-emerald-300 group-hover:scale-110 transition-transform">
                <i data-lucide="${st.icon}" class="w-5 h-5"></i>
              </div>
              <div class="text-2xl sm:text-3xl font-extrabold text-white font-mono-coord">${st.value}</div>
              <div class="text-xs sm:text-sm font-semibold text-emerald-300 mt-1">${st.label}</div>
              <div class="text-[11px] text-slate-400 mt-0.5">${st.desc}</div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- THREE CORE PILLARS SECTION -->
      <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-14">
          <span class="px-4 py-1 rounded-full text-xs font-mono-coord uppercase tracking-wider bg-emerald-100 text-emerald-700 border border-emerald-200">Tiga Pilar Pergerakan</span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-3 font-heading">
            Dua Alam Dalam <span class="gradient-text-forest-ocean">Satu Jiwa Penjelajah</span>
          </h1>
          <p class="text-gray-600 text-sm sm:text-base mt-3">
            Diverventure memadukan disiplin eksplorasi daratan tertinggi dan penyelaman samudra terdalam dengan dedikasi pelestarian semesta.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${data.pillars.map(p => `
            <div class="glass-card rounded-2xl p-7 relative overflow-hidden border border-slate-800 flex flex-col justify-between group">
              <div class="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl opacity-20" style="background-color: ${p.accent};"></div>

              <div>
                <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md" style="background-color: ${p.accent}20; border: 1px solid ${p.accent}50; color: ${p.accent};">
                  <i data-lucide="${p.icon}" class="w-6 h-6"></i>
                </div>
                <span class="text-xs font-mono-coord uppercase tracking-wider text-slate-400">${p.tagline}</span>
                <h3 class="text-xl font-bold text-white mt-1 mb-3">${p.title}</h3>
                <p class="text-slate-300 text-sm leading-relaxed">${p.description}</p>
              </div>

              <div class="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span class="flex items-center gap-1.5 text-emerald-400 font-medium">President University Standard</span>
                <i data-lucide="compass" class="w-4 h-4 text-slate-500"></i>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- HIGHLIGHT SECTION: 7 DIVISI ORGANISASI -->
      <section class="py-16 bg-gradient-to-b from-[#070d0f] via-[#091519] to-[#070d0f] relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span class="badge-forest px-3.5 py-1 rounded-full text-xs font-mono-coord uppercase tracking-wider">7 Korps & Tata Kelola</span>
              <h2 class="text-3xl sm:text-4xl font-bold text-white mt-3 font-heading">
                Keahlian Khusus & 7 Divisi Organisasi
              </h2>
              <p class="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
                MTDD, Mountaineering, Human Resources, Equipment, Secretary, Public Relations, dan Student Activities.
              </p>
            </div>
            <a href="#/divisi" class="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-semibold mt-4 md:mt-0 group">
              <span>Buka Detail Seluruh 7 Divisi</span>
              <i data-lucide="chevron-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${data.divisions.slice(0, 3).map(div => `
              <div class="glass-card rounded-2xl overflow-hidden border border-slate-800 group">
                <div class="relative h-48 overflow-hidden">
                  <img src="${div.heroImage}" alt="${div.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#0d181b] via-[#0d181b]/40 to-transparent"></div>
                  <span class="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-emerald-300 border border-emerald-500/30">
                    ${div.subtitle.split('&')[0]}
                  </span>
                </div>
                <div class="p-6">
                  <h3 class="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">${div.title}</h3>
                  <p class="text-slate-400 text-xs mt-2 line-clamp-2">${div.description}</p>
                  <a href="#/divisi?divisi=${div.id}" class="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300">
                    Pelajari divisi ${div.title} &rarr;
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ABOUT DIVERVENTURE SECTION -->
      <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="glass-card rounded-3xl p-8 sm:p-12 border border-emerald-500/20 relative overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-7">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-forest text-xs font-mono-coord uppercase tracking-wider mb-4">
                <i data-lucide="info" class="w-3.5 h-3.5"></i> Tentang Kami
              </div>
              <h2 class="text-2xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
                Diverventure President University
              </h2>
              <p class="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
                Organisasi Pecinta Alam mahasiswa President University yang berdiri sejak tahun 2000-an. Diverventure memadukan semangat petualangan alam bebas dengan nilai-nilai akademis, persaudaraan, dan kepedulian terhadap pelestarian lingkungan hidup.
              </p>
              <div class="mt-6 flex flex-wrap gap-4 text-xs font-mono-coord text-slate-400">
                <span class="px-3 py-1.5 rounded-lg bg-black/40 border border-slate-700">President University</span>
                <span class="px-3 py-1.5 rounded-lg bg-black/40 border border-slate-700">Badan Pengurus 2</span>
                <span class="px-3 py-1.5 rounded-lg bg-black/40 border border-slate-700">7 Divisi</span>
              </div>
              <div class="mt-8 flex items-center gap-4">
                <a href="#/tentang" class="btn-primary-expedition px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2">
                  <i data-lucide="info" class="w-4 h-4"></i> Tentang Diverventure
                </a>
              </div>
            </div>
            <div class="lg:col-span-5 relative">
              <div class="rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-500/30">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Diverventure" class="w-full h-80 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>



      <!-- BOTTOM BANNER COLLABORATION -->
      <section class="py-16 bg-gradient-to-r from-emerald-950/70 via-slate-900 to-cyan-950/70 border-t border-b border-emerald-500/20 text-center px-4">
        <div class="max-w-3xl mx-auto">
          <div class="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto mb-4 text-emerald-400">
            <i data-lucide="compass" class="w-6 h-6 compass-ring"></i>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Terhubung Bersama Diverventure President University
          </h2>
          <p class="text-slate-300 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Ingin berkolaborasi dalam ekspedisi, riset konservasi pesisir dan rimba, atau sponsorship? Hubungi Badan Pengurus 2 kami.
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#/kontak" class="btn-beacon px-8 py-3.5 rounded-xl font-semibold text-white inline-flex items-center gap-2">
              <i data-lucide="mail" class="w-4 h-4"></i>
              <span>Hubungi Pengurus</span>
            </a>
            <a href="#/kegiatan" class="glass-card px-8 py-3.5 rounded-xl font-semibold text-emerald-300 hover:text-white border border-emerald-500/30 inline-flex items-center gap-2">
              <i data-lucide="image" class="w-4 h-4"></i>
              <span>Lihat Semua Kegiatan</span>
            </a>
          </div>
        </div>
      </section>
    `;
  },

  // =========================================================================
  // 2. TENTANG KAMI VIEW (DENGAN PENCARIAN ARSIP SEJAK TAHUN 2000-AN)
  // =========================================================================
  renderTentang() {
    const data = window.DIVERVENTURE_DATA || window.MAPALA_DATA;
    return `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="px-4 py-1 rounded-full text-xs font-mono-coord uppercase tracking-wider bg-emerald-100 text-emerald-700 border border-emerald-200">Identitas &amp; Sejarah Sejak 2000-an</span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-3 font-heading">
            Tentang <span class="gradient-text-forest-ocean">Diverventure Presuniv</span>
          </h1>
          <p class="text-gray-600 text-sm sm:text-base mt-3">
            Perjalanan dan rekam jejak organisasi pecinta alam mahasiswa President University sejak masa perintisan awal tahun 2000-an.
          </p>
        </div>

        <!-- FILOSOFI DIVER & VENTURE -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          ${data.about.meaning.map(m => `
            <div class="glass-card rounded-2xl p-8 border border-slate-800 relative overflow-hidden group">
              <div class="text-4xl font-extrabold text-white/10 font-mono-coord absolute top-4 right-6 group-hover:text-emerald-400/20 transition-colors">
                ${m.word}
              </div>
              <span class="badge-ocean px-3 py-1 rounded-md text-xs font-mono-coord">${m.origin}</span>
              <h2 class="text-2xl sm:text-3xl font-bold text-white mt-3 mb-3">${m.word}</h2>
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed">${m.meaning}</p>
            </div>
          `).join('')}
        </div>

        <!-- FITUR PENCARIAN ARSIP & REKAM JEJAK SEJAK TAHUN 2000-AN (REQUESTED) -->
        <div class="glass-card rounded-3xl p-6 sm:p-10 border-2 border-cyan-500/40 bg-gradient-to-b from-[#091f24] via-[#071317] to-[#050d10] mb-16">
          <div class="max-w-3xl mx-auto text-center mb-8">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-ocean text-xs font-mono-coord uppercase tracking-wider mb-3">
              <i data-lucide="search" class="w-3.5 h-3.5"></i> Arsip Digital Sejarah 2000-an
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Cari Semua Info Diverventure Sejak Tahun 2000-an
            </h2>
            <p class="text-slate-300 text-xs sm:text-sm mt-2">
              Ketik kata kunci (contoh: <em>diverventure, badan pengurus, president university, 2000, piagam, nico, zaky</em>) atau pilih filter era di bawah:
            </p>

            <!-- Search Bar Input -->
            <div class="relative mt-6 max-w-xl mx-auto">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-cyan-400">
                <i data-lucide="search" class="w-5 h-5"></i>
              </div>
              <input 
                type="text" 
                id="archive-search-input" 
                placeholder="Cari arsip ekspedisi, sejarah, atau tonggak Diverventure..."
                class="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-black/70 border-2 border-cyan-500/40 text-white placeholder-slate-400 text-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30 transition-all shadow-inner"
              />
              <button id="clear-archive-search" class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white hidden">
                <i data-lucide="x" class="w-4 h-4"></i>
              </button>
            </div>

            <!-- Era Filter Pills -->
            <div class="flex flex-wrap items-center justify-center gap-2 mt-4" id="archive-era-filters">
              <button data-era="all" class="era-pill active px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 text-white shadow-md">
                Semua Era (2000 - 2026)
              </button>
              <button data-era="2000-an" class="era-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold glass-card text-slate-300 hover:text-white">
                Era 2000-an
              </button>
              <button data-era="2010-an" class="era-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold glass-card text-slate-300 hover:text-white">
                Era 2010-an
              </button>
              <button data-era="2020-an" class="era-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold glass-card text-slate-300 hover:text-white">
                Era 2020-an & Sekarang
              </button>
            </div>
          </div>

          <!-- Archive Results Counter -->
          <div class="flex items-center justify-between text-xs font-mono-coord text-slate-400 border-b border-slate-800 pb-3 mb-6">
            <span id="archive-count-text">Menampilkan ${data.about.archives.length} Arsip Sejarah Diverventure</span>
            <span class="text-cyan-400">President University Archive</span>
          </div>

          <!-- Archive Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="archive-results-grid">
            ${data.about.archives.map(item => `
              <div class="archive-card glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between group hover:border-cyan-400/50" data-era="${item.era}" data-text="${(item.year + ' ' + item.title + ' ' + item.desc + ' ' + item.category + ' ' + item.location).toLowerCase()}">
                <div>
                  <div class="flex items-center justify-between gap-2 mb-3">
                    <span class="px-2.5 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono-coord text-xs font-bold">
                      ${item.year}
                    </span>
                    <span class="text-[11px] font-mono-coord text-slate-400">
                      ${item.category}
                    </span>
                  </div>
                  <h3 class="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    ${item.title}
                  </h3>
                  <div class="flex items-center gap-1 text-[11px] text-emerald-400 font-mono-coord mt-2">
                    <i data-lucide="map-pin" class="w-3 h-3"></i>
                    <span>${item.location}</span>
                  </div>
                  <p class="text-slate-300 text-xs mt-3 leading-relaxed">
                    ${item.desc}
                  </p>
                </div>
                <div class="mt-5 pt-3 border-t border-slate-800/80 text-[11px] font-mono-coord text-amber-300 flex items-center gap-1.5">
                  <i data-lucide="award" class="w-3.5 h-3.5 shrink-0"></i>
                  <span>${item.highlight}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <div id="archive-no-results" class="hidden text-center py-12 text-slate-400">
            <i data-lucide="alert-circle" class="w-8 h-8 text-cyan-400 mx-auto mb-2"></i>
            <p class="text-sm font-semibold text-white">Tidak ada arsip yang cocok dengan pencarian Anda.</p>
            <p class="text-xs text-slate-400 mt-1">Coba kata kunci lain atau klik tombol "Semua Era".</p>
          </div>
        </div>

        <!-- SEJARAH BERDIRINYA ORGANISASI -->
        <div class="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 mb-16 relative">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-7">
              <span class="badge-orange px-3.5 py-1 rounded-full text-xs font-mono-coord uppercase tracking-wider">President University • Sejak Tahun 2000</span>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-6 font-heading">
                Sejarah Kelahiran & Tradisi Dwimatra
              </h2>
              <div class="text-slate-300 text-sm sm:text-base space-y-4 leading-relaxed whitespace-pre-line">
                ${data.about.history}
              </div>
            </div>
            <div class="lg:col-span-5">
              <div class="rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80" 
                  alt="Sejarah Diverventure" 
                  class="w-full h-96 object-cover"
                />
                <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-xs text-slate-300 font-mono-coord">
                  Dokumentasi Sejarah • Perintisan Alam Bebas President University
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- VISI & MISI -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <!-- Visi Card -->
          <div class="lg:col-span-5 glass-card rounded-3xl p-8 border border-emerald-500/30 flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                <i data-lucide="eye" class="w-6 h-6"></i>
              </div>
              <span class="text-xs font-mono-coord text-emerald-400 uppercase tracking-wider">Visi Diverventure</span>
              <h2 class="text-2xl font-bold text-white mt-2 mb-4 font-heading">Visi Organisasi</h2>
              <p class="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                "${data.about.vision}"
              </p>
            </div>
            <div class="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400 font-mono-coord">
              Target: Keberlanjutan Ekosistem & Prestasi Internasional
            </div>
          </div>

          <!-- Misi Card -->
          <div class="lg:col-span-7 glass-card rounded-3xl p-8 border border-slate-800">
            <div class="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
              <i data-lucide="target" class="w-6 h-6"></i>
            </div>
            <span class="text-xs font-mono-coord text-cyan-400 uppercase tracking-wider">Misi Strategis</span>
            <h2 class="text-2xl font-bold text-white mt-2 mb-6 font-heading">5 Misi Pergerakan</h2>
            <div class="space-y-4">
              ${data.about.missions.map((m, idx) => `
                <div class="flex items-start gap-4">
                  <span class="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-mono-coord text-emerald-400 shrink-0 mt-0.5">
                    0${idx + 1}
                  </span>
                  <p class="text-slate-300 text-sm leading-relaxed">${m}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- KODE ETIK PECINTA ALAM INDONESIA -->
        <div class="glass-card rounded-3xl p-8 sm:p-12 border-2 border-amber-500/30 bg-gradient-to-b from-[#141b17] to-[#0a1210] relative overflow-hidden">
          <div class="text-center max-w-2xl mx-auto mb-10">
            <div class="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center justify-center mx-auto mb-4">
              <i data-lucide="shield" class="w-7 h-7"></i>
            </div>
            <span class="text-xs font-mono-coord text-amber-400 uppercase tracking-widest">Ikrar Suci Nusantara</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading">
              Kode Etik Pecinta Alam Indonesia
            </h2>
            <p class="text-slate-400 text-xs sm:text-sm mt-2">
              Dicanangkan pada Gladian Nasional IV Pecinta Alam se-Indonesia di Ujung Pandang, 1974.
            </p>
          </div>

          <div class="max-w-3xl mx-auto space-y-4">
            ${data.about.kodeEtik.map((etik, idx) => `
              <div class="p-4 rounded-xl bg-black/40 border border-amber-500/20 flex items-start gap-4">
                <span class="text-amber-400 font-bold font-mono-coord text-sm mt-0.5">§${idx + 1}</span>
                <p class="text-slate-200 text-sm sm:text-base leading-relaxed">${etik}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 3. STRUKTUR ORGANISASI VIEW (BADAN PENGURUS 2 & KETUA DIVISI)
  // =========================================================================
  renderStruktur() {
    const data = window.DIVERVENTURE_DATA || window.MAPALA_DATA;
    return `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="badge-ocean px-4 py-1 rounded-full text-xs font-mono-coord uppercase tracking-wider">Tata Kelola & Kepemimpinan</span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-3 font-heading">
            Struktur <span class="gradient-text-forest-ocean">Organisasi</span>
          </h1>
          <p class="text-gray-600 text-sm sm:text-base mt-3">
            Badan Pengurus Diverventure President University beserta Ketua 7 Divisi Resmi.
          </p>
        </div>

        <!-- KETUA & WAKIL KETUA (hanya 2 orang di bagian utama) -->
        <div class="mb-10">
          <div class="flex items-center gap-3 mb-6">
            <i data-lucide="shield" class="w-5 h-5 text-emerald-500"></i>
            <h2 class="text-xl font-bold text-gray-900 font-heading">Badan Pengurus — Ketua & Wakil Ketua</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            ${data.structure.bph.map(leader => `
              <div class="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md flex flex-col justify-between group">
                <div class="relative h-72 overflow-hidden">
                  <img src="${leader.photo}" alt="${leader.name}" style="${leader.objectStyle ? 'object-position:' + leader.objectStyle + ';' : ''}" class="w-full h-full object-cover ${leader.objectPos || 'object-center'} group-hover:scale-105 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white">
                    ${leader.role}
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-lg font-bold text-gray-900">${leader.name}</h3>
                  <div class="mt-1 inline-block px-2.5 py-0.5 rounded bg-cyan-100 text-cyan-700 text-[11px] font-mono-coord border border-cyan-200">
                    ${leader.dept} — President University
                  </div>
                  <p class="text-xs text-gray-500 italic mt-4 border-l-2 border-emerald-400 pl-3 leading-relaxed">
                    "${leader.quote}"
                  </p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- SECRETARY & TREASURER -->
        <div class="mb-16">
          <div class="flex items-center gap-3 mb-6">
            <i data-lucide="users" class="w-5 h-5 text-cyan-500"></i>
            <h2 class="text-xl font-bold text-gray-900 font-heading">Secretary & Treasurer</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            ${data.structure.bphSupport.map(member => `
              <div class="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md flex items-center gap-5 p-5 group">
                <div class="w-20 h-20 rounded-xl overflow-hidden border border-gray-200 shrink-0">
                  <img src="${member.photo}" alt="${member.name}" class="w-full h-full object-cover ${member.zoomClass || 'group-hover:scale-105'} transition-transform duration-300" />
                </div>
                <div>
                  <div class="text-xs font-mono-coord text-emerald-600 uppercase tracking-wider mb-1">${member.role}</div>
                  <h3 class="text-base font-bold text-gray-900">${member.name}</h3>
                  <div class="text-[11px] text-cyan-600 font-mono-coord mt-0.5">${member.dept} — President University</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- KETUA 7 DIVISI -->
        <div class="mb-16">
          <div class="flex items-center gap-3 mb-6">
            <i data-lucide="compass" class="w-5 h-5 text-cyan-500"></i>
            <h2 class="text-xl font-bold text-gray-900 font-heading">Ketua 7 Divisi Resmi</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            ${data.structure.divisionsHeads.map(head => `
              <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
                <div>
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 rounded-full text-xs font-mono-coord border ${head.color}">
                      ${head.badge}
                    </span>
                    <i data-lucide="${head.icon}" class="w-5 h-5 text-gray-400"></i>
                  </div>
                  <div class="flex items-center gap-4 mb-4">
                    <div class="w-14 h-14 rounded-full overflow-hidden border border-gray-200 shrink-0">
                      <img src="${head.photo}" alt="${head.name}" style="${head.objectStyle ? 'object-position:' + head.objectStyle + ';' : ''}" class="w-full h-full object-cover ${head.zoomClass || ''} ${head.objectPos || 'object-center'}" />
                    </div>
                    <div>
                      <h3 class="text-base font-bold text-gray-900">${head.name}</h3>
                      <div class="text-[11px] text-cyan-600 font-mono-coord mt-0.5">${head.major !== '—' ? 'Major: ' + head.major : 'Major: —'}</div>
                    </div>
                  </div>
                  <div class="text-xs font-semibold text-gray-700 mb-2">${head.role}</div>
                  <p class="text-xs text-gray-500 leading-relaxed">${head.desc}</p>
                </div>
                <div class="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-xs">
                  <span class="text-gray-400 font-mono-coord">President University</span>
                  <a href="#/divisi?divisi=${head.badge.toLowerCase().replace(/\s+/g, '-')}" class="text-cyan-600 hover:text-cyan-500 font-semibold">Lihat Divisi &rarr;</a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },


  // =========================================================================
  // 4. KEGIATAN VIEW (HANYA "SEMUA KEGIATAN")
  // =========================================================================
  renderKegiatan() {
    const data = window.DIVERVENTURE_DATA || window.MAPALA_DATA;
    const activities = data.activities || [];
    return `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Header -->
        <div class="text-center max-w-4xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-100 border border-emerald-300 shadow-sm text-emerald-800 mb-4">
            <span class="font-cute text-2xl sm:text-3xl text-emerald-700 font-bold">✨ Dokumentasi Kegiatan 2 Tahun Terakhir ✨</span>
          </div>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-2 font-heading">
            Diverventure President University <span class="gradient-text-forest-ocean">Activities</span>
          </h1>
          <p class="text-gray-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Dokumentasi utama kegiatan lapangan, pendakian gunung, dan ekspedisi konservasi bahari Diverventure President University selama <strong class="text-emerald-700 font-semibold">2 tahun terakhir (2024 – 2025)</strong>.
          </p>
        </div>

        <!-- HANYA 1 PILIHAN: "SEMUA KEGIATAN" -->
        <div class="flex items-center justify-center mb-10">
          <div class="px-6 py-2.5 rounded-2xl bg-emerald-600 text-white font-semibold text-sm shadow-lg border border-emerald-400/40 flex items-center gap-2">
            <i data-lucide="layers" class="w-4 h-4 text-emerald-200"></i>
            <span>Semua Kegiatan (2 Tahun Terakhir)</span>
            <span class="ml-1.5 px-2 py-0.5 rounded-full bg-black/40 text-xs font-mono-coord">${activities.length} Dokumentasi</span>
          </div>
        </div>

        ${activities.length === 0 ? `
          <!-- Empty State -->
          <div class="text-center py-24">
            <div class="w-20 h-20 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center mx-auto mb-6">
              <i data-lucide="calendar-off" class="w-10 h-10 text-gray-400"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 font-heading mb-2">Belum Ada Dokumentasi Kegiatan</h3>
            <p class="text-gray-500 text-sm max-w-sm mx-auto">
              Dokumentasi kegiatan Diverventure President University akan segera ditambahkan.
            </p>
          </div>
        ` : `
          <!-- Gallery Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="gallery-grid">
            ${activities.map(act => `
              <div class="gallery-item bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer" data-id="${act.id}">
                <div>
                  <div class="relative h-64 overflow-hidden">
                    <img src="${act.image}" alt="${act.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                    <span class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-black/75 backdrop-blur-md text-emerald-300 border border-emerald-500/40">
                      ${act.badge}
                    </span>
                    <span class="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono-coord bg-emerald-600 text-white shadow">
                      ${act.date}
                    </span>
                  </div>

                  <div class="p-6">
                    <div class="flex items-center gap-1.5 text-xs text-emerald-600 font-mono-coord mb-2">
                      <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
                      <span>${act.location}</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors leading-snug font-heading">
                      ${act.title}
                    </h3>
                    <p class="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed">
                      ${act.summary}
                    </p>
                  </div>
                </div>

                <div class="px-6 pb-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-mono-coord">
                  <span>${act.stats}</span>
                  <span class="text-emerald-600 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Buka Detail <i data-lucide="arrow-right" class="w-4 h-4"></i>
                  </span>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
  },



  // =========================================================================
  // 5. DIVISI & MINAT KHUSUS VIEW (7 DIVISI LENGKAP & TANPA BUG)
  // =========================================================================
  renderDivisi(params = {}) {
    const data = window.DIVERVENTURE_DATA || window.MAPALA_DATA;
    // Normalized lookup: check id or match badge
    const requestedId = (params.divisi || '').toLowerCase().trim();
    let activeDivision = data.divisions.find(d => d.id === requestedId);
    if (!activeDivision) {
      activeDivision = data.divisions[0]; // default MTDD
    }

    return `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="px-4 py-1 rounded-full text-xs font-mono-coord uppercase tracking-wider bg-emerald-100 text-emerald-700 border border-emerald-200">7 Korps &amp; Divisi Resmi</span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-3 font-heading">
            Divisi <span class="gradient-text-forest-ocean">Diverventure</span>
          </h1>
          <p class="text-gray-600 text-sm sm:text-base mt-3">
            Pilih divisi di bawah untuk melihat rincian kurikulum dan keahlian bidang:
          </p>
        </div>

        <!-- DIVISI TABS SELECTOR (7 DIVISI DENGAN CLICK INTERAKTIF) -->
        <div class="flex items-center justify-start lg:justify-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar" id="division-tabs-bar">
          ${data.divisions.map(d => {
            const isSelected = d.id === activeDivision.id;
            return `
              <button 
                data-division-id="${d.id}"
                class="division-tab-btn px-4 py-2.5 rounded-2xl whitespace-nowrap text-xs sm:text-sm font-semibold transition-all border shrink-0 flex items-center gap-2 cursor-pointer ${
                  isSelected 
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow-lg shadow-emerald-950/80 scale-105 ring-2 ring-emerald-400/30' 
                    : 'glass-card text-slate-300 hover:text-white border-slate-800 hover:border-slate-700'
                }"
              >
                <i data-lucide="${d.icon}" class="w-4 h-4"></i>
                <span>${d.title.replace('Divisi ', '')}</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- ACTIVE DIVISION HERO CARD -->
        <div id="active-division-card" class="glass-card rounded-3xl overflow-hidden border border-emerald-500/30 mb-12 page-reveal">
          <div class="relative h-72 sm:h-96 w-full">
            <img src="${activeDivision.heroImage}" alt="${activeDivision.title}" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0d181b] via-[#0d181b]/60 to-transparent"></div>
            
            <div class="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
              <span class="badge-forest px-3.5 py-1 rounded-full text-xs font-mono-coord uppercase tracking-wider">
                ${activeDivision.subtitle}
              </span>
              <h2 class="text-2xl sm:text-4xl font-extrabold text-white mt-2 font-heading">
                ${activeDivision.title}
              </h2>
              <div class="mt-2 text-xs font-mono-coord text-cyan-300 flex items-center gap-2">
                <span>Koordinator: <strong>${activeDivision.coordinator}</strong></span>
                <span>•</span>
                <span>Major: <strong>${activeDivision.major}</strong></span>
              </div>
            </div>
          </div>

          <div class="p-6 sm:p-10">
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              ${activeDivision.description}
            </p>

            <!-- Keahlian Khusus (Full Width Petak Panjang Ke Kanan) -->
            <div class="p-6 sm:p-8 rounded-2xl bg-black/40 border border-slate-800 w-full">
              <div class="flex items-center gap-2.5 text-emerald-400 font-bold mb-5 text-base sm:text-lg">
                <i data-lucide="check-circle-2" class="w-6 h-6"></i>
                <span>Kurikulum & Keahlian Divisi:</span>
              </div>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${activeDivision.skills.map(sk => `
                  <li class="flex items-start gap-3 text-xs sm:text-sm text-slate-200 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                    <span>${sk}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  },


  // =========================================================================
  // 6. KONTAK & MEDIA SOSIAL VIEW (@diverventurepresuniv)
  // =========================================================================
  renderKontak() {
    const data = window.DIVERVENTURE_DATA || window.MAPALA_DATA;
    return `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="px-4 py-1 rounded-full text-xs font-mono-coord uppercase tracking-wider bg-emerald-100 text-emerald-700 border border-emerald-200">Sekretariat &amp; Hubungan Luar</span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-3 font-heading">
            Hubungi <span class="gradient-text-forest-ocean">Diverventure</span>
          </h1>
          <p class="text-gray-600 text-sm sm:text-base mt-3">
            Pintu komunikasi resmi Diverventure President University untuk kolaborasi, sponsorship, dan informasi kegiatan.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <!-- KONTAK DETAIL & SOSIAL MEDIA (LEFT) -->
          <div class="lg:col-span-5 space-y-6">
            <!-- INFO SEKRETARIAT & KONTAK -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <i data-lucide="map-pin" class="w-5 h-5"></i>
                </div>
                <div>
                  <h3 class="text-sm font-bold text-gray-900">Sekretariat Diverventure</h3>
                  <p class="text-xs text-gray-600 mt-1 leading-relaxed">${data.org.address}</p>
                  <p class="text-[11px] text-emerald-600 font-mono-coord mt-1">President University, Cikarang</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <i data-lucide="mail" class="w-5 h-5"></i>
                </div>
                <div>
                  <h3 class="text-sm font-bold text-gray-900">Email Resmi</h3>
                  <a href="mailto:${data.org.email}" class="text-xs text-emerald-600 hover:underline font-mono-coord mt-1 block">
                    ${data.org.email}
                  </a>
                  <p class="text-[11px] text-gray-500">Respon dalam 1x24 jam kerja</p>
                </div>
              </div>
            </div>

            <!-- MEDIA SOSIAL RESMI -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <h3 class="text-sm font-bold text-gray-900 border-b border-gray-100 pb-3">Media Sosial Resmi Diverventure</h3>
              
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0 border border-pink-200 shadow-sm">
                  <svg class="w-5 h-5 text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <h3 class="text-sm font-bold text-gray-900">Instagram Resmi</h3>
                  <a href="https://instagram.com/diverventurepresuniv" target="_blank" rel="noopener" class="text-xs text-pink-600 hover:underline font-mono-coord font-semibold mt-1 block">
                    @diverventurepresuniv
                  </a>
                  <p class="text-[11px] text-gray-500 mt-0.5">Akun resmi dokumentasi &amp; informasi kegiatan</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200 shadow-sm">
                  <svg class="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 class="text-sm font-bold text-gray-900">Email Resmi</h3>
                  <a href="mailto:${data.org.email}" class="text-xs text-emerald-600 hover:underline font-mono-coord mt-1 block">
                    ${data.org.email}
                  </a>
                  <p class="text-[11px] text-gray-500 mt-0.5">Respon dalam 1x24 jam kerja</p>
                </div>
              </div>
            </div>

          </div>

          <!-- FORMULIR PESAN LANGSUNG (RIGHT) -->
          <div class="lg:col-span-7">
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div class="mb-6">
                <span class="text-xs font-mono-coord text-emerald-600 uppercase tracking-wider">Kotak Masuk Interaktif</span>
                <h2 class="text-2xl font-bold text-gray-900 mt-1 font-heading">Kirimkan Pesan atau Kolaborasi</h2>
                <p class="text-xs text-gray-500 mt-1">Gunakan formulir ini untuk permohonan kerjasama, riset konservasi, atau undangan kegiatan.</p>
              </div>

              <form id="contact-form" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-gray-700 mb-1.5">Nama Lengkap / Instansi *</label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      placeholder="Nama Anda atau Organisasi"
                      class="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>

                  <div>
                    <label class="block text-xs font-semibold text-gray-700 mb-1.5">Alamat Email *</label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      placeholder="email@domain.com"
                      class="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1.5">Subjek Keperluan *</label>
                  <select
                    id="contact-subject"
                    required
                    class="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                  >
                    <option value="Kerjasama Ekspedisi">Kolaborasi / Ekspedisi Bersama</option>
                    <option value="Kemitraan Sponsorship">Kemitraan Sponsorship &amp; Media</option>
                    <option value="Undangan Acara">Undangan Seminar / Event Pecinta Alam</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1.5">Isi Pesan *</label>
                  <textarea
                    id="contact-message"
                    rows="5"
                    required
                    placeholder="Tuliskan rincian pesan atau pertanyaan Anda..."
                    class="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                  ></textarea>
                </div>

                <div class="pt-2">
                  <button
                    type="submit"
                    class="w-full bg-emerald-600 hover:bg-emerald-700 py-3.5 rounded-xl font-semibold text-white text-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <i data-lucide="send" class="w-4 h-4"></i>
                    <span>Kirim Pesan ke Pengurus Diverventure</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 7. GALLERY VIEW — Unique Polaroid Adventure Scrapbook Board
  // =========================================================================
  renderGallery() {
    const data = window.DIVERVENTURE_DATA || window.MAPALA_DATA;
    const photos = data.gallery || [];
    return `
      <!-- GALLERY HEADER -->
      <section class="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=60"
            alt="Gallery Hero" class="w-full h-full object-cover object-center opacity-30 filter saturate-150" />
          <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#f8fafc]"></div>
        </div>
        <div class="relative z-10 max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-mono-coord uppercase tracking-widest mb-4 shadow">
            <span class="font-cute text-xl text-emerald-700 font-bold">✨ Jurnal Foto Petualangan ✨</span>
          </div>
          <h1 class="text-4xl sm:text-6xl font-extrabold text-white font-heading mb-3 drop-shadow-lg">
            Gallery <span class="gradient-text-forest-ocean">Diverventure</span>
          </h1>
          <p class="text-white/90 text-sm sm:text-base max-w-xl mx-auto drop-shadow leading-relaxed">
            Galeri foto Polaroid interaktif ekspedisi gunung hutan &amp; perairan bahari Diverventure President University.
          </p>
        </div>
      </section>

      <!-- SCRAPBOOK POLAROID GALLERY BOARD -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        ${photos.length === 0 ? `
          <div class="text-center py-24">
            <div class="w-20 h-20 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center mx-auto mb-6">
              <i data-lucide="image-off" class="w-10 h-10 text-gray-400"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 font-heading mb-2">Gallery Belum Tersedia</h3>
            <p class="text-gray-500 text-sm max-w-sm mx-auto">
              Dokumentasi foto Diverventure President University akan segera ditambahkan.
            </p>
          </div>
        ` : `
          <!-- Header Bar & Counter -->
          <div class="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-gray-200">
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
              <h2 class="text-xl font-bold text-gray-900 font-heading">Dokumentasi Momen Petualangan</h2>
            </div>
            <span class="px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-xs text-emerald-800 font-mono-coord font-semibold shadow-sm">
              📸 ${photos.length} Momen Terabadikan
            </span>
          </div>

          <!-- Polaroid Masonry Board Grid -->
          <div id="gallery-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            ${photos.map((p, idx) => `
              <div class="gallery-item group relative bg-white p-4 rounded-2xl shadow-md hover:shadow-2xl border border-gray-200 transition-all duration-500 transform ${p.rotation || 'rotate-1 hover:rotate-0'} hover:-translate-y-2 cursor-pointer z-10 hover:z-30 ${p.aspect?.includes('col-span') ? p.aspect : ''}"
                data-idx="${idx}" data-src="${p.src}" data-caption="${p.caption}" data-date="${p.date}">
                
                <!-- Washi Tape Effect Accent at Top -->
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-amber-200/90 border border-amber-300/80 rounded-sm shadow-sm opacity-90 z-20 pointer-events-none transform -rotate-2"></div>

                <!-- Photo Frame -->
                <div class="relative overflow-hidden rounded-xl bg-gray-900 ${p.aspect?.includes('aspect') ? p.aspect.split(' ')[0] : 'aspect-[4/3]'} border border-gray-100">
                  <img src="${p.src}" alt="${p.caption}" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" />
                  
                  <!-- Tag Overlay Badge -->
                  <div class="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-emerald-400/40 text-emerald-300 text-[11px] font-mono-coord font-semibold shadow">
                    ${p.tag || 'Diverventure Photo'}
                  </div>

                  <!-- Date Overlay Badge -->
                  <div class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-mono-coord font-bold shadow">
                    📅 ${p.date}
                  </div>

                  <!-- Hover Click Hint Overlay -->
                  <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span class="px-4 py-2 rounded-xl bg-white/90 text-gray-900 font-bold text-xs shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <i data-lucide="maximize-2" class="w-4 h-4 text-emerald-600"></i> Zoom Foto HD
                    </span>
                  </div>
                </div>

                <!-- Polaroid Bottom Caption & Location -->
                <div class="pt-4 px-1 text-center">
                  <p class="font-cute text-lg text-gray-900 font-bold leading-snug group-hover:text-emerald-700 transition-colors">
                    ${p.caption}
                  </p>
                  <div class="mt-2 flex items-center justify-center gap-1.5 text-xs text-emerald-600 font-mono-coord">
                    <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
                    <span>${p.location || 'Diverventure Expedition'}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </section>

      <!-- LIGHTBOX MODAL -->
      <div id="gallery-lightbox" class="hidden fixed inset-0 z-[9999] bg-black/92 items-center justify-center p-4 backdrop-blur-md">
        <div class="relative max-w-4xl w-full flex flex-col items-center">
          <button id="gallery-lb-close"
            class="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 hover:bg-red-600 text-white flex items-center justify-center transition-colors z-20 shadow-lg">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
          <button id="gallery-lb-prev"
            class="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors z-20 shadow-lg border border-white/20">
            <i data-lucide="chevron-left" class="w-6 h-6"></i>
          </button>
          <button id="gallery-lb-next"
            class="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors z-20 shadow-lg border border-white/20">
            <i data-lucide="chevron-right" class="w-6 h-6"></i>
          </button>

          <div class="rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-500/40 bg-black max-h-[78vh] flex items-center justify-center">
            <img id="gallery-lb-img" src="" alt="" class="max-h-[78vh] max-w-full object-contain" />
          </div>

          <div class="mt-4 p-4 rounded-2xl bg-black/75 border border-emerald-500/30 backdrop-blur-md text-center max-w-2xl w-full">
            <p id="gallery-lb-caption" class="text-white font-bold text-base font-heading"></p>
            <p id="gallery-lb-date" class="text-emerald-400 text-xs font-mono-coord mt-1.5"></p>
          </div>
        </div>
      </div>
    `;
  },




  // =========================================================================
  // PAGE INTERACTIONS & EVENT HANDLERS
  // =========================================================================
  initPageInteractions(route, params) {

    if (route === '#/tentang') {
      this.initAboutInteractions();
    } else if (route === '#/kegiatan') {
      this.initGalleryInteractions();
    } else if (route === '#/divisi') {
      this.initDivisionInteractions();
    } else if (route === '#/kontak') {
      this.initContactInteractions();
    } else if (route === '#/gallery') {
      this.initGalleryPageInteractions();
    }
  },


  // 1. Interactive Search for 2000s Archives in Tentang Kami
  initAboutInteractions() {
    const searchInput = document.getElementById('archive-search-input');
    const clearBtn = document.getElementById('clear-archive-search');
    const eraButtons = document.querySelectorAll('#archive-era-filters .era-pill');
    const archiveCards = document.querySelectorAll('#archive-results-grid .archive-card');
    const countText = document.getElementById('archive-count-text');
    const noResults = document.getElementById('archive-no-results');

    let activeEra = 'all';

    const filterArchives = () => {
      const query = (searchInput?.value || '').toLowerCase().trim();
      if (clearBtn) {
        if (query.length > 0) {
          clearBtn.classList.remove('hidden');
        } else {
          clearBtn.classList.add('hidden');
        }
      }

      let visibleCount = 0;
      archiveCards.forEach(card => {
        const cardEra = card.getAttribute('data-era');
        const cardText = card.getAttribute('data-text') || '';

        const matchesEra = activeEra === 'all' || cardEra === activeEra;
        const matchesQuery = query === '' || cardText.includes(query);

        if (matchesEra && matchesQuery) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (countText) {
        countText.innerText = `Menampilkan ${visibleCount} dari ${archiveCards.length} Arsip Sejarah Diverventure`;
      }

      if (noResults) {
        if (visibleCount === 0) {
          noResults.classList.remove('hidden');
        } else {
          noResults.classList.add('hidden');
        }
      }
    };

    if (searchInput) {
      searchInput.addEventListener('input', filterArchives);
    }

    if (clearBtn && searchInput) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        filterArchives();
        searchInput.focus();
      });
    }

    eraButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        eraButtons.forEach(b => {
          b.classList.remove('active', 'bg-emerald-600', 'text-white', 'shadow-md');
          b.classList.add('glass-card', 'text-slate-300');
        });
        btn.classList.add('active', 'bg-emerald-600', 'text-white', 'shadow-md');
        btn.classList.remove('glass-card', 'text-slate-300');

        activeEra = btn.getAttribute('data-era') || 'all';
        filterArchives();
      });
    });
  },

  // 2. Kegiatan Lightbox Modal
  initGalleryInteractions() {
    const galleryItems = document.querySelectorAll('#gallery-grid .gallery-item');
    const lightbox = document.getElementById('gallery-lightbox');
    const closeBtn = document.getElementById('close-lightbox');

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        const data = window.DIVERVENTURE_DATA || window.MAPALA_DATA;
        const act = data.activities.find(a => a.id === id);
        if (!act || !lightbox) return;

        document.getElementById('lightbox-img').src = act.fullImage;
        document.getElementById('lightbox-badge').innerText = act.badge;
        document.getElementById('lightbox-date').innerText = act.date;
        document.getElementById('lightbox-coords').innerText = act.coords;
        document.getElementById('lightbox-title').innerText = act.title;
        document.getElementById('lightbox-location').innerText = act.location;
        document.getElementById('lightbox-summary').innerText = act.summary;
        document.getElementById('lightbox-stats').innerText = act.stats;

        lightbox.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
      });
    });

    if (closeBtn && lightbox) {
      closeBtn.addEventListener('click', () => {
        lightbox.classList.add('hidden');
      });
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.classList.add('hidden');
      });
    }
  },

  // 3. Division Tab Click Handlers (Instant bug-free switching)
  initDivisionInteractions() {
    const tabButtons = document.querySelectorAll('#division-tabs-bar .division-tab-btn');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const divisionId = btn.getAttribute('data-division-id');
        if (divisionId) {
          window.location.hash = `#/divisi?divisi=${divisionId}`;
        }
      });
    });
  },

  // 4. Contact Form Handler (Real Email Submission via FormSubmit AJAX + mailto Fallback)
  initContactInteractions() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const subjectInput = document.getElementById('contact-subject');
      const messageInput = document.getElementById('contact-message');
      const submitBtn = form.querySelector('button[type="submit"]');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value : 'Pesan Umum';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !message) {
        if (window.showToast) window.showToast('Mohon lengkapi semua bidang formulir.');
        return;
      }

      const originalBtnContent = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Mengirim Pesan...</span>
        `;
      }

      try {
        const response = await fetch('https://formsubmit.co/ajax/diverventurepresuniv@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            subject: `[Website Diverventure] ${subject} - ${name}`,
            _subject: `[Website Diverventure] ${subject} - ${name}`,
            message: message,
            _replyto: email,
            _template: 'table'
          })
        });

        const resData = await response.json();

        if (response.ok && (resData.success === 'true' || resData.success === true || resData.message)) {
          if (window.showToast) {
            window.showToast(`Pesan Anda berhasil terkirim ke diverventurepresuniv@gmail.com! Pengurus akan segera merespon.`);
          }
          form.reset();
        } else {
          throw new Error(resData.message || 'Gagal mengirim pesan.');
        }
      } catch (err) {
        console.warn('FormSubmit AJAX error, fallback ke mailto:', err);
        if (window.showToast) {
          window.showToast('Mengalihkan ke aplikasi email langsung...');
        }
        const mailtoUrl = `mailto:diverventurepresuniv@gmail.com?subject=${encodeURIComponent('[Website Diverventure] ' + subject)}&body=${encodeURIComponent('Nama: ' + name + '\nEmail: ' + email + '\n\nPesan:\n' + message)}`;
        window.location.href = mailtoUrl;
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
          submitBtn.innerHTML = originalBtnContent;
          if (window.lucide) window.lucide.createIcons();
        }
      }
    });
  },

  // 5. Gallery Page Interactions (Lightbox only — no upload)
  initGalleryPageInteractions() {
    const data = window.DIVERVENTURE_DATA || window.MAPALA_DATA;
    const photos = data.gallery || [];

    // Bind lightbox to static gallery items
    const grid = document.getElementById('gallery-grid');
    if (grid && photos.length > 0) {
      grid.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
          const idx = parseInt(item.getAttribute('data-idx') || 0);
          openLightbox(idx);
        });
      });
    }

    // Lightbox helpers
    const openLightbox = (idx) => {
      const lb = document.getElementById('gallery-lightbox');
      const lbImg = document.getElementById('gallery-lb-img');
      const lbCaption = document.getElementById('gallery-lb-caption');
      const lbDate = document.getElementById('gallery-lb-date');
      if (!lb || !lbImg || !photos[idx]) return;
      lbImg.src = photos[idx].src;
      lbCaption.textContent = photos[idx].caption || '';
      lbDate.textContent = photos[idx].date || '';
      lb.setAttribute('data-current', idx);
      lb.classList.remove('hidden');
      lb.classList.add('flex');
    };

    const closeLightbox = () => {
      const lb = document.getElementById('gallery-lightbox');
      if (lb) { lb.classList.add('hidden'); lb.classList.remove('flex'); }
    };

    const navLightbox = (dir) => {
      const lb = document.getElementById('gallery-lightbox');
      if (!lb || photos.length === 0) return;
      let idx = parseInt(lb.getAttribute('data-current') || 0);
      idx = (idx + dir + photos.length) % photos.length;
      openLightbox(idx);
    };

    const lb = document.getElementById('gallery-lightbox');
    const lbClose = document.getElementById('gallery-lb-close');
    const lbPrev = document.getElementById('gallery-lb-prev');
    const lbNext = document.getElementById('gallery-lb-next');
    if (lb) lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });
    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    if (lbPrev) lbPrev.addEventListener('click', () => navLightbox(-1));
    if (lbNext) lbNext.addEventListener('click', () => navLightbox(1));

    const keyHandler = (e) => {
      const lb = document.getElementById('gallery-lightbox');
      if (!lb || lb.classList.contains('hidden')) return;
      if (e.key === 'ArrowLeft') navLightbox(-1);
      if (e.key === 'ArrowRight') navLightbox(1);
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', keyHandler);
  }

};

// Expose globally
window.WanasagaraApp = WanasagaraApp;
window.DiverventureApp = WanasagaraApp;
