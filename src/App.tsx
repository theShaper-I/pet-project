import React from 'react';
import './index.css'
import './scss/sidebar.scss'
import Sidebar from "./components/Sidebar";
import Bag from "./components/Bag/Bag";
import Content from "./components/Content";

function App() {

  return (
    <div className="container mx-auto justify-center flex">
        <Sidebar />
        <Content />
        <Bag />
    </div>
  );
}

export default App;
