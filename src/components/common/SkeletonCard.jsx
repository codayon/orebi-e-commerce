const SkeletonCard = () => {
  return (
    <div className="bg-white shadow border flex flex-col w-[288px] md:w-[340px] animate-pulse">
      <div className="bg-gray-300 aspect-[1/1]"></div>
      <div className="m-2 space-y-2">
        <div className="bg-gray-200 py-[18px] w-full animate-pulse"></div>
        <div className="bg-gray-200 py-[26px] w-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
