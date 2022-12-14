import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Signup() {
  const router = useRouter();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: inputs.name,
      lastname: inputs.lastname,
      email: inputs.email,
      password: inputs.password,
      role: inputs.role,
    };

    const endpoint = "https://c8-43-m-mern-api.vercel.app/auth";

    const result = await axios.post(endpoint, data);
    console.log(data);
    if (result.status == 200) {
      return router.push("/");
    }
  };

  return (
    <div className="bg-[#1B5B45] grid grid-cols-[2fr_1fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[0.2fr_1fr_0.2fr_1fr] gap-4 h-full place-items-center">
      <img
        className="col-start-2 col-end-2 md:col-end-4  pt-16 mx-1"
        src="/img/logo2.png"
        width="300"
        height="300"
        alt="logo"
      />
      <form
        className="gap-0 col-start-2 col-end-2 md:col-end-4 row-start-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row md:justify-between items-center m-0">
          <div className="flex flex-col m-0 py-4 ">
            <label className="text-white" htmlFor="name">
              Nombre
            </label>
            <input
              className="shadow-2xl  bg-[#F4F0BB]  rounded-md py-1"
              type="text"
              id="name"
              name="name"
              required
              value={inputs.name || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col col-start-3 col-end-4">
            <label
              className="text-white"
              htmlFor="lastname"
            >
              Apellido
            </label>
            <input
              className="shadow-2xl  bg-[#F4F0BB]  rounded-md py-1"
              type="text"
              id="lastname"
              name="lastname"
              required
              value={inputs.lastname || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="formulario__email col-start-2 col-end-4  py-1">
          <label className="text-white" htmlFor="email">
            Email
          </label>
          <input
            className="shadow-2xl bg-[#F4F0BB]  rounded-md w-full py-1"
            type="email"
            id="email"
            name="email"
            required
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className="formulario__contrasena flex justify-between items-center py-6 ">
          <div className="flex flex-col m-0">
            <label htmlFor="password" className="text-white">
              Contrase??a
            </label>
            <input
              className=" shadow-2xl bg-[#F4F0BB]  rounded-md py-1"
              type="password"
              id="password"
              name="password"
              required
              value={inputs.password || ""}
              onChange={handleChange}
            />
          </div>
          {/*           
          <div className="m-0">
            <label htmlFor="password" className="text-white flex flex-col">
              Confirmar contrase??a
            </label>
            <input
              className=" shadow-2xl bg-[#F4F0BB]  rounded-md py-1"
              type="password"
              id="password"
              name="password"
              required
              value={inputs.password || ""}
              onChange={handleChange}
            />
          </div> */}
        </div>

        <div className="flex flex-col">
          <h3 className="text-center text-white">??Qu?? te gustar??a hacer</h3>
          <br />
          <div className="py-5 px-4 flex flex-col gap-4 md:flex-row">
            <div className="mx-2">
              <label htmlFor="role" className="text-white">
                Promover y dise??ar productos
              </label>
              <input
                type="checkbox"
                id="seller"
                name="role"
                value="seller"
                onChange={handleChange}
                className="mx-4"
              />
            </div>
            <div className="md:pl-8 mx-2">
              <label htmlFor="role" className="text-white">
                Ver y comprar dise??os ??nicos
              </label>
              <input
                type="checkbox"
                id="user"
                name="role"
                value="user"
                onChange={handleChange}
                className="mx-4"
              />
            </div>
          </div>
        </div>
        <div className="py-4 gap-4">
          <div>
            <input
              className="accent-[#F4F0BB] mr-4"
              type="checkbox"
              value="first_checkbox"
            />
            <span className=" text-white py-8">
              He le??do y estoy de acuerdo con las pol??ticas de privacidad.
              (*requerido)
            </span>
          </div>
          <br />
          <div>
            <input
              className="text-[#F4F0BB] mr-4"
              type="checkbox"
              value="first_checkbox"
            />
            <span className=" text-white py-8">
              Suscribirse para recibir informaci??n especial sobre Valen v??a
              email.
            </span>
          </div>
        </div>

        <button
          className="mt-4  col-start-2 col-end-4 w-full shadow-2xl bg-[#F4F0BB] text-[#1B5B45]  rounded-md py-2"
          type="submit"
        >
          Crear cuenta
        </button>
      </form>
    </div>
  );
}
