import Button from "../common/Button";
import Container from "../common/Container";

export default function Ads() {
  return (
    <section className="pt-5 md:pt-24 pb-2.5 md:pb-12">
      <Container>
        <div className="flex flex-col md:flex-row gap-3.5 md:gap-10">
          <div className="bg-[url('https://res.cloudinary.com/droh6dnbd/image/upload/v1758033409/ad-1_eeudo3.webp')] bg-cover bg-center bg-no-repeat md:flex-1 flex flex-col justify-end">
            <div className="pl-2.5 md:pl-16 pb-2.5 md:pb-16 pt-44">
              <h3 className="font-bold text-2xl md:text-4xl">Phones Sale</h3>
              <p className="text-stone flex items-center text-sm md:text-base py-2 md:py-8">
                Up to
                <span className="text-onyx font-bold text-base md:text-xl px-1">
                  30%
                </span>
                sale for all phones!
              </p>
              <Button
                className="inline-block self-start py-2 px-5 md:py-3 md:px-16"
                label="Shop Now"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-1 gap-3.5 md:gap-10 h-full">
            <div className="bg-[url('https://res.cloudinary.com/droh6dnbd/image/upload/v1758033409/ad-2_h5qosc.webp')] bg-cover bg-center bg-no-repeat md:flex-1">
              <div className="pb-2.5 pt-6 md:py-16 pl-2.5 md:pl-12 max-w-44 md:max-w-full">
                <h3 className="font-bold text-xl md:text-4xl">
                  Electronics Sale
                </h3>
                <p className="text-stone text-sm md:text-base md:flex md:items-center pt-1 pb-2 md:py-8 max-w-32 md:max-w-full">
                  Up to
                  <span className="text-onyx font-bold text-base md:text-xl px-1">
                    70%
                  </span>
                  sale for all electronics!
                </p>
                <Button
                  className="inline-block self-start py-2 px-5 md:py-3 md:px-16"
                  label="Shop Now"
                />
              </div>
            </div>

            <div className="bg-[url('https://res.cloudinary.com/droh6dnbd/image/upload/v1758033409/ad-3_xj7qtu.webp')] bg-cover bg-center bg-no-repeat md:flex-1">
              <div className="pb-2.5 pt-6 md:py-16 pl-2.5 md:pl-12 max-w-44 md:max-w-full">
                <h3 className="font-bold text-xl md:text-4xl">
                  Furniture Sale
                </h3>
                <p className="text-stone text-sm md:text-base md:flex md:items-center pt-1 pb-2 md:py-8 max-w-32 md:max-w-full">
                  Up to
                  <span className="text-onyx font-bold text-base md:text-xl px-1">
                    50%
                  </span>
                  sale for all furniture items!
                </p>
                <Button
                  className="inline-block self-start py-2 px-5 md:py-3 md:px-16"
                  label="Shop Now"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
