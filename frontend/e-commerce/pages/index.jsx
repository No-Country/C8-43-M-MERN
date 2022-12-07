import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import { IoIosArrowForward } from "react-icons/io";
import { GiCircle } from "react-icons/gi";
import { Fragment, useState } from "react";
import axios from "axios";

export default function Home({ data }) {
  const [product, setProduct] = useState([]);

  const handleChange = (e) => {
    searchProduct(e.target.value);
    console.log(e.target.value);
  };

  const searchProduct = async (name) => {
    const res = await axios.get(
      "https://c8-43-m-mern.vercel.app/products?name=" + name
    );
    setProduct(res.data);
  };

  return (
 
    <Layout>
      <div>
        <Head>
          <title>Valen</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/img/logo4.png" />
        </Head>
        <main className="flex flex-col bg-[#1B5B45] text-center md:justify-center">
          <div className="mx-auto mt-32 mb-8">
            <Image
              src="/img/logo2.png"
              width="400"
              height="400"
              alt="logo"
              className="mx-6 w-72 md:w-full"
            />
            <Image
              src="/img/subtitle.png"
              width="200"
              height="200"
              alt="logo"
              className="ml-32 md:ml-72 w-32 md:w-48"
            />
          </div>
          <Slider />
        </main>
        <section>
          <div className="bg-white">
          
     
            {/* Buscador */}
            <div className="px-4 md:px-[480px] pt-16 pb-4">
              <form>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-green-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="default-search"
                    onChange={handleChange}
                    className="block w-full p-2 pl-16 text-lg text-green-800 border border-gray-300 rounded-xl bg-yellow-100 focus:ring-green-800 focus:border-green-800 "
                    placeholder="Buscar..."
                    required
                  />
                </div>
              </form>
            </div>
            <div className="flex md:gap-32 mb-32 mx-4 md:mx-16 md:justify-center">
              {product.map(({ name, description, image, price }) => (
                <div>
                  <h4>{name}</h4>
                  <Image
                    src={image.url}
                    alt="photo"
                    width="200"
                    height="200"
                    className="w-4 md:w-32 h-4 md:h-32 rounded-full"
                  />
                  <h2 className="text-yellow-600">${price}</h2>
                  <p className="flex text-lg"> {description} </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:mx-16 z-0 md:gap-12">
              {data.map(({ _id, products, name, lastname, profileimage }) => (
                <div className="flex md:gap-8" key={_id}>
                  <div className="mx-4 md:mx-32">
                    <div className="flex md:gap-8 mb-8 z-0">
                      <div className="z-0">
                        <Image
                          src={profileimage.url}
                          width="200"
                          height="200"
                          className="rounded-full w-16 md:w-24 h-16 md:h-24"
                        />
                      </div>
                      <div className="flex flex-col mb-8 mx-8">
                        <h3 className="text-2xl font-semibold">
                          {name + " " + lastname}
                        </h3>
                        <div>
                          <button className="text-[#F4F0BB] bg-[#1B5B45] text-lg font-semibold px-6 py-1 text-center rounded-2xl">
                            Seguir
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 md:gap-8 mb-16 md:mb-32">
                      {products
                        .slice(0, 3)
                        .map(({ _id, image, sizes, color }) => (
                          <div key={_id}>
                            <div>
                              <Image
                                src={image.url}
                                alt="photo"
                                width="900"
                                height="900"
                                className="w-32 md:w-72 h-28 md:h-72 rounded-2xl"
                              />
                            </div>
                            <div className="flex invisible md:visible md:mx-8 mt-2">
                              <div>
                                {color == "Celeste" ? (
                                  <GiCircle className="text-sky-400 bg-sky-400 rounded-full mt-2" />
                                ) : (
                                  ""
                                )}
                              </div>
                              <div>
                                {color == "Marron" ? (
                                  <GiCircle className="text-amber-500 bg-amber-500 rounded-full mt-2" />
                                ) : (
                                  ""
                                )}
                              </div>
                              <div>
                                {color == "Negro" ? (
                                  <GiCircle className="text-slate-800 bg-slate-800 rounded-full mt-2" />
                                ) : (
                                  ""
                                )}
                              </div>
                              <div>
                                {color == "Rosa" ? (
                                  <GiCircle className="text-pink-400 bg-pink-400 rounded-full mt-2" />
                                ) : (
                                  ""
                                )}
                              </div>
                              <div>
                                {color == "Blanco" ? (
                                  <GiCircle className="text-slate-400 bg-slate-50 rounded-full mt-2" />
                                ) : (
                                  ""
                                )}
                              </div>
                              <div className="mt-1">
                                <p className="invisible md:visible text-gray-700 text-xs md:text-lg font-semibold md:ml-16">
                                  {sizes}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div>
                    <Link
                      href="/designer/[id].jsx"
                      as={`/designer/${_id}`}
                      className="flex flex-col mt-32 text-green-800 hover:text-green-600"
                    >
                      <IoIosArrowForward className="text-xl font-bold md:text-4xl mt-8 mr-4 md:mt-16" />
                      <span className="text-lg md:text-xl">Ver más</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
 
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://c8-43-m-mern.vercel.app/products/sellers");
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
