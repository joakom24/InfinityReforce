import partners from "../assets/partners.gif";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="flex" id="Partners">
      <Image src={partners} alt="partners" />
    </div>
  );
};

export default Partners;
