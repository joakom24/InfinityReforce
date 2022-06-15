import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Follow = () => {
  /*const [show, setShow] = useState(false);
  const click = (e) => {
    e.preventDefault();
    setShow(!show);
  };*/
  return (
    <div className="bg-primary flex h-screen justify-center items-center flex-col gap-24">
      <h1 className="font-semibold text-3xl text-white">FOLLOW US</h1>
      {/*{show ? (
        <h3 className="absolute font-semibold text-xl mr-[200px]  text-white  bg-[#000]">
          En construccion...
        </h3>
      ) : null}*/}
      <div className="flex  gap-40">
        <button
          className="flex border-2 rounded-full border-[#FF3535] p-5"
          //onMouseOver={click}
        >
          <Link
            href="https://www.linkedin.com/company/reforce-infinity/"
            passHref={true}
          >
            <Image src={linkedin} alt="team" /*onMouseOver={click}*/ />
          </Link>
        </button>
        <button className="flex border-2 rounded-full border-[#FF3535] p-5">
          <Link
            href="https://instagram.com/reforceinfinity?igshid=YmMyMTA2M2Y="
            passHref={true}
          >
            <Image src={instagram} alt="team" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Follow;
