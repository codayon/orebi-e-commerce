import Container from "../common/Container";
import Flex from "../common/Flex";
import ImageWrapper from "../common/ImageWrapper";

const Ads = () => {
  return (
    <section className="pt-24 pb-12">
      <Container>
        <Flex className={"gap-x-10"}>
          <ImageWrapper
            src="https://res.cloudinary.com/droh6dnbd/image/upload/v1758009942/ad-1_fzhing.webp"
            alt="AdImgOne"
            className={"cursor-pointer aspect-square"}
          />
          <Flex className={"flex-col gap-y-10"}>
            <ImageWrapper
              src="https://res.cloudinary.com/droh6dnbd/image/upload/v1758009943/ad-2_az70mr.webp"
              alt="AdImgTwo"
              className={"cursor-pointer aspect-[784/370]"}
            />
            <ImageWrapper
              src="https://res.cloudinary.com/droh6dnbd/image/upload/v1758009943/ad-3_yeybud.webp"
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
