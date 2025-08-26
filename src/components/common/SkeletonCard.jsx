const SkeletonCard = () => {
  return (
    <div className="bg-white shadow p-2 flex flex-col min-w-[340px] animate-pulse">
      <div className="aspect-[1/1] bg-gray-300"></div>
      <div className="py-8 space-y-2">
        <div className="h-3 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
