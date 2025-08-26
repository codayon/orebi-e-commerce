import Container from "../common/Container";
import Flex from "../common/Flex";
import ProductCard from "../common/ProductCard";
import { useState, useEffect } from "react";
import SkeletonCard from "../common/SkeletonCard";

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=4&skip=4")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-12">
      <Container>
        <h4 className="text-black-a font-bold text-4xl">Best Sellers</h4>
        <Flex className={"flex-wrap justify-between pt-12"}>
          {loading
            ? Array.from({ length: 4 }).map((_, idx) => (
                <SkeletonCard key={idx} />
              ))
            : products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </Flex>
      </Container>
    </section>
  );
};

export default BestSeller;
