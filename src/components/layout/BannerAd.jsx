import Container from "../common/Container";
import ImageWrapper from "../common/ImageWrapper";
import AdImg from "../../assets/images/ad-4.png";

const BannerAd = () => {
  return (
    <section className="py-12">
      <Container>
        <ImageWrapper src={AdImg} alt="AdImg" />
      </Container>
    </section>
  );
};

export default BannerAd;
