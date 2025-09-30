import cn from "@/utils/cn";

const SvgWrapper = ({ onClick, className = "", children }) => {
  return (
    <div
      onClick={onClick}
      className={cn("cursor-pointer", className)}
    >
      {children}
    </div>
  );
};

export default SvgWrapper;
