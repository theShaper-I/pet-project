import React, {useState} from 'react';
import {
    BrowserRouter as Router, Link
} from "react-router-dom";

import logo from './img/logo.svg';
import menuIcon from './img/menu.svg';
import storeIcon from './img/store.svg';
import storeIconHovered from './img/store-black.svg';
import bagIcon from './img/bag.svg';
import bagIconHovered from './img/bag-black.svg';

const Sidebar = () => {
    const [storeHover, setStoreHover] = useState(false);
    const [bagHover, setBagHover] = useState(false);

    return (
        <Router>
            <div className="sidebar">
                <div className="sidebar-items">
                    <Link to="/">
                        <div className="sidebar-item border-y-gray-900 rounded-xl">
                            <img src={logo} alt={"logo"} className="hover:opacity-25"/>
                        </div>
                    </Link>
                    <Link to="/menu">
                        <div className="sidebar-item">
                            <img src={menuIcon} alt={"menu-icon"}/>
                        </div>
                    </Link>
                    <Link to="/store">
                        <div className="sidebar-item"
                             onMouseOver={() => setStoreHover(true)}
                             onMouseOut={() => setStoreHover(false)}
                        >
                            <img src={storeHover ? storeIconHovered : storeIcon} alt={"store-icon"}/>
                        </div>
                    </Link>
                    <Link to="/bag">
                        <div className="sidebar-item"
                             onMouseOver={() => setBagHover(true)}
                             onMouseOut={() => setBagHover(false)}
                        >
                            <img src={bagHover ? bagIconHovered : bagIcon} alt={"bag-icon"}/>
                        </div>
                    </Link>
                </div>
            </div>
        </Router>

    );
};

export default Sidebar;
