import React from "react";
import { useNavigate, Link } from "react-router-dom";

import './Header.css';

function Header() {
    const navigate = useNavigate();
    return (
        <div className="Header">
            <div className="header">
                <div className="header-left">
                    <Link to="/" className="home-icon">Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;