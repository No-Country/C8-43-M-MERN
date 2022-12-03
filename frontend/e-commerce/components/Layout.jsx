import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Layout({ children }) {
  const { data: session } = useSession();

  return (
    <div>
      <nav className="bg-[#1B5B45] sm:px-4 fixed w-full z-20 top-0 left-0 border-b-2 border-yellow-100">
        <div className="container flex flex-wrap items-center mx-auto">
          <Link href="/" className="flex items-center">
            <img src="/img/logo.png" className="h-10 ml-6 pt-2" alt="Logo" />
          </Link>
          <div className="flex gap-8 items-center ml-[1000px]">
            <div className="flex md:order-2">
              <div class="overflow-hidden relative w-16 h-16 rounded-full">
                {session ? (
                  <button
                    className="block py-2 pl-3 pr-4 text-white text-lg  md:p-0"
                    onClick={() => signOut()}
                  >
                    Sign out
                  </button>
                ) : (
                  <button
                    className="block py-2 pl-3 pr-4 text-white text-lg  md:p-0"
                    onClick={() => signIn()}
                  >
                    Sign in
                  </button>
                )}
              </div>

              {/* Crear el menu hamburger para el responsive */}
            </div>
            <div
              className="items-center hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col pt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-4 md:text-sm md:font-medium md:border-0">
                <li>
                  <Link
                    href="/carrito"
                    className="block py-2 pl-3 pr-4 text-white text-lg  md:p-0 "
                    aria-current="page"
                  >
                    Carrito
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sobre-nosotros"
                    className="block py-2 pl-3 pr-4 text-white text-lg  md:p-0 "
                    aria-current="page"
                  >
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ayuda"
                    className="block py-2 pl-3 pr-4 text-white text-lg hover:bg-gray-100 md:hover:bg-transparent md:p-0 "
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
