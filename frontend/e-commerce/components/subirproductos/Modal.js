import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Modal = ({ isVisible, onClose }) => {
  const router = useRouter();
  const [inputs, setInputs] = useState({});
  const [image, setImage] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const body = new FormData();
    body.append("file", image);
    body.append("sizes", inputs.sizes);
    body.append("name", inputs.name);
    body.append("category", inputs.category);
    body.append("price", inputs.price);
    body.append("color", inputs.color);
    body.append("description", inputs.description);
    const endpoint = "https://c8-43-m-mern-api.vercel.app/seller/create";

    const result = await axios.post(endpoint, body);
    if (result.status == 200) {
      return router.push("/");
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[500px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-[#1B5B45] p-2 grid grid-cols-[0.5fr_1fr_0.5fr] ">
          <form className="col-start-2 col-end-3" onSubmit={handleSubmit}>
            <div>
              <input
                type="file"
                className="block w-full text-sm"
                value={inputs.image}
                onChange={uploadToClient}
              />
              ;
            </div>
            <hr className="bg-[#F4F0BB] text-[#F4F0BB] py-0.2 " />
            <div className="flex mt-5 items-center">
              <div className=" flex flex-column">
                <div>
                  <label className=" text-[#F4F0BB] py-10 ">
                    Selecciona las tallas
                  </label>
                  <br />{" "}
                  <label htmlfor="sizes" className="text-white px-1">
                    Xxxl
                  </label>
                  <input
                    id="sizes"
                    name="sizes"
                    onChange={handleChange}
                    type="checkbox"
                    value="xxxl"
                  />
                  <label htmlfor="sizes" className="text-white px-1">
                    Xxl
                  </label>
                  <input
                    id="sizes"
                    name="sizes"
                    onChange={handleChange}
                    type="checkbox"
                    value="xxl"
                  />
                  <label htmlfor="sizes" className="text-white px-1">
                    Xl
                  </label>
                  <input
                    id="sizes"
                    name="sizes"
                    onChange={handleChange}
                    type="checkbox"
                    value="xl"
                  />
                  <label htmlfor="sizes" className="text-white px-1">
                    L
                  </label>
                  <input
                    id="sizes"
                    name="sizes"
                    onChange={handleChange}
                    type="checkbox"
                    value="L"
                  />
                  <label htmlfor="sizes" className="text-white px-1">
                    M
                  </label>
                  <input
                    id="sizes"
                    name="sizes"
                    onChange={handleChange}
                    type="checkbox"
                    value="M"
                  />
                  <label htmlfor="sizes" className="text-white px-1">
                    S
                  </label>
                  <input
                    id="sizes"
                    name="sizes"
                    onChange={handleChange}
                    type="checkbox"
                    value="S"
                  />
                  <label htmlfor="sizes" className="text-white px-1">
                    Xs
                  </label>
                  <input
                    id="sizes"
                    name="sizes"
                    onChange={handleChange}
                    type="checkbox"
                    value="Xs"
                  />
                </div>
                <hr className="bg-[#F4F0BB]" />
              </div>
              <hr className="bg-[#F4F0BB] text-[#F4F0BB] py-0.2 " />
            </div>
            <hr className="bg-[#F4F0BB] text-[#F4F0BB] my-5" />
            <div>
              <label htmlFor="name" className="text-[#F4F0BB] py-0.2 ">
                Nombre
                <input
                  id="name"
                  name="name"
                  onChange={handleChange}
                  type="text"
                  value={inputs.name || ""}
                />
              </label>
            </div>
            <hr className="bg-[#F4F0BB] text-[#F4F0BB] py-0.2 my-4" />

            <div>
              <label htmlFor="category " className="text-[#F4F0BB] py-0.2">
                Categoria
                <input
                  id="category"
                  name="category"
                  onChange={handleChange}
                  type="text"
                  value={inputs.category || ""}
                />
              </label>
            </div>
            <hr className="bg-[#F4F0BB] text-[#F4F0BB] py-0.2 my-4" />
            <div>
              <label htmlFor="price" className="text-[#F4F0BB] py-0.2">
                Elige el precio
                <input
                  id="price"
                  name="price"
                  onChange={handleChange}
                  type="text"
                  value={inputs.price || ""}
                />
                <br />
              </label>
            </div>
            <hr className="bg-[#F4F0BB] text-[#F4F0BB] py-0.2 my-4" />
            <div>
              <label htmlFor="color " className="text-[#F4F0BB] py-0.2">
                color
                <input
                  type="text"
                  id="color"
                  name="color"
                  value={inputs.color || ""}
                  onChange={handleChange}
                />
              </label>
              <br />
            </div>
            <hr className="bg-[#F4F0BB] text-[#F4F0BB] py-0.2 my-4" />
            <div>
              <label htmlFor="description" className="text-[#F4F0BB] py-0.2">
                description
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={inputs.description || ""}
                  onChange={handleChange}
                />
                <br />
              </label>
            </div>
            <hr className="bg-[#F4F0BB] text-[#F4F0BB] py-0.2 my-4" />
            {/* <div className="py-4">
              <select
                className="bg-[#1B5B45] text-[#F4F0BB]"
                value={inputs.category || ""}
                onChange={handleChange}
              >
                <option>Tipo de ropa</option>
                <option>dos</option>
                <option>tres</option>
              </select>
              <hr className="bg-[#F4F0BB] text-[#F4F0BB] py-0.2 " />
            </div> */}
            {/* <div className="py-4">
              <select className="bg-[#1B5B45] text-[#F4F0BB]">
                <option>Estilo</option>
                <option>dos</option>
                <option>tres</option>
              </select>
              <hr className="bg-[#F4F0BB]  py-0.2 " />
            </div> */}
            {/* <div className="py-4">
              {" "}
              <select className="bg-[#1B5B45] text-[#F4F0BB]">
                <option>Género</option>
                <option>dos</option>
                <option>tres</option>
              </select>
              <hr className="bg-[#F4F0BB]  text-[#F4F0BB]py-0.2 " />
            </div> */}

            {/* <div className="py-4">
              {" "}
              <select className="bg-[#1B5B45] text-[#F4F0BB]">
                <option>color</option>
                <option>beige</option>
              </select>
              <hr className="bg-[#F4F0BB]  text-[#F4F0BB]py-0.2 " />
            </div> */}

            <button
              className="  col-start-2 col-end-4 w-full shadow-2xl bg-[#F4F0BB] text-[#1B5B45]  rounded-md py-2"
              type="submit"
            >
              Subir
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
