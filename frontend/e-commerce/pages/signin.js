import React from "react";
import { useFormik, Field, Form } from "formik";

function signin() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
      role: '',
     
    },
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="bg-[#1B5B45] grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[0.2fr_1fr_0.2fr_1fr]  gap-4 h-screen place-items-center">
      <img
        className=" col-start-2 col-end-4  pt-10 mx-1"
        src="/img/logo2.png"
        width="300"
        height="300"
        alt="logo"
      />
      <form
        className="col-start-2 col-end-4 row-start-2 "
        onSubmit={formik.handleSubmit}
      >
        <div className="formulario__nombre flex justify-between items-center m-0 ">
          <div className="m-0 py-4">
            <label className="text-white text-sm font-medium">Nombre</label>
            <br />
            <input
              className="shadow-2xl  bg-[#F4F0BB]  rounded-md py-1"
              type="text"
              name="name"
              required
              {...formik.getFieldProps("name")}
            />

            <br />
          </div>
          <div className="col-start-3 col-end-4">
            <label className="text-white  text-sm font-medium">Apellido</label>
            <br />
            <input
              className="shadow-2xl  bg-[#F4F0BB]  rounded-md py-1"
              type="text"
              name="lastname"
              required
              {...formik.getFieldProps("lastname")}
            />
            <br />
          </div>
        </div>
        <div className="formulario__email col-start-2 col-end-4  py-1">
          <label className="text-white">Email</label>
          <br />
          <input
            className="shadow-2xl bg-[#F4F0BB]  rounded-md w-full py-1 "
            type="email"
            name="email"
            required
            {...formik.getFieldProps("email")}
          />
          <br />
        </div>

        <div className="formulario__contrasena flex justify-between items-center py-1 ">
          <div className="m-0">
            <label className="text-white">Contraseña</label>
            <br />
            <input
              className=" shadow-2xl bg-[#F4F0BB]  rounded-md py-1"
              type="password"
              name="password"
              required
              {...formik.getFieldProps("password")}
            />
            <br />
          </div>

          <div className="m-0">
            <label className="text-white">Confirmar contraseña</label>
            <br />
            <input
              className="shadow-2xl bg-[#F4F0BB]  rounded-md py-1 "
              type="password"
              id="password"
              name="password"
              {...formik.getFieldProps("password")}
            />
            <br />
          </div>
        </div>
        <div className="">
          <h3 className="text-white text-center justify-between items-center">
            ¿Qué te gustaría hacer?
          </h3>
          <div className="flex justify-between items-center m-0">
            <button className="shadow-2xl bg-[#F4F0BB] text-[#1B5B45]  rounded-md py-6">
              Ver y comprar diseños únicos
            </button>
            <button className=" shadow-2xl bg-[#F4F0BB] text-[#1B5B45]  rounded-md py-6">
              Promover y diseñar productos
            </button>
          </div>
        </div>
        <div className="formulario__checkbox py-4">
          <input
            className="accent-[#F4F0BB] text-white"
            type="checkbox"
            value="first_checkbox"
          />
          <span>
            {" "}
            He leído y estoy de acuerdo con las políticas de privacidad.
            (*requerido)
          </span>
          <br />
          <input
            className="text-[#F4F0BB]"
            type="checkbox"
            value="first_checkbox"
          />
          Suscribirse para recibir información especial sobre Valen vía email.
        </div>
       
     
          <div>
            <label>
              <input type="checkbox" name="role" value="seller"  onChange={formik.handleChange}/>
              seller
            </label>
            <label>
              <input type="checkbox" name="role" value="user"  onChange={formik.handleChange}/>
              user
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="sex" value="male"  onChange={formik.handleChange}/>
              male
            </label>
            <label>
              <input type="checkbox" name="sex" value="female"  onChange={formik.handleChange}/>
             feamle
            </label>
          </div>

   
        <button
          className="  col-start-2 col-end-4 w-full shadow-2xl bg-[#F4F0BB] text-[#1B5B45]  rounded-md py-2"
          type="submit"
        >
          Crear cuenta
        </button>
      </form>

      <div className="bg-[#1B5B45]"></div>
    </div>
  );
}

export default signin;
