import React from 'react';
import UserInfo from 'components/Profile/UserInfo';
import UserRecipes from 'components/Profile/UserRecipes';

const Profile = ({ session }) => (
  <div className="App">
    <UserInfo session={session}/>
    <UserRecipes username={session.getCurrentUser.username}/>

  </div>
);

export default Profile;