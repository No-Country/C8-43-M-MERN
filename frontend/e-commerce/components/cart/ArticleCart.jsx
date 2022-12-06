import Image from "next/image";
import React from "react";
import { useProduct } from "../../context/ProductContext";


const ArticleCart = ({ setIsActiveModal }) => {
  const { cart } = useProduct();

  return (
    <article className="flex flex-col justify-center items-center gap-[20px] mb-[60px]">
      {cart.map((cart) => (
        <div>
          <header className="w-full">
            <h3 className="font-[500] text-[32px] text-[#1B5B45]">
              {cart.name}
            </h3>
          </header>

          <div className="flex flex-col gap-[20px]">
            <Image src={cart.image.url} width="800" height="800" alt={cart.name} className="w-[380px] h-[290px] rounded-2xl" />

            <div className="bg-[#F4F0BB] w-[380px] h-[135px] rounded-[25px] flex flex-col justify-center">
              <ul className="m-[25px]">
                <li className="flex justify-between ">
                  <p className="font-[500] text-[20px] text-[#1B5B45]">
                    Talle: L
                  </p>
                  <p className="font-[500] text-[20px] text-[#1B5B45]">
                    Precio: $ {cart.price}
                  </p>
                </li>
                <li className="flex justify-between">
                  <p className="font-[500] text-[20px] text-[#1B5B45]">
                    Color: {cart.color}
                  </p>
                </li>
                <li className="flex justify-between">
                  <p className="font-[500] text-[20px] text-[#1B5B45]">
                    Cantidad: 1
                  </p>
                  <button
                    onClick={() => setIsActiveModal(true)}
                    className="w-[155px] h-[35px] rounded-[8px] border-[#1B5B45] border-[2px] flex items-center justify-center hover:bg-[#1B5B45] text-[#1B5B45] hover:text-[#F4F0BB] duration-[0.2s]"
                  >
                    <p className="font-[500] text-[20px] ">Deseleccionar</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>))}
    </article>
  );
};

export default ArticleCart;
