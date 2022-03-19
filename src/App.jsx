import logo from "./logo.svg";
import "./App.css";
import Users from "./components/Users";
import UserForm from "./components/UserForm";
import { useUsers } from "./users/hooks";
import React, { useState } from "react";
import Notify from "./components/Notify";

const Error = () => <span>Ha ocurrido un error</span>;
const Loading = () => <p>Cargando ...</p>;
const App = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const notifyError = (msg) => {
    setErrorMsg(msg);
    setTimeout(() => setErrorMsg(null), 5000);
  };
  // const { data, loading, error } = useQuery(FIND_ALL, {pollInterval: 2000}); => Pooling cada 2 segundo
  const { data, loading, error } = useUsers();
  if (error) {
    return <Error />;
  }
  return (
    <div className="App">
      <Notify msg={errorMsg} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading ? <Loading /> : <Users users={data?.findAll} />}
      </header>
      <UserForm notifyError={notifyError}></UserForm>
    </div>
  );
};

export default App;
