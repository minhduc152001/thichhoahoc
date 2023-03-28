import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_BE_HOST}/graphql/`,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
