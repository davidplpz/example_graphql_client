import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PHONE } from "../users/mutations";

const EditPhoneForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [changeNumber] = useMutation(UPDATE_PHONE);

  const handleSubmit = (event) => {
    event.preventDefault();
    changeNumber({ variables: { name, phone } });
    setName("");
    setPhone("");
  };

  return (
    <div>
      <h2>Editar teléfono</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Editar</button>
      </form>
    </div>
  );
};
export default EditPhoneForm;
