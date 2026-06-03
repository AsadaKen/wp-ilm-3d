import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

export default function Layout() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col">
      {/* Konten Halaman: Tinggi layar dikurangi tinggi Bottom Nav (64px) */}
      <main className="flex-1 w-full h-[calc(100vh-64px)] overflow-y-auto">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}