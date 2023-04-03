import React from 'react'
import avatar from '../assets/avatar.jpeg'
const Avatar = () => {
  return (
    <div className="profile-container">
      <img
        className='avatar'
        src={avatar}
        alt=""
      />
    </div>
  );
}

export default Avatar