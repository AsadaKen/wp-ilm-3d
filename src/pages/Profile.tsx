import { Users, GraduationCap, Code, PenTool } from 'lucide-react';

export default function Profile() {
  // Data tim pengembang
  const teamMembers = [
    {
      name: 'Anugrah Syahru Ramadhan',
      role: 'Lead Developer & 3D Interactive Designer',
      icon: <Code size={20} />,
      major: 'Teknik Informatika'
    },
    {
      name: 'Fuji Pangestu',
      role: 'Research & Content Specialist',
      icon: <PenTool size={20} />,
      major: 'Teknologi Bandar Udara'
    },
  ];

  return (
    <div className="w-full h-full bg-bg overflow-y-auto px-6 py-8 pb-32 font-sans text-slate-800">
      <div className="max-w-2xl mx-auto">
        
        {/* Header Halaman */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-white">
            <Users size={36} className="text-white" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Tim Pengembang</h1>
          <p className="text-slate-700 font-medium text-sm">
            Riset Media Pembelajaran Berbasis 3D Interaktif
          </p>
        </div>

        {/* Kartu Afiliasi Universitas */}
        <div className="bg-surface rounded-2xl p-6 shadow-sm border-2 border-white mb-8 flex items-center gap-5 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-[#5A73FF]/10 rounded-xl flex items-center justify-center shrink-0">
            <GraduationCap size={28} className="text-accent" />
          </div>
          <div>
            <h2 className="text-[17px] font-extrabold text-slate-900 leading-tight mb-1">
              POLITEKNIK PENERBANGAN MAKASSAR
            </h2>
            <p className="text-sm text-slate-600 font-medium">Program Studi Teknologi Bandar Udara</p>
          </div>
        </div>

        {/* Daftar Anggota Tim */}
        <h3 className="text-lg font-black text-slate-900 mb-4 border-b-[3px] border-slate-300/50 pb-2 inline-block">
          Anggota Tim
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-5 shadow-sm border-2 border-slate-100 flex items-start gap-4 hover:border-accent/30 hover:shadow-md transition-all group"
            >
              <div className="w-11 h-11 bg-slate-100 rounded-full flex items-center justify-center shrink-0 text-slate-500 group-hover:bg-accent group-hover:text-white transition-colors">
                {member.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-[15px]">{member.name}</h4>
                <p className="text-xs font-bold text-accent mb-1">{member.role}</p>
                <p className="text-xs text-slate-500 font-medium">{member.major}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}