import vertical from "../assets/vertical.gif";
import nft from "../assets/nft.gif";
import agency from "../assets/agency.gif";
import launchpad from "../assets/launchpad.gif";
import { FaCaretRight } from "react-icons/fa";
import Image from "next/image";
function AnimationVertical() {
  return (
    <div className="flex items-center bg-primary w-full justify-center ">
      <div className="flex   flex-col lg:flex-row lg:flex">
        <div className="flex items-center flex-col gap-y-5 mt-6 mr-20 justify-center">
          <h2 className="text-white font-medium text-xl md:text-2xl md:text-center">
            AGENCIA Y REAL ESTATE
          </h2>
          <div className="md:flex md:flex-row">
            <h5 className="text-white text-sm md:text-base">
              Inversion especulativa en terrenos en <br />
              diversos metaversos, <br /> con un exit strategy alrededor <br />
              de las utilidades de las mismas.
            </h5>
            <Image src={agency} alt="AgencyIcon" />
          </div>
        </div>

        <div className="flex md:max-h-92">
          <Image src={vertical} alt="AnimationVerticalIcon" height={500} />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center flex-col gap-y-5 my-10 ">
            <h2 className="text-white font-medium text-left text-xl  md:text-2xl md:text-center ">
              NFT FACTORY
            </h2>
            <div className="md:flex md:flex-row">
              <Image src={nft} alt="AgencyIcon" />
              <h5 className="text-white text-sm text-left md:text-base">
                Enfocada en el desarrollo de artículos únicos (NFT) <br />
                con utilidades
                <br />y valor agregado,
                <br /> y también a la generación de experiencias <br /> o
                tiendas en el metaverso.
              </h5>
            </div>
          </div>
          <div className="flex items-center flex-row ml-20">
            <Image src={launchpad} alt="AgencyIcon" />
            <div className="flex flex-col">
              <h2 className="text-white font-medium text-xl  md:text-2xl md:text-center">
                STRATEGIC TECHNOLOGY SERVICES
              </h2>
              <div className="md:flex md:flex-row">
                <h5 className="text-white text-sm md:text-base md:w-82 ">
                  <ul className="flex flex-col gap-2 my-5">
                    <li className="flex">
                      <FaCaretRight />
                      Web3 agency consulting
                    </li>
                    <li className="flex">
                      <FaCaretRight />
                      Asset tokenization
                    </li>
                    <li className="flex">
                      <FaCaretRight /> Custom Smart Contracts Development
                    </li>
                    <li className="flex">
                      <FaCaretRight />
                      Marketplaces, eCommerce, wallets, <br /> apps & web3
                      infraestructure
                    </li>
                    <li className="flex">
                      <FaCaretRight />
                      Credit card crypto payments integrations
                    </li>
                    <li className="flex">
                      <FaCaretRight />
                      Development of marketplaces, dapps & web3 infrastructure
                    </li>
                  </ul>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimationVertical;
