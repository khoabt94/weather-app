
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface ISearchHistory {
  city: string
  country: string
  timestamp: string
  id: number
}

interface ISearchHistoryStore {
  histories: ISearchHistory[]
  setHistories: (_histories: ISearchHistory[]) => void
  pushNewHistory: (_history: ISearchHistory) => void
  deleteHistory: (_historyId: number) => void
}


export const useSearchHistoryStore = create<ISearchHistoryStore>()(
  persist((set, get) => ({
    histories: [],
    setHistories: (histories: ISearchHistory[]) => set({ histories }),
    pushNewHistory: (history: ISearchHistory) => {
      const newHistories = [...get().histories];
      if (!(newHistories.find((e) => e.id === history.id))) {
        newHistories.push(history);
        set({ histories: newHistories });
      }
    },
    deleteHistory: (historyId: number) => {
      const newHistories = [...get().histories].filter((e) => e.id !== historyId);
      set({ histories: newHistories });
    },
  }), {
    name: 'search-history',
    storage: createJSONStorage(() => localStorage),
    partialize: (state: ISearchHistoryStore) => ({ histories: state.histories }),
  }),
);
