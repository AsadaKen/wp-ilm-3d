import { useAppStore } from '../../store/appStore';

export default function Toggle3D2D() {
  const { is3DMode, toggleMode } = useAppStore();

  return (
    <div className="fixed top-4 left-4 z-30 flex items-center gap-2 select-none">
      <span className={`text-sm font-bold ${is3DMode ? 'text-primary' : 'text-text-muted'}`}>
        3D
      </span>
      
      <button 
        onClick={toggleMode}
        className={`relative w-[80px] h-[32px] rounded-full p-[2px] transition-colors duration-300 ${
          is3DMode ? 'bg-primary' : 'bg-accent'
        }`}
      >
        <div 
          className={`w-[36px] h-[28px] bg-white rounded-[14px] shadow-md transition-transform duration-300 ease-in-out ${
            is3DMode ? 'translate-x-0' : 'translate-x-[40px]'
          }`}
        />
      </button>

      <span className={`text-sm font-bold ${!is3DMode ? 'text-accent' : 'text-text-muted'}`}>
        2D
      </span>
    </div>
  );
}