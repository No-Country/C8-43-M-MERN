import { Button } from "@nextui-org/react";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "./../styles/home.module.css";
import { ImStarEmpty } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

export default function Designer({ data }) {
  return (
    <Layout>
      <div className="mx-64 mt-60">
        <main className="flex">
          <Image
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            width="600"
            height="600"
            className="rounded-full mb-16"
          />
          <div className="flex flex-col px-32">
            <h2 className="text-2xl font-bold">Maxi Man</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ut
              illum quo, dicta exercitationem, officiis nihil minus, reiciendis
              eum laboriosam cupiditate architecto tempore error perferendis
              tempora magnam distinctio omnis. Vel nobis possimus omnis deleniti
              animi consectetur!
            </p>
            <div className="flex gap-8 mt-16">
              <Button color="success" size="sm">
                Seguir
              </Button>
              <Button bordered color="success" size="sm">
                Contactar
              </Button>
            </div>
          </div>
        </main>
        <hr class="my-8 h-px bg-yellow-300 border-0"></hr>
        <section className="flex flex-col">
          <h3 className="text-2xl font-semibold">Enlaces</h3>
          <ul>
            <li>Maxi Man</li>
            <li>Maxi Man</li>
            <li>Maxi Man</li>
          </ul>
        </section>
        <hr class="my-8 h-px bg-yellow-300 border-0"></hr>
        <section>
          <h3 className="text-2xl mb-8 font-semibold">Estilos</h3>
          <div className="flex flex-wrap justify-center">
            {data.map(({ price, image, _id }) => (
              <Link href={`${_id}`} className={styles.container} key={_id}>
                {/* Card */}
                <Image
                  src={image[0]}
                  alt="photo"
                  width="800"
                  height="800"
                  className="w-72 h-72"
                />
                <div className={styles.icon}>
                  <ImStarEmpty />
                </div>
                <div className={styles.text}>{price}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:4000/products/all");
    const data = await res.json();
    console.log(data);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
