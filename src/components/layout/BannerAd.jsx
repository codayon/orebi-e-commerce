import Container from "../common/Container";
import ImageWrapper from "../common/ImageWrapper";

const BannerAd = () => {
  return (
    <section className="py-12">
      <Container>
        <ImageWrapper
          src="https://res.cloudinary.com/droh6dnbd/image/upload/v1758009944/ad-4_h8uypk.webp"
          alt="AdImg"
          className={"cursor-pointer"}
        />
      </Container>
    </section>
  );
};

export default BannerAd;
