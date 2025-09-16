import Button from "../common/Button";
import Container from "../common/Container";
import Flex from "../common/Flex";
import ImageWrapper from "../common/ImageWrapper";
import Information from "./Information";

const Banner = () => {
  return (
    <section className="bg-snow">
      <Container>
        <Flex className="justify-between py-16">
          <div className="">
            <h1 className="font-bold text-5xl">Final Offer</h1>
            <p className="text-stone flex items-center py-8">
              Up to
              <span className="text-onyx font-bold text-4xl px-2">50%</span>sale
              for all furniture items!
            </p>
            <Button
              className="inline-block"
              label="Shop Now"
            />
          </div>
          <ImageWrapper
            src="https://res.cloudinary.com/droh6dnbd/image/upload/v1758001214/headphone_ext6ps.png"
            alt="headphone_ext6ps.png"
            className="bg-transparent aspect-500/500"
          />
        </Flex>
      </Container>
      <Information />
    </section>
  );
};

export default Banner;
