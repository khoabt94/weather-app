import Skeleton from "../skeleton";


export default function SkeletonSearchResults() {
  return (
    <>
      <div className="">
        <h3 className="text-gray-900 text-base">Today's Weather</h3>
        <Skeleton className=" h-[60px] w-[150px] rounded-lg my-2" />
        <div className="flex items-center text-gray-900 text-base gap-x-3">

          <h3 className="flex items-center gap-x-1">
            H:  <Skeleton className=" h-5 w-8 rounded-sm inline-block" />
          </h3>

          <h3 className="flex items-center gap-x-1">
            L:  <Skeleton className=" h-5 w-8 rounded-sm inline-block" />
          </h3>
        </div>
        <div className="flex items-center justify-between mt-2 text-base text-gray-600">
          <Skeleton className=" h-5 w-[100px] rounded-lg" />
          <Skeleton className=" h-5 w-[100px] rounded-lg" />
          <Skeleton className=" h-5 w-[100px] rounded-lg" />
          <Skeleton className=" h-5 w-[100px] rounded-lg" />
        </div>
      </div>
    </>
  )
}
