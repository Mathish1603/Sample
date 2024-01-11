// App.js
import React from 'react';
import ThemeProvider from './Themeprovider';
import YourComponent from './Yourcomponent';

const App = () => {
  return (
    <ThemeProvider>
      <YourComponent />
    </ThemeProvider>
  );
};

export default App;
