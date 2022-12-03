import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "./../../styles/Designer.module.css";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaBehance } from "react-icons/fa";

export default function Designer({ data }) {
  return (
    <Layout>
      <div className="mx-64 mt-60">
        <div>
          <main className="flex" key={data._id}>
            <Image
              src={data.profileimage.url}
              width="200"
              height="200"
              className="rounded-full mb-16"
            />
            <div className="flex flex-col px-32">
              <h2 className="text-2xl font-bold">
                {data.name + " " + data.lastname}
              </h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                ut illum quo, dicta exercitationem, officiis nihil minus,
                reiciendis eum laboriosam cupiditate architecto tempore error
                perferendis tempora magnam distinctio omnis. Vel nobis possimus
                omnis deleniti animi consectetur!
              </p>
              <div className="flex gap-8 mt-16">
                <button className="text-[#F4F0BB] bg-[#1B5B45] text-xl px-6 py-2 font-semibold mx-4 text-center rounded-2xl">
                  Seguir
                </button>{" "}
                <button className="text-[#1B5B45] ring-2 ring-yellow-400 text-xl px-6 py-2 font-semibold mx-4 text-center rounded-2xl">
                  contactar
                </button>
              </div>
            </div>
          </main>
          <hr class="my-8 h-px bg-yellow-300 border-0"></hr>
          <section className="flex flex-col">
            <h3 className="text-2xl font-semibold">Enlaces</h3>
            <ul>
              <li className="flex gap-4">
                {" "}
                <BsInstagram className="mt-1 text-xl" />{" "}
                {data.name + " " + data.lastname}
              </li>
              <li className="flex gap-4">
                {" "}
                <FaFacebookF className="mt-1 text-xl" />
                {data.name + " " + data.lastname}
              </li>
              <li className="flex gap-2">
                {" "}
                <FaBehance className="mt-1 text-xl" />
                {data.name + " " + data.lastname}
              </li>
            </ul>
          </section>
          <hr class="my-8 h-px bg-yellow-300 border-0"></hr>
          <section>
            <h3 className="text-2xl mb-8 font-semibold">Estilos</h3>
            <div className="flex flex-wrap justify-center">
              <div className="flex flex-wrap gap-8 mb-32">
                {data.products.map(({ image, sizes, color, _id }) => (
                  <div>
                    <Link href="/product/[id].jsx" as={`/product/${_id}`}>
                      <Image
                        src={image.url}
                        alt="photo"
                        width="900"
                        height="900"
                        className="w-48 h-48"
                      />
                    </Link>
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
                        <p className=" text-gray-700 text-lg font-semibold ml-8">
                          {sizes}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  try {
    const res = await fetch("https://c8-43-m-mern.vercel.app/products/sellers");
    const data = await res.json();
    const paths = data.map(({ _id }) => ({ params: { id: `${_id}` } }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch("https://c8-43-m-mern.vercel.app/seller/" + params.id);
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
