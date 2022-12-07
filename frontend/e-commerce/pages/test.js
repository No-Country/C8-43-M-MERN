import Modal from "../components/subirproductos/Modal";
import { useState } from "react";
import React from "react";

function test() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>hola</button>
      <Modal isVisible={showModal} onClose={()=>setShowModal(false)}/>
    </div>
  );
}

export default test;
