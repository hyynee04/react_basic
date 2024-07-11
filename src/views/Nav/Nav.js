import React from "react";
import './Nav.scss'
import {
    BrowserRouter,
    NavLink,
    Link
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="topnav">
                    <Link to="/">Home</Link>
                    <Link to="/todo">Todo App</Link>
                    <Link to="/about">About</Link>
                </div>
            </BrowserRouter>
        )
    }
}

export default Nav;