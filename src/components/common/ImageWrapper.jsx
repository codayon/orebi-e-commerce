import { useState } from "react";
import { twMerge } from "tailwind-merge";

const ImageWrapper = ({ src, alt, className, imgClassName }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={twMerge(
        "relative overflow-hidden bg-gray-200 flex items-center justify-center",
        className
      )}
    >
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-300" />
      )}
      {src && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={twMerge(
            "w-full h-full object-cover transition-opacity duration-500",
            imgClassName,
            loaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </div>
  );
};

export default ImageWrapper;
