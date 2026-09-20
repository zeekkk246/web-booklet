# Website Booklet MAPALA WANASAGARA (SPA & Hash Routing)

Website booklet resmi organisasi **MAPALA WANASAGARA** (*Unit Kegiatan Mahasiswa Pecinta Alam Universitas Cakrawala Nusantara*). Dirancang dengan konsep arsitektur **Single Page Application (SPA)** berbasis Client-Side Hash Routing dengan transisi halaman dramatis bernuansa cinematic petualangan alam liar (Darat/Gunung & Bahari/Samudra).

---

## 🌟 Fitur Utama

1. **Pure Single Page Application (SPA) Routing**:
   - Berpindah antar 8 halaman secara instan tanpa reload browser (`#/home`, `#/tentang`, `#/struktur`, `#/kegiatan`, `#/divisi`, `#/testimoni`, `#/pendaftaran`, `#/kontak`).
   - Halaman yang sedang aktif diganti total (bukan one-page-scroll dan bukan ditumpuk).
   - Mendukung deep linking URL dan tombol navigasi Back/Forward browser.

2. **Sistem Efek Transisi Dramatis**:
   - **Top Loading Bar**: Progress bar tipis menyala di bagian paling atas viewport.
   - **Dual-Tone Curtain Wipe**: Tirai transisi bergradien *Abyssal Ocean* dan *Deep Forest* yang menutup dan membuka layar secara mulus.
   - **Quick Splash Logo Flash**: Emblem kompas, siluet gunung, dan gelombang laut yang muncul berputar sekilas (350–400ms) di tengah layar.
   - **Page Reveal Smooth Scale & Fade**: Konten halaman baru muncul dari tengah dengan efek fade + zoom lembut (scale 0.97 ke 1.0) dengan auto-scroll ke posisi teratas.
   - **Tactile Audio Feedback**: Tombol saklar suara sintetis lembut (Web Audio API) yang dapat dinyalakan/dimatikan pada navbar.

3. **8 Halaman Komponen Terpisah**:
   - **Home (Beranda)**: Identitas organisasi, tagline *"Menapak Rimba, Mengarung Samudra, Menjaga Semesta"*, statistik ekspedisi (148+ Puncak, 62+ Titik Laut, 39+ Gua, 32 Angkatan), 3 pilar pergerakan, dan sorotan ekspedisi Cartensz Papua.
   - **Tentang Kami**: Makna nama *Wana* (Rimba) & *Sagara* (Samudra), sejarah pendirian di lereng Gunung Merbabu (1994), Visi jangka panjang, 5 butir Misi strategis, dan Kode Etik Pecinta Alam Indonesia dalam bingkai piagam kehormatan.
   - **Struktur Organisasi**: Dewan Pembina/Penasihat taktis, Badan Pengurus Harian (Ketua Umum, Wakil, Sekjen, Bendahara) lengkap dengan nama rimba dan quotes, serta profil 5 Kepala Divisi operasional.
   - **Kegiatan & Galeri**: Dokumentasi ekspedisi gunung hutan, bahari & selam terumbu karang, caving bawah tanah, panjat tebing pantai, dan diklat dasar. Dilengkapi filter kategori interaktif dan modal **Lightbox HD** beresolusi penuh.
   - **Divisi & Minat Khusus**: 5 divisi spesialisasi (*Gunung Hutan, Olahraga Arus Deras & Bahari, Panjat Tebing, Susur Gua, Konservasi & SAR*) dengan tab interaktif, daftar keahlian, standar perlengkapan taktis, dan riwayat ekspedisi besar.
   - **Testimoni Anggota**: Cerita inspiratif dokter anestesi SAR bencana alam, peneliti oseanografi BRIN, spesialis rope access rig lepas pantai, dan kader muda angkatan terakhir.
   - **Cara Bergabung & Pendaftaran**: Timeline 5 tahapan seleksi Diklat Dasar XXXII, syarat & ketentuan, garansi *Zero Violence*, formulir pendaftaran interaktif, generator **Kartu Tanda Registrasi Calon Anggota Digital** (dengan ID unik, detail kandidat, dan tombol cetak/PDF), serta Accordion FAQ.
   - **Kontak & Media Sosial**: Informasi sekretariat kampus, koordinat GPS, hotline darurat SAR 24 jam, media sosial (Instagram, YouTube, TikTok, Spotify), serta formulir kirim pesan cepat dengan notifikasi toast.

4. **Desain Visual Outdoor Dwimatra**:
   - Perpaduan palet warna *Forest Green*, *Abyssal Ocean Blue*, *Tosca Bahari*, *Earthy Sand*, dan aksen *Summit Orange*.
   - Aksen visual siluet gunung, ombak laut dinamis, dan kontur topografi (*contour lines*).
   - Tipografi tegas & modern (*Plus Jakarta Sans* & *Space Grotesk*).
   - Responsif untuk mobile smartphone, tablet, laptop, dan desktop (lengkap dengan mobile drawer navigation).

---

## 📂 Struktur File

```
Web Booklet/
├── index.html              # Shell SPA utama, navbar glassmorphism sticky, transisi curtain overlay, container view, dan footer
├── css/
│   └── style.css           # Styling custom tema, animasi curtain wipe, splash pulse, loading bar, dan typography
├── js/
│   ├── data.js             # Data master organisasi, profil pengurus, 7 divisi resmi, 12 ekspedisi, testimoni, FAQ
│   ├── router.js           # Mesin Hash SPA Router & Transition Orchestrator (curtain, splash, loading bar)
│   └── app.js              # Template renderer 8 halaman, filter galeri, lightbox modal, form pendaftaran, accordion
└── README.md               # Dokumentasi panduan penggunaan & deployment
```

---

## 🚀 Cara Menjalankan

Website ini dibuat mandiri (**zero-dependency build step**), sehingga sangat praktis dijalankan:

### Opsi 1: Buka Langsung di Browser
Klik dua kali file `index.html` pada browser apa pun (Google Chrome, Safari, Mozilla Firefox, Microsoft Edge).

### Opsi 2: Menggunakan Local Server (Direkomendasikan)
Gunakan salah satu perintah berikut di terminal:

```bash
# Menggunakan Python:
python3 -m http.server 8000

# Atau menggunakan Node (npx serve):
npx serve .
```
Lalu buka alamat `http://localhost:8000` di peramban Anda.

---

## 🌐 Publikasi Online (Deployment)
Website ini 100% kompatibel langsung dengan hosting statis gratis:
- **GitHub Pages**: Cukup unggah repository ini ke GitHub dan aktifkan GitHub Pages dari branch `main`.
- **Vercel / Netlify**: Cukup drag-and-drop folder `Web Booklet` ke dashboard Vercel atau Netlify. Tidak memerlukan konfigurasi server redirect karena telah menggunakan sistem Client-Side Hash Routing.
