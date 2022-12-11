import React from 'react'
import Layout from "../components/Layout";


const Mercado = () => {
    return (
        <Layout>
            <section className='border'>
                <header className="mt-[100px] mb-[60px]" >
                    <div className="flex items-center justify-center relative max-w-[520px] mx-auto ">

                        <div className="bg-[#1B5B45] w-[400px] h-[10px] absolute z-0 "></div>

                        <article className="bg-[#1B5B45] w-[77px] h-[77px] rounded-full flex items-center justify-center relative">
                            <p className="text-center  text-[12px] mx-[12px] font-[500] text-[#F4F0BB]">Elije tu prenda</p>
                        </article>

                        <article className="bg-[#1B5B45] w-[77px] h-[77px] rounded-full flex items-center justify-center relative mx-[125px]">
                            <p className="text-center  text-[12px] mx-[12px] font-[500] text-[#F4F0BB]">confirma tu compra</p>
                        </article>

                        <article className="absolute w-[150px] right-[-115px] bottom-[10px]">
                            <p className="text-[12px] font-[500] text-center text-[#1B5B45]">
                                si todo esta en orden <br />
                                te invitamos a <br />
                                finalizar tu compra
                            </p>
                        </article>

                        <article className="bg-[#1B5B45] w-[77px] h-[77px] rounded-full flex items-center justify-center relative">
                            <p className="text-center  text-[12px] mx-[12px] font-[500] text-[#F4F0BB]">Selecciona <br /> tu pago</p>
                        </article>

                    </div>
                </header>

                <article className='w-[95%] m-auto flex flex-col justify-center items-center pb-[120px]'>

                    <header className='flex gap-[25px]'>
                        <button className='w-[280px] h-[115px] rounded-[15px] text-[#F4F0BB] bg-[#1B5B45] border-[#1B5B45] border-[2px] text-[24px] font-[300]'>Ingresar a tu <br /> Cuenta de usuario</button>
                        <button className='w-[280px] h-[115px] rounded-[15px] text-[#1B5B45] border-[#1B5B45] border-[2px] text-[24px] font-[300]'>Crear cuenta de <br /> usuario</button>
                    </header>

                    <div className='mt-[45px] flex flex-col items-center'>

                        <header className='self-start'>
                            <p className='font-[500] text-[24px] text-[#1B5B45]'>Metodo Pago</p>
                        </header>

                        <article className='bg-[#F4F0BB] w-[580px] h-[275px] rounded-[15px] '>

                            <header className='w-full border'>
                                <div className='flex justify-between mx-[20px] mt-[10px] mb-[20px]'>
                                    <p className='font-[500] text-[24px]'>Tarjeta de credito</p>
                                    <button className='w-[150px] h-[35px] rounded-[10px] border-[2px] border-[#1B5B45] flex items-center justify-center '>
                                        <p className=' text-[#000000] text-[24px] font-[400]'>Ver cuotas</p>
                                    </button>
                                </div>
                                <img className='w-[370px] h-[40px] ml-[20px]' src="" alt="" />
                            </header>

                            <div>
                                <form className='flex flex-row-reverse justify-center items-center gap-[25px] mx-[20px] mt-[25px] mb-[15px]' action="">
                                    <label className='font-[400] text-[16px]' htmlFor="">Numero de Tarjeta de credito</label>
                                    <input className='w-[360px] h-[40px] rounded-[10px]' type="text" />
                                </form>
                            </div>

                            <hr className='bg-white mx-[20px] h-[3px]' />

                            <footer className='flex justify-between mx-[20px] mt-[15px]'>
                                <p>Mercado Pago</p>
                                <button className='w-[150px] h-[35px] rounded-[10px] border-[2px] border-[#1B5B45] flex items-center justify-center'>
                                    <p className='font-[400] text-[24px]'>Link</p>
                                </button>
                            </footer>

                        </article>

                        <footer className='mt-[30px] '>
                            <div className='flex justify-between items-center mb-[35px]'>
                                <p className='font-[500] text-[20px] text-[#1B5B45]'>Total a pagar</p>
                                <p className='font-[700] text-[28px] text-[#1B5B45]'>7598 ARS</p>
                            </div>
                            <button className='w-[375px] h-[50px] rounded-[15px] bg-[#1B5B45] flex items-center justify-center'>
                                <p className='font-[500] text-[24px] text-[#F4F0BB]'>Finalizar compra</p>
                            </button>
                        </footer>

                    </div>

                </article>

            </section>
        </Layout>
    )
}

export default Mercado