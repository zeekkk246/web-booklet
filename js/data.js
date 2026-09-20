/**
 * DIVERVENTURE PRESIDENT UNIVERSITY - DATA STORE
 * Unit Kegiatan Mahasiswa Pecinta Alam President University, Cikarang, Bekasi
 * Berdiri sejak tahun 2000-an | Darat & Bahari (Gunung & Laut)
 */

const DIVERVENTURE_DATA = {
  org: {
    name: "Diverventure President University",
    shortName: "DIVERVENTURE",
    university: "President University",
    campusLocation: "Kota Jababeka, Cikarang, Bekasi",
    established: "Tahun 2000",
    generation: "Badan Pengurus 2",
    tagline: "Menapak Rimba, Mengarung Samudra, Menjaga Semesta",
    motto: "Satu langkah, Seribu makna",
    description: "Organisasi pecinta alam mahasiswa President University yang memadukan eksplorasi alam daratan (gunung & hutan) dengan kelautan dan konservasi lingkungan.",
    address: "Student Activity Center, President University, Jl. Ki Hajar Dewantara, Kota Jababeka, Cikarang Baru, Bekasi, Jawa Barat 17550",
    email: "diverventurepresuniv@gmail.com",
    socials: {
      instagram: "@diverventurepresuniv"
    },
    stats: [
      { label: "Tahun Berdiri", value: "2000", icon: "calendar", desc: "Berdiri di President University sejak tahun 2000" },
      { label: "Divisi Resmi", value: "7", icon: "compass", desc: "MTDD, Mountaineering, HR, Equipment, Secretary, PR, Student Activities" },
      { label: "Universitas", value: "Presuniv", icon: "building", desc: "President University, Cikarang, Bekasi" },
      { label: "Kepengurusan", value: "BP 2", icon: "shield", desc: "Badan Pengurus 2 — aktif saat ini" }
    ]
  },


  pillars: [
    {
      id: "rimba",
      title: "Eksplorasi Rimba & Puncak",
      tagline: "High Altitude & Mountaineering",
      description: "Menjelajahi punggungan terjal, hutan lumut tropis basah, dan atap kepulauan nusantara dengan disiplin navigasi darat presisi dan etika Leave No Trace.",
      icon: "mountain-snow",
      color: "from-emerald-900 to-green-800",
      accent: "#52b788"
    },
    {
      id: "bahari",
      title: "Ekspedisi Bahari & Diving",
      tagline: "Deep Sea & Marine Exploration",
      description: "Mengarungi samudra, pemetaan terumbu karang, scuba diving riset hayati, dan ekspedisi susur garis pantai pesisir kepulauan Indonesia.",
      icon: "waves",
      color: "from-cyan-950 to-teal-800",
      accent: "#0a9396"
    },
    {
      id: "konservasi",
      title: "Konservasi & Tanggap Darurat",
      tagline: "Eco Restoration & SAR Operations",
      description: "Aksi nyata restorasi mangrove pesisir Muara Gembong, reboisasi lereng kritis, serta kesiapsiagaan operasi medis Search and Rescue (SAR).",
      icon: "shield-check",
      color: "from-amber-950 to-stone-800",
      accent: "#e76f51"
    }
  ],

  about: {
    history: `DIVERVENTURE PRESIDENT UNIVERSITY didirikan pada awal tahun 2000-an di kampus President University, Cikarang, Jawa Barat, oleh sekelompok mahasiswa yang memiliki kecintaan mendalam pada alam bebas serta semangat petualangan dwimatra: alam daratan (gunung hutan) dan alam perairan (samudra/diving).

Sejak masa perintisan awal di era 2000-an, Diverventure menjadi wadah mahasiswa lintas jurusan di President University untuk menempa fisik, kepemimpinan, dan etika pelestarian alam. Berbeda dengan klub alam bebas pada umumnya, Diverventure sejak mula mengkombinasikan kegiatan penjelajahan pegunungan (Mountaineering) dengan olahraga selam dan konservasi kelautan (Diver-Adventure).

Memasuki masa kepengurusan Badan Pengurus 2 saat ini, Diverventure terus berkembang sebagai UKM modern berbasis keilmuan, kepemimpinan global, dan dedikasi sosial kemanusiaan bagi almamater President University serta masyarakat luas.`,

    meaning: [
      {
        word: "DIVER",
        origin: "Kelautan & Samudra",
        meaning: "Melambangkan kecintaan pada dunia bawah air, scuba diving, pemetaan terumbu karang, dan keberanian menyelami tantangan kedalaman samudra."
      },
      {
        word: "VENTURE",
        origin: "Petualangan & Penjelajahan",
        meaning: "Melambangkan tekad menapak rimba, menaklukkan tebing terjal, mengarungi hutan belantara tropis, dan terus berinovasi menjaga kelestarian alam."
      }
    ],

    vision: "Menjadi organisasi pecinta alam mahasiswa President University yang berwawasan internasional, berkarakter tangguh, ilmiah, dan terdepan dalam penjelajahan dwimatra (darat dan laut) serta konservasi lingkungan.",

    missions: [
      "Menyelenggarakan pembinaan mental, fisik, dan keilmuan alam bebas modern bagi mahasiswa President University dengan standar keselamatan tertinggi.",
      "Melaksanakan ekspedisi terpadu di medan gunung hutan, perairan samudra, tebing batuan, dan sistem gua bawah tanah.",
      "Mengembangkan riset konservasi berbasis sains di ekosistem pesisir (mangrove) dan pegunungan nusantara.",
      "Menyiapkan divisi MTDD (Medis, Tanggap Darurat & Diklat) yang tanggap terhadap mitigasi bencana dan operasi SAR.",
      "Mengharumkan nama almamater President University melalui prestasi olahraga alam bebas dan pengabdian masyarakat."
    ],

    kodeEtik: [
      "Pecinta Alam Indonesia sadar bahwa alam beserta isinya adalah ciptaan Tuhan Yang Maha Esa.",
      "Pecinta Alam Indonesia adalah bagian dari masyarakat yang sadar akan tanggung jawabnya kepada Tuhan, Bangsa, dan Tanah Air.",
      "Pecinta Alam Indonesia sadar bahwa segenap pecinta alam adalah saudara sebagai sesama makhluk yang mencintai alam sebagai anugerah Tuhan.",
      "Pecinta Alam Indonesia senantiasa menjaga kelestarian alam dan memanfaatkan sumber dayanya sesuai dengan batas kebutuhan.",
      "Pecinta Alam Indonesia senantiasa berupaya mengamalkan ilmu dan kemampuannya untuk kepentingan kemanusiaan dan tanah air."
    ],

    // ARSIP DIVERVENTURE SEJAK TAHUN 2000-AN
    archives: [
      {
        id: "arch-1",
        year: "Akan Diperbarui",
        era: "2000-an",
        title: "Kelahiran Diverventure di President University",
        category: "Sejarah & Perintisan",
        location: "Kampus President University, Cikarang",
        desc: "Inisiasi awal perkumpulan mahasiswa pecinta alam di President University. (Informasi rincian tahun dan angkatan perintis akan segera diperbarui).",
        highlight: "Angkatan Perintis • Data Akan Diperbarui"
      },
      {
        id: "arch-8",
        year: "2025 - 2026",
        era: "2020-an",
        title: "Kepengurusan Periode 2025 - 2026",
        category: "Badan Pengurus Perintis",
        location: "President University, Cikarang",
        desc: "Periode kepengurusan Diverventure President University tahun 2025–2026. (Informasi rincian susunan pengurus angkatan ini akan segera diperbarui).",
        highlight: "Periode 2025–2026 • Data Akan Diperbarui"
      },
      {
        id: "arch-9",
        year: "2026 - Sekarang",
        era: "2020-an",
        title: "Kepengurusan Badan Pengurus 2",
        category: "Badan Pengurus 2",
        location: "President University, Cikarang",
        desc: "Dipimpin oleh CP Nico Johannes Sirait dan VCP Zaky Purwana, Diverventure melangkah dengan 7 divisi solid: MTDD, Mountaineering, Human Resources, Equipment, Secretary, Public Relations, dan Student Activities.",
        highlight: "Badan Pengurus 2 Aktif • 7 Divisi Terpadu"
      }
    ]

  },

  structure: {
    // BADAN PENGURUS — hanya Ketua & Wakil Ketua yang tampil di bagian atas
    bph: [
      {
        name: "Nico Johannes Sirait",
        role: "Ketua (Chair Person)",
        dept: "Informatic Technology",
        photo: "images/ketua-nico.jpg",
        objectStyle: "center 88%",
        quote: "Diverventure adalah wadah pembuktian bahwa ketangguhan rimba pegunungan menyatu dalam karakter kepemimpinan beretika."
      },
      {
        name: "Zaky Purwana",
        role: "Wakil Ketua (Vice Chair Person)",
        dept: "Informatic Technology",
        photo: "images/wakil-zaky.jpg",
        quote: "Di alam bebas tidak ada sekat pemisah; yang ada hanyalah pundak kawan seperjuangan dan kehormatan menjaga kelestarian semesta."
      }
    ],

    // ANGGOTA BPH LAINNYA (Secretary & Treasurer — ditampilkan terpisah di bawah, bukan di hero utama)
    bphSupport: [
      {
        name: "Jihan R A",
        role: "Secretary",
        dept: "Secretary",
        photo: "images/secretary-jihan.jpg"
      },
      {
        name: "Mandalika Bilqis",
        role: "Treasurer",
        dept: "Informatic Technology",
        photo: "images/treasurer-mandalika.jpg",
        zoomClass: "scale-135 object-center"
      }
    ],

    // KETUA DIVISI RESMI
    divisionsHeads: [
      {
        name: "Gabrielle Chelesta",
        role: "Ketua Divisi MTDD",
        badge: "MTDD",
        major: "Business Administration",
        icon: "camera",
        color: "text-red-400 border-red-500/30",
        photo: "images/mtdd-gabrielle.jpg",
        desc: "Memimpin divisi Media, Design, and Documentation (MTDD) yang mengelola strategi media digital, visual branding, desain grafis, dokumentasi fotografi & videografi kegiatan."
      },
      {
        name: "Padjar Suryadi",
        role: "Ketua Divisi MOUNTAINEERING",
        badge: "Mountaineering",
        major: "Communication",
        icon: "mountain",
        color: "text-emerald-400 border-emerald-500/30",
        photo: "images/mountaineering-padjar.jpg",
        desc: "Fokus pada penjelajahan ketinggian, perintisan rute hutan primer, navigasi darat presisi, survival rimba basah, dan pendakian puncak nusantara."
      },
      {
        name: "Nanta Claudia",
        role: "Ketua Divisi HUMAN RESOURCE",
        badge: "Human Resource",
        major: "Management",
        icon: "users",
        color: "text-cyan-400 border-cyan-500/30",
        photo: "images/hr-nanta.jpg",
        objectStyle: "center 88%",
        zoomClass: "scale-140",
        desc: "Mengawal kaderisasi anggota, pembinaan karakter mental petualang, evaluasi psikologis, kesejahteraan anggota, serta keharmonisan internal."
      },
      {
        name: "Shafa Aqila",
        role: "Ketua Divisi PUBLIC RELATION",
        badge: "Public Relation",
        major: "Business Administration",
        icon: "globe",
        color: "text-blue-400 border-blue-500/30",
        photo: "images/pr-shafa.jpg",
        desc: "Menjadi wajah dan corong komunikasi Diverventure, mengelola akun media sosial (@diverventurepresuniv), konten ekspedisi, sponsorship, dan publikasi."
      },
      {
        name: "Jihan R A",
        role: "Ketua Divisi SECRETARY",
        badge: "Secretary",
        major: "Secretary",
        icon: "file-text",
        color: "text-teal-400 border-teal-500/30",
        photo: "images/secretary-jihan.jpg",
        desc: "Mengelola kearsipan organisasi, legalitas izin kawasan, surat-menyurat resmi, dan administrasi organisasi."
      },
      {
        name: "Muhammad Nichollass",
        role: "Ketua Divisi EQUIPMENT",
        badge: "Equipment",
        major: "Industrial Engineering",
        icon: "package",
        color: "text-amber-400 border-amber-500/30",
        photo: "images/equipment-nichollass.jpg",
        desc: "Bertanggung jawab atas audit kelaikan pakai alat outdoor, perawatan peralatan selam, tali karmantel, dan sistem inventaris logistik."
      },
      {
        name: "Srikandi Syifa Ash Sahwa",
        role: "Ketua Divisi STUDENT ACTIVITIES",
        badge: "Student Activities",
        major: "Hukum",
        icon: "compass",
        color: "text-orange-400 border-orange-500/30",
        photo: "images/student-activities-srikandi.jpg",
        desc: "Mengoordinasikan minat bakat anggota, orientasi medan alam bebas, kompetisi outdoor, serta festival kegiatan mahasiswa kampus."
      }
    ]
  },


  // 7 DIVISI RESMI
  divisions: [
    {
      id: "mtdd",
      title: "Divisi MTDD",
      subtitle: "Media, Design, and Documentation",
      coordinator: "Gabrielle Chelesta",
      major: "Business Administration",
      icon: "camera",
      themeColor: "#e76f51",
      accentBg: "bg-red-950/40 border-red-500/30",
      heroImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
      description: "Divisi MTDD (Media, Design, and Documentation) adalah divisi yang bertanggung jawab atas pengelolaan media publikasi, kreativitas desain visual, dokumentasi fotografi & videografi seluruh kegiatan lapangan, serta pengarsipan karya digital Diverventure President University.",
      skills: [
        "Media & Social Media Management",
        "Graphic Design & Visual Branding",
        "Photography & Field Videography",
        "Content Creation & Digital Publishing",
        "Activity Documentation & Archiving"
      ],
      gear: [
        "Data akan diperbarui."
      ],
      expeditions: "Data akan diperbarui."
    },
    {
      id: "mountaineering",
      title: "Divisi MOUNTAINEERING",
      subtitle: "Gunung Hutan, Alpine & Jungle Survival",
      coordinator: "Padjar Suryadi",
      major: "Communication",
      icon: "mountain-snow",
      themeColor: "#52b788",
      accentBg: "bg-emerald-950/40 border-emerald-500/30",
      heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      description: "Divisi Mountaineering berfokus pada eksplorasi rimba belantara dan penjelajahan pegunungan. Mengembangkan keahlian navigasi peta kompas, manajemen ekspedisi pendakian, survival rimba tropis, perintisan rute di medan ekstrem, serta komitmen penerapan prinsip etika pelestarian alam Leave No Trace.",
      skills: [
        "Navigasi Darat (Peta Topografi, Kompas & Altimeter)",
        "Jungle Survival & Pembuatan Bivak Rimba Tropis",
        "Manajemen Packing & Perencanaan Ekspedisi Pendakian",
        "Perintisan Rute & Teknik Pergerakan Lapangan Ekstrem",
        "Manajemen Aklimatisasi & Safety Management Pendakian"
      ],
      gear: [
        "Data akan diperbarui."
      ],
      expeditions: "Data akan diperbarui."
    },
    {
      id: "human-resources",
      title: "Divisi HUMAN RESOURCES",
      subtitle: "Pengembangan SDM, Kaderisasi & Budaya Anggota",
      coordinator: "Nanta Claudia",
      major: "Management",
      icon: "users",
      themeColor: "#0a9396",
      accentBg: "bg-cyan-950/40 border-cyan-500/30",
      heroImage: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
      description: "Divisi Human Resource berfokus pada pengembangan sumber daya manusia, kaderisasi anggota baru, pembentukan karakter kepemimpinan petualang, serta menjaga keharmonisan, motivasi, dan solidaritas internal anggota Diverventure President University.",
      skills: [
        "Kaderisasi & Rekrutmen Anggota Baru",
        "Pengembangan Kepemimpinan & Pembentukan Karakter",
        "Manajemen Dinamika Kelompok & Solidaritas Internal",
        "Evaluasi Perkembangan & Kesejahteraan Anggota",
        "Pengelolaan Jejaring Alumni & Hubungan Internal"
      ],
      gear: [
        "Data akan diperbarui."
      ],
      expeditions: "Data akan diperbarui."
    },
    {
      id: "equipment",
      title: "Divisi EQUIPMENT",
      subtitle: "Manajemen Logistik & Perlengkapan Operasional",
      coordinator: "Muhammad Nichollass",
      major: "Industrial Engineering",
      icon: "package",
      themeColor: "#e9d8a6",
      accentBg: "bg-amber-950/40 border-amber-500/30",
      heroImage: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1200&q=80",
      description: "Divisi Equipment bertanggung jawab atas pengelolaan logistik, perawatan perlengkapan outdoor, pemeliharaan alat keselamatan ekspedisi, serta inventarisasi peralatan lapangan agar seluruh perlengkapan Diverventure President University selalu siap dan aman digunakan.",
      skills: [
        "Manajemen Logistik & Inventarisasi Alat Outdoor",
        "Perawatan & Maintenance Peralatan Lapangan",
        "Inspection & Standardisasi Keselamatan Gear",
        "Pengelolaan Gudang & Distribusi Perlengkapan Organisasi",
        "Manajemen Pembekalan Lapangan & Kebutuhan Ekspedisi"
      ],
      gear: [
        "Data akan diperbarui."
      ],
      expeditions: "Data akan diperbarui."
    },
    {
      id: "secretary",
      title: "Divisi SECRETARY",
      subtitle: "Kesekretariatan, Tata Kelola & Dokumen Legal",
      coordinator: "Jihan R A",
      major: "Secretary",
      icon: "file-text",
      themeColor: "#94d2bd",
      accentBg: "bg-teal-950/40 border-teal-500/30",
      heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      description: "Divisi Secretary mengelola tata kelola administrasi organisasi, kearsipan dokumen resmi, surat-menyurat, pencatatan notulensi rapat, perizinan kegiatan lapangan (SIMAKSI), serta penyusunan laporan pertanggungjawaban kegiatan Diverventure President University.",
      skills: [
        "Tata Kelola Administrasi & Surat-Menyurat Resmi",
        "Pengurusan Izin Kegiatan Lapangan & SIMAKSI",
        "Notulensi Rapat & Pencatatan Keputusan Organisasi",
        "Manajemen Kearsipan Digital & Dokumen Legal",
        "Penyusunan Laporan Pertanggungjawaban (LPJ)"
      ],
      gear: [
        "Data akan diperbarui."
      ],
      expeditions: "Data akan diperbarui."
    },
    {
      id: "public-relations",
      title: "Divisi PUBLIC RELATION",
      subtitle: "Humas, Media Ekspedisi, Sponsorship & Kemitraan",
      coordinator: "Shafa Aqila",
      major: "Business Administration",
      icon: "globe",
      themeColor: "#38bdf8",
      accentBg: "bg-sky-950/40 border-sky-500/30",
      heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      description: "Divisi Public Relation (PR) menjadi corong utama komunikasi eksternal dan humas Diverventure President University. Mengelola akun media sosial resmi (@diverventurepresuniv di Instagram), menjalin kerja sama sponsorship dengan brand outdoor, diplomasi antar-lembaga, serta publikasi berita kegiatan.",
      skills: [
        "Hubungan Masyarakat & Komunikasi Eksternal",
        "Negosiasi & Kemitraan Sponsorship Brand Outdoor",
        "Kerja Sama Inter-Organisasi & Komunitas Pecinta Alam",
        "Media Relations & Public Relations Campaign",
        "Event Promotion & External Representation"
      ],
      gear: [
        "Data akan diperbarui."
      ],
      expeditions: "Data akan diperbarui."
    },
    {
      id: "student-activities",
      title: "Divisi STUDENT ACTIVITIES",
      subtitle: "Aktivitas Mahasiswa & Olahraga Outdoor",
      coordinator: "Srikandi Syifa Ash Sahwa",
      major: "Hukum",
      icon: "compass",
      themeColor: "#f59e0b",
      accentBg: "bg-amber-950/40 border-amber-500/30",
      heroImage: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&q=80",
      description: "Divisi Student Activities mewadahi minat bakat mahasiswa President University dalam olahraga ketangkasan alam bebas. Mengembangkan kegiatan panjat dinding (Sport Climbing), orienteering, latihan outdoor, serta menyelenggarakan seminar dan program edukasi lingkungan di lingkungan kampus.",
      skills: [
        "Pengembangan Minat Bakat Olahraga Outdoor Mahasiswa",
        "Manajemen Event & Pelatihan Ketangkasan Alam",
        "Pengorganisasian Seminar & Workshop Kepencintaalaman",
        "Latihan Kebugaran & Outbound Development",
        "Program Kampus Hijau & Edukasi Lingkungan"
      ],
      gear: [
        "Data akan diperbarui."
      ],
      expeditions: "Data akan diperbarui."
    }
  ],

  // DOKUMENTASI KEGIATAN 2 TAHUN TERAKHIR (2024 - 2025)
  activities: [
    {
      id: "act-1",
      title: "1. Hiking Mount Gede",
      date: "July 10, 2024",
      badge: "Mountaineering & Hiking",
      location: "Mount Gede, Jawa Barat",
      summary: "Diverventure President University conducted a hiking activity at Mount Gede to develop members’ outdoor skills, strengthen teamwork, and promote environmental awareness.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      stats: "July 10, 2024 • Mount Gede"
    },
    {
      id: "act-2",
      title: "2. Adhikarsa Bahari – Going to Tidung Island",
      date: "August 5–7, 2025",
      badge: "Bahari & Marine Conservation",
      location: "Tidung Island, Thousand Islands",
      summary: "Held in Tidung Island, Thousand Islands, this activity commemorated World Planting Day through various environmental activities, including Beach Clean-up, Fish Re-stocking (Grouper Release), Mangrove Tree Planting, Coral Reef Transplantation, and Environmental Discussion & Team Bonding.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      stats: "August 5–7, 2025 • Tidung Island"
    },
    {
      id: "act-3",
      title: "3. Hiking & Camping at Mount Luhur",
      date: "December 2, 2025",
      badge: "Hiking, Camping & Tree Planting",
      location: "Mount Luhur, Jawa Barat",
      summary: "To commemorate World Tree Planting Day, Diverventure President University held a hiking and camping activity at Mount Luhur. The event included planting 100 pine trees and cleaning up waste in the mountain area as a contribution to environmental preservation.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      stats: "December 2, 2025 • Mount Luhur"
    }
  ],


  // GALLERY DIVERVENTURE (5 FOTO UTAMA)
  gallery: [
    {
      id: "gal-1",
      src: "images/gallery-snorkeling-selfie.jpg",
      caption: "Selfie Snorkeling & Coral Exploration – Pulau Tidung",
      date: "August 2025",
      category: "bahari",
      tag: "Bahari & Diving",
      location: "Pulau Tidung, Kepulauan Seribu",
      rotation: "-rotate-2 hover:rotate-0",
      aspect: "aspect-[3/4]"
    },
    {
      id: "gal-2",
      src: "images/gallery-sunset-swimming.jpg",
      caption: "Sunset Swimming & Snorkeling Team Bonding",
      date: "August 2025",
      category: "bahari",
      tag: "Bahari & Senja",
      location: "Perairan Kepulauan Seribu",
      rotation: "rotate-1 hover:rotate-0",
      aspect: "aspect-[3/4]"
    },
    {
      id: "gal-3",
      src: "images/gallery-tree-planting.jpg",
      caption: "Aksi Penanaman Bibit Pohon Pinus & Konservasi Alam",
      date: "December 2025",
      category: "konservasi",
      tag: "Konservasi Lingkungan",
      location: "Gunung Luhur, Jawa Barat",
      rotation: "-rotate-1 hover:rotate-0",
      aspect: "aspect-[3/4]"
    },
    {
      id: "gal-4",
      src: "images/gallery-mountain-hiking.jpg",
      caption: "Tim Pendaki Diverventure & Ekspedisi Carrier",
      date: "July 2024",
      category: "mountaineering",
      tag: "Mountaineering & Hiking",
      location: "Gunung Gede, Jawa Barat",
      rotation: "rotate-2 hover:rotate-0",
      aspect: "aspect-[3/4]"
    },
    {
      id: "gal-5",
      src: "images/gallery-mountain-view.png",
      caption: "Panorama Indah Puncak & Deretan Pegunungan Nusantara",
      date: "July 2024",
      category: "mountaineering",
      tag: "Landscape Puncak",
      location: "Taman Nasional Gunung Gede Pangrango",
      rotation: "-rotate-1 hover:rotate-0",
      aspect: "aspect-[16/9] md:col-span-2"
    }
  ]
};

// Aliases for compatibility
window.MAPALA_DATA = DIVERVENTURE_DATA;
window.DIVERVENTURE_DATA = DIVERVENTURE_DATA;

