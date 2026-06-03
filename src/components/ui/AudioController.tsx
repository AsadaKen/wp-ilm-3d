import { useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Howl } from 'howler';
import { useAppStore } from '../../store/appStore';

export default function AudioController() {
  const { isAudioMuted, toggleAudio, activePopup } = useAppStore();
  const soundRef = useRef<Howl | null>(null);

  // Inisialisasi Audio saat komponen dimuat
  useEffect(() => {
    soundRef.current = new Howl({
      src: ['/audio/narasi-utama.mp3'], // Ganti dengan path audio Anda
      loop: true,
      volume: 0, // Mulai dari 0, lalu kita fade in
      autoplay: true,
      html5: true, // Penting untuk file besar agar distreaming
    });

    // Membersihkan memori saat pengguna pindah halaman
    return () => {
      soundRef.current?.unload();
    };
  }, []);

  // Logika Mute/Unmute & Efek Ducking (Volume turun saat popup muncul)
  useEffect(() => {
    if (!soundRef.current) return;

    const sound = soundRef.current;

    if (isAudioMuted) {
      sound.fade(sound.volume(), 0, 500); // Fade out perlahan jika di-mute
    } else {
      // Jika popup terbuka, volume 20%, jika tertutup volume 100%
      const targetVolume = activePopup ? 0.2 : 1.0;
      sound.fade(sound.volume(), targetVolume, 500); 
    }
  }, [isAudioMuted, activePopup]);

  return (
    <button
      onClick={toggleAudio}
      className="fixed top-6 right-6 z-50 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg border-2 border-white flex items-center justify-center hover:scale-105 hover:bg-white transition-all text-primary"
      title={isAudioMuted ? 'Nyalakan Audio' : 'Matikan Audio'}
    >
      {isAudioMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
    </button>
  );
}