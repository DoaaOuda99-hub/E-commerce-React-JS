import Skeleton from "./Skeleton"
const SkeletonProduct = () => {
  return (
   <div className="skeleton-wrapper my-4">
    <Skeleton type="thumbnail" />
    <Skeleton type="text-lg" />
    <Skeleton type="text-md" />
    <Skeleton type="text-sm" />
    <div className="shimmer-wrapper">
    <div className="shimmer"></div>
    </div>
   </div>
  )
}
export default SkeletonProduct;