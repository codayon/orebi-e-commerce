import Button from "../common/Button";
import Container from "../common/Container";
import ImageWrapper from "../common/ImageWrapper";

export default function BannerAd() {
  return (
    <section className="py-2.5 md:py-12">
      <Container>
        <div className="bg-fog pt-2 pb-4 flex md:items-center flex-col md:flex-row">
          <ImageWrapper
            src="https://res.cloudinary.com/droh6dnbd/image/upload/v1758345210/clock_lr26je.webp"
            alt="clock"
            className="md:px-44 md:h-80"
          />
          <div className="flex flex-col items-center md:items-stretch text-center md:text-left gap-4 md:gap-6 md:py-16">
            <h3 className="font-bold text-2xl md:text-4xl capitalize">
              Phone of the year
            </h3>
            <p className="px-2 md:px-0 leading-7 max-w-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry orem Ipsum..
            </p>
            <Button
              label="Shop Now"
              className="py-3 px-8 md:py-4 md:px-14 md:self-start"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
