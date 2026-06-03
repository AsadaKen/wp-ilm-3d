export interface PopupData {
  title: string;
  description: string;
  modelPath: string;         // Path file 3D khusus komponen ini
  thumbnail: string;
  videos: { url: string; cover: string }[];
  popupAnimation: string;
  functions: string[];       // Daftar fungsi utama (bullet points)
  workingPrinciple: string;  // Penjelasan cara kerja
  hideFromCatalog?: boolean;
}

export const componentsData: Record<string, PopupData> = {
  'sentrifugal': {
    title: 'Pompa Sentrifugal',
    description: 'Pompa ini menggunakan gaya sentrifugal dari putaran impeller untuk mendorong air keluar. Sangat efisien untuk memindahkan air dalam volume besar.',
    modelPath: '/models/Centrifugal_Pump_View1.glb', // Pastikan Anda punya file ini nanti
    thumbnail: '/images/parts/pompa-sentrifugal.jpg', // Gambar untuk kartu di menu PARTS
    videos: [
      { url: '/videos/sentrifugal-1.mp4', cover: '/images/covers/sentrifugal-1.jpg' },
      { url: '/videos/sentrifugal-2.mp4', cover: '/images/covers/sentrifugal-2.jpg' }
    ],
    popupAnimation: '/videos/centrifugal_animasi.mp4',
    functions: [
      'Menyedot air dari sumber (seperti tangki bawah).',
      'Mendorong air dengan tekanan tinggi ke seluruh jaringan pipa gedung.',
      'Menjaga sirkulasi air tetap stabil.'
    ],
    workingPrinciple: 'Saat motor dinyalakan, impeller di dalam pompa akan berputar dengan kecepatan tinggi. Air yang masuk melalui pusat impeller akan terlempar ke arah luar karena gaya sentrifugal, menciptakan ruang vakum yang menyedot lebih banyak air masuk.'
  },
  'submersible': {
    title: 'Pompa Submersible',
    description: 'Dirancang untuk ditenggelamkan sepenuhnya ke dalam air (seperti di dalam sumur). Motornya tertutup rapat.',
    modelPath: '/models/Submersial_Pump_View2.glb',
    thumbnail: '/images/parts/pompa-submersible.jpg', // Gambar untuk kartu di menu PARTS
    videos: [
      { url: '/videos/sentrifugal-1.mp4', cover: '/images/covers/sentrifugal-1.jpg' },
      { url: '/videos/sentrifugal-2.mp4', cover: '/images/covers/sentrifugal-2.jpg' }
    ],
    popupAnimation: '/videos/submersible-animasi.mp4',
    functions: [
      'Menyedot air dari kedalaman tanah (sumur bor).',
      'Meminimalisir suara bising karena berada di dalam air.',
      'Mencegah masalah kavitasi (gelembung udara) pada sistem.'
    ],
    workingPrinciple: 'Berbeda dengan pompa biasa yang menarik air, pompa jenis ini mendorong air ke permukaan. Karena motor berada langsung di dalam air, ia tidak perlu membuang energi untuk menyedot, membuatnya sangat efisien untuk sumur dalam.'
  },
  'valve': {
    title: 'Check Valve (Katup Satu Arah)',
    description: 'Komponen mekanik yang berfungsi memastikan air hanya mengalir ke satu arah.',
    modelPath: '/models/Check_Valve.glb',
    thumbnail: '/images/parts/check-valve.jpg', // Gambar untuk kartu di menu PARTS
    videos: [
      { url: '/videos/sentrifugal-1.mp4', cover: '/images/covers/sentrifugal-1.jpg' },
      { url: '/videos/sentrifugal-2.mp4', cover: '/images/covers/sentrifugal-2.jpg' }
    ],
    popupAnimation: '/videos/valve_animasi.mp4',
    functions: [
      'Mencegah air mengalir mundur (backflow).',
      'Melindungi pompa dari kerusakan akibat tekanan balik air.',
      'Menjaga agar pipa tidak kosong saat pompa dimatikan.'
    ],
    workingPrinciple: 'Katup ini bekerja secara otomatis menggunakan tekanan fluida. Saat air mengalir maju, tekanannya akan mendorong piringan katup hingga terbuka. Namun, jika air mencoba mengalir mundur, piringan tersebut akan tertutup rapat akibat gaya gravitasi dan dorongan air itu sendiri.'
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
    workingPrinciple: 'Air yang masuk akan melewati beberapa ruang (chamber). Ruang pertama berfungsi untuk mengendapkan material berat, lalu air dialirkan ke ruang filtrasi yang berisi media penyaring khusus untuk membunuh bakteri dan menjernihkan warna air sebelum siap digunakan.'
  },
  'filter_satu': {
    title: 'Penyaringan Air (STP) Part 1',
    description: 'Sistem tangki yang menyaring partikel kotoran dan menjernihkan air melalui beberapa tahapan.',
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
    workingPrinciple: 'Air yang masuk akan melewati beberapa ruang (chamber). Ruang pertama berfungsi untuk mengendapkan material berat, lalu air dialirkan ke ruang filtrasi yang berisi media penyaring khusus untuk membunuh bakteri dan menjernihkan warna air sebelum siap digunakan.'
  },
    'filter_dua': {
    title: 'Penyaringan Air (STP) Tahap 2',
    description: 'Sistem tangki yang menyaring partikel kotoran dan menjernihkan air melalui beberapa tahapan.',
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
    workingPrinciple: 'Air yang masuk akan melewati beberapa ruang (chamber). Ruang pertama berfungsi untuk mengendapkan material berat, lalu air dialirkan ke ruang filtrasi yang berisi media penyaring khusus untuk membunuh bakteri dan menjernihkan warna air sebelum siap digunakan.'
  }
};