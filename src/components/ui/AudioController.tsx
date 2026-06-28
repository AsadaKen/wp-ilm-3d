import { useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Howl } from 'howler';
import { useAppStore } from '../../store/appStore';

export default function AudioController() {
  const { isAudioMuted, toggleAudio, activePopup, is3DMode } = useAppStore();
  const soundRef = useRef<Howl | null>(null);

  // 1. Inisialisasi Howler
  useEffect(() => {
    soundRef.current = new Howl({
      src: ['/audio/narasi-utama.mp3'], 
      loop: true,
      volume: 0,
      autoplay: false, 
      html5: true,
    });

    return () => {
      soundRef.current?.unload();
    };
  }, []);

  // 2. Logika Mute dan Ducking (Volume naik/turun)
  useEffect(() => {
    if (!soundRef.current) return;
    const sound = soundRef.current;

    if (isAudioMuted) {
      sound.fade(sound.volume(), 0, 300);
    } else {
      const targetVolume = activePopup ? 0.2 : 1.0;
      sound.fade(sound.volume(), targetVolume, 300); 
    }
  }, [isAudioMuted, activePopup]);

  // 3. PERBAIKAN: Hentikan suara saat berpindah ke Mode 3D menggunakan useEffect
  useEffect(() => {
    if (is3DMode && soundRef.current) {
      soundRef.current.pause();
    }
  }, [is3DMode]);

  // =========================================================
  // KUNCI UTAMA: Early return HARUS diletakkan di bawah semua Hooks
  // =========================================================
  if (is3DMode) {
    return null; // Sembunyikan tombol saat berada di Mode 3D
  }

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