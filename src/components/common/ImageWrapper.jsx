import cn from "@/utils/cn";

export default function ImageWrapper({
  src = "",
  alt = "",
  className = "",
  imgClassName = "",
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-fog flex items-center justify-center select-none",
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-500",
          imgClassName
        )}
      />
    </div>
  );
}
