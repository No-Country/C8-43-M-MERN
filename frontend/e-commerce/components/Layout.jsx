export default function Layout({ children }) {
  return (
    <div>
      <nav className="bg-transparent px-2 py-4 sm:px-4 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-yellow-100 dark:border-gray-600">
        <div className="container flex flex-wrap items-center mx-auto">
          <a href="/" className="flex items-center">
            <img src="/img/logo4.png" className="h-12 ml-6 pt-2" alt="Logo" />
          </a>
        <div className="flex gap-8 items-center ml-[1000px]">
        <div className="flex md:order-2">
            <div className="inline-flex overflow-hidden relative justify-center items-center w-16 h-16 bg-white rounded-full">
              <span className="text-gray-600 dark:text-gray-300">
                Login
              </span>
            </div>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white text-lg md:bg-transparent md:p-0 dark:text-white md:hover:text-green-800"
                  aria-current="page"
                >
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-800 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
