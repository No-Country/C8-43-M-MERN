import Image from "next/image";
import Layout from "../components/Layout";
import styles from "./../styles/product.module.css";
import { Badge } from "@nextui-org/react";

export default function Product({ data }) {
  return (
    <Layout>
      <div className="flex gap-32 mx-64 pt-48">
        <div>
          <h2 className="text-2xl pl-16 font-semibold">{data.name}</h2>

          <Image
            src={data.image[0]}
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
        <div>
          <Badge size="lg">Stock disponible</Badge>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const res = await fetch("http://localhost:4000/products/all");
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
    const res = await fetch("http://localhost:4000/products/" + params.id);
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
