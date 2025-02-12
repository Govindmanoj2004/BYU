import React, { useEffect, useState } from 'react';

import Style from './User.module.css';
import RouterUser from './RouterUser';
import Sidebar from './Components/sidebar/sidebar';
import Navbar from './Components/navbar/Navbar';
import { io } from "socket.io-client"

//Socket
 const socket = io("http://localhost:3000");
export const User = () => {
  useEffect(() => {
    if (!socket) return

    socket.emit("hello")
    socket.on("hai", () => {
      console.log('hellofjhghjghj');
      
    })

  }, [socket])


  
  return (
    <div className={Style.body}>
      <Sidebar />
      <div className={Style.containerOne}>
        <div>
          <Navbar />
        </div>
        <div className={Style.subContainer}>
          <RouterUser />
        </div>
      </div>
    </div>
  );
};
export default User;
