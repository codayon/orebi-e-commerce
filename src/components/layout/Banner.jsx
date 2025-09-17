import Button from "../common/Button";
import Container from "../common/Container";
import Information from "./Information";

const Banner = () => {
  return (
    <section className="bg-snow">
      <Container>
        <div className="md:flex items-center justify-around py-16">
          <div className="">
            <h1 className="font-bold text-4xl md:text-5xl text-center md:text-start">
              Final Offer
            </h1>
            <p className="text-stone flex items-center py-8">
              Up to
              <span className="text-onyx font-bold text-xl md:text-4xl px-1 md:px-2">
                50%
              </span>
              sale for all furniture items!
            </p>
            <Button
              className="md:inline-block hidden"
              label="Shop Now"
            />
          </div>
          <div className="md:w-[500px] md:h-[500px]">
            <img
              src="https://res.cloudinary.com/droh6dnbd/image/upload/v1758009728/headphone_i29btl.webp"
              alt="headphone_i29btl.webp"
            />
          </div>
          <div className="flex items-center justify-center pt-4 md:hidden">
            <Button
              className="inline-block"
              label="Shop Now"
            />
          </div>
        </div>
      </Container>
      <Information />
    </section>
  );
};

export default Banner;
