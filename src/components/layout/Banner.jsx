import ImageWrapper from "../common/ImageWrapper";
import BannerSrc from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <section>
      <ImageWrapper
        src={BannerSrc}
        alt="Website Banner"
        className={"cursor-pointer"}
      />
    </section>
  );
};

export default Banner;
