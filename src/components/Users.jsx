import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { FIND_BY_NAME } from "../users/queries";

const Users = ({ users }) => {
  const [getUser, result] = useLazyQuery(FIND_BY_NAME);
  const [user, setUser] = useState(null);
  const showUser = (name) => {
    getUser({ variables: { name: name } });
  };

  useEffect(() => {
    if (result.data) {
      setUser(result.data.findByName);
    }
  }, [result.data]);
  if (user) {
    return (
      <div>
        <h2>{user.name}</h2>
        <p>Id: {user.id}</p>
        <p>Teléfono: {user.phone}</p>
        <p>Edad: {user.age}</p>
        <div>
          <button onClick={() => setUser(null)}>Cerrar</button>
        </div>
      </div>
    );
  }

  if (!users) {
    return null;
  }

  return (
    <div>
      <h2>Lista de usuarios</h2>
      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => {
            showUser(user.name);
          }}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default Users;
