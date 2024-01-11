// YourComponent.js
import React, { useContext } from 'react';
import ThemeContext from './Themecontext';

const YourComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>{theme}</h1>
      <button class="btn btn-outline-danger btn-light" onClick={toggleTheme}>Change</button>
    </div>
  );
};

export default YourComponent;
