import { useState, useEffect } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Container from "../common/Container";
import ProductCard from "../common/ProductCard";
import SkeletonCard from "../common/SkeletonCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const BestSeller = () => {
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
        <div className="pt-12 w-full relative">
          {loading ? (
            <div className="flex flex-wrap gap-20">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className={`
                    ${idx > 0 ? "hidden sm:block" : ""} 
                    ${idx > 1 ? "hidden md:block" : ""}
                  `}
                >
                  <SkeletonCard />
                </div>
              ))}
            </div>
          ) : (
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                prevEl: ".swiper-prev",
                nextEl: ".swiper-next",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 80,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 80,
                },
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <button className="swiper-prev bg-ash text-white absolute left-2 top-56 rounded-full p-5 z-20">
            <FaLongArrowAltLeft />
          </button>
          <button className="swiper-next bg-ash text-white absolute right-2 top-56 rounded-full p-5 z-20">
            <FaLongArrowAltRight />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default BestSeller;
