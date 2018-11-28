import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import "./index.css";
import App from "components/App";
import Navbar from "components/Navbar";
import Signin from "components/Auth/Signin";
import Signup from "components/Auth/Signup";
import Search from "components/Recipe/Search";
import AddRecipe from "components/Recipe/AddRecipe";
import Profile from "components/Profile/Profile";
import withSession from "components/withSession";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";


const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  fetchOptions: {
    credentials: 'include'
  },
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token
      }
    })
  },
  onError: ({ networkError }) => {
    if (networkError) { console.log('Network Error', networkError);}

    // if (networkError.statusCode === 400) { localStorage.removeItem('token'); }
  }
});

const Root = ({ refetch, session }) => (
  <Router>

    <Fragment>
      <Navbar session={session} />

      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/search" component={Search} />
        <Route path="/signin" render={() => <Signin refetch={refetch} />} />
        <Route path="/signup" render={() => <Signup refetch={refetch} />} />
        <Route path="/recipe/add" component={AddRecipe} />
        <Route path="/profile" component={Profile} />
        <Redirect to="/" />
      </Switch>

    </Fragment>
  </Router>
);

const RootWithSession = withSession(Root);

ReactDOM.render(
  <ApolloProvider client={client}>
    <RootWithSession />
  </ApolloProvider>,
  document.getElementById("root")
);
