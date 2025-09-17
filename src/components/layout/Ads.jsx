import Button from "../common/Button";
import Container from "../common/Container";

const Ads = () => {
  return (
    <section className="pt-24 pb-12">
      <Container>
        <div className="flex gap-8">
          <div className="bg-[url('https://res.cloudinary.com/droh6dnbd/image/upload/v1758033409/ad-1_eeudo3.webp')] bg-cover bg-center bg-no-repeat flex flex-col justify-end flex-1 pl-16 pb-16">
            <h3 className="font-bold text-4xl">Phones Sale</h3>
            <p className="text-stone flex items-center py-8">
              Up to
              <span className="text-onyx font-bold text-xl px-1">30%</span>
              sale for all phones!
            </p>
            <Button
              className="hidden md:inline-block self-start"
              label="Shop Now"
            />
          </div>

          <div className="flex-1 flex flex-col gap-8 h-full">
            <div className="bg-[url('https://res.cloudinary.com/droh6dnbd/image/upload/v1758033409/ad-2_h5qosc.webp')] bg-cover bg-center bg-no-repeat flex-1 py-16 pl-12">
              <h3 className="font-bold text-4xl">Electronics Sale</h3>
              <p className="text-stone flex items-center py-8">
                Up to
                <span className="text-onyx font-bold text-xl px-1">70%</span>
                sale for all electronics!
              </p>
              <Button
                className="md:inline-block hidden"
                label="Shop Now"
              />
            </div>

            <div className="bg-[url('https://res.cloudinary.com/droh6dnbd/image/upload/v1758033409/ad-3_xj7qtu.webp')] bg-cover bg-center bg-no-repeat flex-1 py-16 pl-12">
              <h3 className="font-bold text-4xl">Furniture Sale</h3>
              <p className="text-stone flex items-center py-8">
                Up to
                <span className="text-onyx font-bold text-xl px-1">50%</span>
                sale for all furniture items!
              </p>
              <Button
                className="md:inline-block hidden"
                label="Shop Now"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Ads;
