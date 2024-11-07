import React, { useState } from 'react';

function Toogle() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <button onClick={handleClick}>{isOn ? 'On' : 'Off'}</button>
      <p>{isOn ? 'Hello welcome' : ''}</p>
    </>
  );
}

export default Toogle;
