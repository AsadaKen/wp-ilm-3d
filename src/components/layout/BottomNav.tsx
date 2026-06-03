import { NavLink } from 'react-router-dom';
import { Home, Grid, Users } from 'lucide-react';

export default function BottomNav() {
  const navItems = [
    { path: '/', label: 'HOME', icon: <Home size={24} /> },
    { path: '/parts', label: 'PARTS', icon: <Grid size={24} /> },
    { path: '/profile', label: 'PROFIL', icon: <Users size={24} /> },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] h-[64px] bg-surface rounded-2xl shadow-xl border border-white/50 z-50 flex justify-center overflow-hidden">
      <div className="w-full flex">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center justify-center transition-colors duration-200 ${
                isActive ? 'text-accent font-bold' : 'text-text-muted font-normal'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {/* Indikator Garis Aktif */}
                {isActive && <div className="absolute top-0 w-8 h-1 bg-accent rounded-b-full"></div>}
                {item.icon}
                <span className="text-[11px] uppercase mt-1">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}