import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import styles from "./../styles/home.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { Avatar, Button } from "@nextui-org/react";
import { useState } from "react";
import axios from "axios";

export default function Home({ data }) {
  const [product, setProduct] = useState([]);

  const handleChange = (e) => {
    searchProduct(e.target.value);
    console.log(e.target.value);
  };

  const searchProduct = async (name) => {
    const res = await axios.get("http://localhost:3001/products?name=" + name);
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
        <main className="flex flex-col bg-[#1B5B45] text-center justify-center">
          <div className="mx-auto my-32">
            <Image src="/img/logo2.png" width="400" height="400" alt="logo" />
            <Image
              src="/img/subtitle.png"
              width="200"
              height="200"
              alt="logo"
              className="ml-64"
            />
          </div>
          <Slider />
        </main>
        <section>
          <div className="bg-white">
            {/* Buscador */}
            <div className="px-[600px] py-32">
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
            <div className="flex gap-32 mb-32 mx-16 justify-center">
              {product.map(({ name, color, description, image, price }) => (
                <div>
                  <h4>{name}</h4>
                  <Image
                    src={image.url}
                    alt="photo"
                    width="900"
                    height="900"
                    className="w-32 h-32 rounded-full"
                  />
                  <h2 className="text-yellow-600">${price}</h2>
                  <p className="flex text-lg">
                    {" "}
                    {description}{" "}
                    {color === "Celeste" ? (
                      <div className={styles.circleSky}></div>
                    ) : (
                      ""
                    )}
                    {color === "Purpura" ? (
                      <div className={styles.circlePurple}></div>
                    ) : (
                      ""
                    )}
                    {color === "Marron" ? (
                      <div className={styles.circleBrown}></div>
                    ) : (
                      ""
                    )}
                    {color === "Blanco, Negro" ? (
                      <div className={styles.circleBlack}></div>
                    ) : (
                      ""
                    )}
                    {color === "Rosa, Negro" ? (
                      <div className="flex space-x-2">
                        <div className={styles.circlePink}></div>{" "}
                        <div className={styles.circleBlack}></div>
                      </div>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col mx-16 z-0 gap-12">
              {data.map(({ _id, products, name, lastname, profileimage }) => (
                <div className="flex gap-8">
                  <div className="mx-32">
                    <div className="flex gap-8 mb-8 z-0">
                      <div className="z-0">
                        <Avatar
                          src={profileimage.url}
                          color="success"
                          bordered
                          css={{ size: "$20" }}
                        />
                      </div>
                      <div className="flex flex-col mx-8">
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
                    <div className="flex gap-8 mb-32">
                      {products.slice(0, 3).map(({ image, sizes, color }) => (
                        <div>
                          <div>
                            <Image
                              src={image.url}
                              alt="photo"
                              width="900"
                              height="900"
                              className="w-72 h-72"
                            />
                          </div>
                          <div className="flex mt-2">
                            {color === "Celeste" ? (
                              <div className={styles.circleSky}></div>
                            ) : (
                              ""
                            )}
                            {color === "Purpura" ? (
                              <div className={styles.circlePurple}></div>
                            ) : (
                              ""
                            )}
                            {color === "Marron" ? (
                              <div className={styles.circleBrown}></div>
                            ) : (
                              ""
                            )}
                            {color === "Blanco, Negro" ? (
                              <div className={styles.circleBlack}></div>
                            ) : (
                              ""
                            )}
                            {color === "Rosa, Negro" ? (
                              <div className="flex space-x-2">
                                <div className={styles.circlePink}></div>{" "}
                                <div className={styles.circleBlack}></div>
                              </div>
                            ) : (
                              ""
                            )}

                            <div>
                              <p className=" text-gray-700 text-lg font-semibold ml-16">
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
                      <IoIosArrowForward className="text-4xl mt-16" />
                      <span className="text-xl">Ver más</span>
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
    const res = await fetch("http://localhost:3001/products/sellers");
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
