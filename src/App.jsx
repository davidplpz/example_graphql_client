import { useQuery } from "@apollo/client";
import logo from "./logo.svg";
import "./App.css";
import Users from "./components/Users";
import UserForm from "./components/UserForm";
import { useUsers } from "./users/hooks";

const Error = () => <span>Ha ocurrido un error</span>;
const Loading = () => <p>Cargando ...</p>;
const App = () => {
  // const { data, loading, error } = useQuery(FIND_ALL, {pollInterval: 2000}); => Pooling cada 2 segundo
  const { data, loading, error } = useUsers();
  if (error) {
    return <Error />;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading ? <Loading /> : <Users users={data?.findAll} />}
      </header>
      <UserForm></UserForm>
    </div>
  );
};

export default App;
