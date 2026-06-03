import Scene3D from '../components/three/Scene3D';
import Toggle3D2D from '../components/ui/Toggle3D2D';
import ComponentPopup from '../components/ui/ComponentPopup';
import Video2DMode from '../components/ui/Video2DMode'; // Import komponen baru
import AudioController from '../components/ui/AudioController';
import { useAppStore } from '../store/appStore';
import {
  MousePointer2,
  Move3D,
  ZoomIn,
} from "lucide-react";

export default function Home() {
  const { is3DMode } = useAppStore();

  return (
    <div className="w-full h-full relative overflow-hidden bg-bg">
      {/* Elemen UI Global yang selalu di atas */}
      <Toggle3D2D />
      <AudioController />
      <ComponentPopup />

      {/* Lapisan Video 2D (Muncul saat toggle ke 2D) */}
      <Video2DMode />

      {/* ========================================== */}
      {/* PANDUAN NAVIGASI 3D (Hanya muncul di 3D)   */}
      {/* ========================================== */}
<div
  className={`absolute left-4 top-1/2 -translate-y-1/2 z-20
  transition-all duration-300
  ${
    is3DMode
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-2"
  }`}
>
  <div
    className="
      w-44
      rounded-xl
      border border-white/10
      bg-black/15
      backdrop-blur-md
      shadow-lg
      overflow-hidden
      pointer-events-none
    "
  >
    {/* Header */}
    <div className="px-3 py-2 border-b border-white/10">
      <h3 className="text-[11px] font-semibold text-gray/90 uppercase tracking-wide">
        Kontrol 3D
      </h3>
    </div>

    {/* Controls */}
    <div className="p-2 space-y-1">
      <div className="flex items-center gap-2 rounded-lg px-2 py-1.5">
        <MousePointer2
          size={14}
          className="text-gray/70 flex-shrink-0"
        />
        <span className="text-[11px] text-gray/80">
          Drag untuk memutar
        </span>
      </div>

      <div className="flex items-center gap-2 rounded-lg px-2 py-1.5">
        <ZoomIn
          size={14}
          className="text-gray/70 flex-shrink-0"
        />
        <span className="text-[11px] text-gray/80">
          Scroll untuk zoom
        </span>
      </div>

      <div className="flex items-center gap-2 rounded-lg px-2 py-1.5">
        <Move3D
          size={14}
          className="text-gray/70 flex-shrink-0"
        />
        <span className="text-[11px] text-gray/80">
          Klik kanan geser
        </span>
      </div>
    </div>
  </div>
</div>

      {/* Lapisan Kanvas 3D (Disembunyikan transparansinya saat 2D) */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${
          is3DMode ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <Scene3D />
      </div>
    </div>
  );
}