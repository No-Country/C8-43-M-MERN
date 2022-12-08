import Head from "next/head";
import Layout from "../components/Layout";


function Nosotros() {
    return (
        <Layout>
            <div>

                <Head>
                    <title>Sobre Nosotros</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/img/logo4.png" />
                </Head>

                <section className="mt-[140px] flex flex-col items-center justify-center w-[95%] gap-[70px] max-w-[1024px] mx-auto">


                    <article className="flex flex-col items-center justify-center w-[835px]">
                        <header className="col-span-2 mb-[30px] self-start mx-auto  w-[100vw] md:ml-0  ">
                            <p className="font-medium text-[29px] sm:text-[32px] ml-[50px] mx-auto text-[#1B5B45] ">Nuestra Misión</p>
                        </header>
                        {/*}flex w-[100%] flex-row gap-[15px] col-span-2 justify-between{*/}
                        <div className="flex md:w-[100%] flex-col sm:flex-row md:gap-[15px] col-span-2 md:justify-between items-center">
                            <div className="">
                                <img className="max-w-[290px] max-h-[250px] sm:min-w-[290px] min-h-[250px] " src="/img/sobre-nosotros/Mask group.png" alt="" />
                            </div>
                            {/*}w-[80%] mx-auto md:text-start text-center max-w-[510px] h-[240px] flex flex-col gap-[20px]{*/}
                            
                            <div className="w-[100%] sm:w-[60%] md:w-[80%] md:mx-auto sm:text-start text-center max-w-[510px] h-[240px] flex flex-col gap-[20px]">
                                <p className="text-[#1B5B45] text-[18px] md:text-[20px] mr-[0px] font-[300] ">Argentina es un pais lleno de talento.</p>
                                <p className="text-[#1B5B45] text-[18px] md:text-[20px] mr-[0px] font-[300] "> Queremos que la gente tenga la oportunidad <br /> de conocerlos.</p>
                                <p className="text-[#1B5B45] text-[18px] md:text-[20px] mr-[0px] font-[300] ">Queremos que el mundo conozca el diseño <br /> de indumentaria Argentino, empezando por <br /> la Argentina misma.</p>
                            </div>
                        </div>
                    </article>

                    <article className="flex flex-col items-center justify-center w-[835px]">
                        <header className="col-span-4 sm:self-start w-[100vw] ">
                            <p className="font-medium text-[29px] sm:text-[32px] my-8 w-[80%] ml-[50px] sm:w-[100%] sm:ml-[7px] text-[#1B5B45]">Nuestros propositos valores</p>
                        </header>
                        <div className="flex flex-col md:flex-wrap gap-[80px] justify-center">

                            <article className="">
                                <header className="">
                                    <img className="w-[160px] h-[160px]  rounded-full mb-4 mx-auto " src="/img/sobre-nosotros/Group 1335.png" alt="" />
                                    <p className="text-center font-[500] text-[24px] text-[#1B5B45]">Alentar</p>
                                </header>
                                <div className="">
                                    <p className="w-[225px] text-center font-[300] text-[17px] text-[#1B5B45]">
                                        <span className="font-[700]">¡Queremos que te muestres!</span> Como diseñador y como persona.
                                        <br /><br />
                                        Queremos verte llegar lejos con tus ideas y que <span className="font-[700]">la gente conozca tu nombre.</span>
                                    </p>
                                </div>
                            </article>

                            <article>
                                <header>
                                    <img className="w-[200px] h-[160px] rounded-full mb-4 mx-auto " src="/img/sobre-nosotros/Group 1334.png" alt="" />
                                    <p className="text-center font-medium text-[24px] text-[#1B5B45]">Crear oportunidades</p>
                                </header>
                                <div className="">
                                    <p className="w-[225px] text-center text-[17px] font-[300] text-[#1B5B45]">
                                        Creemos en que el trabajo duro tiene su recompensa.
                                        <br /><br />
                                        Queremos darte este <span className="font-[700]">espacio</span> para que lo puedas <span className="font-[700]">usar</span> de <span className="font-[700]">portafolio</span>  y que el mismo justifique una experiencia de trabajo.
                                        <br /><br />
                                        No solo lo diseñaste, <span className="font-[700]">¡Lo hiciste y lo vendiste!</span>
                                    </p>
                                </div>
                            </article>

                            <article>
                                <header>
                                    <img className="w-[210px] h-[160px]  rounded-full mb-4 mx-auto " src="/img/sobre-nosotros/Group 1336.png" alt="" />
                                    <p className="text-center font-medium text-[24px] text-[#1B5B45]">¡¡Hacer conocer <br /> Argentina!!</p>
                                </header>
                                <div className="">
                                    <p className="w-[225px] text-center font-[300] text-[17px] text-[#1B5B45]">
                                        No basta con que Argentina conozca a sus diseñadores.
                                        <br /><br />
                                        El mundo tiene que conocer Argentina por su moda y creatividad.
                                        <br /><br />
                                        Estamos cerca... <span className="font-[700]">¡Estemos por delante de nuestro objetivos!</span>
                                    </p>
                                </div>
                            </article>

                        </div>

                    </article>

                    <article className="flex flex-col items-center self-center w-[835px]">
                        <header className="self-start m-auto md:ml-0 w-[100vw]">
                            <h3 className="font-medium text-[29px] sm:text-[32px] ml-[40px] text-[#1B5B45] my-8 ml-[7px]">¿Que te ofrecemos?</h3>
                        </header>

                        <article className="flex mb-14 sm:self-start ">
                            <div className="flex flex-col sm:flex-row gap-4 justigy-between">
                                <div className="" >
                                    <img className="w-[85vw] max-w-[450px] h-[25vh] sm:h-[235px] m-auto" src="/img/sobre-nosotros/Mask group (1).png" alt="" />
                                </div>
                                <div className="w-[95%] mx-auto  max-w-[450px] flex justify-end">
                                    <p className="text-[17px] sm:text-[20px] text-center font-[300] text-[#1B5B45]">
                                        <span className="font-[700]">Un espacio solo para diseñadores </span>   donde no <br />
                                        tendras que competir con grandes marcas, <br />
                                        un lugar donde se pueda valorar tus diseños <br />
                                        por su estilo unico e inigualable que sos vos.
                                    </p>
                                </div>
                            </div>
                        </article>

                        <article className="flex mb-14 sm:self-end">
                            <div className="flex flex-col sm:flex-row-reverse gap-4 justigy-between">
                                <div >
                                    <img className="w-[88vw] max-w-[460px] h-[27vh] sm:h-[235px] col-start-2 m-auto" src="/img/sobre-nosotros/Mask group (2).png" alt="" />
                                </div>
                                <div className="w-[80%] text-center mx-auto max-w-[450px] ">
                                    <p className="font-[300] text-[#1B5B45] text-[24px] sm:text-[20px]">
                                        La oportunidad de que tengas <span className="font-[700]"> un <br />
                                        guardaropas unico y diferente</span>, creado por <br />
                                        diseñadores exclusivos de “Valen”.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </article>

                </section>

                <section className="bg-[#1B5B45] pb-[50px]">
                    <article className="flex flex-col max-w-[1024px] mx-auto min-w-[95%] w-[835px]">
                        <header className="mb-[30px] pt-[23px] self-start ">
                            <h3 className="font-medium text-[29px] ml-[40px] sm:text-[32px] text-[#F4F0BB]">Nuestro equipo</h3>

                        </header>
                        <div className="">
                            <ul className="flex w-[80vw] ml-[40px]  flex-wrap gap-[20px] m-0 justify-between text-[#F4F0BB]">

                                <li>
                                    <header className="font-medium text-xl">Frond</header>
                                    <div className="flex flex-col gap-2">
                                        <div>
                                            <p className="font-normal">Barra Gonzalo</p>
                                            <a target={"_blank"} href="https://linkedin.com/in/gonzalo-barra-valle/" className="font-normal text-[#F4F0BB]">Link linkedin</a>
                                        </div>

                                        <div>
                                            <p className="font-normal">Cruz Fabian</p>
                                            <a target={"_blank"} href="https://linkedin.com/in/fabian-cruz-7631a924b/" className="font-normal text-[#F4F0BB]">Link linkedin</a>
                                        </div>

                                        <div>
                                            <p className="font-normal">Martinez Ariel</p>
                                            <a target={"_blank"} href="https://linkedin.com/in/arielstereo" className="font-normal text-[#F4F0BB]">Link linkedin</a>
                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <header className="font-medium text-xl">Back</header>
                                    <div className="flex flex-col gap-2">
                                        <div>
                                            <p className="font-normal">Aguada Braian</p>
                                            <a target={"_blank"} href="https://linkedin.com/in/braian-aguada/" className="font-normal text-[#F4F0BB]">Link linkedin</a>
                                        </div>

                                        <div>
                                            <p className="font-normal">Cacciolatti Cristian</p>
                                            <a target={"_blank"} href="https://linkedin.com/in/cristiancacciolatti/" className="font-normal text-[#F4F0BB]">Link linkedin</a>
                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <header className="font-medium text-xl">Tester</header>
                                    <div className="flex flex-col gap-2">
                                        <div>
                                            <p className="font-normal">Gerlo Daniela</p>
                                            <a target={'_blank'} href='https://linkedin.com/in/daniela-gerlo' className="font-normal text-[#F4F0BB]">Link linkedin</a>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <header className="font-medium text-xl">UX/UI</header>
                                    <div className="flex flex-col gap-2">
                                        <div>
                                            <p className="font-normal">Robles Vega Exequiel</p>
                                            <a target={"_blank"} href="https://linkedin.com/in/exequiel-robles-vega-b9432b211/" className="font-normal text-[#F4F0BB]">Link linkedin</a>
                                        </div>

                                        <div>
                                            <p className="font-normal">Vargas Gerardo</p>
                                            <a target={"_blank"} href="https://linkedin.com/in/geravargas/" className="font-normal text-[#F4F0BB]">Link linkedin</a>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </article>
                </section>

            </div>
        </Layout>
    )
}

export default Nosotros