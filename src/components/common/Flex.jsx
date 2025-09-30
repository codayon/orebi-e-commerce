import cn from "@/utils/cn";

export default function Flex({ onClick, children, className = "" }) {
  return (
    <div
      onClick={onClick}
      className={cn("flex items-center", className)}
    >
      {children}
    </div>
  );
}
