import { User, GraduationCap, FileText, IdCard } from 'lucide-react';

export default function Profile() {
  return (
    <div className="w-full h-full bg-bg overflow-y-auto px-6 py-12 pb-32 font-sans text-slate-800 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-surface rounded-3xl p-8 md:p-10 shadow-xl border-2 border-white relative overflow-hidden flex flex-col gap-8 md:gap-10">
        
        {/* Dekorasi Aksen Elemen Estetik */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full pointer-events-none" />
        
        {/* BLOCK UTAMA: Split Tampilan Kiri & Kanan */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
          
          {/* SISI KIRI: Placeholder Besar Gambar Profil Keren */}
          <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative group">
            {/* Efek Bayangan dan Rotasi Bingkai */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary rounded-2xl rotate-3 scale-102 group-hover:rotate-6 transition-transform duration-300 shadow-md" />
            
            {/* Wadah Utama Foto */}
            <div className="absolute inset-0 rounded-2xl border-2 border-slate-800 flex flex-col items-center justify-center overflow-hidden shadow-inner bg-slate-50">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-bg flex items-center justify-center text-primary/70 shadow-md border border-white">
                <User size={44} className="md:hidden" />
                <User size={60} className="hidden md:block" />
              </div>
              <span className="text-xs font-bold text-text-muted mt-4 tracking-wider uppercase bg-slate-200/60 px-3 py-1 rounded-full">
                [ Foto Profil ]
              </span>
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
                    {}
                    <span className="text-sm font-mono font-bold text-slate-800">C1022312481</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-xs font-bold text-text-muted uppercase tracking-wider w-28 shrink-0">Program Studi</span>
                  <span className="text-sm font-bold text-accent bg-blue-50 border border-blue-100 px-3 py-0.5 rounded-full w-max">
                    Teknologi Bandar Udara 
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BAGIAN BAWAH: Panel Informasi Almamater Kampus */}
        <div className="border-t border-slate-200 pt-6 mt-2 flex flex-col sm:flex-row items-center gap-4 justify-between bg-slate-50/60 -mx-8 -mb-8 p-6 md:-mx-10 md:-mb-10 rounded-b-3xl">
          <div className="flex items-center gap-4 text-left">
            {/* Placeholder Kecil Logo Kampus */}
            <div className="w-12 h-12 bg-white rounded-xl border border-slate-300 shadow-sm flex items-center justify-center p-1 shrink-0">
              <GraduationCap size={26} className="text-primary" />
            </div>
            
            {/* Nama Lengkap Kampus */}
            <div>
              <h4 className="font-black text-slate-900 text-sm leading-tight">
                Politeknik Penerbangan Makassar
              </h4>
              <p className="text-xs font-medium text-text-muted">Afiliasi Institusi Riset & Akademik</p>
            </div>
          </div>
          
          <div className="text-[10px] font-bold text-text-muted tracking-widest uppercase bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-200 whitespace-nowrap">
            2026 © Riset Media Pembelajaran
          </div>
        </div>

      </div>
    </div>
  );
}

/* =================================================================================
KODE CADANGAN UNTUK MENAMPILKAN KEMBALI ANGGOTA TIM LAIN (JIKA DIKEMUDIAN HARI BUTUH):
=================================================================================

Jika di masa mendatang dosen pembimbing atau tim meminta nama anggota lain untuk 
ditampilkan kembali di bawah kartu utama, Anda cukup menyalin komponen JSX di bawah 
ini dan meletakkannya tepat di bawah penutup kontainer utama (di atas tag </div> paling luar):

<div className="w-full max-w-4xl mt-6 bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-200/60 shadow-sm text-left">
  <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Kontributor Riset:</h4>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-bold text-slate-600">
    <div className="bg-white/80 p-2.5 rounded-lg border border-slate-200">Putri (Content Specialist)</div>
    <div className="bg-white/80 p-2.5 rounded-lg border border-slate-200">Nursindi (UI/UX Designer)</div>
    <div className="bg-white/80 p-2.5 rounded-lg border border-slate-200">Gabriela (Quality Tester)</div>
  </div>
</div>
*/