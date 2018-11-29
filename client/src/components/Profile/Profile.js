import React from 'react';
import UserInfo from 'components/Profile/UserInfo';

const Profile = ({ session }) => (
  <div className="App">
    <UserInfo session={session}/>

  </div>
);

export default Profile;