import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <div>
        <a href='#s'>Home</a>
      </div>
      <div>
        <a href='#s'>Message</a>
      </div>
      <div>
        <a href='#s'>News</a>
      </div>
      <div>
        <a href='#s'>Settings</a>
      </div>
    </div>
  );
}

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>css</li>
        <li>html</li>
        <li>react</li>
        <li>js</li>
      </ul>
    </div>
  )
}

export default App; 