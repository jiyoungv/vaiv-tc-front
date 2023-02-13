import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import Variable from '@styles/Variable';

const LoadingPage = () => {
  return (
    <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
      <BeatLoader color={Variable.primary} size={20} margin="3px" />
    </div>
  );
};

export default LoadingPage;