import React from 'react';
import { PuffLoader } from 'react-spinners';

const Loader = ({ size = 60, color = "#003d7a", loading = true }) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100%' 
    }}>
      <PuffLoader size={size} color={color} loading={loading} />
    </div>
  );
};

export default Loader;