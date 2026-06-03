import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Parts from './pages/Parts';
import Profile from './pages/Profile';
import Detail from './pages/Detail';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Rute DENGAN navigasi bawah (Home, Parts, Profil) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="parts" element={<Parts />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Rute TANPA navigasi bawah (Halaman Detail dipindah ke luar) */}
        <Route path="/detail/:id" element={<Detail />} />
        
        {/* Jika pengguna mengetik URL ngawur */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;