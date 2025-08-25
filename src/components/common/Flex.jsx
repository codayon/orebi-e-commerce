import { twMerge } from "tailwind-merge";

const Flex = ({ children, className }) => {
  return (
    <div className={twMerge("flex items-center", className)}>{children}</div>
  );
};

export default Flex;
