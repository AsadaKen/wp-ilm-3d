import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, Box, Bookmark, Lightbulb, Play, 
  MousePointer2, LayoutGrid, RefreshCw, Droplet, Zap, Activity
} from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html, ContactShadows } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { componentsData } from '../data/componentsData';
import ModelViewer from '../components/three/ModelViewer';
import VideoPlayerModal from '../components/ui/VideoPlayerModal';

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'default' | 'exploded'>('default');

  const content = id ? componentsData[id] : null;

  if (!content) {
    return <Navigate to="/parts" replace />;
  }

  const hasExplodedView = id === 'sentrifugal' || id === 'submersible';

  // Array icon untuk fungsi utama
  const functionIcons = [
    <Droplet className="text-blue-500" size={16} />,
    <Activity className="text-blue-500" size={16} />,
    <LayoutGrid className="text-blue-500" size={16} />,
    <Zap className="text-blue-500" size={16} />
  ];

  return (
    // Skala gap dan padding dikurangi (gap-4, p-3 md:p-4)
    <div className="w-screen h-screen flex bg-slate-50 overflow-hidden font-sans text-slate-800 p-3 md:p-4 gap-4">
      
      {/* ========================================== */}
      {/* KOLOM KIRI: Informasi (Lebar Dikurangi)    */}
      {/* ========================================== */}
      <div className="w-[28%] min-w-[300px] max-w-[380px] h-full flex flex-col shrink-0 overflow-y-auto pr-2 pb-6 custom-scrollbar">
        
        {/* Tombol Back */}
        <button 
          onClick={() => navigate('/parts')}
          className="flex items-center justify-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-lg shadow-sm hover:shadow-md hover:border-blue-300 transition-all text-blue-600 font-bold text-xs mb-5 w-max"
        >
          <ArrowLeft size={16} />
          Kembali ke Komponen
        </button>

        {/* Tag Detail Model */}
        <div className="flex items-center gap-1.5 text-blue-600 font-bold text-xs mb-3">
          <Box size={16} />
          <span>Detail Model</span>
        </div>

        {/* Judul (Tanpa tombol bookmark) */}
        <div className="border-l-[4px] border-blue-600 pl-3 mb-3">
          <h1 className="text-2xl font-black text-slate-900 leading-tight">
            {content.title}
          </h1>
        </div>

        {/* Deskripsi (Teks lebih kecil) */}
        <p className="text-xs text-slate-600 leading-relaxed font-medium mb-6">
          {content.description}
        </p>

        {/* Fungsi Utama Header */}
        <div className="flex items-center gap-1.5 mb-3">
          <Bookmark size={16} className="text-blue-600 fill-blue-600" />
          <h2 className="text-lg font-bold text-slate-900">Fungsi Utama</h2>
        </div>

        {/* List Fungsi (Card Style lebih rapat) */}
        <div className="flex flex-col gap-2">
          {content.functions.map((func, index) => (
            <div key={index} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-start gap-3 hover:border-blue-200 transition-colors">
              <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                {functionIcons[index % functionIcons.length]}
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed pt-0.5">
                {func}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* ========================================== */}
      {/* KOLOM KANAN: Visual & Multimedia           */}
      {/* ========================================== */}
      <div className="flex-1 h-full flex flex-col gap-3 overflow-hidden min-w-0">
        
        {/* BARIS ATAS: Info Cards */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Card Tipe */}
          <div className="bg-white px-3 py-2 rounded-xl shadow-sm border border-slate-100 flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
              <RefreshCw size={12} />
            </div>
            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Tipe</p>
              {/* Memanggil data type */}
              <p className="text-xs font-bold text-slate-800">{content.type || '-'}</p>
            </div>
          </div>

          {/* Card Sumber Daya */}
          <div className="bg-white px-3 py-2 rounded-xl shadow-sm border border-slate-100 flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
              <Zap size={12} />
            </div>
            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Sumber Daya</p>
              {/* Memanggil data powerSource */}
              <p className="text-xs font-bold text-slate-800">{content.powerSource || '-'}</p>
            </div>
          </div>

          {/* Card Aplikasi Umum */}
          <div className="bg-white px-3 py-2 rounded-xl shadow-sm border border-slate-100 flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
              <LayoutGrid size={12} />
            </div>
            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Aplikasi Umum</p>
              {/* Memanggil data application */}
              <p className="text-xs font-bold text-slate-800 line-clamp-1">{content.application || '-'}</p>
            </div>
          </div>
        </div>

        {/* AREA TENGAH: Kanvas 3D */}
        <div className="flex-1 w-full bg-[#F1F5F9] rounded-2xl relative overflow-hidden border border-slate-200 shadow-inner">
          
          {/* Overlay UI 3D Kiri Atas (Panduan Mouse) */}
          <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-md px-3 py-2 rounded-xl shadow-sm border border-white flex items-center gap-3">
            <MousePointer2 size={18} className="text-slate-600" />
            <div className="text-[9px] font-bold text-slate-600 space-y-0.5">
              <p>Drag untuk Rotasi</p>
              <p>Scroll untuk Zoom</p>
              <p>Klik untuk Fokus</p>
            </div>
          </div>

          {/* Overlay UI 3D Kanan Tengah (Tombol Penampang Dihapus) */}
          {hasExplodedView && (
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-white/90 backdrop-blur-md rounded-xl shadow-sm border border-white flex flex-col p-1.5 gap-1.5">
              <button 
                onClick={() => setViewMode('exploded')}
                className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors gap-1 ${
                  viewMode === 'exploded' ? 'bg-blue-50 text-blue-600' : 'hover:bg-slate-50 text-slate-600'
                }`}
              >
                <Box size={18} />
                <span className="text-[9px] font-bold whitespace-nowrap">Exploded View</span>
              </button>
              <div className="w-6 h-px bg-slate-200 mx-auto"></div>
              <button 
                onClick={() => setViewMode('default')}
                className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors gap-1 ${
                  viewMode === 'default' ? 'bg-blue-50 text-blue-600' : 'hover:bg-slate-50 text-slate-600'
                }`}
              >
                <RefreshCw size={18} />
                <span className="text-[9px] font-bold">Default</span>
              </button>
            </div>
          )}

          {/* Canvas 3D Asli */}
          <Canvas camera={{ fov: 45, position: [8, 5, 8] }} className="outline-none cursor-grab active:cursor-grabbing w-full h-full">
            <ambientLight intensity={1.2} />
            <directionalLight position={[10, 20, 10]} intensity={1.5} color="#ffffff" />
            <Environment preset="city" />
            <Suspense fallback={<Html center className="text-sm font-bold text-slate-500">Memuat...</Html>}>
              <ModelViewer modelPath={content.modelPath} viewMode={viewMode} />
              <ContactShadows position={[0, -0.05, 0]} opacity={0.4} scale={15} blur={2} color="#000000" />
            </Suspense>
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          </Canvas>
        </div>

        {/* BARIS BAWAH: Video & Trivia (Tinggi Dikurangi) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-[130px] shrink-0">
          
          {/* Mapping Video */}
          {content.videos?.slice(0, 2).map((video, index) => (
            <div 
              key={index}
              onClick={() => setActiveVideo(video.url)}
              className="relative bg-slate-900 rounded-xl overflow-hidden shadow-sm cursor-pointer group h-full"
            >
              <img 
                src={video.cover} 
                alt={`Video ${index + 1}`} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center pl-1 backdrop-blur-sm bg-black/30 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                  <Play fill="white" className="text-white w-4 h-4" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-3 flex justify-between items-end">
                <div>
                  <p className="text-[9px] font-bold text-white/70 mb-0.5">Video {index + 1}</p>
                  <p className="text-xs font-bold text-white leading-tight">
                    {index === 0 ? "Prinsip Kerja Pompa" : "Perawatan Sistem"}
                  </p>
                </div>                
              </div>
            </div>
          ))}

          {/* Card Tahukah Anda (Teks lebih kecil) */}
          {/* Card Tahukah Anda */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 h-full flex flex-col justify-center">
            <div className="flex items-center gap-1.5 mb-2">
              <Lightbulb size={16} className="text-blue-600" />
              <h3 className="text-xs font-bold text-blue-600">Tahukah Anda?</h3>
            </div>
            {/* Memanggil data trivia */}
            <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-4 overflow-y-auto custom-scrollbar">
              {content.trivia || 'Fakta menarik mengenai komponen ini belum tersedia.'}
            </p>
          </div>

        </div>

      </div>

      {activeVideo && (
        <VideoPlayerModal 
          src={activeVideo} 
          onClose={() => setActiveVideo(null)} 
        />
      )}
    </div>
  );
}