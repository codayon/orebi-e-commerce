import { useState, useEffect } from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import ProductCard from "../common/ProductCard";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className="py-12">
      <Container>
        <h4 className="text-black-a font-bold text-4xl">New Arrivals</h4>
        <Flex className={"justify-between pt-12"}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              src={product.thumbnail}
              alt={product.title}
              productName={product.title}
              price={`$${product.price.toFixed(2)}`}
              badgeName={
                product.discountPercentage > 0
                  ? `${Math.round(product.discountPercentage)}%`
                  : "New"
              }
            />
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default NewArrivals;
