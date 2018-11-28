import React from 'react';

class Singup extends React.Component {

  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  }

  render() {


    const { username, email, password, passwordConfirmation } = this.state;

    return (
      <div className="App">
        <h2 className="App">Signup</h2>
        <form className="form">
          <input type="text" name="username" placehoder="Username" value={username} onChange={this.handleChange} />

          <input type="email" name="email" placehoder="Email Address" value={email} onChange={this.handleChange} />

          <input type="password" name="password" placehoder="Password" value={password} onChange={this.handleChange} />

          <input type="password" name="passwordConfirmation" placehoder="Confirm Password" value={passwordConfirmation} onChange={this.handleChange} />

          <button type="submit" className="button-primary">Submit</button>

        </form>
      </div>
    )
  }
}

export default Singup;