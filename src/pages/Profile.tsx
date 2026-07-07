import { FileText, IdCard } from 'lucide-react';

export default function Profile() {
  return (
    <div className="w-full h-full bg-bg overflow-y-auto px-6 py-12 pb-32 font-sans text-slate-800 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-surface rounded-3xl p-8 md:p-10 shadow-xl border-2 border-white relative overflow-hidden flex flex-col gap-8 md:gap-10">
        
        {/* Dekorasi Aksen Elemen Estetik */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full pointer-events-none" />
        
        {/* BLOCK UTAMA: Split Tampilan Kiri & Kanan */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
          
          {/* SISI KIRI: Gambar Profil */}
          <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative group">
            {/* Efek Bayangan dan Rotasi Bingkai */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary rounded-2xl rotate-3 scale-102 group-hover:rotate-6 transition-transform duration-300 shadow-md" />
            
            {/* Wadah Utama Foto */}
            <div className="absolute inset-0 rounded-2xl border-2 border-slate-800 flex flex-col items-center justify-center overflow-hidden shadow-inner bg-slate-50">
              {/* GAMBAR PROFIL DIMASUKKAN DI SINI */}
              <img 
                src="/images/covers/foto-profil.JPG" 
                alt="Foto Profil Fuji Pangestu" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* SISI KANAN: Informasi Identitas & Judul Penelitian */}
          <div className="flex-1 w-full text-center md:text-left flex flex-col justify-between py-2">
            <div>
              {/* Label Judul Penelitian */}
              <div className="inline-flex items-center gap-2 bg-primary text-white text-[11px] font-black px-3 py-1 rounded-md mb-3 tracking-wide uppercase">
                <FileText size={12} /> Judul Penelitian
              </div>
              
              {/* Area Judul Project */}
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug mb-6 border-b-2 border-slate-200 pb-4">
                Desain Simulasi Water Pump System Di Politeknik Penerbangan Makassar
              </h2>

              {/* Rincian Baris Identitas */}
              <div className="space-y-4 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-xs font-bold text-text-muted uppercase tracking-wider w-28 shrink-0">Nama Lengkap</span>
                  <span className="text-base font-extrabold text-slate-900">Fuji Pangestu</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-xs font-bold text-text-muted uppercase tracking-wider w-28 shrink-0">NIT</span>
                  <div className="flex items-center gap-2 bg-slate-100 border border-slate-200 px-3 py-0.5 rounded-md w-max">
                    <IdCard size={14} className="text-text-muted" />
                    <span className="text-sm font-mono font-bold text-slate-800">C1022312481</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-xs font-bold text-text-muted uppercase tracking-wider w-28 shrink-0">Program Studi</span>
                  <span className="text-sm font-bold text-accent bg-blue-50 border border-blue-100 px-3 py-0.5 rounded-full w-max">
                    Teknik Bandar Udara 
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 pt-2">
                  <span className="text-xs font-bold text-text-muted uppercase tracking-wider w-28 shrink-0">Pembimbing I</span>
                  <span className="text-sm font-bold text-slate-800">Dr. Ir. Fatmawati Sabur, S.Si.T., M.T.</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-xs font-bold text-text-muted uppercase tracking-wider w-28 shrink-0">Pembimbing II</span>
                  <span className="text-sm font-bold text-slate-800">Andi Fadilah Nugrah S.T., M.M</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BAGIAN BAWAH: Panel Informasi Almamater Kampus */}
        <div className="border-t border-slate-200 pt-6 mt-2 flex flex-col sm:flex-row items-center gap-4 justify-between bg-slate-50/60 -mx-8 -mb-8 p-6 md:-mx-10 md:-mb-10 rounded-b-3xl">
          <div className="flex items-center gap-4 text-left">
            {/* Logo Kampus */}
            <div className="w-12 h-12 bg-white rounded-xl border border-slate-300 shadow-sm flex items-center justify-center p-1 shrink-0 overflow-hidden">
              {/* LOGO KAMPUS DIMASUKKAN DI SINI */}
              <img 
                src="/images/covers/logo-kampus.png" 
                alt="Logo Politeknik Penerbangan Makassar" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Nama Lengkap Kampus */}
            <div>
              <h4 className="font-black text-slate-900 text-sm leading-tight">
                Politeknik Penerbangan Makassar
              </h4>
            </div>
          </div>
          
          <div className="text-[10px] font-bold text-text-muted tracking-widest uppercase bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-200 whitespace-nowrap">
            2026 © Politeknik Penerbangan Makassar
          </div>
        </div>

      </div>
    </div>
  );
}