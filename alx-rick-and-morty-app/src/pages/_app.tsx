import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import client from "../../graphql/apolloClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <p>boot</p>
       <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
    </div>
  );
}
