import BannerInstagram from "./BannerInstagram/BannerInstagram";
import Carrousel from "./Carrousel/Carrousel"

const WellcomePage = () => {
    return (
      <>
        <BannerInstagram
          linkInstagram="https://www.instagram.com/indumentarialeeds/?hl=es"
        />
        <Carrousel />
      </>
    );
};

export default WellcomePage;