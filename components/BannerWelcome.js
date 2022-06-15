import banner from "../assets/banner.gif";
import Image from "next/image";
function BannerWelcome() {
  return (
    <section className="flex w-full" id="QuienesSomos">
      <Image src={banner} alt="BannerWelcome" />
    </section>
  );
}

export default BannerWelcome;
