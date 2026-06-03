import { useNavigate } from 'react-router-dom';
import { componentsData } from '../data/componentsData';

export default function Parts() {
  const navigate = useNavigate();

  // Mengubah objek data menjadi array agar mudah di-looping (di-map)
  const partsList = Object.entries(componentsData).map(([id, data]) => ({
    id,
    ...data,
  }))
  .filter(part => !part.hideFromCatalog);;

  return (
    <div className="w-full h-full bg-bg overflow-y-auto p-6 pb-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-extrabold text-primary mb-2">Katalog Komponen</h1>
        <p className="text-text-muted mb-6 text-sm">
          Pilih komponen di bawah ini untuk mempelajari bentuk 3D dan cara kerjanya secara mendalam.
        </p>

        {/* Grid 2x2 untuk Desktop, 1 Kolom untuk Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {partsList.map((part) => (
            <div
              key={part.id}
              onClick={() => navigate(`/detail/${part.id}`)}
              className="bg-surface rounded-xl p-4 shadow-sm border border-white/50 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col group"
            >
              {/* GAMBAR THUMBNAIL KOMPONEN */}
              <div className="w-full aspect-video bg-bg rounded-lg mb-4 flex items-center justify-center overflow-hidden border-2 border-transparent group-hover:border-accent/50 transition-colors">
                <img 
                  src={part.thumbnail} 
                  alt={part.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Teks Informasi */}
              <h2 className="text-[15px] font-bold text-text mb-1 group-hover:text-accent transition-colors">
                {part.title}
              </h2>
              <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                {part.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}