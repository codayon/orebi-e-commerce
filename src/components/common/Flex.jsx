import { twMerge } from "tailwind-merge";

const Flex = ({ onClick, children, className = "" }) => {
  return (
    <div
      onClick={onClick}
      className={twMerge("flex items-center", className)}
    >
      {children}
    </div>
  );
};

export default Flex;
