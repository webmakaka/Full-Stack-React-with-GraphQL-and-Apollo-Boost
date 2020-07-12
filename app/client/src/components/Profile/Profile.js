import React from 'react';
import UserInfo from 'components/Profile/UserInfo';
import UserRecipes from 'components/Profile/UserRecipes';
import withAuth from 'components/HOC/withAuth';

const Profile = ({ session }) => (
  <div className="App">
    <UserInfo session={session}/>
    <UserRecipes username={session.getCurrentUser.username}/>

  </div>
);

export default withAuth(session => session && session.getCurrentUser)(Profile);