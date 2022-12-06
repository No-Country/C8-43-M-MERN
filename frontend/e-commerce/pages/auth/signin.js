import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

function signin() {
  const router = useRouter();
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "http://localhost:4000/auth/login";

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
    if (response.ok) {
      return router.push("/");
    }
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
   
  };

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] h-screen place-items-center bg-[#1B5B45]">
      <div className="pt-10 mb-0 col-start-2 col-end-4  mx-1">
       
        <Image src="/img/logo2.png" width={500} height={500} />
        <Image src="/img/subtitle.png" width={200} height={200} />
      </div>
      <form onSubmit={handleSubmit} className=" rounded px-8 pt-6 pb-8 mb-4 col-start-2 col-end-4 row-start-2">
       <div class=""> 
       <label htmlFor="email" className="text-[#F4F0BB]">E-mail</label>
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
        <labe htmlFor="password" className="text-[#F4F0BB]">Contraseña</labe>
        <br />
        <input
           className="shadow-2xl bg-[#F4F0BB]  rounded-md w-full py-2"
          type="password"
          id="password"
          name="password"
          required
        />

        <p  className="text-white text-center py-4">¿Olvidaste la contraseña?</p>
        <button    className="shadow-2xl bg-[#F4F0BB]  rounded-md w-full py-2 my-4" type="submit">
          Iniciar sesión
        </button>
        <Link  href="/auth/signup">
          <button    className="shadow-2xl bg-[#F4F0BB]  rounded-md w-full py-2">Crear una cuenta</button>
        </Link>
       
      </form>
    </div>
  );
}

export default signin;
