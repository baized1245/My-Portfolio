import React from 'react';
import SideNav from './components/SideNav';
import Main from './components/Main';
import Work from './components/Work';
import Projects from './components/Projects';

const App = () => {
  return (
    <div>
      <SideNav/>
      <Main/>
      <Work/>
      <Projects/>
    </div>
  );
};

export default App;