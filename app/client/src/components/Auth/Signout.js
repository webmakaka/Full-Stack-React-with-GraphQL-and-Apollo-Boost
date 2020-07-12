import React from 'react';
import { withRouter} from 'react-router-dom';
import { ApolloConsumer } from 'react-apollo';


const handleSignout = (client, history) => {
  localStorage.setItem('token', '');
  client.resetStore();
  history.push('/');
}

const Signout = ({ history }) => (
  <ApolloConsumer>

  {(client) => {
    return (
      <button onClick={() => handleSignout(client, history)}>Singout</button>
    )
  }}

  </ApolloConsumer>
);

export default withRouter(Signout);