import icons from "../assets/icons.gif";
import Image from "next/image";
function Icons() {
  return (
    <div className="flex w-full">
      <Image src={icons} alt="Icons" />
    </div>
  );
}

export default Icons;
