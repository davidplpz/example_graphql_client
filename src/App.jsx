import { gql, useQuery } from "@apollo/client";
import logo from "./logo.svg";
import "./App.css";

const FIND_ALL = gql`
  query {
    findAll {
      id
      name
    }
  }
`;

const Error = () => <p>Ha ocurrido un error</p>;
const Loading = () => <p>Cargando ...</p>;
const App = () => {
  const { data, loading, error } = useQuery(FIND_ALL);
  if (error) {
    return <Error />;
  }
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading ? (
          <Loading />
        ) : (
          <>
            <p>GraphQL + React!</p>
            <>
              {data.findAll.map((user) => (
                <p key={user.id}>{user.name}</p>
              ))}
            </>
          </>
        )}
      </header>
    </div>
  );
};

export default App;
