import { useState, useEffect, useRef } from 'react';
import { useAppStore } from '../../store/appStore';
import { Search } from 'lucide-react'; 

export default function Video2DMode() {
  const { is3DMode, setActivePopup, isAudioMuted } = useAppStore();
  const [showBoxes, setShowBoxes] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Menyinkronkan status mute audio
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isAudioMuted;
    }
  }, [isAudioMuted]);

  // Logika Timer: Menghilangkan kotak
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (showBoxes) {
      timer = setTimeout(() => {
        setShowBoxes(false);
      }, 4000); 
    }
    return () => clearTimeout(timer);
  }, [showBoxes]);

  // ========================================================
  // KUNCI OPTIMASI: Kontrol Play/Pause Video secara Eksplisit
  // ========================================================
  useEffect(() => {
    if (videoRef.current) {
      if (is3DMode) {
        // Jika sedang di 3D, matikan video agar tidak memakan RAM
        videoRef.current.pause();
      } else {
        // Jika beralih ke 2D, paksa video untuk berputar
        videoRef.current.play().catch((err) => {
          console.warn("Autoplay ditunda oleh peramban:", err);
        });
      }
    }
  }, [is3DMode]);

  return (
    <div
      className={`absolute inset-0 w-full h-full bg-bg flex items-center justify-center transition-opacity duration-500 ${
        is3DMode ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      } z-20`}
    >
      <video
        ref={videoRef}
        src="/videos/main_video2.mp4" 
        autoPlay
        loop
        playsInline 
        muted={isAudioMuted} 
        className="absolute inset-0 w-full h-full object-cover"
      />

      <button
        onClick={() => setShowBoxes(true)}
        className="absolute top-20 left-4 z-30 w-12 h-12 bg-white rounded-xl shadow-lg border-2 border-gray-100 flex items-center justify-center hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all"
      >
        <Search size={24} className="text-red-500" strokeWidth={3} />
      </button>

      {/* AREA KOTAK 1: Pompa Submersible */}
      <div
        onClick={() => setActivePopup('submersible')}
        className={`absolute top-[65%] left-[7%] w-[10%] h-[20%] border-[3px] border-white/80 bg-white/10 cursor-pointer transition-all duration-500 ease-out z-30 backdrop-blur-[1px] hover:bg-white/20 hover:border-white ${
          showBoxes ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'
        }`}
      />

      {/* AREA KOTAK 2: Pompa Sentrifugal*/}
      <div
        onClick={() => setActivePopup('sentrifugal')}
        className={`absolute top-[28%] left-[12%] w-[10%] h-[20%] border-[3px] border-white/80 bg-white/10 cursor-pointer transition-all duration-500 ease-out z-30 backdrop-blur-[1px] hover:bg-white/20 hover:border-white ${
          showBoxes ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'
        }`}
      />

      {/* AREA KOTAK 3: Check Valve */}
      <div
        onClick={() => setActivePopup('valve')}
        className={`absolute top-[28%] left-[26%] w-[5%] h-[20%] border-[3px] border-white/80 bg-white/10 cursor-pointer transition-all duration-500 ease-out z-30 backdrop-blur-[1px] hover:bg-white/20 hover:border-white ${
          showBoxes ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'
        }`}
      />

      {/* AREA KOTAK 4: Filter Air (satu) */}
      <div
        onClick={() => setActivePopup('filter_satu')} 
        className={`absolute top-[45%] left-[58%] w-[20%] h-[30%] border-[3px] border-white/80 bg-white/10 cursor-pointer transition-all duration-500 ease-out z-30 backdrop-blur-[1px] hover:bg-white/20 hover:border-white ${
          showBoxes ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'
        }`}
      />

      {/* AREA KOTAK 5: Filter Air (dua) */}
      <div
        onClick={() => setActivePopup('filter_dua')}
        className={`absolute top-[17%] left-[73%] w-[20%] h-[30%] border-[3px] border-white/80 bg-white/10 cursor-pointer transition-all duration-500 ease-out z-30 backdrop-blur-[1px] hover:bg-white/20 hover:border-white ${
          showBoxes ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'
        }`}
      />
    </div>
  );
}