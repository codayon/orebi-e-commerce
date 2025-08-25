import Container from "../common/Container";
import Flex from "../common/Flex";
import ImageWrapper from "../common/ImageWrapper";
import AdImgOne from "../../assets/images/ad-1.png";
import AdImgTwo from "../../assets/images/ad-2.png";
import AdImgThree from "../../assets/images/ad-3.png";

const Ads = () => {
  return (
    <section className="pt-24 pb-12">
      <Container>
        <Flex className={"gap-x-10"}>
          <ImageWrapper
            src={AdImgOne}
            alt="AdImgOne"
            className={"cursor-pointer"}
          />
          <Flex className={"flex-col gap-y-10"}>
            <ImageWrapper
              src={AdImgTwo}
              alt="AdImgTwo"
              className={"cursor-pointer"}
            />
            <ImageWrapper
              src={AdImgThree}
              alt="AdImgThree"
              className={"cursor-pointer"}
            />
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Ads;
