import Layout from "../components/Layout";

function carrito() {
  return (
    <Layout>
      <section className="flex justify-center items-center">
        <div className="flex w-[95%] overflow-x-scroll ">
          <div className="min-w-full">
            <header className="mt-[100px] mb-[60px]">
              <div className="flex items-center justify-center relative max-w-[520px] mx-auto">
                <div className="bg-[#1B5B45] w-[400px] h-[10px] absolute z-0 "></div>

                <article className="bg-[#1B5B45] w-[77px] h-[77px] rounded-full flex items-center justify-center relative">
                  <p className="text-center text-white text-[12px] mx-[12px]">
                    Elije tu prenda
                  </p>
                </article>

                <article className="bg-[#1B5B45] w-[77px] h-[77px] rounded-full flex items-center justify-center relative mx-[125px]">
                  <p className="text-center text-white text-[12px] mx-[12px]">
                    confirma tu compra
                  </p>
                </article>

                <article className="absolute border w-[110px] right-[105px] -botton-[100px]">
                  <p className="text-[10px] text-center  text-[#1B5B45]">
                    Haz click en:Continuar con la compra
                  </p>
                </article>

                <article className="bg-[#87C38F] w-[77px] h-[77px] rounded-full flex items-center justify-center relative">
                  <p className="text-center text-white text-[12px] mx-[12px]"></p>
                </article>
              </div>
            </header>

            <article className="w-[95%] mx-auto flex flex-col justify-center items-center gap-[20px]">
              <header className="">
                <h3>Camisa florel</h3>
              </header>
              <article className="flex gap-[15px]">
                <div className="flex flex-col gap-[20px]">
                  <header className="w-[380px] h-[290px] bg-black"></header>
                  <div className="bg-[#F4F0BB] w-[380px] h-[135px] rounded-[25px] flex flex-col justify-center">
                    <ul className="m-[25px]">
                      <li className="flex justify-between text-[#1B5B45]  font-[20px]">
                        <p>Talle:L</p>
                        <p>Precio:17USD</p>
                      </li>
                      <li className="flex justify-between text-[#1B5B45] font-[20px] ">
                        <p>Color:Verde suave</p>
                      </li>
                      <li className="flex justify-between text-[#1B5B45] font-[20px]">
                        <p>Cantidad:1</p>
                        <button className="w-[155px] h-[35px] rounded-[5px] border-green-800">
                          Deseleccionar
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <header className="flex gap-[25px] items-center ml-[10px]">
                    <div className="text-[#1B5B45] font-medium">
                      <p className="font-bold">Ingresar codigo postal</p>
                      <p className="">Para calcular costos de envio</p>
                    </div>
                    <div className="w-[75px] h-[50px] border flex items-center justify-center rounded-[10px]">
                      <p>400</p>
                    </div>
                  </header>
                  <div className="w-[380px] h-[240px] rounded-[25px] bg-[#F4D58D] flex items-center">
                    <ul className="w-full m-[15px] font-medium ">
                      <li className="flex justify-between">
                        <p>Precio:</p>
                        <p>17 USD</p>
                      </li>
                      <li className="flex justify-between">
                        <p>IVA 33%:</p>
                        <p>23.66 USD</p>
                      </li>
                      <li className="flex justify-between">
                        <p>Envio:</p>
                        <p> 500 ARS</p>
                      </li>
                      <li className="flex justify-between mt-[60px]">
                        <p>Total a pagar</p>
                        <p className="font-bold ">7598 ARS</p>
                      </li>
                    </ul>
                  </div>
                  <button className="w-[375px] h-[50px] rounded-[15px] bg-[#1B5B45] font-medium  text-white mt-[60px]">
                    Continuar con la compra
                  </button>
                </div>
              </article>
            </article>
          </div>

          <div className="min-w-full">
            <header className="mt-[100px] mb-[60px]">
              <div className="flex items-center justify-center relative max-w-[520px] mx-auto">
                <div className="bg-[#1B5B45] w-[400px] h-[10px] absolute z-0 "></div>

                <article className="bg-[#1B5B45] w-[77px] h-[77px] rounded-full flex items-center justify-center relative">
                  <p className="text-center text-white text-[12px] mx-[12px]">
                    Elije tu prenda
                  </p>
                </article>

                <article className="bg-[#1B5B45] w-[77px] h-[77px] rounded-full flex items-center justify-center relative mx-[125px]">
                  <p className="text-center text-white text-[12px] mx-[12px]">
                    confirma tu compra
                  </p>
                </article>

                <article className="absolute border w-[110px] right-[105px] -botton-[100px]">
                  <p className="text-[10px] text-center text-[#1B5B45]">
                    Haz click en:Continuar con la compra
                  </p>
                </article>

                <article className="bg-[#87C38F] w-[77px] h-[77px] rounded-full flex items-center justify-center relative">
                  <p className="text-center text-white text-[12px] mx-[12px]"></p>
                </article>
              </div>
            </header>

            <article className="w-[95%] mx-auto flex flex-col justify-center items-center gap-[20px]">
              <header className="">
                <h3>Camisa florel</h3>
              </header>
              <article className="flex gap-[15px]">
                <div className="flex flex-col gap-[20px]">
                  <header className="w-[380px] h-[290px] bg-black"></header>
                  <div className="bg-[#F4F0BB] w-[380px] h-[135px] rounded-[25px] flex flex-col justify-center">
                    <ul className="m-[25px]">
                      <li className="flex justify-between text-[#1B5B45] font-medium ">
                        <p>Talle:L</p>
                        <p>Precio:17USD</p>
                      </li>
                      <li className="flex justify-between text-[#1B5B45] font-medium ">
                        <p>Color:Verde suave</p>
                      </li>
                      <li className="flex justify-between text-[#1B5B45] font-medium ">
                        <p>Cantidad:1</p>
                        <button className="w-[155px] h-[35px] rounded-[5px] border-green-800">
                          Deseleccionar
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <header className="flex gap-[25px] items-center ml-[10px]">
                    <div className="text-[#1B5B45] font-medium ">
                      <p className="font-bold">Ingresar codigo postal</p>
                      <p className="">Para calcular costos de envio</p>
                    </div>
                    <div className="w-[75px] h-[50px] border flex items-center justify-center rounded-[10px]">
                      <p>400</p>
                    </div>
                  </header>
                  <div className="w-[380px] h-[240px] rounded-[25px] bg-[#F4D58D] flex items-center">
                    <ul className="w-full m-[15px] font-medium ">
                      <li className="flex justify-between">
                        <p>Precio:</p>
                        <p>17 USD</p>
                      </li>
                      <li className="flex justify-between">
                        <p>IVA 33%:</p>
                        <p>23.66 USD</p>
                      </li>
                      <li className="flex justify-between">
                        <p>Envio:</p>
                        <p> 500 ARS</p>
                      </li>
                      <li className="flex justify-between mt-[60px]">
                        <p>Total a pagar</p>
                        <p className="font-bold">7598 ARS</p>
                      </li>
                    </ul>
                  </div>
                  <button className="w-[375px] h-[50px] rounded-[15px] bg-[#1B5B45] font-medium  text-white mt-[60px]">
                    Continuar con la compra
                  </button>
                </div>
              </article>
            </article>
          </div>

          <div className="min-w-full bg-[#1B5B45] flex flex-col justify-center items-center">
            <header>
              <p className="text-center font-medium text-[64px] text-white w-[580px]">
                Muchas gracias por tu compra
              </p>
            </header>
            <div className="flex flex-col items-center justify-center">
              <p className="text-center text-white font-medium text-[28px] my-[65px]">
                Su orden de compra es #123456
              </p>
              <p className="text-center text-white font-medium text-[28px]">
                Te mandaremos un email confirmando los detalles de su compra
              </p>
              <button className="w-[580px] h-[80px] rounded-[15px] bg-[#F4F0BB] font-medium  text-[#1B5B45] mx-auto">
                Seguir explorando nuevos artistas
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default carrito;
