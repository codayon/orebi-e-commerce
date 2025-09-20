import Flex from "../common/Flex";
import Button from "../common/Button";
import Container from "../common/Container";
import ImageWrapper from "../common/ImageWrapper";

const BannerAd = () => {
  return (
    <section className="py-12">
      <Container>
        <Flex className="bg-fog ">
          <ImageWrapper
            src="https://res.cloudinary.com/droh6dnbd/image/upload/v1758345210/clock_lr26je.webp"
            alt="clock"
            className="md:px-44 md:h-80"
            imgClassName="md:scale-110"
          />
          <div className="flex flex-col gap-6 py-16">
            <h3 className="font-bold text-4xl">Phone of the year</h3>
            <p className="leading-7 max-w-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry orem Ipsum..
            </p>
            <Button label="Shop Now" className="self-start" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default BannerAd;
