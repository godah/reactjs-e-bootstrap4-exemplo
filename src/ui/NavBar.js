import React from 'react';
import {Link} from 'react-router';

const NavBar = (props) =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/' className="navbar-brand">{props.logo}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to='/primeirapagina' className="nav-link">1ª Pag.</Link>
            </li>
            <li className="nav-item active">
                <Link to='/segundapagina' className="nav-link">2ª Pag.</Link>
            </li>
            <li className="nav-item active">
                <Link to='/terceirapagina' className="nav-link">3ª Pag.</Link>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to='/primeirapagina' className="dropdown-item">1ª Pag.</Link>
                <Link to='/segundapagina' className="dropdown-item">2ª Pag.</Link>
                <Link to='/terceirapagina' className="dropdown-item">3ª Pag.</Link>
                <div className="dropdown-divider"></div>
                <Link to='/' className="dropdown-item">Home</Link>
                </div>
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>
    );   
}

export default NavBar;