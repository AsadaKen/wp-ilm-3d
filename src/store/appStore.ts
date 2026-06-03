import { create } from 'zustand';

interface AppState {
  is3DMode: boolean;
  toggleMode: () => void;
  activePopup: string | null;
  setActivePopup: (id: string | null) => void;
  // --- STATE BARU UNTUK AUDIO ---
  isAudioMuted: boolean;
  toggleAudio: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  is3DMode: true, // Default saat aplikasi dibuka adalah Mode 3D
  toggleMode: () => set((state) => ({ 
    is3DMode: !state.is3DMode, 
    activePopup: null // Otomatis tutup popup jika mode diubah
  })),
  activePopup: null,
  setActivePopup: (id) => set({ activePopup: id }),
  // --- FUNGSI BARU UNTUK AUDIO ---
  isAudioMuted: true, // Default dibisukan (Muted) agar browser tidak memblokir autoplay
  toggleAudio: () => set((state) => ({ isAudioMuted: !state.isAudioMuted })),
}));