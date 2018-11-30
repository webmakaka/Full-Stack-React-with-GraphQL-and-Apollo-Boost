import React from 'react';

import withSession from 'components/HOC/withSession';

class LikeRecipe extends React.Component {

  state = {
    username: ''
  }

  componentDidMount() {

    if (this.props.session.getCurrentUser) {
      const { username } = this.props.session.getCurrentUser;
      this.setState({
        username
      });
    }
  }

  render() {

    const { username } = this.state;

    return (

      username && <button>Like</button>
    )
  }
}

export default withSession(LikeRecipe);