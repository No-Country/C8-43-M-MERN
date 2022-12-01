import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "./../../styles/Home.module.css";
import { useState } from "react";

export default function Product({ data }) {
  const [quantity, setQuantity] = useState(0);

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const deleteQuantity = () => {
    setQuantity(quantity - 1);
  };

  return (
    <Layout>
      <div className="container mx-auto">
        <main className="flex gap-36 ml-96 pt-48">
          <div className="mt-8">
            <div className="pb-8">
              <span className="text-[#F4F0BB] bg-[#1B5B45] text-lg p-2 font-semibold text-center rounded-2xl">
                Stock disponible
              </span>
            </div>
            <Image
              src={data.image.url}
              alt="photo"
              width="800"
              height="800"
              className="w-72 h-72"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-semibold text-green-800">
              {data.name}
            </h2>
            <span className="text-green-800 text-center font-semibold text-4xl p-4 mx-4 bg-[#F4F0BB] rounded-2xl">
              ${data.price}
            </span>
            <h4 className="text-2xl text-green-800">Talles</h4>
            <span className="text-[#F4F0BB] bg-[#1B5B45] text-2xl font-semibold p-2 mx-8 text-center rounded-2xl">
              Xxl-Xl-L
            </span>
            <h4 className="text-2xl text-green-800">Colores</h4>
            <div className="flex">
              <div className={styles.circleBlack}></div>
              <div className={styles.circleGreen}></div>
            </div>
            <div className="flex flex-col">
              <h4 className="text-2xl text-green-800 my-8">Cantidad</h4>
              <div className="flex pl-8 gap-8">
                <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteQuantity();
                    }}
                    className="text-2xl text-[#1B5B45]"
                  >
                    -
                  </button>
                </div>
                <span className="px-4 py-2 font-semibold text-lg bg-[#1B5B45] rounded-lg text-[#F4F0BB]">
                  {quantity}
                </span>
                <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addQuantity();
                    }}
                    className="text-2xl text-[#1B5B45]"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <hr class="my-8 h-px bg-yellow-300 border-0"></hr>
        <section className="my-16">
          <p className="text-2xl text-bold px-16 my-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            autem voluptatem consequuntur nesciunt ullam nisi doloremque
            laboriosam ea. Aliquid quaerat explicabo earum suscipit quos nulla?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex justify-center gap-16">
            <button className="text-[#F4F0BB] bg-[#1B5B45] text-xl px-6 py-2 font-semibold mx-4 text-center rounded-2xl">
              Solicitar Producto
            </button>{" "}
            <button className="text-[#1B5B45] ring-2 ring-yellow-400 text-xl px-6 py-2 font-semibold mx-4 text-center rounded-2xl">
              Hacer un pedido especial
            </button>
          </div>
        </section>
        <hr class="my-8 h-px bg-yellow-300 border-0"></hr>
        <section className="flex my-32">
          <div className="flex flex-col gap-8 px-8 ml-32">
            <h4 className="text-[#1B5B45] text-lg text-center">
              Información del diseñador
            </h4>
            <Image
              src={data.seller.profileimage.url}
              width="600"
              height="600"
              className="rounded-full mb-16"
            />
          </div>
          <div className="flex flex-col py-16 mx-32 gap-8">
            <h2 className="text-4xl font-bold text-[#1B5B45]">
              {data.seller.name + " " + data.seller.lastname}
            </h2>
            <p className="text-lg text-[#1B5B45]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ut
              illum quo, dicta exercitationem, officiis nihil minus, reiciendis
              eum laboriosam cupiditate architecto tempore error perferendis
              tempora magnam distinctio omnis. Vel nobis possimus omnis deleniti
              animi consectetur!
            </p>
            <div>
              <button className="text-[#F4F0BB] bg-[#1B5B45] text-xl font-semibold px-8 py-2 text-center rounded-2xl">
                Seguir
              </button>
            </div>
            <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-[#1B5B45]">
              Dirección
            </h2>
            <p className="text-lg text-[#1B5B45]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ut
              illum quo, dicta exercitationem, officiis nihil minus, reiciendis
              eum laboriosam cupiditate architecto tempore error perferendis
              tempora magnam distinctio omnis. Vel nobis possimus omnis deleniti
              animi consectetur!
            </p>
            </div>
          </div>
        </section>
        <hr class="my-8 h-px bg-yellow-300 border-0"></hr>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const res = await fetch("http://localhost:3001/products/all");
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
    const res = await fetch("http://localhost:3001/products/" + params.id);
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
