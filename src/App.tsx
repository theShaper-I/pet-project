import React from 'react';
import './index.css';
import './scss/sidebar.scss';
import Sidebar from './components/Sidebar';
import Kart from './components/Kart';
import Content from './components/Layout/Content';

function App() {
  return (
    <div className="container mx-auto justify-center flex">
      <Sidebar />
      <Content />
      <Kart />
    </div>
  );
}

export default App;
