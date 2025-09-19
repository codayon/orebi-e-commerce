import Flex from "./Flex";
import ImageWrapper from "./ImageWrapper";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import Button from "./Button";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className={"bg-white relative border w-[340px]"}>
      <ImageWrapper
        src={product.thumbnail}
        alt={product.title}
        className="bg-cloud aspect-square cursor-pointer"
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

      <div className="absolute top-4 left-0 flex items-center justify-between w-[338px]">
        <div className="bg-onyx text-white px-4 py-2 font-bold ml-4">
          {product.discountPercentage > 0
            ? `${Math.round(product.discountPercentage)}%`
            : "New"}
        </div>
        <div className="bg-onyx text-white rounded-full p-3 mr-4 cursor-pointer">
          <FaHeart />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
