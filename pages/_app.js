import App from "next/app";
import Page from "../components/Page";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import fetch from "node-fetch";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  fetch: fetch,
  fetchOptions: {
    credentials: "include"
  },
  request: operation => {
    operation.setContext({
      headers: {}
    });
  },
  onError: ({ networkError }) => {
    if (networkError) {
      console.log("Network Error", networkError);
    }
  }
});

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <ApolloProvider client={client}>
        <Page>
          <Component />
        </Page>
      </ApolloProvider>
    );
  }
}

export default MyApp;
