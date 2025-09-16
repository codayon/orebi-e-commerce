import { twMerge } from "tailwind-merge";

const Button = ({ className = "", onClick, label = "" }) => {
  return (
    <div
      className={twMerge(
        "text-white bg-onyx border-onyx border-2 text-sm py-3.5 px-16 font-bold cursor-pointer select-none",
        className
      )}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Button;
