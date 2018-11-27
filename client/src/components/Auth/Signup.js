import React from 'react';

class Singup extends React.Component {
  render() {
    return (
      <div className="App">
        <h2 className="App">Signup</h2>
        <form className="form">
          <input type="text" name="username" placehoder="Username" />

          <input type="email" name="email" placehoder="Email Address" />

          <input type="password" name="password" placehoder="Password" />

          <input type="password" name="passwordConfirmation" placehoder="Confirm Password" />

          <button type="submit" className="button-primary">Submit</button>
          
        </form>
      </div>
    )
  }
}

export default Singup;