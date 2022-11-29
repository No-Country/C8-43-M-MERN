import Image from "next/image";
import Layout from "../components/Layout";
import styles from "./../styles/product.module.css";
import { Badge } from "@nextui-org/react";
import { useState } from "react";

export default function Product({ data }) {

  const [quantity, setQuantity] = useState(0);

  const addQuantity = () => {
    setQuantity(quantity +1);
  };

  const deleteQuantity = () => {
    setQuantity(quantity -1)
  }

  return (
    <Layout>
      <div className="flex gap-32 mx-64 pt-48">
        <div>
          <h2 className="text-2xl pl-16 font-semibold">{data.name}</h2>
          <Image
            src={data.image.url}
            alt="photo"
            width="800"
            height="800"
            className="w-72 h-72"
          />
          <div className="flex mt-4">
            <div className={styles.circleBlack}></div>
            <div className={styles.circleGreen}></div>
            <p className="text-gray-700 text-base font-semibold pl-8">
              Xxl-Xl-L
            </p>
            <span className="text-green-700 font-semibold text-4xl pl-16">
              ${data.price}
            </span>
          </div>
        </div>
      <div className="flex flex-col">
      <div>
          <Badge size="lg">Stock disponible</Badge>
        </div>
      <div className="flex mt-64 gap-8">
        <span>Cantidad</span>
      <div>
          <button onClick={
            (e) => {
              e.stopPropagation();
              deleteQuantity()
            }

          } className="text-xl">
              -
          </button>
          </div>
        <span className="px-2 font-semibold bg-gray-500 rounded-full text-white">{quantity}</span>
        <div>
          <button onClick={
            (e) => {
              e.stopPropagation();
              addQuantity()
            }

          } className="text-xl">
              +
          </button>
        </div>
      </div>
      </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const res = await fetch("https://c8-43-m-mern-jky7pp7ex-valennc.vercel.app/products/all");
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
    const res = await fetch("https://c8-43-m-mern-jky7pp7ex-valennc.vercel.app/products/" + params.id);
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
