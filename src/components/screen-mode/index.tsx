import { ScreenMode, useScreenModeStore } from "@/stores/use-screen-mode"
import { Sun, Moon } from 'lucide-react';

export default function ScreenModeToggle() {
  const { mode, setMode } = useScreenModeStore()
  return (
    <div className='fixed md:top-2 md:right-2 w-fit bottom-2 right-2'>
      {mode === ScreenMode.LIGHT ? (
        <button
          type="button"
          className="size-[60px] rounded-lg bg-white/20 flex items-center justify-center group shadow"
          onClick={() => setMode(ScreenMode.DARK)}
        >
          <Moon color="white" strokeWidth={2} className="size-[28px] group-hover:scale-125 transition-all" />
        </button>
      ) : (
        <button
          type="submit"
          className="size-[60px] rounded-lg bg-white/20 flex items-center justify-center group shadow"
          onClick={() => setMode(ScreenMode.LIGHT)}
        >
          <Sun color="white" strokeWidth={2} className="size-[28px] group-hover:scale-125 transition-all" />
        </button>
      )}

    </div>
  )
}
