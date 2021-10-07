import React from 'react';
import { ReactComponent as User } from '../../assets/user.svg';
import { ReactComponent as Home } from '../../assets/home.svg';
import { NavLink, Link } from 'react-router-dom';
import './header.css';
const Header = () => {
    return (
        <nav>
            <div className="div-header">
                <div className="div-svg">
                    <NavLink to="/explore">
                        <User className="div-svg" />
                    </NavLink>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <NavLink to="/">
                        <Home className="div-svg" />
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};
export default Header;
