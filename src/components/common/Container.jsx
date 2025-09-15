import { twMerge } from "tailwind-merge";

const Container = ({ className, children }) => {
  return (
    <div className={twMerge("max-w-[288px] sm:max-w-sm md:max-w-[1600px] m-auto", className)}>{children}</div>
  );
};

export default Container;
