import React from "react";
import { useAuth } from "./../../context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";

export default function Signin() {
  const { user, setUser } = useAuth();

  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const endpoint = "https://c8-43-m-mern-api.vercel.app/auth/login";

    const response = await axios.post(endpoint, data);

    if (response.status === 200) {
      localStorage.setItem("token", JSON.stringify(response));
      setUser(response.data.data.seller);
      return router.push("/");
    }
  };

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] h-screen place-items-center bg-[#1B5B45]">
      <div className="pt-10 mb-0 col-start-2 col-end-4  mx-1">
        <Image src="/img/logo2.png" width={500} height={500} />
        <Image src="/img/subtitle.png" width={200} height={200} />
      </div>
      <form
        onSubmit={handleSubmit}
        className=" rounded px-8 pt-6 pb-8 mb-4 col-start-2 col-end-4 row-start-2"
      >
        <div class="">
          <label htmlFor="email" className="text-[#F4F0BB]">
            E-mail
          </label>
          <br />
          <input
            className="shadow-2xl bg-[#F4F0BB]  rounded-md w-full py-2"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <br />
        <labe htmlFor="password" className="text-[#F4F0BB]">
          Contraseña
        </labe>
        <br />
        <input
          className="shadow-2xl bg-[#F4F0BB]  rounded-md w-full py-2"
          type="password"
          id="password"
          name="password"
          required
        />

        <p className="text-white text-center py-4">¿Olvidaste la contraseña?</p>
        <button
          className="shadow-2xl bg-[#F4F0BB]  rounded-md w-full py-2 my-4"
          type="submit"
        >
          Iniciar sesión
        </button>
        <Link href="/auth/signup">
          <button className="shadow-2xl bg-[#F4F0BB]  rounded-md w-full py-2">
            Crear una cuenta
          </button>
        </Link>
      </form>
    </div>
  );
}
