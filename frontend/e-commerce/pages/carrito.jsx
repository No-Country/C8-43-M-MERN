import { useState } from "react";
import ArticleCart from "../components/cart/ArticleCart";
import DeleteModalCart from "../components/cart/DeleteModalCart";
import Layout from "../components/Layout";
import Link from "next/link";


function Carrito() {

    const [isActiveModal, setIsActiveModal] = useState(false)

    return (
        <Layout>
            <section className="flex justify-center items-center">

                <article className={`fixed duration-[1s]   ${isActiveModal ? 'top-[40vh] z-50' : 'top-[-30vh] z-0'}`}>
                    <DeleteModalCart setIsActiveModal={setIsActiveModal} />
                </article>

                <div className="flex flex-col w-[95%] justify-center items-center pb-[100px] ">

                    <header className="mt-[100px] mb-[60px]" >
                        <div className="flex items-center justify-center relative max-w-[520px] mx-auto ">

                            <div className="bg-[#1B5B45] w-[400px] h-[10px] absolute z-0 "></div>

                            <article className="bg-[#1B5B45] w-[77px] h-[77px] rounded-full flex items-center justify-center relative">
                                <p className="text-center  text-[12px] mx-[12px] font-[500] text-[#F4F0BB]">Elije tu prenda</p>
                            </article>

                            <article className="bg-[#1B5B45] w-[77px] h-[77px] rounded-full flex items-center justify-center relative mx-[125px]">
                                <p className="text-center  text-[12px] mx-[12px] font-[500] text-[#F4F0BB]">confirma tu compra</p>
                            </article>

                            <article className="absolute w-[110px] right-[87px] -bottom-[5px]">
                                <p className="text-[10px] font-[500] text-center text-[#1B5B45] font-[500]">Haz click en: <br /> Continuar con la compra</p>
                            </article>

                            <article className="bg-[#87C38F] w-[77px] h-[77px] rounded-full flex items-center justify-center relative">
                                <p className="text-center text-[12px] mx-[12px] font-[500] text-[#F4F0BB]"></p>
                            </article>

                        </div>
                    </header>

                    <div className="flex gap-[20px]">

                        <section>
                            <ArticleCart setIsActiveModal={setIsActiveModal} />
                            <ArticleCart setIsActiveModal={setIsActiveModal} />
                        </section>

                        <section>
                            <article className="mt-[55px]">

                                <header className='flex gap-[25px] items-center ml-[10px] mb-[40px]'>

                                    <div className=''>
                                        <p className="text-[#1B5B45] font-[300] text-[20px]">
                                            <span className='font-bold'>
                                                Calcularemos los costos del <br /> envio,
                                            </span>
                                            ingresa tu codigo postal
                                        </p>
                                    </div>

                                    <div className='w-[75px] h-[50px] border-[3px] border-[#1B5B45] flex items-center justify-center rounded-[10px]'>
                                        <p className="font-[500] text-[20px]">4000</p>
                                    </div>

                                </header>

                                <div className='w-[380px] h-[240px] rounded-[25px] bg-[#F4D58D] flex items-center justify-center'>
                                    <ul className='w-full m-[25px] mb-[10px] font-medium '>
                                        <li className='flex justify-between'>
                                            <p className="font-[500] text-[20px]">Precio:</p>
                                            <p className="font-[500] text-[20px]">17 USD</p>
                                        </li>
                                        <li className='flex justify-between'>
                                            <p className="font-[500] text-[20px]">IVA 33%:</p>
                                            <p className="font-[500] text-[20px]">23.66 USD</p>
                                        </li>
                                        <li className='flex justify-between'>
                                            <p className="font-[500] text-[20px]">Envio:</p>
                                            <p className="font-[500] text-[20px]"> 500 ARS</p>
                                        </li>
                                        <li className='flex justify-between mt-[60px]'>
                                            <p className="font-[500] text-[20px]">Total a pagar</p>
                                            <p className='font-[700] text-[28px]'>7598 ARS</p>
                                        </li>
                                    </ul>
                                </div>

                                <Link href='/compra-completa'>
                                    <button className='w-[375px] h-[50px] rounded-[15px] bg-[#1B5B45] font-medium font-[25px] text-white mt-[60px]'>
                                        <p className="font-[500] text-[24px] text-[#F4F0BB]">Continuar con la compra</p>
                                    </button>
                                </Link>

                            </article>
                        </section>

                    </div>

                </div>

            </section>
        </Layout>
    )
}

export default Carrito