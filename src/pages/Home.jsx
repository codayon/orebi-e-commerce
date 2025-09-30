import Ads from "@/components/layout/Ads";
import Banner from "@/components/layout/Banner";
import BannerAd from "@/components/layout/BannerAd";
import BestSeller from "@/components/layout/BestSeller";
import NewArrivals from "@/components/layout/NewArrivals";
import SpecialOffers from "@/components/layout/SpecialOffers";

const Home = () => {
  return (
    <>
      <Banner />
      <Ads />
      <NewArrivals />
      <BestSeller />
      <BannerAd />
      <SpecialOffers />
    </>
  );
};

export default Home;
