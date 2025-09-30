import { FaHeart } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { useDispatch } from "react-redux";

import Flex from "./Flex";
import Button from "./Button";
import ImageWrapper from "./ImageWrapper";
import { addToCart } from "@/features/cartSlice";

const ProductCard = ({ product, className = "" }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className={twMerge("bg-white relative border", className)}>
      <ImageWrapper
        src={product.thumbnail}
        alt={product.title}
        className="aspect-square cursor-pointer"
      />

      <div className="m-2">
        <Flex className="py-2 justify-between gap-4">
          <h3 className="w-4/5 font-bold text-lg truncate cursor-pointer">
            {product.title}
          </h3>
          <p className="text-graphite">${product.price}</p>
        </Flex>
        <Button
          label="Add To Cart"
          className="text-center"
          onClick={handleAddToCart}
        />
      </div>

      <div className="bg-onyx text-white absolute top-4 left-4 px-4 py-2 font-bold">
        {product.discountPercentage > 0
          ? `${Math.round(product.discountPercentage)}%`
          : "New"}
      </div>
      <div className="bg-onyx text-white absolute top-4 right-4 rounded-full p-3 cursor-pointer">
        <FaHeart />
      </div>
    </div>
  );
};

export default ProductCard;
