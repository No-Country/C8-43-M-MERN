import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

export default function Layout({ children }) {

  const [navbar, setNavbar] = useState(false);

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
                <button
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-[#F4F0BB]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-[#F4F0BB]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
          <div className="h-full flex justify-center items-center gap-[50px]">
            <div className="flex md:order-2 ">
              <div className="invisible md:visible w-[50px]">
                <Avatar
                  src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                  size="full"
                  color="success"
                  bordered
                />
              </div>
              {/* Crear el menu hamburger para el responsive */}
            </div>
            <div
              className="items-center hidden w-full h-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex gap-[40px] m-[0] mt-[10px] md:text-sm md:font-medium ">
                <li>
                  <Link
                    href="/carrito"
                    className="text-white font-medium "
                    aria-current="page"
                  >
                    Carrito
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sobre-nosotros"
                    className="text-white font-medium "
                    aria-current="page"
                  >
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/ayuda" className="text-white font-medium">
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
