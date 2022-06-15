import banner from "../assets/banner2.gif";
import Image from "next/image";
function Banner() {
  return (
    <div className="flex w-full">
      <Image src={banner} alt="Banner" />
    </div>
  );
}

export default Banner;
