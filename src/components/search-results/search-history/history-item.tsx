import { ISearchHistory } from "@/stores/use-search-history";
import { Search, Trash } from "lucide-react";

type HistoryItemProps = {
  history: ISearchHistory
  handleDelete: (_historyId: number) => void
  handleClickSearch: (history: ISearchHistory) => void
}

export default function HistoryItem({ history, handleDelete, handleClickSearch }: HistoryItemProps) {
  return (
    <div className="bg-white/50 dark:bg-dark/50 w-full rounded-[16px] relative p-5 shadow flex justify-between items-center">
      <div className="">
        <h3 className="text-gray-900 text-base dark:text-white">{`${history.city}, ${history.country}`}</h3>
        <p className="block md:hidden text-xs dark:text-gray-400">{history.timestamp}</p>
      </div>
      <div className="flex items-center text-base text-gray-600 gap-x-3 dark:text-white">
        <p className="hidden md:block ">{history.timestamp}</p>
        <button
          type="button"
          className="size-[34px] rounded-full bg-white flex items-center justify-center group shadow dark:bg-transparent dark:border dark:border-gray-400"
          onClick={() => handleClickSearch(history)}
        >
          <Search strokeWidth={2} className="size-4 group-hover:scale-125 transition-all dark:text-gray-400 text-gray-400" />
        </button>
        <button
          type="button"
          className="size-[34px] rounded-full bg-white flex items-center justify-center group shadow dark:bg-transparent dark:border dark:border-gray-400"
          onClick={() => handleDelete(history.id)}
        >
          <Trash strokeWidth={2} className="size-4 group-hover:scale-125 transition-all dark:text-gray-400 text-gray-400" />
        </button>
      </div>
    </div>
  )
}
