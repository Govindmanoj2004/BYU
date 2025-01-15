import React from 'react';
import Sidebar from './Components/sidebar/sidebar';
import RouterStudio from './RouterStudio';
import Style from './Studio.module.css';
import QuickUpload from './Components/upload/QuickUpload';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Studio = () => {
  return (
    <div className={Style.main}>
      <Sidebar />
      <div className={Style.container}>
        <RouterStudio />
        {/* Passing Arguments */}
        <QuickUpload RemoveRedEyeIcon={RemoveRedEyeIcon} />
      </div>
    </div>
  );
};

export default Studio;
