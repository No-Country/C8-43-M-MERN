
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-[#1B5B45] fixed w-full z-20 top-0 left-0 h-[60px] p-10 border-2 border-transparent border-b-[#F4F0BB]">
        <div className="container flex md:justify-between items-center mx-auto h-full">
          <div className="order-last md:order-first ml-36 md:ml-0">
            <Link href="/">
              <img src="/img/logo.png" className="w-[40px]" alt="Logo" />
            </Link>
          </div>
          <div className="md:invisible">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <MdOutlineClose className="w-10 h-10 text-[#F4F0BB] font-bold" />
              ) : (
                <GiHamburgerMenu className="w-10 h-10 text-[#F4F0BB]" />
              )}
            </button>
          </div>
          <div className="h-full flex justify-center items-center gap-[20px]">
            <div className="flex md:order-2 ">
              <div class=" w-[50px]">
                <Link
                  href="/perfil-cliente"
                  className="invisible md:visible"
                >
                  <Image
                    src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
                    width="1000"
                    height="1000"
                    alt="logo"
                    className="rounded-full border-2 border-white"
                  />
                </Link>
              </div>
            </div>
            <div
              className={`flex pb-3 md:block md:pb-16 md:mt-0 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col bg-[#1B5B45] md:bg-transparent pb-32 w-full -mx-44 md:-mx-64 absolute z-20 md:flex-row gap-4 mt-20 md:mt-4">
                <li className="pl-16 md:pl-0">
                  <Link
                    href="/carrito"
                    className="text-white font-medium text-base "
                    aria-current="page"
                  >
                    Carrito
                  </Link>
                </li>
                <li className="pl-16 md:pl-0">
                  <Link
                    href="/sobre-nosotros"
                    className="text-white font-medium text-base "
                    aria-current="page"
                  >
                    Sobre nosotros
                  </Link>
                </li>
                <li className="pl-16 md:pl-0">
                  <Link href="/ayuda" className="text-white font-medium text-base">
                    Ayuda
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
