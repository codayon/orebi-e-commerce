import { twMerge } from "tailwind-merge";

const ImageWrapper = ({
  src = "",
  alt = "",
  className = "",
  imgClassName = "",
}) => {
  return (
    <div
      className={twMerge(
        "relative overflow-hidden bg-fog flex items-center justify-center select-none",
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className={twMerge(
          "w-full h-full object-cover transition-opacity duration-500",
          imgClassName
        )}
      />
    </div>
  );
};

export default ImageWrapper;
