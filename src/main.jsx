import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import "./index.css";
import App from "./App";

const auth = () => {
  const token = localStorage.getItem("react-app-token");
  return token ? `bearer ${token}` : null;
};

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    headers: {
      authorization: auth()
    },
    uri: "http://localhost:4000",
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
