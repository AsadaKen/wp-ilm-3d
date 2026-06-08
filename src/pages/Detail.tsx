import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { ArrowLeft, Play } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html, ContactShadows } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { componentsData } from '../data/componentsData';
import ModelViewer from '../components/three/ModelViewer';
import VideoPlayerModal from '../components/ui/VideoPlayerModal';

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showGuide, setShowGuide] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const content = id ? componentsData[id] : null;

  if (!content) {
    return <Navigate to="/parts" replace />;
  }

  return (
    // PERBAIKAN 1: Mengunci container utama seukuran layar penuh (w-screen h-screen)
    <div className="w-screen h-screen flex bg-bg overflow-hidden relative font-sans text-slate-800">
      
      {/* ========================================== */}
      {/* KOLOM KIRI: Informasi (Terkunci & Scrollable) */}
      {/* ========================================== */}
      <div className="w-[35%] min-w-[320px] max-w-[450px] flex flex-col h-full border-r-[8px] border-slate-800 shrink-0 bg-bg">
        
        {/* Header Fix */}
        <div className="px-8 pt-8 pb-4 shrink-0">
          <button 
            onClick={() => navigate('/parts')}
            className="flex items-center gap-2 bg-[#E2E8F0] border-2 border-slate-300 px-5 py-2 rounded-full shadow-sm hover:bg-white transition-colors text-slate-800 font-bold text-sm mb-6"
          >
            <ArrowLeft size={18} />
            Komponen
          </button>
          <h3 className="font-extrabold text-slate-900 text-lg">Detail Model</h3>
        </div>

        {/* Area Teks (Scroll hanya terjadi di dalam div ini) */}
        <div className="flex-1 overflow-y-auto px-8 pb-12">
          
          <div className="border-l-[6px] border-accent pl-4 mb-4">
            <h1 className="text-4xl font-black text-slate-900 leading-tight">
              {content.title}
            </h1>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed font-medium mb-8">
            {content.description}
          </p>

          <div className="mb-8">
            <div className="border-l-[6px] border-accent pl-4 mb-3">
              <h2 className="text-2xl font-black text-slate-900">Fungsi Utama</h2>
            </div>
            <p className="text-sm text-slate-700 font-medium mb-2">Berikut fungsinya:</p>
            <ul className="space-y-2">
              {content.functions.map((func, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-800 font-medium">
                  <span className="w-1.5 h-1.5 bg-slate-800 rounded-full mt-1.5 shrink-0"></span>
                  <span className="leading-relaxed">{func}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="border-l-[6px] border-accent pl-4 mb-3">
              <h2 className="text-2xl font-black text-slate-900">Cara Kerja</h2>
            </div>
            <p className="text-sm text-slate-700 font-medium mb-2">Cara Kerjanya:</p>
            <p className="text-sm text-slate-800 leading-relaxed font-medium">
              {content.workingPrinciple.map((line: string, index: number) => (
                <p key={index}>{line}</p>
              ))}
            </p>
          </div>

        </div>
      </div>

      {/* ========================================== */}
      {/* KOLOM KANAN: Kanvas 3D & Video Placeholders  */}
      {/* ========================================== */}
      <div className="flex-1 flex flex-col h-full relative overflow-hidden">
        
        {/* Tombol Panduan (!) */}
        <div className="absolute top-6 right-6 z-20 flex flex-col items-end">
          <button 
            onMouseEnter={() => setShowGuide(true)}
            onMouseLeave={() => setShowGuide(false)}
            className="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:scale-105 transition-all text-xl font-bold"
          >
            !
          </button>
          
          <div className={`mt-2 bg-white p-3 rounded-lg shadow-xl border border-slate-200 transition-all duration-300 origin-top-right ${showGuide ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
            <p className="text-xs font-bold text-slate-800 mb-2 border-b pb-1">Panduan 3D:</p>
            <ul className="text-xs text-slate-600 space-y-1.5 font-medium whitespace-nowrap">
              <li>👆 Drag: Putar Bebas</li>
              <li>✌️ Scroll: Zoom In/Out</li>
              <li>🖐️ Klik Kanan: Geser Posisi</li>
            </ul>
          </div>
        </div>

        {/* PERBAIKAN 2: Area 3D diberi properti min-h-0 agar tidak membengkak */}
        <div className="flex-1 w-full relative cursor-grab active:cursor-grabbing min-h-0">
          <Canvas camera={{ fov: 45, position: [8, 5, 8] }} className="outline-none w-full h-full">
            <ambientLight intensity={0.9} />
            <directionalLight position={[10, 20, 10]} intensity={1.2} color="#ffffff" />
            <Environment preset="city" />
            
            <Suspense fallback={<Html center className="font-bold text-slate-600">Memuat Model...</Html>}>
              <ModelViewer modelPath={content.modelPath} />
              <ContactShadows position={[0, -0.05, 0]} opacity={0.65} scale={15} blur={2} color="#0F172A" />
            </Suspense>

            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          </Canvas>
        </div>

        {/* Area Video Placeholders (Bawah) */}
        <div className="h-[140px] w-full flex items-center justify-center gap-8 shrink-0 pb-6 bg-bg">
          
          {/* Mapping otomatis dari data komponen */}
          {content.videos.map((video, index) => (
            <div 
              key={index}
              onClick={() => setActiveVideo(video.url)} // <-- URL video spesifik
              className="relative w-[180px] h-[90px] rounded-2xl shadow-md cursor-pointer group overflow-hidden border-2 border-white/50 hover:border-accent hover:scale-105 transition-all duration-300"
            >
              <img 
                src={video.cover} // <-- Thumbnail video spesifik
                alt={`Video ${index + 1}`} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center pl-1 backdrop-blur-sm bg-white/20 group-hover:bg-accent group-hover:border-accent transition-all duration-300 shadow-lg">
                  <Play fill="white" className="text-white w-4 h-4" />
                </div>
              </div>
            </div>
          ))}

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