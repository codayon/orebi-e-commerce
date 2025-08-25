import { twMerge } from "tailwind-merge";

const SvgWrapper = ({ className, children }) => {
  return <div className={twMerge("cursor-pointer", className)}>{children}</div>;
};

export default SvgWrapper;
