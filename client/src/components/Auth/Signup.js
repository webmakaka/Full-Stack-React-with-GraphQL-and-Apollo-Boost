import React from 'react';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { SIGNUP_USER} from 'queries';
import Error from 'components/Error';

const initialState = {
  username: "",
  email: "",
  password: "",
  passwordConfirmation: ""
};

class Signup extends React.Component {

  state = {...initialState};

  clearState = () => {
    this.setState({ ...initialState });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event, signupUser) => {
    event.preventDefault();
    signupUser().then(async ({ data }) => {
      localStorage.setItem('token', data.signupUser.token);
      await this.props.refetch();

      this.clearState();
      this.props.history.push('/');
    });
  };

  validateForm = () => {
    const { username, email, password, passwordConfirmation } = this.state;

    const isInvalid = !username || !email || !password || password !== passwordConfirmation;

    return isInvalid;
  }

  render() {
    const { username, email, password, passwordConfirmation } = this.state;

    return (
      <div className="App">
        <h2 className="App">Signup</h2>
        <Mutation
          mutation={SIGNUP_USER}
          variables={{ username, email, password }}
        >
          {(signupUser, { data, loading, error }) => {
            return (
              <form
                className="form"
                onSubmit={event => this.handleSubmit(event, signupUser)}
              >
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Confirm Password"
                  value={passwordConfirmation}
                  onChange={this.handleChange}
                />
                <button 
                  disabled={loading || this.validateForm()}
                  type="submit" 
                  className="button-primary">
                  Submit
                </button>

                {error && <Error error={error} />}

              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default withRouter(Signup);