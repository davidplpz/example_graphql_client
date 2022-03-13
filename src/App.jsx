import { gql, useQuery } from "@apollo/client";
import logo from "./logo.svg";
import "./App.css";
import Users from "./components/Users";

const FIND_ALL = gql`
  query {
    findAll {
      id
      name
    }
  }
`;

const Error = () => <span>Ha ocurrido un error</span>;
const Loading = () => <p>Cargando ...</p>;
const App = () => {
  const { data, loading, error } = useQuery(FIND_ALL);
  if (error) {
    return <Error />;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading ? <Loading /> : <Users users={data?.findAll} />}
      </header>
    </div>
  );
};

export default App;
