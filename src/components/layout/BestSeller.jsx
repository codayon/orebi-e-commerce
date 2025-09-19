import { useState, useEffect } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Container from "../common/Container";
import ProductCard from "../common/ProductCard";
import SkeletonCard from "../common/SkeletonCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestSeller = () => {
  const PrevArrow = ({ onClick }) => (
    <button
      className="bg-ash text-white absolute left-2 top-40 rounded-full p-5 z-20"
      onClick={onClick}
    >
      <FaLongArrowAltLeft />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      className="bg-ash text-white absolute right-2 top-40 rounded-full p-5 z-20"
      onClick={onClick}
    >
      <FaLongArrowAltRight />
    </button>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=5&skip=4")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-12">
      <Container>
        <h4 className="text-onyx font-bold text-4xl">Best Sellers</h4>
        <div className="pt-12 w-full">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, idx) => (
                <SkeletonCard key={idx} />
              ))}
            </div>
          ) : (
            <Slider {...settings}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </Slider>
          )}
        </div>
      </Container>
    </section>
  );
};

export default BestSeller;
