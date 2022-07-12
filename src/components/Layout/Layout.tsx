import React from 'react';
import Sidebar from '../Sidebar';
import Content from './Content';

function Layout() {
  return (
    <div className="flex">
      <Sidebar className="" />
      <Content />
    </div>
  );
}

export default Layout;
