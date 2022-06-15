import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center flex-wrap bg-transparent p-3 absolute z-10 w-full pr-10">
        <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-primary hover:text-white ">
                Home
              </a>
            </Link>
            <Link href="#QuienesSomos">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-primary hover:text-white">
                Quienes somos
              </a>
            </Link>
            <Link href="#Partners">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-primary hover:text-white">
                Partners
              </a>
            </Link>
            <Link href="#Team">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-primary hover:text-white">
                Equipo
              </a>
            </Link>
            <Link href="#Contact">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-primary hover:text-white">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
