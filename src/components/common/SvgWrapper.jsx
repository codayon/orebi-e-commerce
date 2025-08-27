import { twMerge } from "tailwind-merge";

const SvgWrapper = ({ onClick, className, children }) => {
  return (
    <div onClick={onClick} className={twMerge("cursor-pointer", className)}>
      {children}
    </div>
  );
};

export default SvgWrapper;
