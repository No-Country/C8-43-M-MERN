import { Avatar } from "@nextui-org/react";


export default function Layout({ children }) {
  return (
    <div>
      <nav className="bg-[#87c38f] sm:px-4 fixed w-full z-20 top-0 left-0 border-b-2 border-yellow-100">
        <div className="container flex flex-wrap items-center mx-auto">
          <a href="/" className="flex items-center">
            <img src="/img/logo4.png" className="h-12 ml-6 pt-2" alt="Logo" />
          </a>
          <div className="flex gap-8 items-center ml-[1000px]">
            <div className="flex md:order-2">
              <div class="overflow-hidden relative w-16 h-16 rounded-full">
              <Avatar
                  src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                  size="xl"
                  color="success"
                  bordered
                />
              </div>

              {/* Crear el menu hamburger para el responsive */}
            </div>
            <div
              className="items-center hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-4 md:text-sm md:font-medium md:border-0">
                <li>
                  <a
                    href="/"
                    className="block py-2 pl-3 pr-4 text-white text-lg  md:p-0 dark:text-white md:hover:text-green-800"
                    aria-current="page"
                  >
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-800 md:p-0 "
                  >
                    Ayuda
                  </a>
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
