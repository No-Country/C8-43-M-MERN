import React from 'react'
import Link from "next/link";
import Layout from "../components/Layout";


const Compra = () => {
    return (
        <Layout>
            <section className='bg-[#1B5B45] w-[100vw] min-h-[100vh] flex  justify-center absolute top-[0px] left-[0px]'>

                <article className='flex flex-col items-center justify-start w-[95%] mx-auto mt-[170px] pb-[270px]'>
                    <header className='mb-[70px]'>
                        <p className='font-[500] text-[64px] text-white text-center'>Muchas gracias por <br /> tu compra</p>
                    </header>
                    <div className='flex flex-col gap-[70px] mb-[45px]'>
                        <p className='font-[500] text-[white] text-[28px] text-center'>Su orden de compra es de #123456</p>
                        <p className='font-[500] text-[white] text-[28px] text-center'>Te mandaremos un email confirmando los detalles de su compra</p>
                    </div>
                    <footer>
                        <Link href='/'>
                            <button className='w-[580px] h-[80px] rounded-[15px] bg-[#F4F0BB] flex items-center justify-center'>
                                <p className='font-[500] text-[28px] text-[#1B5B45]'>Seguir explorando nuevos artistas</p>
                            </button>
                        </Link>
                    </footer>
                </article>

            </section>
        </Layout>
    )
}

export default Compra