import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck, FaUndoAlt } from "react-icons/fa";

import Flex from "../common/Flex";
import Container from "../common/Container";

export default function Information() {
  return (
    <section className="bg-white border-fog pt-6 pb-8 border-b hidden md:block">
      <Container>
        <Flex className={"justify-between"}>
          <Flex className={"gap-3"}>
            <PiNumberTwoBold className="text-2xl" />
            <p className="text-stone">Two Years Warranty</p>
          </Flex>
          <Flex className={"gap-3"}>
            <FaTruck className="text-xl" />
            <p className="text-stone">Free Shipping</p>
          </Flex>
          <Flex className={"gap-3"}>
            <FaUndoAlt className="text-xl" />
            <p className="text-stone">Return Policy in 30 Days</p>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
}
