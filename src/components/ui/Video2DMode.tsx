import { useState, useEffect } from 'react';
import { useAppStore } from '../../store/appStore';
import { Search } from 'lucide-react'; // Icon kaca pembesar

export default function Video2DMode() {
  const { is3DMode, setActivePopup } = useAppStore();
  const [showBoxes, setShowBoxes] = useState(false);

  // Logika Timer: Menghilangkan kotak otomatis setelah 4 detik
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (showBoxes) {
      timer = setTimeout(() => {
        setShowBoxes(false);
      }, 100000); // Angka 4000 = 4 detik (bisa Anda sesuaikan)
    }
    return () => clearTimeout(timer);
  }, [showBoxes]);

  return (
    <div
      className={`absolute inset-0 w-full h-full bg-bg flex items-center justify-center transition-opacity duration-500 ${
        is3DMode ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      } z-20`}
    >
      {/* Video Fullscreen (Tanpa jarak margin) */}
      <video
        src="/videos/main_video2.mp4" // Ganti dengan path video diam Anda
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Tombol Kaca Pembesar (Floating di kiri atas, di bawah toggle 3D) */}
      <button
        onClick={() => setShowBoxes(true)}
        className="absolute top-20 left-4 z-30 w-12 h-12 bg-white rounded-xl shadow-lg border-2 border-gray-100 flex items-center justify-center hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all"
      >
        <Search size={24} className="text-red-500" strokeWidth={3} />
      </button>

      {/* ========================================== */}
      {/* AREA KOTAK 1: Pompa Sentrifugal                 */}
      {/* ========================================== */}
      <div
        onClick={() => setActivePopup('submersible')}
        className={`absolute top-[65%] left-[7%] w-[10%] h-[20%] border-[3px] border-white/80 bg-white/10 cursor-pointer transition-all duration-500 ease-out z-30 backdrop-blur-[1px] hover:bg-white/20 hover:border-white ${
          showBoxes ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'
        }`}
      />

      {/* ========================================== */}
      {/* AREA KOTAK 2: Pompa Submersible                 */}
      {/* ========================================== */}
      <div
        onClick={() => setActivePopup('sentrifugal')}
        className={`absolute top-[28%] left-[12%] w-[10%] h-[20%] border-[3px] border-white/80 bg-white/10 cursor-pointer transition-all duration-500 ease-out z-30 backdrop-blur-[1px] hover:bg-white/20 hover:border-white ${
          showBoxes ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'
        }`}
      />

      {/* ========================================== */}
      {/* AREA KOTAK 3: Check Valve                 */}
      {/* ========================================== */}
      <div
        onClick={() => setActivePopup('valve')}
        className={`absolute top-[28%] left-[26%] w-[5%] h-[20%] border-[3px] border-white/80 bg-white/10 cursor-pointer transition-all duration-500 ease-out z-30 backdrop-blur-[1px] hover:bg-white/20 hover:border-white ${
          showBoxes ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'
        }`}
      />

      {/* ========================================== */}
      {/* AREA KOTAK 4: Filter Air (satu)           */}
      {/* ========================================== */}
      <div
        onClick={() => setActivePopup('filter_satu')}
        className={`absolute top-[45%] left-[58%] w-[20%] h-[30%] border-[3px] border-white/80 bg-white/10 cursor-pointer transition-all duration-500 ease-out z-30 backdrop-blur-[1px] hover:bg-white/20 hover:border-white ${
          showBoxes ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'
        }`}
      />

      {/* ========================================== */}
      {/* AREA KOTAK 4: Filter Air (dua)           */}
      {/* ========================================== */}
      <div
        onClick={() => setActivePopup('filter_dua')}
        className={`absolute top-[17%] left-[73%] w-[20%] h-[30%] border-[3px] border-white/80 bg-white/10 cursor-pointer transition-all duration-500 ease-out z-30 backdrop-blur-[1px] hover:bg-white/20 hover:border-white ${
          showBoxes ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'
        }`}
      />

      {/* Catatan: Sesuaikan persentase top, left, w (width), dan h (height) 
          pada area kotak di atas agar posisinya pas menutupi objek di video Anda */}
    </div>
  );
}