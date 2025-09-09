import Container from "../common/Container";
import Flex from "../common/Flex";
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck, FaUndoAlt } from "react-icons/fa";

const Information = () => {
  return (
    <section className="pt-6 pb-8 border-b border-fog">
      <Container>
        <Flex className={"justify-between"}>
          <Flex className={"gap-3"}>
            <PiNumberTwoBold />
            <p className="text-stone">Free shipping</p>
          </Flex>
          <Flex className={"gap-3"}>
            <FaTruck />
            <p className="text-stone">Free shipping</p>
          </Flex>
          <Flex className={"gap-3"}>
            <FaUndoAlt />
            <p className="text-stone">Return policy in 30 days</p>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Information;
