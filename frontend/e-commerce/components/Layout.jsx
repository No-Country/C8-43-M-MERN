import { useAuth } from "./../context/AuthContext";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useRouter } from "next/router";


export default function Layout({ children }) {

  const router = useRouter();

  const { user, setUser } = useAuth();
  console.log(user);
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    router.push("/");
    setUser("");
    localStorage.removeItem("token");

  };

  return (
    <div>
      <nav className="bg-[#1B5B45] fixed w-full z-20 top-0 left-0 h-[60px] py-10 px-10 md:px-64 border-2 border-transparent border-b-[#F4F0BB]">
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
            <div
              className={`flex pb-3 md:block md:pb-16 md:mt-0 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col gap-4 bg-[#1B5B45] md:bg-transparent pb-32 w-[800px] -mx-44 md:-mx-64 absolute z-20 md:flex-row mt-12 md:mt-4">
                <li className="pl-32 md:pl-0 mt-8 md:mt-0">
                  <Link
                    href="/carrito"
                    className="text-white font-medium text-base "
                    aria-current="page"
                  >
                    Carrito
                  </Link>
                </li>
                <li className="pl-32 md:pl-0">
                  <Link
                    href="/sobre-nosotros"
                    className="text-white font-medium text-base "
                    aria-current="page"
                  >
                    Sobre nosotros
                  </Link>
                </li>
                <li className="pl-32 md:pl-0">
                  <Link
                    href="/ayuda"
                    className="text-white font-medium text-base"
                  >
                    Ayuda
                  </Link>
                </li>
                {!user ? (
                      <li className="pl-32 md:pl-0">
                      <Link
                        href="/auth/signin"
                        className="text-[#1B5B45] font-medium text-base rounded-full border-2 border-white bg-slate-50 py-6 px-4"
                      >
                        Login
                      </Link>
                    </li>
                ) : (
                  <li className="pl-32 md:pl-0">
                  <Link
                    href="/perfil-cliente"
                    className="text-[#1B5B45] uppercase font-medium text-base rounded-full border-2 border-white bg-slate-50 px-2 py-4"
                  >
                    {user.name}
                  </Link>
                </li>
                ) }
            
                <li className="pl-32 md:pl-0">
                      {user && (
                        <button
                          className="flex flex-col px-8 text-xs text-white"
                          onClick={logout}
                        >
                          <div className="flex items-center gap-4">
                            <span  className="text-white font-medium text-base">Cerrar Sesión</span>
                          </div>
                        </button>
                      )}
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
