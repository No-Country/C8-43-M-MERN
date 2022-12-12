import Image from "next/image";
import { useAuth } from "./../context/AuthContext";
import Layout from "../components/Layout";

const Cliente = () => {
  const { user } = useAuth();

  if (!user || user == "")
    return (
      <Layout>
        <section>
          <div className="w-[95%] mx-16 flex flex-col items-center mt-32">
            <article className="flex gap-[20px]">
              <header className="w-[280px] h-[280px] rounded-[50%] bg-[#D9D9D9]"></header>

              <div>
                <header className="mb-[25px]">
                  <p className="font-[500] text-[32px] text-[#1B5B45] uppercase">
                    User
                  </p>
                </header>
                <div className="mb-[85px]">
                  <p className="font-[300] text-[24px] text-[#1B5B45]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.
                  </p>
                </div>
                <footer>
                  <button className="bg-[#1B5B45] w-[180px] h-[40px] rounded-[15px] flex items-center justify-center">
                    <p className="font-[500] text-[24px] text-[#F4F0BB]">
                      Editar
                    </p>
                  </button>
                </footer>
              </div>
            </article>

            <hr className="w-[780px] h-[3px] border-[1px] border-[#F4D58D] bg-[#F4D58D] mb-[45px] mt-[40px]" />

            <article className="flex flex-col items-center gap-[15px]">
              <header className="self-start">
                <p className="text-[#1B5B45] text-[32px] font-[500]">
                  Mis seguidos
                </p>
              </header>

              <div>
                <ul className="flex gap-[25px] m-[0]">
                  <li className="flex flex-col items-center justify-center">
                    <header className="w-[105px] h-[105px] rounded-[50%] bg-[#D9D9D9]"></header>
                    <p className="w-[90px] font-[500] text-[16px] text-center text-[#000000]">
                      Maximiliano <br /> Man
                    </p>
                  </li>
                  <li className="flex flex-col items-center justify-center">
                    <header className="w-[105px] h-[105px] rounded-[50%] bg-[#D9D9D9]"></header>
                    <p className="w-[90px] font-[500] text-[16px] text-center text-[#000000]">
                      Maximiliano <br /> Man
                    </p>
                  </li>
                  <li className="flex flex-col items-center justify-center">
                    <header className="w-[105px] h-[105px] rounded-[50%] bg-[#D9D9D9]"></header>
                    <p className="w-[90px] font-[500] text-[16px] text-center text-[#000000]">
                      Maximiliano <br /> Man
                    </p>
                  </li>
                  <li className="flex flex-col items-center justify-center">
                    <header className="w-[105px] h-[105px] rounded-[50%] bg-[#D9D9D9]"></header>
                    <p className="w-[90px] font-[500] text-[16px] text-center text-[#000000]">
                      Maximiliano <br /> Man
                    </p>
                  </li>
                  <li className="flex flex-col items-center justify-center">
                    <header className="w-[105px] h-[105px] rounded-[50%] bg-[#D9D9D9]"></header>
                    <p className="w-[90px] font-[500] text-[16px] text-center text-[#000000]">
                      Maximiliano <br /> Man
                    </p>
                  </li>
                  <li className="flex flex-col items-center justify-center">
                    <header className="w-[105px] h-[105px] rounded-[50%] bg-[#D9D9D9]"></header>
                    <p className="w-[90px] font-[500] text-[16px] text-center text-[#000000]">
                      Maximiliano <br /> Man
                    </p>
                  </li>
                </ul>
              </div>

              <footer>
                <button className="w-[180px] h-[40px] mt-[25px] rounded-[15px] border-[3px] border-[#1B5B45] flex items-center justify-center">
                  <p className="font-[500] text-[24px] text-[#1B5B45]">
                    Ver más
                  </p>
                </button>
              </footer>
            </article>

            <hr className="w-[780px] h-[3px] border-[1px] border-[#F4D58D] bg-[#F4D58D] mb-[40px] mt-[45px]" />

            <article className="flex flex-col items-center">
              <header className="mb-[35px] self-start">
                <p className="font-[500] text-[32px] text-[#1B5B45]">
                  Mis favoritos
                </p>
              </header>

              <div>
                <ul className="flex gap-[15px]">
                  <li>
                    <img
                      className="w-[180px] h-[135px] bg-[#D9D9D9]"
                      src=""
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="w-[180px] h-[135px] bg-[#D9D9D9]"
                      src=""
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="w-[180px] h-[135px] bg-[#D9D9D9]"
                      src=""
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="w-[180px] h-[135px] bg-[#D9D9D9]"
                      src=""
                      alt=""
                    />
                  </li>
                </ul>
              </div>

              <footer>
                <button className="w-[180px] h-[40px] mt-[25px] rounded-[15px] border-[3px] border-[#1B5B45] flex items-center justify-center">
                  <p className="font-[500] text-[24px] text-[#1B5B45]">
                    Ver más
                  </p>
                </button>
              </footer>
            </article>

            <hr className="w-[780px] h-[3px] border-[1px] border-[#F4D58D] bg-[#F4D58D] mb-[40px] mt-[45px]" />

            <article>
              <header className="mb-[50px]">
                <p className="font-[500] text-[32px] text-[#1B5B45]">
                  Mis favoritos
                </p>
              </header>
              <div>
                <ul>
                  <li className="flex gap-[15px]">
                    <img
                      className="w-[280px] h-[210px] bg-[#D9D9D9]"
                      src=""
                      alt=""
                    />

                    <div className="w-[480px] h-[240px] rounded-[25px] bg-[#F4F0BB]">
                      <header className="flex justify-between">
                        <p className="font-[500] text-[32px] text-[#1B5B45] mx-[15px]">
                          Camisa florel
                        </p>
                        <p className="font-[500] text-[32px] text-[#1B5B45] mx-[15px]">
                          ...
                        </p>
                      </header>

                      <ul>
                        <li className="flex justify-between">
                          <p className="font-[500] text-[#1B5B45] text-[16px]">
                            Color: Verde suave
                          </p>

                          <div className="flex justify-between w-[170px]">
                            <p className="font-[500] text-[#1B5B45] text-[16px]">
                              Precio:
                            </p>
                            <p className="font-[500] text-[#1B5B45] text-[16px]">
                              17USD
                            </p>
                          </div>
                        </li>

                        <li>
                          <p className="font-[500] text-[#1B5B45] text-[16px]">
                            Talle: L
                          </p>
                        </li>

                        <li className="flex justify-between ">
                          <p className="font-[500] text-[#1B5B45] text-[16px]">
                            Cantidad:1
                          </p>
                          <div className="flex items-center justify-center gap-[30px] ">
                            <p className="font-[500] text-[#1B5B45] text-[16px]">
                              Total <br /> pagado:
                            </p>
                            <p className="font-[700] text-[#1B5B45] text-[16px]">
                              24.110 ARS
                            </p>
                          </div>
                        </li>
                      </ul>

                      <footer className="w-[480px] h-[50px] rounded-[15px] bg-[#87C38F] flex justify-between items-center border-transparent]">
                        <p className="font-[500] text-[16px] text-white mx-[15px]">
                          Dia de compra:17/11/22
                        </p>
                        <p className="font-[500] text-[16px] text-white mx-[15px]">
                          Estado de compra:En camino
                        </p>
                      </footer>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </Layout>
    );
  return (
    <Layout>
      <section>
        <div className="w-[95%] mx-16 flex flex-col items-center mt-32">
          <article className="flex gap-[20px]">
            <header>
              <Image src={user.profileimage.url} width="400" height="400" />
            </header>

            <div>
              <header className="mb-[25px]">
                <p className="font-[500] text-[32px] text-[#1B5B45] uppercase">
                  {user.name + " " + user.lastname}
                </p>
              </header>
              <div className="mb-[85px]">
                <p className="font-[300] text-[24px] text-[#1B5B45]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis.
                </p>
              </div>
              <footer>
                <button className="bg-[#1B5B45] w-[180px] h-[40px] rounded-[15px] flex items-center justify-center">
                  <p className="font-[500] text-[24px] text-[#F4F0BB]">
                    Editar
                  </p>
                </button>
              </footer>
            </div>
          </article>

          <hr className="w-[780px] h-[3px] border-[1px] border-[#F4D58D] bg-[#F4D58D] mb-[45px] mt-[40px]" />

          <article className="flex flex-col items-center gap-[15px]">
            <header className="self-start">
              <p className="text-[#1B5B45] text-[32px] font-[500]">
                Mis seguidos
              </p>
            </header>

            <div>
              <ul className="flex gap-[25px] m-[0]">
                <li className="flex flex-col items-center justify-center">
                  <header className="w-[105px] h-[105px] rounded-[50%] bg-[#D9D9D9]"></header>
                  <p className="w-[90px] font-[500] text-[16px] text-center text-[#000000]">
                    Maximiliano <br /> Man
                  </p>
                </li>
                <li className="flex flex-col items-center justify-center">
                  <header className="w-[105px] h-[105px] rounded-[50%] bg-[#D9D9D9]"></header>
                  <p className="w-[90px] font-[500] text-[16px] text-center text-[#000000]">
                    Maximiliano <br /> Man
                  </p>
                </li>
                <li className="flex flex-col items-center justify-center">
                  <header className="w-[105px] h-[105px] rounded-[50%] bg-[#D9D9D9]"></header>
                  <p className="w-[90px] font-[500] text-[16px] text-center text-[#000000]">
                    Maximiliano <br /> Man
                  </p>
                </li>
                <li className="flex flex-col items-center justify-center">
                  <header className="w-[105px] h-[105px] rounded-[50%] bg-[#D9D9D9]"></header>
                  <p className="w-[90px] font-[500] text-[16px] text-center text-[#000000]">
                    Maximiliano <br /> Man
                  </p>
                </li>
                <li className="flex flex-col items-center justify-center">
                  <header className="w-[105px] h-[105px] rounded-[50%] bg-[#D9D9D9]"></header>
                  <p className="w-[90px] font-[500] text-[16px] text-center text-[#000000]">
                    Maximiliano <br /> Man
                  </p>
                </li>
                <li className="flex flex-col items-center justify-center">
                  <header className="w-[105px] h-[105px] rounded-[50%] bg-[#D9D9D9]"></header>
                  <p className="w-[90px] font-[500] text-[16px] text-center text-[#000000]">
                    Maximiliano <br /> Man
                  </p>
                </li>
              </ul>
            </div>

            <footer>
              <button className="w-[180px] h-[40px] mt-[25px] rounded-[15px] border-[3px] border-[#1B5B45] flex items-center justify-center">
                <p className="font-[500] text-[24px] text-[#1B5B45]">Ver más</p>
              </button>
            </footer>
          </article>

          <hr className="w-[780px] h-[3px] border-[1px] border-[#F4D58D] bg-[#F4D58D] mb-[40px] mt-[45px]" />

          <article className="flex flex-col items-center">
            <header className="mb-[35px] self-start">
              <p className="font-[500] text-[32px] text-[#1B5B45]">
                Mis favoritos
              </p>
            </header>

            <div>
              <ul className="flex gap-[15px]">
                <li>
                  <img
                    className="w-[180px] h-[135px] bg-[#D9D9D9]"
                    src=""
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="w-[180px] h-[135px] bg-[#D9D9D9]"
                    src=""
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="w-[180px] h-[135px] bg-[#D9D9D9]"
                    src=""
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="w-[180px] h-[135px] bg-[#D9D9D9]"
                    src=""
                    alt=""
                  />
                </li>
              </ul>
            </div>

            <footer>
              <button className="w-[180px] h-[40px] mt-[25px] rounded-[15px] border-[3px] border-[#1B5B45] flex items-center justify-center">
                <p className="font-[500] text-[24px] text-[#1B5B45]">Ver más</p>
              </button>
            </footer>
          </article>

          <hr className="w-[780px] h-[3px] border-[1px] border-[#F4D58D] bg-[#F4D58D] mb-[40px] mt-[45px]" />

          <article>
            <header className="mb-[50px]">
              <p className="font-[500] text-[32px] text-[#1B5B45]">
                Mis favoritos
              </p>
            </header>
            <div>
              <ul>
                <li className="flex gap-[15px]">
                  <img
                    className="w-[280px] h-[210px] bg-[#D9D9D9]"
                    src=""
                    alt=""
                  />

                  <div className="w-[480px] h-[240px] rounded-[25px] bg-[#F4F0BB]">
                    <header className="flex justify-between">
                      <p className="font-[500] text-[32px] text-[#1B5B45] mx-[15px]">
                        Camisa florel
                      </p>
                      <p className="font-[500] text-[32px] text-[#1B5B45] mx-[15px]">
                        ...
                      </p>
                    </header>

                    <ul>
                      <li className="flex justify-between">
                        <p className="font-[500] text-[#1B5B45] text-[16px]">
                          Color: Verde suave
                        </p>

                        <div className="flex justify-between w-[170px]">
                          <p className="font-[500] text-[#1B5B45] text-[16px]">
                            Precio:
                          </p>
                          <p className="font-[500] text-[#1B5B45] text-[16px]">
                            17USD
                          </p>
                        </div>
                      </li>

                      <li>
                        <p className="font-[500] text-[#1B5B45] text-[16px]">
                          Talle: L
                        </p>
                      </li>

                      <li className="flex justify-between ">
                        <p className="font-[500] text-[#1B5B45] text-[16px]">
                          Cantidad:1
                        </p>
                        <div className="flex items-center justify-center gap-[30px] ">
                          <p className="font-[500] text-[#1B5B45] text-[16px]">
                            Total <br /> pagado:
                          </p>
                          <p className="font-[700] text-[#1B5B45] text-[16px]">
                            24.110 ARS
                          </p>
                        </div>
                      </li>
                    </ul>

                    <footer className="w-[480px] h-[50px] rounded-[15px] bg-[#87C38F] flex justify-between items-center border-transparent]">
                      <p className="font-[500] text-[16px] text-white mx-[15px]">
                        Dia de compra:17/11/22
                      </p>
                      <p className="font-[500] text-[16px] text-white mx-[15px]">
                        Estado de compra:En camino
                      </p>
                    </footer>
                  </div>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default Cliente;
