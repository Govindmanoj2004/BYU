import React, { useState } from 'react';

import Style from './User.module.css';
import RouterUser from './RouterUser';
import Sidebar from './Components/sidebar/sidebar';
import Navbar from './Components/navbar/Navbar';

export const User = () => {
  return (
    <div className={Style.body}>
      <Sidebar />
      <div className={Style.containerOne}>
        <div>
          <Navbar />
        </div>
        <RouterUser />
      </div>
    </div>
  );
};
export default User;
