import { useAppStore } from '../../store/appStore';
import { componentsData } from '../../data/componentsData';

export default function ComponentPopup() {
  const { activePopup, setActivePopup } = useAppStore();

  if (!activePopup) return null;
  const content = componentsData[activePopup];
  if (!content) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none">
      <div 
        className="absolute inset-0 bg-black/20 pointer-events-auto backdrop-blur-sm transition-all duration-300"
        onClick={() => setActivePopup(null)}
      />
      
      {/* Jendela Popup */}
      <div className="absolute top-[13%] bg-surface w-[390px] min-h-[320px] rounded-2xl p-4 shadow-xl pointer-events-auto animate-in zoom-in-95 duration-200 border-2 border-white">
        <button 
          onClick={() => setActivePopup(null)}
          className="absolute top-2 right-3 text-3xl font-light text-text-muted hover:text-red-500 transition-colors leading-none"
        >
          &times;
        </button>

        {/* Judul Dinamis berdasarkan data */}
        <h2 className="text-lg font-bold text-primary border-b-2 border-bg pb-2 mb-4 pr-6">
          {content.title}
        </h2>
        
        {/* ========================================== */}
        {/* PEMBARUAN: Area Animasi Video              */}
        {/* ========================================== */}
        <div className="w-full h-[160px] bg-slate-100 rounded-lg flex items-center justify-center overflow-hidden border border-slate-200 shadow-inner">
          {content.popupAnimation ? (
            <video 
              src={content.popupAnimation}
              autoPlay
              loop
              muted
              playsInline // Penting agar video tidak otomatis full-screen di HP (iOS/Safari)
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-text-muted text-sm text-center font-semibold">
              Animasi Belum Tersedia
            </span>
          )}
        </div>
        
        <p className="mt-4 text-sm text-text leading-relaxed font-medium">
          {content.description}
        </p>
      </div>
    </div>
  );
}