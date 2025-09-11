import Container from "../common/Container";
import ImageWrapper from "../common/ImageWrapper";
// import AdImg from "../../assets/images/ad-4.png";

const BannerAd = () => {
  return (
    <section className="py-12">
      <Container>
        <ImageWrapper
          src="https://res.cloudinary.com/droh6dnbd/image/upload/v1757569627/ad-4_v7tbsr.png"
          alt="AdImg"
          className={"cursor-pointer"}
        />
      </Container>
    </section>
  );
};

export default BannerAd;
