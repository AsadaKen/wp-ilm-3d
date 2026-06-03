import { useRef } from 'react';
import { X } from 'lucide-react';

export default function VideoPlayerModal({ src, onClose }: { src: string, onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Fungsi Mundur 5 Detik (Kiri)
  const handleDoubleTapLeft = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) videoRef.current.currentTime -= 5;
  };

  // Fungsi Play/Pause (Tengah)
  const handleDoubleTapCenter = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) videoRef.current.play();
      else videoRef.current.pause();
    }
  };

  // Fungsi Maju 5 Detik (Kanan)
  const handleDoubleTapRight = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) videoRef.current.currentTime += 5;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 md:p-12">
      
      {/* Container Video Pop-up */}
      <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
        
        {/* Tombol Tutup (X) */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-red-500 hover:scale-110 transition-all"
        >
          <X size={24} />
        </button>

        {/* Video Player */}
        <video 
          ref={videoRef}
          src={src}
          controls // Memunculkan bar durasi dan volume bawaan browser di bawah
          autoPlay
          className="w-full h-full object-contain"
        />
        
        {/* Area Klik Ganda (Double Tap Zones) 
          Catatan: Kita beri jarak (bottom-16) agar area klik ganda ini 
          tidak menutupi tombol progress bar bawaan video di bagian bawah.
        */}
        <div className="absolute inset-0 bottom-16 flex z-40">
          <div className="flex-1 cursor-pointer" onDoubleClick={handleDoubleTapLeft} title="Double click mundur 5s" />
          <div className="flex-1 cursor-pointer" onDoubleClick={handleDoubleTapCenter} title="Double click pause/play" />
          <div className="flex-1 cursor-pointer" onDoubleClick={handleDoubleTapRight} title="Double click maju 5s" />
        </div>

      </div>
    </div>
  );
}