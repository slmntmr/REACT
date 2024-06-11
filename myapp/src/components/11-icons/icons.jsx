import React from 'react';
import { AiFillAmazonCircle } from "react-icons/ai";
import { FiBriefcase, FiCameraOff, FiCloudDrizzle, FiCornerDownRight } from "react-icons/fi";

const Icons = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <AiFillAmazonCircle />
      <FiCameraOff />
      <FiCloudDrizzle />
      <FiCornerDownRight />
      <FiBriefcase />
    </div>
  );
}

export default Icons;
