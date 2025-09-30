import cn from "@/utils/cn";

export default function Button({ className = "", onClick, label = "" }) {
  return (
    <div
      className={cn(
        "text-white bg-onyx border-onyx border-2 text-sm text-center py-3.5 px-16 font-bold cursor-pointer select-none",
        className
      )}
      onClick={onClick}
    >
      {label}
    </div>
  );
}
