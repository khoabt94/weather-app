import { ISearchHistory, useSearchHistoryStore } from '@/stores/use-search-history'
import HistoryItem from './history-item'
import { useHandleRouter } from '@/hooks/use-handle-router'

export default function SearchHistory() {
  const { histories, deleteHistory } = useSearchHistoryStore()
  const { pushQuery } = useHandleRouter()
  const handleClickSearch = (history: ISearchHistory) => {
    pushQuery({ city: history.city })
  }


  return (
    <section className="bg-white/15 dark:bg-dark/15 w-full mt-6 rounded-[24px] relative px-5 py-6 shadow">
      <h3 className="text-gray-900 text-base dark:text-white">Search History</h3>
      {histories.length ? (
        <div className="space-y-4 mt-4 h-[300px] overflow-y-auto pr-2">
          {histories.map((history) => (
            <HistoryItem
              history={history}
              key={history.id}
              handleDelete={deleteHistory}
              handleClickSearch={handleClickSearch}
            />
          ))}
        </div>
      ) : (<p className='italic text-sm text-center mt-4'>Try to search new one!</p>)}

    </section>
  )
}
