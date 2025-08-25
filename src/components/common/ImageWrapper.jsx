import { twMerge } from "tailwind-merge";

const ImageWrapper = ({ src, alt, className, imgClassName }) => {
  return (
    <div className={twMerge("overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        className={twMerge("w-full h-full", imgClassName)}
      />
    </div>
  );
};

export default ImageWrapper;
