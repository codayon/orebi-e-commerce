import ImageWrapper from "../common/ImageWrapper";
// import BannerSrc from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <section>
      <ImageWrapper
        src="https://res.cloudinary.com/droh6dnbd/image/upload/v1757569962/banner_qilsva.png"
        alt="Website Banner"
        className={"cursor-pointer aspect-[1920/677]"}
      />
    </section>
  );
};

export default Banner;
