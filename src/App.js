import React from 'react';

import { Header,Projects,Skills,Footer} from './container';
import'./App.scss';

const App = () => {
  return (
    <div className="app">
      
      
      <Header/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;