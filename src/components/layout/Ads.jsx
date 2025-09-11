import Container from "../common/Container";
import Flex from "../common/Flex";
import ImageWrapper from "../common/ImageWrapper";
// import AdImgOne from "../../assets/images/ad-1.png";
// import AdImgTwo from "../../assets/images/ad-2.png";
// import AdImgThree from "../../assets/images/ad-3.png";

const Ads = () => {
  return (
    <section className="pt-24 pb-12">
      <Container>
        <Flex className={"gap-x-10"}>
          <ImageWrapper
            src="https://res.cloudinary.com/droh6dnbd/image/upload/v1757569626/ad-1_msbzgn.png"
            alt="AdImgOne"
            className={"cursor-pointer aspect-square"}
          />
          <Flex className={"flex-col gap-y-10"}>
            <ImageWrapper
              src="https://res.cloudinary.com/droh6dnbd/image/upload/v1757569627/ad-2_f5bbqm.png"
              alt="AdImgTwo"
              className={"cursor-pointer aspect-[784/370]"}
            />
            <ImageWrapper
              src="https://res.cloudinary.com/droh6dnbd/image/upload/v1757569626/ad-3_kohebp.png"
              alt="AdImgThree"
              className={"cursor-pointer aspect-[784/370]"}
            />
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Ads;
