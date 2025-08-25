import { useState, useEffect } from "react";
import axios from "axios";
import Container from "../common/Container";
import Flex from "../common/Flex";
import ProductCard from "../common/ProductCard";

const SpecialOffers = () => {
  const [myProd, setMyProd] = useState([]);
  useEffect(() => {
    async function allProd() {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=4&skip=8"
      );
      setMyProd(response.data.products);
    }
    allProd();
  }, []);

  return (
    <section className="py-12">
      <Container>
        <h4 className="text-black-a font-bold text-4xl ">Special Offers</h4>
        <Flex className={"justify-between py-12"}>
          {myProd.map((item) => (
            <div key={item.id} className="px-3 py-5">
              <ProductCard
                src={item.thumbnail}
                alt={item.title}
                productName={item.title}
                price={`$${item.price.toFixed(2)}`}
                badgeName={
                  item.discountPercentage > 0
                    ? `${Math.round(item.discountPercentage)}%`
                    : "New"
                }
              />
            </div>
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default SpecialOffers;
