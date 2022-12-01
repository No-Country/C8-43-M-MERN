import React, { useState } from "react";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:4000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function LoginForm({setToken})  {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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

LoginForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};

