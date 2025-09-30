import cn from "@/utils/cn";

const Flex = ({ onClick, children, className = "" }) => {
  return (
    <div
      onClick={onClick}
      className={cn("flex items-center", className)}
    >
      {children}
    </div>
  );
};

export default Flex;
