import React, { useState } from "react";
import { FIND_ALL } from "../users/queries";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../users/mutations";

const UserForm = ({ notifyError }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState(0);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [addUser] = useMutation(ADD_USER, {
    refetchQueries: [{ query: FIND_ALL }],
    onError: (error) => {
      notifyError(error.graphQLErrors[0].message);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const numericAge = parseInt(age);
    addUser({ variables: { name, phone, age: numericAge, street, city } });
    setName("");
    setPhone("");
    setAge("");
    setStreet("");
    setCity("");
  };

  return (
    <div>
      <h2>Crear un nuevo usuario</h2>
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
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default UserForm;
