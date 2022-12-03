import { Avatar } from "@nextui-org/react";
import Link from "next/link";


export default function Layout({ children }) {
  return (
    <div>
      <nav className="bg-[#1B5B45] fixed w-full z-20 top-0 left-0 h-[60px] p-10 border-2 border-transparent border-b-[#F4F0BB]">
        <div className="container flex justify-between items-center mx-auto h-full">
          <Link href="/" className="">
            <img src="/img/logo.png" className="w-[40px]" alt="Logo" />
          </Link>
          <div className="h-full flex justify-center items-center gap-[50px]">
            <div className="flex md:order-2 ">
              <div className=" w-[50px]">
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
                  <Link
                    href="/ayuda"
                    className="text-white font-medium"
                  >
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
