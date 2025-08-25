import Flex from "./Flex";
import ImageWrapper from "./ImageWrapper";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import SvgWrapper from "./SvgWrapper";

const ProductCard = ({ src, alt, productName, price, badgeName }) => {
  return (
    <div className={"relative group"}>
      <div className="relative">
        <ImageWrapper
          src={src}
          alt={alt}
          className={"cursor-pointer h-[350px] bg-gray-f"}
        />
        <div className="absolute bottom-0 right-0 w-full bg-gray-b py-6 pr-8 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible">
          <Flex
            className={
              "justify-end gap-4 transition duration-300 items-center cursor-pointer"
            }
          >
            <h5 className="text-gray-a hover:text-black">Add to Wish List</h5>
            <FaHeart className="text-[12px]" />
          </Flex>
          <Flex
            className={
              "justify-end gap-4 transition duration-300 items-center cursor-pointer my-4"
            }
          >
            <span className="text-gray-a hover:text-black">Compare</span>
            <SvgWrapper>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.99632 1.93548C7.03761 1.93456 8.01915 2.32277 8.77548 3.03097L7.7654 4.04102C7.39962 4.40683 7.65869 5.03226 8.17599 5.03226H11.4194C11.74 5.03226 12 4.7723 12 4.45161V1.20825C12 0.690944 11.3746 0.431879 11.0088 0.797661L10.1447 1.66173C9.06752 0.632323 7.60761 0 6 0C3.06806 0 0.627411 2.103 0.103935 4.88284C0.070379 5.06112 0.208185 5.22581 0.389589 5.22581H1.77595C1.90972 5.22581 2.02531 5.13419 2.05783 5.00444C2.50452 3.22205 4.12234 1.93713 5.99632 1.93548ZM3.82401 6.96774H0.580645C0.25996 6.96774 0 7.2277 0 7.54839V10.7917C0 11.3091 0.625427 11.5681 0.99121 11.2023L1.85528 10.3383C2.93248 11.3677 4.39239 12 6 12C8.93194 12 11.3726 9.897 11.8961 7.11721C11.9296 6.93893 11.7918 6.77424 11.6104 6.77424H10.224C10.0903 6.77424 9.97469 6.86586 9.94217 6.99561C9.49527 8.7788 7.87679 10.0628 6.00377 10.0645C4.96246 10.0655 3.98085 9.67727 3.22452 8.96906L4.2346 7.95898C4.60038 7.59317 4.34131 6.96774 3.82401 6.96774Z"
                  fill="#262626"
                />
              </svg>
            </SvgWrapper>
          </Flex>
          <Flex
            className={
              "justify-end gap-4 transition duration-300 items-center cursor-pointer"
            }
          >
            <span className="text-gray-a hover:text-black transition duration-300">
              Add to Cart
            </span>
            <FaShoppingCart className="text-[12px]" />
          </Flex>
        </div>
      </div>
      <Flex className="justify-between items-center py-6 gap-4">
        <h5 className="font-bold text-xl w-4/5 truncate cursor-pointer">{productName}</h5>
        <p className="text-gray-a flex-shrink-0">{price}</p>
      </Flex>
      <div className="absolute top-5 left-5 bg-black-a text-white font-bold px-8 py-2.5">
        {badgeName}
      </div>
    </div>
  );
};

export default ProductCard;
