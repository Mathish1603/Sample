import React, { useState } from 'react';
import './Dummy.css'
const Dummy = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    // Reset the clicked state after 1 second to remove the animation effect
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  return (
    <button
      className={clicked ? 'button clicked' : 'button'}
      onClick={handleClick}
    >
      Click Me
    </button>
  );
};

export default Dummy;
