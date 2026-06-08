export interface PopupData {
  title: string;
  description: string;
  modelPath: string;         // Path file 3D khusus komponen ini
  thumbnail: string;
  videos: { url: string; cover: string }[];
  popupAnimation: string;
  functions: string[];       // Daftar fungsi utama (bullet points)
  workingPrinciple: string[];  // Penjelasan cara kerja
  hideFromCatalog?: boolean;
}

export const componentsData: Record<string, PopupData> = {
  'sentrifugal': {
    title: 'Pompa Sentrifugal',
    description: 'Pompa sentrifugal adalah jenis pompa dinamis yang memanfaatkan gaya putar untuk melempar cairan keluar, yang kemudian diubah menjadi tekanan untuk mengalirkan cairan tersebut dari satu tempat ke tempat lain.',
    modelPath: '/models/Centrifugal_Pump_View1.glb', // Pastikan Anda punya file ini nanti
    thumbnail: '/images/parts/pompa-sentrifugal.jpg', // Gambar untuk kartu di menu PARTS
    videos: [
      { url: '/videos/sentrifugal-1.mp4', cover: '/images/covers/sentrifugal-1.jpg' },
      { url: '/videos/sentrifugal-2.mp4', cover: '/images/covers/sentrifugal-2.jpg' }
    ],
    popupAnimation: '/videos/centrifugal_animasi.mp4',
    functions: [
      'Mensirkulasikan air atau media pendingin pada mesin, chiller, atau sistem AC komersial.',
      'Menyuplai air bersih dari penampungan bawah (ground tank) ke tangki atas (roof tank) atau langsung ke pipa distribusi.',
      'Mengalirkan air limbah atau cairan kimia ringan dalam proses filtrasi dan drainase.',
      'Menyuplai air bertekanan tinggi ke jaringan hydrant atau sprinkler.'
    ],
    workingPrinciple: [
      "Tahap Awal: Priming",
      "Rumah pompa (casing) dan pipa hisap harus terisi penuh cairan terlebih dahulu agar tidak ada udara yang terjebak, karena pompa tidak dapat menghisap udara secara efektif.",
      "Tahap 2: Putaran Impeller.",
      "Saat motor atau mesin dinyalakan, poros memutar impeller dengan kecepatan tinggi di dalam casing.",
      "Tahap 3: Efek Sentrifugal.",
      "Cairan yang masuk melalui pusat impeller ikut berputar dan terdorong ke arah dinding casing akibat gaya sentrifugal.",
      "Tahap 4: Perubahan Energi",
      "Ketika cairan mencapai dinding casing yang berbentuk melebar (volute), kecepatan alirannya berkurang, tetapi tekanannya meningkat.",
      "Tahap 5: Pelepasan (Discharge)",
      "Cairan bertekanan tinggi kemudian dialirkan keluar melalui pipa tekan (discharge outlet) menuju titik tujuan."
    ]
  },
  'submersible': {
    title: 'Pompa Submersible',
    description: 'Pompa submersible adalah jenis pompa yang seluruh badan pompa dan motor penggeraknya dirancang kedap air sehingga bisa ditenggelamkan sepenuhnya ke dalam cairan yang akan dipompa.',
    modelPath: '/models/Submersial_Pump_View2.glb',
    thumbnail: '/images/parts/pompa-submersible.jpg', // Gambar untuk kartu di menu PARTS
    videos: [
      { url: '/videos/sentrifugal-1.mp4', cover: '/images/covers/sentrifugal-1.jpg' },
      { url: '/videos/sentrifugal-2.mp4', cover: '/images/covers/sentrifugal-2.jpg' }
    ],
    popupAnimation: '/videos/submersible-animasi.mp4',
    functions: [
      'Menyuplai air bersih dari sumur bor yang kedalamannya puluhan hingga ratusan meter.',
      'Menguras air genangan di basement gedung, terowongan, atau proyek konstruksi bawah tanah.',
      'Mengalirkan air limbah domestik atau industri dari bak ekualisasi menuju bak sedimentasi.',
      'Membuang air yang menggenang di lambung kapal keluar ke laut.'
    ],
    workingPrinciple: [
      "Tahap 1: Pompa permukaan harus menghisap air naik, tugasnya adalah mendorong air ke atas.",
      "Tahap 2: Cairan masuk ke dalam pompa melalui saringan yang berada di badan pompa. Saringan ini berfungsi agar kerikil atau sampah besar tidak ikut masuk merusak komponen dalam.",
      "Tahap 3: Cairan akan masuk ke impeller pertama, tekanannya naik, lalu dioper ke impeller kedua, tekanannya naik lagi, begitu seterusnya sampai tekanannya cukup kuat untuk mendorong air naik ke permukaan yang tinggi.",
    ]
  },
  'valve': {
    title: 'Check Valve (Katup Satu Arah)',
    description: 'Check valve adalah jenis katup mekanis yang dirancang khusus untuk mengizinkan cairan atau gas mengalir hanya ke satu arah dan secara otomatis mencegah aliran balik (backflow) ke arah sebaliknya.',
    modelPath: '/models/Check_Valve.glb',
    thumbnail: '/images/parts/check-valve.jpg', // Gambar untuk kartu di menu PARTS
    videos: [
      { url: '/videos/sentrifugal-1.mp4', cover: '/images/covers/sentrifugal-1.jpg' },
      { url: '/videos/sentrifugal-2.mp4', cover: '/images/covers/sentrifugal-2.jpg' }
    ],
    popupAnimation: '/videos/valve_animasi.mp4',
    functions: [
      'Memastikan cairan yang sudah dipompa ke atas atau ke depan tidak turun/kembali lagi saat pompa mati.',
      'menahan hantaman keras cairan saat pompa tiba-tiba mati agar tidak merusak impeller atau casing pompa.',
      'Dipasang di ujung pipa hisap agar air di dalam pipa tidak turun kembali ke bak penampungan.'
    ],
    workingPrinciple: [
      "Di dalam check valve terdapat sebuah piringan (disc atau flap) yang menutup jalur aliran akibat gaya gravitasi atau dorongan pegas.",
      "Ketika pompa menyala, cairan mengalir menuju katup. Jika tekanan cairan dari sisi masuk lebih besar daripada tekanan di sisi keluar plus gaya beban piringan, maka piringan akan terdorong terbuka. Cairan pun bebas mengalir ke depan.",
      "Begitu pompa dimatikan, tekanan dari sisi masuk langsung drop.",
      "Aliran balik tersebut, bersama dengan gravitasi atau pegas katup, akan langsung mendorong piringan kembali ke posisi semula. Katup menutup rapat, dan aliran balik berhasil dihentikan seketika."
    ]
  },
    'stp-utama': {
    title: 'Penyaringan Air (STP)',
    description: 'Sistem tangki yang menyaring partikel kotoran dan menjernihkan air melalui beberapa tahapan.',
    modelPath: '/models/STP-version-1.glb',
    thumbnail: '/images/parts/STP.jpg', // Gambar untuk kartu di menu PARTS
    videos: [
      { url: '/videos/senrtrifugal-1.mp4', cover: '/images/covers/sentrifugal-1.jpg' },
      { url: '/videos/sentrifugal-2.mp4', cover: '/images/covers/sentrifugal-2.jpg' }
    ],
    popupAnimation: '/videos/animasi-popup-sentrifugal.mp4',
    functions: [
      'Memisahkan kotoran padat dari air.',
      'Menjernihkan air sebelum didistribusikan ke gedung.',
      'Mengolah limbah cair menjadi air yang aman.'
    ],
    workingPrinciple: [
      "Tahap 1: Penyaringan Awal (Pre-Treatment)",
      "Memisahkan limbah padat kasar dari air limbah menggunakan saringan fisik (screen) untuk menangkap sampah agar tidak masuk ke sistem pompa dan menyumbat pipa di tahapan berikutnya.",
      "Tahap 2: Bak Ekualisasi (Equalization)",
      "Mengontrol fluktuasi debit air dan meratakan konsentrasi zat kimia di dalam air.",
      "Tahap 3: Bak Aerasi (Biological Treatment)",
      "Menggunakan mesin blower untuk menyuplai oksigen secara terus-menerus. Bakteri aerob ini akan memakan dan menguraikan zat-zat organik yang larut dalam air limbah, mengubahnya menjadi massa biologis.",
      "Tahap 4: Air keluar melalui saluran tekan",
      "Memisahkan air bersih dari lumpur biologis hasil proses aerasi. lumpur yang lebih berat akan mengendap di dasar bak yang berbentuk kerucut, sedangkan air yang sudah jernih di bagian atas mengalir ke tahap berikutnya.",
      "Tahap 5: Tahap Akhir (Disinfection & Filtration)",
      "Tahap pembersihan akhir dan pembunuhan kuman berbahaya sebelum air dimanfaatkan kembali."
    ]
  },
  'filter_satu': {
    title: 'Penyaringan Air (STP) Tahap 1-3',
    description: 'Air limbah terlebih dahulu disaring untuk menghilangkan sampah kasar, kemudian ditampung pada bak ekualisasi untuk menstabilkan debit dan kualitas air. Setelah itu, air masuk ke bak aerasi, tempat mikroorganisme aerob menguraikan zat organik menjadi lumpur biologis.',
    hideFromCatalog: true,
    modelPath: '/models/',
    thumbnail: '/images/parts/STP.jpgwfe', // Gambar untuk kartu di menu PARTS
    videos: [
      { url: '/videos/senrtrifugal-1.mp4', cover: '/images/covers/sentrifugal-1.jpg' },
      { url: '/videos/sentrifugal-2.mp4', cover: '/images/covers/sentrifugal-2.jpg' }
    ],
    popupAnimation: '/videos/stp-tahap1.mp4',
    functions: [
      'Memisahkan kotoran padat dari air.',
      'Menjernihkan air sebelum didistribusikan ke gedung.',
      'Mengolah limbah cair menjadi air yang aman.'
    ],
    workingPrinciple: [
      "Tahap 1: Air masuk ke pompa.",
      "Tahap 2: Impeller berputar.",
      "Tahap 3: Air keluar melalui saluran tekan."
    ]
  },
    'filter_dua': {
    title: 'Penyaringan Air (STP) Tahap 4 & 5',
    description: 'Lumpur biologis dipisahkan dari air melalui proses pengendapan menggunakan gravitasi. Selanjutnya, air yang telah jernih disaring dan didesinfeksi untuk menghilangkan partikel sisa serta membunuh mikroorganisme berbahaya sebelum digunakan kembali atau dibuang ke lingkungan.',
    hideFromCatalog: true,
    modelPath: '/models/filter-air.glb',
    thumbnail: '/images/parts/sentrifugal.jpg', // Gambar untuk kartu di menu PARTS
    videos: [
      { url: '/videos/sentrifugal-1.mp4', cover: '/images/covers/sentrifugal-1.jpg' },
      { url: '/videos/sentrifugal-2.mp4', cover: '/images/covers/sentrifugal-2.jpg' }
    ],
    popupAnimation: '/videos/stp-tahap2.mp4',
    functions: [
      'Memisahkan kotoran padat dari air.',
      'Menjernihkan air sebelum didistribusikan ke gedung.',
      'Mengolah limbah cair menjadi air yang aman.'
    ],
    workingPrinciple: [
      "Tahap 1: Air masuk ke pompa.",
      "Tahap 2: Impeller berputar.",
      "Tahap 3: Air keluar melalui saluran tekan."
    ]
  }
};