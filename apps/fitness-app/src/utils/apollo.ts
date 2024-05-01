import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export { apolloClient, gql };
