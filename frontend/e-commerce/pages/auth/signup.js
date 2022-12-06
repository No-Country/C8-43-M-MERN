import { useState } from "react";
import { useRouter } from "next/router";
 
export default function test() {
  const router = useRouter();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      name: inputs.name,
      lastname: inputs.lastname,
      email: inputs.email,
      password: inputs.password,
      role: inputs.role,
      sex: inputs.sex,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "http://localhost:4000/auth";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
    const result = await response.json();
    if (result.ok) {
      return router.push("/");
    }
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    
  };
  return (
    // We pass the event to the handleSubmit() function on submit.
    <div className="bg-[#1B5B45] grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[0.2fr_1fr_0.2fr_1fr]  gap-4 h-screen place-items-center">
      <img
        className=" col-start-2 col-end-4  pt-10 mx-1"
        src="/img/logo2.png"
        width="300"
        height="300"
        alt="logo"
      />
      <form
        className="gap-0 col-start-2 col-end-4 row-start-2 "
        onSubmit={handleSubmit}
      >
        <div className="formulario__nombre flex justify-between items-center m-0">
          <div className="flex flex-col m-0 py-4 ">
            <label className="text-white text-sm font-medium" htmlFor="name">
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
              className="text-white  text-sm font-medium"
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
              Contraseña
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
              Confirmar contraseña
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
          <h3 className="text-center text-white">¿Qué te gustaría hacer</h3>
          <br />
          <div className="py-5 px-4 flex">
            <div>
              <label htmlfor="role" className="text-white">
                Promover y diseñar productos
              </label>
              <input
                className="px-4"
                type="checkbox"
                id="seller"
                name="role"
                value="seller"
                onChange={handleChange}
              />
            </div>
            <div className="pl-8">
              <label htmlfor="role" className="text-white">
                Ver y comprar diseños únicos
              </label>
              <input
                type="checkbox"
                id="user"
                name="role"
                value="user"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className=" py-5">
          <h3 className="text-center text-white">¿Cuál es tu género?</h3>
          <div className="flex justify-around">
            <div>
              <label htmlfor="sex" className="text-white">
                male
              </label>
              <input
                type="checkbox"
                id="sex"
                name="sex"
                value="male"
                onChange={handleChange}
              />
            </div>
            <div>
              {" "}
              <label htmlfor="role" className="text-white">
                female
              </label>
              <input
                type="checkbox"
                id="sex"
                name="sex"
                value="female"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="formulario__checkbox py-4">
          <input
            className="accent-[#F4F0BB]"
            type="checkbox"
            value="first_checkbox"
          />
          <span className=" text-white py-8">
            He leído y estoy de acuerdo con las políticas de privacidad.
            (*requerido)
          </span>
          <br />
          <input
            className="text-[#F4F0BB]"
            type="checkbox"
            value="first_checkbox"
          />
          <span className=" text-white py-8">
            Suscribirse para recibir información especial sobre Valen vía email.
          </span>
        </div>

        <button
          className="  col-start-2 col-end-4 w-full shadow-2xl bg-[#F4F0BB] text-[#1B5B45]  rounded-md py-2"
          type="submit"
        >
          Crear cuenta
        </button>
      </form>
    </div>
  );
}
