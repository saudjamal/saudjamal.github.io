import React from 'react';
import NavbarCss from './StylingFolder/Navbar.module.css';
import Logo from './Images/MainLOGO.png';

export default function Navbar() {
  return (
    <>
        <nav  id={NavbarCss.nav}>
            <div className={NavbarCss.logoHeader}>
                <img src={Logo} className={NavbarCss.logo} alt='logo'/>
                <h1>Elegance Interiors</h1>
            </div>
            <ul>
                <li>Home</li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id={NavbarCss.anchorTags}>
                        SHOP
                    </a>
                    <ul className="dropdown-menu" id={NavbarCss.shopMenu}>
                        <li><a className="dropdown-item" href="#projects">Projects</a></li>
                        <li><a className="dropdown-item" href="#designs">Designs</a></li>
                        <li><a className="dropdown-item" href="#footer">Locations</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id={NavbarCss.anchorTags}>
                    SERVICES
                    </a>
                    <ul className="dropdown-menu" id={NavbarCss.servicesMenu}>
                        <li><a className="dropdown-item" href="#services">Office Designs</a></li>
                        <li><a className="dropdown-item" href="#services">House Designs</a></li>
                        <li><a className="dropdown-item" href="#services">Renovation</a></li>
                    </ul>
                </li>
                {/* <li>Your Cart</li> */}
            </ul>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id={NavbarCss.searchBar}/>
              <button className="btn btn-outline-warning" type="submit" id={NavbarCss.SearchBtn}>Search</button>
            </form>
        </nav>
    </>
  )
}
