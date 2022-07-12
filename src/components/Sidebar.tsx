import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import clsx from 'clsx';
import logo from '../assets/logo.svg';
import menuIcon from '../assets/menu.svg';
import storeIcon from '../assets/store.svg';
import storeIconHovered from '../assets/store-black.svg';
import bagIcon from '../assets/bag.svg';
import bagIconHovered from '../assets/bag-black.svg';

type SidebarProps = {} & React.ComponentProps<'div'>;

function Sidebar({ className }: SidebarProps) {
  const [storeHover, setStoreHover] = useState(false);
  const [bagHover, setBagHover] = useState(false);

  return (
    <Router>
      <div
        className={clsx(
          'sidebar fixed flex-col items-center p-4 mt-[16px] w-[72px] h-[904px] left-4 bg-white rounded-lg',
          className,
        )}
      >
        <div className="sidebar-items flex flex-col justify-between items-center h-[270px] mt-4">
          <Link to="/">
            <div className="sidebar-item border-y-gray-900 rounded-xl">
              <img src={logo} alt="logo" className="hover:opacity-25" />
            </div>
          </Link>
          <div className="sidebar-item">
            <img src={menuIcon} alt="menu-icon" />
          </div>
          <Link to="/">
            <div
              className="sidebar-item"
              onMouseOver={() => setStoreHover(true)}
              onMouseOut={() => setStoreHover(false)}
            >
              <img src={storeHover ? storeIconHovered : storeIcon} alt="store-icon" />
            </div>
          </Link>
          <Link to="/bag">
            <div className="sidebar-item" onMouseOver={() => setBagHover(true)} onMouseOut={() => setBagHover(false)}>
              <img src={bagHover ? bagIconHovered : bagIcon} alt="bag-icon" />
            </div>
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default Sidebar;
