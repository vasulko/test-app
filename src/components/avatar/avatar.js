import React from 'react';

import './avatar.css';


const Avatar = ({ profile }) => {
    const avatarPicture = (profile === 'profile-2') ? <img src={require(`./avatar1.png`)} alt='avatar' /> : 'S';
  return(
      <div className='chat__avatar'>
          {avatarPicture}
      </div>
  );
};

export default Avatar;