
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export enum ScreenMode {
  LIGHT = 'LIGHT',
  DARK = 'DARK'
}


interface IScreenModeStore {
  mode: ScreenMode
  setMode: (_mode: ScreenMode) => void
}


export const useScreenModeStore = create<IScreenModeStore>()(
  persist((set) => ({
    mode: ScreenMode.LIGHT,
    setMode: (mode: ScreenMode) => {
      set({ mode })
      if (mode === ScreenMode.LIGHT) {
        document.body.classList.remove("dark");
      } else {
        document.body.classList.add("dark");
      }
    }
  }), {
    name: 'screen-mode',
    storage: createJSONStorage(() => localStorage),
    partialize: (state: IScreenModeStore) => ({ mode: state.mode }),
  }),
);
