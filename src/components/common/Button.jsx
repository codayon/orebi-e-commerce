import { twMerge } from "tailwind-merge";

const Button = ({ className = "", onClick, label = "" }) => {
  return (
    <div
      className={twMerge(
        "text-white bg-onyx border-onyx border-2 py-4 px-12 font-bold cursor-pointer select-none",
        className
      )}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Button;
