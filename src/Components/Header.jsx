import React from 'react'
import Avatar from './Avatar'
import MenuItem from './MenuItem'
// import { IoApps } from "react-icons/io"

import AppsIcon from './AppsIcon';
const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header-menu">
        <MenuItem title={"Gmail"} />
        <MenuItem title={"Images"} />
        <AppsIcon style={{ color: "white" }} />
        <Avatar />
      </div>
    </div>
  );
}

export default Header