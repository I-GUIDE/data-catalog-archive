import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import * as Realm from "realm-web";

const APP_ID = "i-guide-catalog-mvp-zkwwp"
const GRAPHQL_URL = `https://realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`
const API_KEY = "fTIsiVOEzh5BFYlcz5BvnnIrfO8xrQEraEhvEXg0YEa0tZP5Hp75NfXN0fsTdFB0"

// Connect to your MongoDB Realm app
const app = new Realm.App(APP_ID);

// Gets a valid Realm user access token to authenticate requests
async function getValidAccessToken() {
  // Guarantee that there's a logged in user with a valid access token
  if (!app.currentUser) {
    // If no user is logged in, log in an anonymous user. The logged in user will have a valid
    // access token.
    // await app.logIn(Realm.Credentials.anonymous());
    await app.logIn(Realm.Credentials.apiKey(API_KEY));
  } else {
    // An already logged in user's access token might be stale. To guarantee that the token is
    // valid, we refresh the user's custom data which also refreshes their access token.
    await app.currentUser.refreshCustomData();
  }

  return app.currentUser?.accessToken
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: GRAPHQL_URL,
    fetch: async (uri, options) => {
      const accessToken = await getValidAccessToken();
      if (options?.headers !== undefined) {
        (options.headers as Record<string, string>).Authorization = `Bearer ${accessToken}`;
      }
      return fetch(uri, options);
    },
  }),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
