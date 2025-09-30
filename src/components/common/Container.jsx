import cn from "@/utils/cn";

export default function Container({ className = "", children }) {
  return (
    <div
      className={cn(
        "max-w-[288px] sm:max-w-sm md:max-w-[1600px] m-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
