import React from "react";
import { loginUser } from "../lib/login";

const LoginForm = () => {
  const [name, setName] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setName({ ...name, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    const { email, password } = name;
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#1B5B45]">
      <img
        className="mx-1"
        src="/img/logo2png"
        width="300"
        height="300"
        alt="logo"
      />
      <form className="grid" onSubmit={handleSubmit}>
        <div className=" mx-14 mt-8">
          <label htmlFor="name" className="text-[#F4F0BB] ">
            Email
          </label>
          <br />
          <input
            className="bg-[#F4F0BB] rounded-md"
            type="email"
            name="email"
            onChange={handleChange}
          />

          <br />
        </div>

        <div className=" mx-14 mt-4">
          <label htmlFor="password" className="text-[#F4F0BB]">
            Contraseña
          </label>
          <br />
          <input
            className="bg-[#F4F0BB] rounded-md"
            type="password"
            name="password"
            onChange={handleChange}
          />
          <br />
        </div>

        <a className="mx-16 mt-4">¿Olvidaste la contraseña?</a>
        <button
          type="submit"
          className="mx-14 mt-4 h-10 rounded-md bg-[#F4F0BB]"
        >
          Iniciar sesión
        </button>
        <button className="mx-14 mt-4 h-10 rounded-md bg-[#F4F0BB]">
          Crear una cuenta
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
